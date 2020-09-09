export enum Constants {
  GATEWAY = "wss://gateway.discord.gg/",
  API = "https://discord.com/api/v6"
}

export enum ENDPOINTS {
  USERS = 'users',
  USER_GUILDS = 'users/@me/guilds',
  GUILDS = 'guilds',
  CHANNELS = 'channels',
  MESSAGES = 'messages',
  MEMBERS = 'members',
  REACTIONS = 'reactions',
  PINS = 'pins',
  ROLES = 'roles'
}

export enum StatusCode {
  OK = 200,
  NO_CONTENT = 204,
  CREATED = 201,
  BAD = 400,
  NOT_FOUND = 404,
}

export enum OPCODE {
  DISPATCH = 0,
  HEARTBEAT = 1,
  IDENTIFY = 2,
  PRESENCE_UPDATE = 3,
  VOICE_STATE_UPDATE = 4,
  RESUME = 6,
  RECONNECT = 7,
  REQUEST_GUILD_MEMBERS = 8,
  INVALID_SESSION = 9,
  HELLO = 10,
  HEARTBEAT_ACK = 11
}