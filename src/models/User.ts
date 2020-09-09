import Client from "../client/Client.ts";

export default class User {
  constructor(
    private _id: string,
    private _client: Client,
    private _username: string,
    private _discriminator: string,
    private _avatar: string,
    private _bot?: boolean,
    private _system?: boolean,
    private _mfaEnabled?: boolean,
    private _locale?: boolean,
    private _verified?: boolean,
    private _flags?: number,
    private _premiumType?: number,
    private _publicFlags?: number,
  ) {
  }

  public get id(): string {
    return this._id;
  }

  public get username(): string {
    return this._username;
  }

  public get discriminator(): string {
    return this._discriminator;
  }

  public get avatar(): string {
    return this._avatar;
  }

  public get bot(): boolean | undefined {
    return this._bot;
  }

  public get system(): boolean | undefined {
    return this._system;
  }

  public get mfaEnabled(): boolean | undefined {
    return this._mfaEnabled;
  }

  public get locale(): boolean | undefined {
    return this._locale;
  }

  public get verified(): boolean | undefined {
    return this._verified;
  }

  public get flags(): number | undefined {
    return this._flags;
  }

  public get premiumType(): number | undefined {
    return this._premiumType;
  }

  public get publicFlags(): number | undefined {
    return this._publicFlags;
  }
  public get client(): Client {
    return this._client;
  }
}