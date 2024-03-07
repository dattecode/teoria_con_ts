import { Mueble } from "../../conect/Contract"

export class Mesa {
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