import { Cargos, Empleado, Persona } from "../contract";

//clonador de datos
const cloneData = (data: Persona): Persona => {
  return { ...data };
};

//datos clonados ya modificados
const selectEmpleyor = (data: Persona, cargo: Cargos): Empleado => {
  return { empleado: data, post: cargo };
};

const solicitud: Persona = {
  name: "ElTipaso",
  apellido: "MacLovin",
  edad: 23,
};

//clonamos la solicitud
const solicitudClone = cloneData(solicitud);
const contratoPersona = selectEmpleyor(solicitudClone, "reclutador");

console.log(
  `se a contratado a ${contratoPersona.empleado.name}, ${contratoPersona.empleado.apellido} para el cargo de ${contratoPersona.post}`
);
