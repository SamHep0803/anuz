import Client from "../client/Client.ts";
import { Payload } from "../interfaces/Payload.ts";
import Guild from "../models/Guild.ts";
import Role from "../models/Role.ts";

export default function(client: Client, payload: Payload) {
    const { d: g } = payload;

    if (!client.guilds.has(g.id)) {

        const newGuild = new Guild(g.id, g.name, g.owner_id);

        // g.roles, g.emojis, g.members 

        newGuild.roles = g.roles;
        newGuild.emojis = g.emojis;
        newGuild.members = g.members;

        client.guilds.set(g.id, newGuild);
    }
}
