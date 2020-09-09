import Collection from "../models/Collection.ts";
import Role from "./RoleInterface.ts";
import { Emoji } from "../models/Emoji.ts";
import User from "../models/User.ts";

export declare interface GuildInterface {
    id: string, 
    name: string,
    owner_id: string,
    roles: Collection<string, Role>,
    emojis: Collection<string, Emoji>,
    members: Collection<string, User>
}
