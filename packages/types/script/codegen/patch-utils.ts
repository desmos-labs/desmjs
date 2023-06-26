import * as fs from "fs";
import { Project, SyntaxKind } from "ts-morph";
import { join } from "path";

const outPath = join(__dirname, "/../src");

export interface PatchMethod {
  readonly object: string;
  readonly methodName: string;
  readonly newDefinition: string;
}

export interface PatchInterface {
  readonly name: string;
  readonly prop: string;
  readonly newDefinition: string;
}

export function appendImport(file: string, content: string) {
  // Read the file contents
  const data = fs.readFileSync(file);
  // Search the last import statement
  const last_import_index = data.lastIndexOf("import");
  if (last_import_index === -1) {
    return;
  }

  // Search where the import statement ends
  const append_start = data.indexOf(";", last_import_index);

  // Open the file
  const fd = fs.openSync(file, "w+");
  // Write the original imports
  fs.writeSync(fd, data, 0, append_start);
  // Write the new import statements.
  fs.appendFileSync(fd, content, {
    encoding: "utf8"
  });
  // Append the old content.
  fs.writeSync(fd, data, append_start, data.length - append_start);
  // Close the file.
  fs.close(fd);
}

export async function patchObjectMethods(inputFilePath: string, toPatch: PatchMethod[]) {
  const code = await fs.promises.readFile(inputFilePath, "utf8");

  const project = new Project();
  const sourceFile = project.createSourceFile(
    inputFilePath,
    code,
    { overwrite: true }
  );

  const patchMap = toPatch.reduce<Record<string, Record<string, PatchMethod>>>((previousValue, currentValue) => {
    const toPatchMethodsMap = previousValue[currentValue.object] ?? {};
    return {
      ...previousValue,
      [currentValue.object]: {
        ...toPatchMethodsMap,
        [currentValue.methodName]: currentValue
      }
    }
  }, {})


  const objectLiteralExpressions = sourceFile.getChildrenOfKind(SyntaxKind.VariableStatement);
  objectLiteralExpressions.forEach((ole, index) => {
    const methods = ole.getDescendantsOfKind(SyntaxKind.MethodDeclaration)
    const objectName = ole.getDescendantsOfKind(SyntaxKind.VariableDeclaration)[0].getName()
    const methodToPatchInObject = patchMap[objectName];

    if (methodToPatchInObject !== undefined) {
      methods.forEach(m => {
        const methodName = m.getName();
        const patch = methodToPatchInObject[methodName];
        if (patch !== undefined) {
          console.log(`updating definition of ${objectName}.${methodName}`);
          m.replaceWithText(patch.newDefinition);
        }
      })
    }
  })

  await sourceFile.save();
}

export async function patchInterfaceDefinition(inputFilePath: string, toPatch: PatchInterface[]) {
  const code = await fs.promises.readFile(inputFilePath, "utf8");

  const project = new Project();
  const sourceFile = project.createSourceFile(
    inputFilePath,
    code,
    { overwrite: true }
  );

  const patchMap = toPatch.reduce<Record<string, Record<string, PatchInterface>>>((previousValue, currentValue) => {
    const toPatchMethodsMap = previousValue[currentValue.name] ?? {};
    return {
      ...previousValue,
      [currentValue.name]: {
        ...toPatchMethodsMap,
        [currentValue.prop]: currentValue
      }
    }
  }, {})

  const interfaceDeclarations = sourceFile.getChildrenOfKind(SyntaxKind.InterfaceDeclaration);
  interfaceDeclarations.forEach(id => {
    const interfaceName = id.getName();
    const toPatchProperties = patchMap[interfaceName];

    if (toPatchProperties !== undefined) {
      const propertySignatures = id.getChildrenOfKind(SyntaxKind.PropertySignature);
      propertySignatures.forEach(p => {
        const propertyName = p.getName();
        const patch = toPatchProperties[propertyName];

        if (patch !== undefined) {
          console.log(`updating property ${interfaceName}.${propertyName}`)
          p.replaceWithText(patch.newDefinition);
        }
      })
    }
  })

  await sourceFile.save();
}
