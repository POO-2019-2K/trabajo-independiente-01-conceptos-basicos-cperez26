export default class Viaticos{
    constructor(nombre, telefono, email, puesto, salario , cuentaBancaria, destinoViaje,tiempoViaje,transporte)
    {
        this._nombre = nombre;
        this._telefono = telefono;
        this._email = email;
        this._puesto = puesto;
        this._salario = salario;
        this._cuentaBancaria = cuentaBancaria;
        this._destinoViaje = destinoViaje;
        this._tiempoViaje = tiempoViaje;
        this._transporte = transporte;
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
    set puesto(puesto)
    {
        this._puesto = puesto;
    }
    set salario(salario)
    {
        this._salario= salario;
    }
    set cuenta_bancaria(cuentaBancaria)
    {
        if (this.cuentaBancaria.length < 16 )
        {
        this._cuentaBancaria = "incompleto";
        }
        else
        {
        this._cuentaBancaria =  cuentaBancaria;
        }
    }
    set lugar_viaje(destinoViaje)
    {
        this._destinoViaje = destinoViaje;
    }
    set tiempo_viaje(tiempoViaje)
    {
        this._tiempoViaje = tiempoViaje;
    }
    set transporte(transporte)
    {
        this._transporte = transporte;
    }
    organizar()
    {
        console.log(`El nombre es ${this._nombre} con el telefono: ${this._telefono} con el correo ${this._email} cuenta con el puesto de ${this._puesto} con un salario de :  ${this._salario} con la cuenta  ${this._cuentaBancaria} ira de viaje a ${this._destinoViaje} durante ${this._tiempoViaje} dias, se trasladara en ${this._transporte}  `);
    }

}