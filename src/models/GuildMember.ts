import Collection from "./Collection.ts";
import Role from "./Role.ts";

export default class GuildMember {
    constructor (
        private _roles: Collection<string, Role>,
        private _mute: boolean,
        private _joined_at: Date,
        private _hoisted_role: string,
        private _deaf: boolean
    ) {

    }

    public get roles() {
        return this._roles;
    }

    public get mute() {
        return this._mute;
    }

    public get joined_at() {
        return this._joined_at;
    }

    public get hoisted_role() {
        return this._hoisted_role;
    }

    public get deaf() {
        return this._deaf;
    }
}

//     roles: [ "721691563994120192", "721692907760910418" ],
//     mute: false,
//     joined_at: "2020-06-14T11:25:29.190000+00:00",
//     hoisted_role: "721692907760910418",
//     deaf: false