import {RawSecp256k1KeyProvider, Secp256k1KeyProvider, Secp256k1KeyProviderStatus, Secp256k1Signer} from "./secp256k1";
import {SignerStatus, SigningMode} from "./signer";
import {fromHex} from "@cosmjs/encoding";
import {AuthInfo, TxBody} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import Long from "long";

const TEST_PRIVATE_KEY = "038542da515a6bc278030cf8e8102a7ddee2b535cd649421315361218463bc6e";

function mockConnectFailingSecp256k1KeyProvider(): Secp256k1KeyProvider {
  return new class extends Secp256k1KeyProvider {
    connect(): Promise<void> {
      throw new Error("connection failed");
    }

    disconnect(): Promise<void> {
      return Promise.resolve(undefined);
    }

    getSecp256k1PrivateKey(): Promise<Uint8Array> {
      throw new Error("not implemented");
    }
  }
}

function mockDisconnectFailingSecp256k1KeyProvider(): Secp256k1KeyProvider {
  return new class extends Secp256k1KeyProvider {
    async connect(): Promise<void> {
      this.updateStatus(Secp256k1KeyProviderStatus.Connecting);
      this.updateStatus(Secp256k1KeyProviderStatus.Connected);
    }

    disconnect(): Promise<void> {
      this.updateStatus(Secp256k1KeyProviderStatus.Disconnecting);
      throw new Error("disconnect fail");
    }

    async getSecp256k1PrivateKey(): Promise<Uint8Array> {
      return fromHex(TEST_PRIVATE_KEY);
    }
  }
}

function mockFailingGetPrivateKeySecp256k1KeyProvider(): Secp256k1KeyProvider {
  return new class extends Secp256k1KeyProvider {
    connect(): Promise<void> {
      return Promise.resolve();
    }

    disconnect(): Promise<void> {
      return Promise.resolve();
    }

    getSecp256k1PrivateKey(): Promise<Uint8Array> {
      throw new Error("can't get private key");
    }
  }
}

function mockSecp256k1KeyProvider(): Secp256k1KeyProvider {
  return new RawSecp256k1KeyProvider(TEST_PRIVATE_KEY);
}

describe("PrivateKeySigner", () => {

  it("Fail to connect to key provider", async () => {
    const signer = new Secp256k1Signer(mockConnectFailingSecp256k1KeyProvider(), SigningMode.DIRECT);
    await expect(signer.connect()).rejects
      .toHaveProperty("message", "connection failed");
    expect(signer.status).toBe(SignerStatus.NotConnected);
  });

  it("Fail to get private key", async () => {
    const signer = new Secp256k1Signer(mockFailingGetPrivateKeySecp256k1KeyProvider(), SigningMode.DIRECT);
    await expect(signer.connect()).rejects
      .toHaveProperty("message", "can't get private key");
    expect(signer.status).toBe(SignerStatus.NotConnected);
  });

  it("connect successfully", async () => {
    const signer = new Secp256k1Signer(mockSecp256k1KeyProvider(), SigningMode.DIRECT);
    await signer.connect();
    expect(signer.status).toBe(SignerStatus.Connected);
    const accounts = await signer.getAccounts();
    expect(accounts).toHaveLength(1);
  });

  it("disconnect fail", async () => {
    const signer = new Secp256k1Signer(mockDisconnectFailingSecp256k1KeyProvider(), SigningMode.DIRECT);
    await signer.connect();
    await expect(signer.disconnect()).rejects
      .toHaveProperty("message", "disconnect fail");
    expect(signer.status).toBe(SignerStatus.NotConnected);
  });

  it("disconnect successfully", async () => {
    const signer = new Secp256k1Signer(mockSecp256k1KeyProvider(), SigningMode.DIRECT);
    await signer.connect();
    await signer.disconnect();
    expect(signer.status).toBe(SignerStatus.NotConnected);
  });

  it("get current account successfully", async () => {
    const signer = new Secp256k1Signer(mockSecp256k1KeyProvider(), SigningMode.DIRECT);
    await signer.connect();
    const accounts = await signer.getAccounts();
    const currentAccount = await signer.getCurrentAccount();
    expect(currentAccount).toMatchObject(accounts[0]);
    expect(currentAccount?.address).toBe("desmos1ekshdkg5q9n0hy6ft978nzwgt9eag8fvr5uc4v");
  });

  it("sign direct successfully", async () => {
    const signer = new Secp256k1Signer(mockSecp256k1KeyProvider(), SigningMode.DIRECT);
    await signer.connect();
    const currentAccount = await signer.getCurrentAccount();
    const signResult = await signer.signDirect(currentAccount!.address, {
      bodyBytes: TxBody.encode(TxBody.fromPartial({
        memo: "test-tx",
        messages: []
      })).finish(),
      chainId: "test-chain",
      accountNumber: Long.fromNumber(1),
      authInfoBytes: AuthInfo.encode(AuthInfo.fromPartial({
        fee: {
          amount: [{amount: "1000", denom: "udsm"}]
        },
      })).finish()
    });

    expect(signResult.signature.signature)
      .toBe("cVE50cHI/AktIvqnACb1eGrQs4SPSzPbSUkOV828c3oD6FNodImRWdl+LQO7qFzwXOGSsVMA7f5Nhbo7AdQo+w==");
  });

  it("sign amino from direct error", async () => {
    const signer = new Secp256k1Signer(mockSecp256k1KeyProvider(), SigningMode.DIRECT);
    await signer.connect();
    const currentAccount = await signer.getCurrentAccount();
    await expect(signer.signAmino(currentAccount!.address, {
      fee: {
        amount: [],
        gas: "10000"
      },
      msgs: [],
      memo: "test-tx",
      sequence: "0",
      account_number: "1",
      chain_id: "test-chain"
    })).rejects
      .toHaveProperty("message", "sign format not supported");
  });

  it("sign amino successfully", async () => {
    const signer = new Secp256k1Signer(mockSecp256k1KeyProvider(), SigningMode.AMINO);
    await signer.connect();
    const currentAccount = await signer.getCurrentAccount();
    const signResult = await signer.signAmino(currentAccount!.address, {
      fee: {
        amount: [],
        gas: "10000"
      },
      msgs: [],
      memo: "test-tx",
      sequence: "0",
      account_number: "1",
      chain_id: "test-chain"
    })

    expect(signResult.signature.signature)
      .toBe("fWUEK1aQ5/WWW5p78vW61rr95LdvivOfI6GfF9+cYLpU5cy3ohl9AI3DGZ5iYhjXwsz8vJC8sdG0NSWeLwcAgA==");
  });

  it("sign direct from amino error", async () => {
    const signer = new Secp256k1Signer(mockSecp256k1KeyProvider(), SigningMode.AMINO);
    await signer.connect();
    const currentAccount = await signer.getCurrentAccount();
    await expect(signer.signDirect(currentAccount!.address, {
      bodyBytes: TxBody.encode(TxBody.fromPartial({
        memo: "test-tx",
        messages: []
      })).finish(),
      chainId: "test-chain",
      accountNumber: Long.fromNumber(1),
      authInfoBytes: AuthInfo.encode(AuthInfo.fromPartial({
        fee: {
          amount: [{amount: "1000", denom: "udsm"}]
        },
      })).finish()
    })).rejects.toHaveProperty("message", "sign format not supported");
  });
})
