import { MaderaLista } from "./Contract"

export interface dataConect {
  getData():any
  setData(data:any):void
}

export interface dataCUp {
  getData():any
  setData(data:MaderaLista):void
}