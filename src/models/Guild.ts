import Client from "../client/Client.ts";
import Collection from "./Collection.ts";
import Role from "./Role.ts";
import { Emoji } from "./Emoji.ts";
import User from "./User.ts";

export class Guild {

    private _members!: Collection<string, User>;
    private _emojis!: Collection<string, Emoji>;
    private _roles!: Collection<string, Role>;

    constructor (
        private _id: string,
        private _name: string,
        private _owner_id: string,
    ) {
        
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get owner_id() {
        return this._owner_id;
    }

    public get roles() {
        return this._roles;
    }

    public set roles(roles: Collection<string, Role>) {
        this._roles = roles;
    }

    public get emojis() {
        return this._emojis;
    }

    public set emojis(emojis: Collection<string, Emoji>) {
        this._emojis = emojis;
    }

    public get members() {
        return this._members;
    }

    public set members(members: Collection<string, User>) {
        this._members = members;
    }
    
}

export default Guild;