export default class Movimiento{
    constructor(nombre, edad, domicilio, saldo, numeroDepositos, numeroRetiros){
        this._nombre = nombre;
        this._edad = edad;
        this._domicilio = domicilio;
        this._saldo = saldo;
        this._numeroDepositos = numeroDepositos;
        this._numeroRetiros = numeroRetiros;
    }

    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }

    get domicilio(){
        return this._domicilio;
    }

    get saldo(){
        return this._saldo;
    }

    get numeroDepositos(){
        return this._numeroDepositos;
    }

    get numeroRetiros(){
        return this._numeroRetiros;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set edad(edad){
        this._edad = edad;
    }

    set domicilio(domicilio){
        this._domicilio = domicilio;
    }

    set saldo(saldo){
        this._saldo = saldo;
    }

    set numeroDepositos(numeroDepositos){
        this._numeroDepositos = numeroDepositos;
    }

    set numeroRetiros(numeroRetiros){
        this._numeroRetiros = numeroRetiros;
    }

    informacion(){
        console.log(`Nombre: ${this._nombre}\nEdad: ${this._edad}\nDomicilio: ${this._domicilio}\nSaldo: $${this._saldo}\nNúmero de Depósitos: ${this._numeroDepositos}\nNúmeroRetiros: ${this._numeroRetiros}`);
    }

    depositar(cantidad){
        this._saldo += cantidad;
        console.log(`Se depositaron $${cantidad}\nSaldo Actual: $${this._saldo}`);
    }

    retirar(cantidad){
        if(this._saldo >= cantidad){
            this._numeroRetiros++;
            this._saldo -= cantidad;
            console.log(`Se retiraron: $${cantidad}\nSaldo Actual: $${this._saldo}`);
        }
        else{
            console.log(`Retiro denegado, no hay suficiente saldo\nSaldo Actual: $${this._saldo}`);
        }
    }
}