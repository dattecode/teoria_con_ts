import { MaderaLista } from "../../conect/Contract";

export class Arce {
  private data: MaderaLista;

  constructor() {
    this.data = { nombre : "roble", tipo : "cepillado" };
  }

  getData(): MaderaLista {
    return this.data;
  }

  setData(data: MaderaLista) {
    this.data = data;
  }
}
