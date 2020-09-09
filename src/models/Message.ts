import { MessageOptions } from "../typedefs/MessageOptions.ts";
import Client from "../client/Client.ts";
import User from "./User.ts";
import TextChannel from "./TextChannel.ts";
import GuildMember from "./GuildMember.ts";
import { MessageEmbed } from "./embed/Embed.ts";
import Role from "./Role.ts";
import Collection from "./Collection.ts";

/**
 * Message class used for when a `MESSAGE_CREATE` event happens.
 */

export class Message { 
   private _channel: TextChannel;

  constructor(
      private _client: Client,

      private _type: number = 0,
      private _tts: boolean,
      private _timestamp: Date,
      private _pinned: boolean,
      private _nonce: string,
      private _mentions: any | null,
      private _mention_roles: any | null,
      private _mentioned_everyone: boolean,
      private _member: GuildMember,
      private _id: string,
      private _flags: number | 0,
      private _edited_timestamp: Date,
      private _content: string,
      private _channel_id: string,
      private _author: User,
      private _guild_id: string
    ) {
      this._channel = new TextChannel(this._channel_id, this._client);
    }

  public get client(): Client {
    return this._client;
  }

	public get type(): number  {
		return this._type;
	}

  public get tts(): boolean {
    return this._tts;
  }

  public get timestamp(): Date {
    return this._timestamp;
  }

  public get pinned(): boolean {
    return this._pinned;
  }

  public get nonce(): string {
    return this._nonce;
  }

	public get mentions(): any  {
		return this._mentions;
  }
  
	public get mention_roles(): any  {
		return this._mention_roles;
	}

  public get mentioned_everyone(): boolean {
    return this._mentioned_everyone;
  }

	public get member()  {
		return this._member;
  }
  
  public get id(): string {
    return this._id;
  }

	public get flags(): number  {
		return this._flags;
  }
  
  public get edited_timestamp(): Date {
    return this._edited_timestamp;
  }

  /**
   * Message content.
   */

  public get content(): string {
    return this._content;
  }

  public get channel_id(): string {
    return this._channel_id;
  }

  public get channel(): TextChannel {
    return this._channel;
  }

  public get author(): User {
    return this._author;
  }

  public get guild_id(): string {
    return this._guild_id;
  }

  async getRole(id: string) {
    const data: Collection<string, Role> = await this.client.rest.fetchRole(id, this.guild_id);

    let role: any = "";

    data.forEach(roleTemp => {
      if(roleTemp.id == id) {
        role = roleTemp;
      }
    })

    return role;
  }

  /**
   * Function that returns first mention in receieved message.
   */

  public get firstMention(): any {
    return this._mentions[0];
  }
  
  /**
   * Function that sends message in channel message was created in.
   * @param content - Message content
   */

  async send(content: string | MessageEmbed) {
    if (typeof content === "string") {
      const body: MessageOptions = { content: content };
    const response = await this.client.rest.createMessage(body, this.channel_id);
    }
    if (content instanceof MessageEmbed) {
      const options: MessageOptions = {
        embed: content
      }
      console.log(options);
      const response = await this.client.rest.createMessage(options, this.channel_id);
    }
  }

  async delete() {
    const response = await this.client.rest.deleteMessage(this.channel_id, this._id);
  }

  /**
   * Function that adds role to user that created the message.
   * @param role_id - Role to add to user
   */

  async addRole(role_id: string) {
      const response = await this.client.rest.addGuildMemberRole(this._guild_id, this._author.id, role_id);
  }
}

export default Message;

//   d: {
//     type: 0,
//     tts: false,
//     timestamp: "2020-07-12T15:43:52.178000+00:00",
//     pinned: false,
//     nonce: "731898628376887296",
//     mentions: [],
//     mention_roles: [],
//     mention_everyone: false,
//     member: {
//       roles: [ "721691563994120192", "721692907760910418" ],
//       mute: false,
//       joined_at: "2020-06-14T12:07:52.670000+00:00",
//       hoisted_role: "721692907760910418",
//       deaf: false
//     },
//     id: "731898633217114197",
//     flags: 0,
//     embeds: [],
//     edited_timestamp: null,
//     content: "w0",
//     channel_id: "730182412545425488",
//     author: {
//       username: "arvee",
//       public_flags: 576,
//       id: "99819835273252864",
//       discriminator: "1337",
//       avatar: "5246954bcd5f8e6bef66435eb8697b38"
//     },
//     attachments: [],
//     guild_id: "721686748496658525"
//   }