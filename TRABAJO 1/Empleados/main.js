import Empleado from "./ejercicio1.js";

let trabajador1 = new Empleado('Carlos', 'Programador', 3131596305, 'cperez26@ucol.mx');
trabajador1.informacion();

trabajador1.nombre = 'Emilio';
console.log(trabajador1.nombre);
trabajador1.puesto = 'Texter';
console.log(trabajador1.puesto);
trabajador1.telefono =`3131366022`;
console.log(trabajador1.telefono);
trabajador1.email = 'carlos_emilio@hotmail.es';
console.log(trabajador1.email);

trabajador1.informacion();