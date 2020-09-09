export class Role {
    constructor(
      private _id: string,
      private _name: string,
      private _color: number,
      private _hoist: boolean,
      private _position: number,
      private _permissions: number,
      private _managed: boolean,
      private _mentionable: boolean,
    ) {
    }
  
    public get id() {
      return this._id;
    }

    public get name() {
        return this._name;
    }
}

export default Role;