
export type Persona = {
  name:string,
  apellido:string,
  edad:number,
}

export type Cargos = "administrador" | "reclutador" | "programador"

export type Empleado = {
  empleado: Persona,
  post: Cargos
}