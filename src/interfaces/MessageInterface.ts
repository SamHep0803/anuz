import TextChannel from "../models/TextChannel.ts";

export declare interface MessageInterface {
    type: number,
    tts: boolean,
    timestamp: Date,
    pinned: boolean,
    nonce: string,
    mentions: any | null,
    mention_roles: any | null,
    mentioned_everyone: boolean,
    member: any | null,
    id: string,
    flags: number | 0,
    edited_timestamp: Date,
    content: TextChannel,
    channel_id: string,
   //  channel: Channel,
   //  author: User,
    guild_id: string
}