export default class Citas {
    constructor(nombre, telefono, tipoSangre, alergias, diaCita, horaCita)
    {
        this._nombre = nombre;
        this._telefono = telefono;
        this._tipoSangre = tipoSangre;
        this._alergias = alergias;
        this._diaCita = diaCita;
        this._horaCita = horaCita;
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
    set alergias(alergias)
    {
        this._alergias = alergias;
    }
    set sangre(tipoSangre)
    {
        this._tipoSangre = tipoSangre;
    }
    set hora_entrada(diaCita)
    {
        this._diaCita = diaCita;
    }
    set hora_cita(horaCita)
    {
        this._horaCita= horaCita;
    }
    organizar()
    {
        console.log(`El nombre del paciente es ${this._nombre} con el telefono:  ${this._telefono}, padece las siguientes alergias ${this._alergias} y cunta con el tipo de sangre ${this._tipoSangre} se le cita el dia ${this._diaCita} a la hora ${this._horaCita}`);
    }

}