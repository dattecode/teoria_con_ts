//mueble
export type Mueble = "silla" | 
  "mesa" | 
  "escritorio";

//madera
export type Madera = "caoba" | 
  "roble" | 
  "arce";
export type EstiloMadera = "cepillado" | "rustica";
export type MaderaLista = {
  nombre: Madera;
  tipo: EstiloMadera;
};

//solicitud Cliente
export type Solicitud = {
  madera:MaderaLista,
  mueble:Mueble
}

//verificaciones 
export const verificMueble = (data: string): boolean => {
  return data === "silla" || 
    data === "mesa" || 
    data === "escritorio";
};

export const verificMadera = (data: string): boolean => {
  return data === "caoba" || 
    data === "roble" || 
    data === "arce";
};
