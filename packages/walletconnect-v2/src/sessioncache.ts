import { AccountData } from "@cosmjs/amino";
import { fromHex, toHex } from "@cosmjs/encoding";
import { Algo } from "@cosmjs/proto-signing";

const SESSION_CACHE_KEY = "desmos-walletconnect-sessions";

interface SerializedAccountData {
  readonly address: string;
  readonly algo: Algo;
  readonly hexPubkey: string;
}

/**
 * Class to cache the user's AccountData associated to a WalletConnect session topic.
 */
class WalletConnectSessionCache {
  /**
   * Record where we store the AccountData associated to a WalletConnect session topic.
   */
  private cachedSessions: Record<string, AccountData[]>;

  constructor() {
    this.cachedSessions = this.loadCache();
  }

  /**
   * Stores the cached sessions in the local storage.
   */
  private storeCache() {
    const serializedData: Record<string, SerializedAccountData[]> = {};
    Object.keys(this.cachedSessions).forEach((key) => {
      serializedData[key] = this.cachedSessions[key].map((account) => ({
        address: account.address,
        algo: account.algo,
        hexPubkey: toHex(account.pubkey),
      }));
    });

    localStorage.setItem(SESSION_CACHE_KEY, JSON.stringify(serializedData));
  }

  /**
   * Loads the cached sessions from the local storage.
   */
  private loadCache(): Record<string, AccountData[]> {
    try {
      const cachedSessions = localStorage.getItem(SESSION_CACHE_KEY);
      if (!cachedSessions) {
        return {};
      }

      const data = JSON.parse(cachedSessions);
      if (typeof data === "object") {
        const serializedData = data as Record<string, SerializedAccountData[]>;
        const accountData: Record<string, AccountData[]> = {};
        Object.keys(serializedData).forEach((key) => {
          accountData[key] = serializedData[key].map((account) => ({
            algo: account.algo,
            pubkey: fromHex(account.hexPubkey),
            address: account.address,
          }));
        });
        return accountData;
      }
      // eslint-disable-next-line no-console
      console.error("[desmjs-WalletConnect] Invalid data in session cache");
      return {};
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("[desmjs-WalletConnect] Failed to load session cache", e);
      return {};
    }
  }

  /**
   * Stores the account data associated to a WalletConnect session topic.
   * @param sessionTopic - WalletConnect session topic.
   * @param accountData - Account data.
   */
  addAccountData(sessionTopic: string, accountData: AccountData[]) {
    this.cachedSessions[sessionTopic] = accountData;
    this.storeCache();
  }

  /**
   * Retrieves the account data associated to a WalletConnect session topic.
   * @param sessionId - WalletConnect session topic.
   */
  getAccountData(sessionId: string): AccountData[] | undefined {
    return this.cachedSessions[sessionId];
  }

  /**
   * Removes the account data associated to a WalletConnect session topic from the cache.
   * @param sessionId - WalletConnect session topic.
   */
  removeAccountData(sessionId: string) {
    delete this.cachedSessions[sessionId];
    this.storeCache();
  }

  /**
   * Clears all the cached data.
   */
  clear() {
    this.cachedSessions = {};
    this.storeCache();
  }
}

export default WalletConnectSessionCache;
