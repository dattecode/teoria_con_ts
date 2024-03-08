import { Cargos, Empleado, Persona } from "../contract";
import { Prototyp } from "./interface";

const solicitud: Persona = {
  name: "ElTipaso",
  apellido: "MacLovin",
  edad: 23,
};

class Reclutamiento implements Prototyp {
  private data: Persona;

  constructor(data: Persona) {
    this.data = data;
  }

  clone(): Reclutamiento {
    return new Reclutamiento(this.data);
  }

  getData(): Persona {
    return this.data;
  }
}

class Contrato {
  private data: Empleado;
  constructor(persona: Persona, cargo: Cargos) {
    this.data = {
      empleado: persona,
      post: cargo,
    };
  }

  getData(): Empleado {
    return this.data;
  }
}

const postulante = new Reclutamiento(solicitud).clone().getData();
console.log(postulante);

const Empleado = new Contrato(postulante, "reclutador");
console.log(Empleado);
