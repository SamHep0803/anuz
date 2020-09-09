import Client from "../client/Client.ts";
import { headers } from "../constants/Payloads.ts";
import { Constants, ENDPOINTS } from "../constants/Constants.ts";
import { MessageOptions } from "../typedefs/MessageOptions.ts";
import Role from "../models/Role.ts";
import Collection from "../models/Collection.ts";

export class RestAPIHandler {
    private _token: string = "";

    constructor(private client: Client) {
      Object.defineProperty(this, "_token", {
        enumerable: false,
      });
    }

    async createMessage(options: MessageOptions, id: string) {
      const response = await fetch (
        `${Constants.API}/${ENDPOINTS.CHANNELS}/${id}/${ENDPOINTS.MESSAGES}`,
        {
          method: "POST",
          headers,
          body: JSON.stringify(options),
        }
      );
      return await response.json();
    }

    async deleteMessage(channel_id: string, message_id: string) {
      const response = await fetch (
        `${Constants.API}/channels/${channel_id}/messages/${message_id}`,
        {
          method: "DELETE",
          headers
        }
      );
    }

    set token(token: string) {
      this._token = token;
      headers.Authorization = `Bot ${this._token}`;
    }

    async fetchGuilds() {
      const response = await fetch (
        `${Constants.API}/${ENDPOINTS.USER_GUILDS}`,
        { headers }
      );

      return await response.json();
    }

    async fetchGuild(id: string) {
      const response = await fetch (
        `${Constants.API}/${ENDPOINTS.GUILDS}/${id}`,
        {
          headers
        }
      );

      return await response.json();
    }

    async fetchChannel(id: string) {
      const repsonse = await fetch (
        `${Constants.API}/${ENDPOINTS.CHANNELS}/${id}`,
        {
          headers
        }
      );

      return await repsonse.json();
    }

    async fetchRole(id: string, guild_id: string) {
      const response = await fetch (
        `${Constants.API}/${ENDPOINTS.GUILDS}/${guild_id}/${ENDPOINTS.ROLES}`, 
        {
          headers
        }
      )
      
      return await response.json();
      
      
    }

    async addGuildMemberRole(guild_id: string, user_id: string, role_id: string) {
      const response = await fetch (
        `${Constants.API}/${ENDPOINTS.GUILDS}/${guild_id}/${ENDPOINTS.MEMBERS}/${user_id}/${ENDPOINTS.ROLES}/${role_id}`, 
        {
          method: "PUT",
          headers
        }
      );
    }
}