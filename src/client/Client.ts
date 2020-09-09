import EventEmitter from "https://deno.land/std@0.51.0/node/events.ts";
import WebSocketManager from "../ws/WebSocketManager.ts";
import ClientUser from "./ClientUser.ts";
import { RestAPIHandler } from "../rest/RestAPIHandler.ts";
import Collection from "../models/Collection.ts";
import Guild from "../models/Guild.ts";

export declare interface Client {
    rest: RestAPIHandler;
    socket: WebSocketManager;
    user: ClientUser;
    guilds: Collection<string, Guild>;
}

export class Client extends EventEmitter {

    constructor() {
        super();
        this.rest = new RestAPIHandler(this);
        this.socket = new WebSocketManager(this);
        this.guilds = new Collection<string, Guild>();
    }

    async login(token: string) {
        try {
            this.rest.token = token;
            await this.socket.login(token);
        } catch (err) {
            console.log(err);
        }
    }
}

export default Client;