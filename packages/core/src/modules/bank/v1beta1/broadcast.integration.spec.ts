import { MsgMultiSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgMultiSendTypeUrl } from "./consts";
import { defaultGasPrice, testUser1 } from "../../../testutils";
import { BroadcastTest, runBroadcastTest } from "../../../utils/testutils";

describe("Broadcast /cosmos.bank.v1beta messages", () => {
  jest.setTimeout(60 * 1000);

  const testCases: BroadcastTest[] = [
    {
      typeUrl: MsgMultiSendTypeUrl,
      message: MsgMultiSend.fromPartial({
        inputs: [
          {
            address: testUser1.address0,
            coins: [
              {
                amount: "2000",
                denom: defaultGasPrice.denom,
              },
            ],
          },
        ],
        outputs: [
          {
            address: testUser1.address0,
            coins: [
              {
                amount: "1000",
                denom: defaultGasPrice.denom,
              },
            ],
          },
          {
            address: "desmos1fjuwp09jt6nq0jxasanze6p968unwtkgzzptad",
            coins: [
              {
                amount: "1000",
                denom: defaultGasPrice.denom,
              },
            ],
          },
        ],
      }),
      signer: testUser1.address0,
    },
  ];

  testCases.forEach(runBroadcastTest);
});
