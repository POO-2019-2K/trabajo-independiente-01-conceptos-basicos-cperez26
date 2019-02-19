export default class Reservacion{
    constructor(nombre, telefono, email, mesa, dia, horaEntrada, horaSalida, costo)
    {
        this._nombre = nombre;
        this._telefono = telefono;
        this._email = email;
        this._mesa = mesa;
        this._dia = dia;
        this._horaEntrada = horaEntrada;
        this._horaSalida = horaSalida;
        this._costo = costo;
    } 
    set nombre(nombre)
    {
        this._nombre = nombre;
    }
    set telefono(telefono)
    {
        if (this.telefono.length < 10 )
        {
        this._telefono = "incompleto";
        }
        else
        {
        this._telefono =  telefono;
        }
    }
    set correo(email)
    {
        this._email = email;
    }
    set mesa(mesa)
    {
        this._mesa= mesa;
    }
    set dia_reserva(dia)
    {
        this._dia = dia;
    }
    set hora_entrada(horaEntrada)
    {
        this._horaEntrada = horaEntrada;
    }
    set hora_salida(horaSalida)
    {
        this._horaSalida= horaSalida;
    }
    set costo(costo)
    {
        this._costo= costo;
    }
    organizar()
    {
        console.log(`El nombre es ${this._nombre} con telefono:  ${this._telefono} con el correo ${this._email} con la mesa ${this._mesa} reservo el dia ${this._dia} desde las ${this._horaEntrada} horas, su reservacion acaba a las ${this._horaSalida} horas con un costo de :  ${this._costo} `);
    }

}