import { dataConect } from "../conect/Conexiones";
import { Escritorio } from "./muebles/Escritorio";
import { Mesa } from "./muebles/Mesa";
import { Silla } from "./muebles/Silla";

export class FabMueble {
  public static getMueble(data:string):dataConect{
    if(data === "silla"){
      return new Silla
    }
    if(data === "mesa"){
      return new Mesa
    }
    if(data === "escritorio"){
      return new Escritorio
    }
    throw new Error("error de datos en fabricaMueble")
  }

}