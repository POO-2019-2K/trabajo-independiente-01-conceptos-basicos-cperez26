export default class Empleado {
    constructor(nombre, puesto, telefono, email) {
        this._nombre = nombre;
        this._puesto = puesto;
        this._telefono = telefono;
        this._email = email;
    }

    get nombre(){
        return this._nombre;
    }

    get puesto(){
        return this._puesto;
    }

    get telefono(){
        return this._telefono;
    }

    get email(){
        return this._email;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set puesto(puesto){
        this._puesto = puesto;
    }

    set telefono(telefono){
        this._telefono = telefono;
    }

    set email(email){
        this._email = email;
    }

    informacion(){
        console.log(`Nombre: ${this._nombre} \nPuesto: ${this._puesto} \nTeléfono: ${this._telefono} \nEmail: ${this._email}`);
    }
}
