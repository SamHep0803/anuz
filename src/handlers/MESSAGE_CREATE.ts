import Client from "../client/Client.ts";
import { Payload } from "../interfaces/Payload.ts";
import Message from "../models/Message.ts";

export default async function(client: Client, payload: Payload) {
    const { d } = payload;
    
    const messageData: Message = d;

    var message = new Message(
        client,
        messageData.type,
        messageData.tts,
        messageData.timestamp,
        messageData.pinned,
        messageData.nonce,
        messageData.mentions,
        messageData.mention_roles,
        messageData.mentioned_everyone,
        messageData.member,
        messageData.id,
        messageData.flags,
        messageData.edited_timestamp,
        messageData.content,
        messageData.channel_id,
        messageData.author,
        messageData.guild_id
    )

    await message.channel.getData();

    client.emit('message', message);
}