import { userConect } from "./controlador/contract"

export interface dataConnect{
  getData():userConect
  setData(data:userConect):any
}