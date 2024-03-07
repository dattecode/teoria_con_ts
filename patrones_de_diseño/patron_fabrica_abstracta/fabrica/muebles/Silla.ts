import { Mueble } from "../../conect/Contract"

export class Silla {
  private data : Mueble

  constructor(){
    this.data = "silla"
  }

  getData(): Mueble {
    return this.data
  }

  setData(data:Mueble){
    this.data = data
  }
  
}