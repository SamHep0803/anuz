import { MessageEmbed } from "../models/embed/Embed.ts";

export interface MessageOptions {
  content?: string;
  tts?: boolean;
  embed?: MessageEmbed;
}

export interface MessageDeleteOptions {
  timeout?: number;
  reason?: string;
}