/*
Un restaurante quiere tener un sistema que guarde los datos de una reserva.
El sistema debe:
Un objeto que tenga la estructura de los datos a pedir:
Nombre
Apellido
Edad
Metodo que retorne los nombres completos y su edad.
Un array donde se va a guardar los objetos de personas.
Preguntar cuantas personas son.
Dentro del ciclo ir pidiendo los datos y guardar los datos en el array.
Luego de haber pedido todos los datos, un ciclo que llame al método y lo imprima en pantalla.
*/


const reserva = {
  nombre: '',
  apellido: '',
  edad: 0,
  datos () {
    return `${this.nombre} ${this.apellido} ${this.edad} años`;
  }
}

const reservas = [];

const numero = parseInt(prompt('Cuántas personas son?:'));

for (let i = 0; i<numero; i++){
  reserva.nombre = prompt(`Nombre de la persona ${i+1}:`);
  reserva.apellido = prompt(`Apellido de la persona ${i+1}:`);
  reserva.edad = prompt(`Edad de la persona ${i+1}:`);

  reservas.push(Object.assign({}, reserva));
}

for (let i=0; i<reservas.length; i++){
  console.log(`Pedido Numero ${i+1}: ${reservas[i].datos()}`);
}
