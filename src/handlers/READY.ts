import Client from "../client/Client.ts";
import { Payload } from "../interfaces/Payload.ts";
import ClientUser from "../client/ClientUser.ts";
import Guild from "../models/Guild.ts";

export default async function(client: Client, payload: Payload) {
    console.warn("Anuz is deprecated and no longer receives feature and security updates. Please consider switching over to a up-to-date discord library such as discord.js");
    console.log('Logged in!');
    const { user, guilds } = payload.d;
    client.user = new ClientUser(
        user.username,
        user.discriminator,
        user.verified,
        user.id,
        user.flags,
        user.email,
        user.bot,
        user.avatar
    );

    client.emit('ready');
}