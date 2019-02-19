import Movimiento from './ejercicio3.js';

let Cliente1 = new Movimiento('Carlos', 18, "Rio Salado #90, Las Palmas", 200000, 5, 3);
Cliente1.informacion();

Cliente1.nombre = `Perez`;
console.log(Cliente1.nombre);
Cliente1.edad = 19;
console.log(Cliente1.edad);
Cliente1.domicilio = 'Republica de Paraguay #1719, Lomas de Santa Elena';
console.log(Cliente1.domicilio);
Cliente1.saldo = 280000;
console.log(Cliente1.saldo);
Cliente1.numeroDepositos = 2;
console.log(Cliente1.numeroDepositos);
Cliente1.numeroRetiros = 1;
console.log(Cliente1.numeroRetiros);

Cliente1.informacion();
Cliente1.retirar(30000);
Cliente1.informacion();
Cliente1.depositar(20000);
Cliente1.informacion();