import { dataConnect } from "../conexiones";
import { Adm } from "../usuarios/adm";
import { Moder } from "../usuarios/moder";
import { User } from "../usuarios/user";

export class Controlador {
  public static setConnect(data:string):dataConnect{
    switch(data){
      case "user":{
        return new User()
      }
      case "moder":{
        return new Moder()
      }
      case "adm":{
        return new Adm()
      }
      default:
        throw new Error("conexion fallida")
    }
  }
}