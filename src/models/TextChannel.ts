import Client from "../client/Client.ts";

export default class TextChannel {

    private _guild_id!: string;
    private _name!: string;
    private _last_message_id!: string;
    private _type!: number;

    constructor (
        private _channel_id: string, 
        private _client: Client
    ) {
        
    }

     async getData() {
        const response = await this._client.rest.fetchChannel(this._channel_id);
        this._guild_id = response.guild_id;
        this._name = response.name;
        this._last_message_id = response.last_message_id;
        this._type = response.type;
    }

    public get guild_id() {
        return this._guild_id;
    }

    public get name() {
        return this._name;
    }

    public get last_message_id() {
        return this._last_message_id;
    }

    public get type() {
        return this._type;
    }
}