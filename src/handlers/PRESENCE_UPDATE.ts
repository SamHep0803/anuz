import { Payload } from "../interfaces/Payload.ts";
import Client from "../client/Client.ts";

export default function (client: Client, payload: Payload) {
    client.emit("presenceUpdate", payload.d);
}