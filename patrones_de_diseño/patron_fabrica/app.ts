import { userConect } from "./controlador/contract";
import { Controlador } from "./controlador/controlador_fabrica";

const user1: userConect = {
  userName: "elLeyend",
  tipo: "adm",
  password: "asdasdasd",
};
const user2: userConect = {
  userName: "elTRih",
  tipo: "moder",
  password: "asdasdasd",
};
const user3: userConect = {
  userName: "maruchan",
  tipo: "user",
  password: "asdasdasd",
};

const connectUser1 = Controlador.setConnect(user1.tipo);
const connectUser2 = Controlador.setConnect(user2.tipo);
const connectUser3 = Controlador.setConnect(user3.tipo);

connectUser1.setData(user1);
console.log(connectUser1);

connectUser2.setData(user2)
console.log(connectUser2);

connectUser3.setData(user3)
console.log(connectUser3);

