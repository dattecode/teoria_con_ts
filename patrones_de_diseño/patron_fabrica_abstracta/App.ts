import { Solicitud } from "./conect/Contract";
import { FabricaAbs } from "./conect/FAbs";

const cliente: Solicitud = {
  madera: { nombre: "arce", tipo: "cepillado" },
  mueble: "escritorio",
};

const AppFunction = (data: Solicitud): void => {
  //solicitud de las fabricas
  const datosMadera = FabricaAbs.getFabric(data.madera.nombre);
  const datosMueble = FabricaAbs.getFabric(data.mueble);

  //entrega de datos a la fabrica
  datosMadera.setData(data.madera);
  datosMueble.setData(data.mueble);

  //recuperacion de los datos entregados
  const maderaLista = datosMadera.getData();
  const muebleListo = datosMueble.getData();

  console.log(
    `solicitud lista del: ${muebleListo}, con la madera: ${maderaLista.nombre}, trabajado como: ${maderaLista.tipo}`
  );
};

AppFunction(cliente);
