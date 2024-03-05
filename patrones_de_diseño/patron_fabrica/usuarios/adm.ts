import { userConect } from "../controlador/contract";

export class Adm {
  private data: userConect;

  constructor() {
    this.data = { userName: "", tipo: "", password: "" };
  }

  public getData() {
    return this.data;
  }

  public setData(data: userConect) {
    this.data = data;
  }

}
