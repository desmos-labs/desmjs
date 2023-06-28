import * as fs from "fs";
import { Project, SyntaxKind } from "ts-morph";

/**
 * Interface that represents a modification that should be performed to
 * an object's method.
 */
export interface PatchMethod {
  /**
   * Name of the object whose method will be changed.
   */
  readonly object: string;
  /**
   * Name of the method that will be changed.
   */
  readonly methodName: string;
  /**
   * New method definition.
   */
  readonly newDefinition: string;
}

/**
 * Interface that represents a modification that should be performed to
 * an interface's property.
 */
export interface PatchInterface {
  /**
   * Name of the interface whose property will be changed.
   */
  readonly name: string;
  /**
   * Name of the property that will be changed.
   */
  readonly prop: string;
  /**
   * Name propery deifinition.
   */
  readonly newDefinition: string;
}

/**
 * Function to append some imports to a file.
 * @param file - File where the imports will be appended.
 * @param content - The imports to append to the file.
 */
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
  fs.writeSync(fd, data, append_start + 1, data.length - append_start - 1);
  // Close the file.
  fs.close(fd);
}

/**
 * Function to modify the methods of one or more objects present in a file.
 * @param inputFilePath - File that contains the objects to modify.
 * @param patches - List of {@link PatchMethod} that will be applied to the file.
 */
export async function patchObjectMethods(inputFilePath: string, patches: PatchMethod[]) {
  const code = await fs.promises.readFile(inputFilePath, "utf8");

  const project = new Project();
  const sourceFile = project.createSourceFile(
    inputFilePath,
    code,
    { overwrite: true }
  );

  const patchMap = patches.reduce<Record<string, Record<string, PatchMethod>>>((previousValue, currentValue) => {
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
  objectLiteralExpressions.forEach((ole) => {
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

/**
 * Function to modify the definition of one or more interface contained in a file.
 * @param inputFilePath - File that contains the objects to modify.
 * @param patches - List of {@link PatchInterface} that will be applied to the file.
 */
export async function patchInterfaceDefinition(inputFilePath: string, patches: PatchInterface[]) {
  const code = await fs.promises.readFile(inputFilePath, "utf8");

  const project = new Project();
  const sourceFile = project.createSourceFile(
    inputFilePath,
    code,
    { overwrite: true }
  );

  const patchMap = patches.reduce<Record<string, Record<string, PatchInterface>>>((previousValue, currentValue) => {
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
