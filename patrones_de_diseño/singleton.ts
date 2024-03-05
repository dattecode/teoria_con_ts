type data = string

class Singleton {
  // declaramos un metodo static de ambito privado.
  //este tiene que ser de la misma clase ya que sera la clase a la que se accede
  private static instance: Singleton;

  //declaramos los datos de la clase
  private data: data;

  //le damos valos a los datos por primera ves
  private constructor() {
    this.data = "first data";
  }

  //creamos la instancia por donde se accede a esta clase
  //esta es de ambito publico para que se pueda llamar fuera de la clase
  public static getInstance(): Singleton {
    //verificamos si la clase se creo si es undefined, declaramos la clase por primera ves
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    //retornamos la clase si la clase tiene valor retornamos la clase 
    return Singleton.instance;
  }

  //logica de la instancia compartida

  //accedemos a los datos para modificarlos
  public setData(data:data) {
    this.data = data;
  }

  //accedemos a los datos 
  public getData(): data {
    return this.data;
  }
}

//creamos 2 usuarios de la instancia y se conectaran a la misma instancia declarada privada en la clase
// la conexion se hace atraves del metodo que nos retorna la instancia a la que se conectan todos
const user1 = Singleton.getInstance();
const user2 = Singleton.getInstance();

//guardamos datos desde el usuario 1
user1.setData("este mensaje es para todos");

//verificamos los datos de ambos usuarios y podemos ver que en ambos cambio la data
console.log(user1.getData());
console.log(user2.getData());

//podemos comprar y ver que ambos tiene los mismo datos ya que estan conectados a la misma instancia en la clase 
console.log(`comparacion de que tiene los mismo datos: ""${user1 === user2}""`);
