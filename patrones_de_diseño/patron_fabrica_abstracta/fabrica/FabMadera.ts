import { dataCUp, dataConect } from "../conect/Conexiones";
import { Arce } from "./madera/Arce";
import { Caoba } from "./madera/Caoba";
import { Roble } from "./madera/Roble";

export class FabMadera {
  public static getMadera(data:string):dataCUp {
    if(data === "arce"){
      return new Arce
    }
    if(data === "caoba"){
      return new Caoba
    }
    if(data === "roble"){
      return new Roble
    }
    throw new Error("Error en la fabrica de madera ")
  }
}