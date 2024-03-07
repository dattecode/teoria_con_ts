import { FabMadera } from "../fabrica/FabMadera";
import { Madera, Mueble, verificMadera, verificMueble } from "./Contract";
import { FabMueble } from '../fabrica/FabMueble';

export class FabricaAbs {
  public static getFabric(data: string): any {
    if(verificMueble(data)){
      return FabMueble.getMueble(data)
    }
    if (verificMadera(data)) {
      return FabMadera.getMadera(data)
    }
    throw new Error("error")
  }
}
