import {EncodeObject} from "@cosmjs/proto-signing";
import {MsgSaveProfile} from "@desmos-labs/proto";

export interface MsgSaveProfileEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgSaveProfile",
    readonly value: Partial<MsgSaveProfile>
}