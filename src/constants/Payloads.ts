import { OPCODE } from "./Constants.ts";
import Client from "../client/Client.ts";

export const Heartbeat = {
    op: OPCODE.HEARTBEAT,
    d: null
}

export const Identify = {
    op: OPCODE.IDENTIFY,
    d: {
        token: '',
        properties: {
            $os: "linux",
            $browser: "anuz",
            $device: "anuz"
        }
    }
}

export const headers = {
    "Content-Type": "application/json",
    "Authorization": ""
}