import {
    connectWebSocket, WebSocket
} from "https://deno.land/std/ws/mod.ts";

import {
    Constants,
    OPCODE
} from "../constants/Constants.ts";

import {
    Heartbeat,
    Identify
} from "../constants/Payloads.ts";

import { Payload } from "../interfaces/Payload.ts";
import Client from "../client/Client.ts";

export default class WebSocketManager {

    private socket!: WebSocket;
    private interval: number = 0;

    constructor (private client: Client) {

    }

    async login(token: string) {
        try {
            this.socket = await connectWebSocket(Constants.GATEWAY);
            for await (const msg of this.socket) {
                const payload: Payload = JSON.parse(msg.toString());

                const { t: event, op } = payload;

                switch (op) {
                    case OPCODE.DISPATCH:
                        console.log(`Event ${event} was received.`);
                        break;
                    case OPCODE.HELLO:
                        const { heartbeat_interval } = payload.d;
                        this.interval = this.heartbeat(heartbeat_interval);
                        await this.identify(token);
                        break;
                    case OPCODE.HEARTBEAT_ACK:
                        console.log("Heartbeat Accepted.");
                        break;
                }

                if (event) {
                    try {
                        const { default: module } = await import(`../handlers/${event}.ts`);
                        module(this.client, payload);
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    heartbeat(ms: number) {
        return setInterval(() => {
            this.socket.send(JSON.stringify(Heartbeat))
        }, ms);
    }

    async identify(token: string) {
        Identify.d.token = token;
        this.socket.send(JSON.stringify(Identify));
    }
}