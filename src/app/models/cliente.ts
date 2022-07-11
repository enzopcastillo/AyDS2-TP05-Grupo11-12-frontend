export class Cliente {
    _id!: string;
    apellido!: string;
    nombre!: string;
    tipoDocumento!: string;
    numDocumento!: string;
    telefono!: string;
    razonSocial!: string;
    codigoPostal!: string;
    direccion!: string;
    fechaAlta!: string;

    constructor(){}

    /*
    constructor(idCliente=0, apellido='', nombre='', tipoDocumento='', numDocumento='', telefono='', razonSocial='', codigoPostal='', direccion='', fechaAlta=''){
        this.idCliente = idCliente;
        this.apellido = apellido;
        this.nombre = nombre;
        this.tipoDocumento = tipoDocumento;
        this.numDocumento = numDocumento;
        this.telefono = telefono;
        this.razonSocial = razonSocial;
        this.codigoPostal = codigoPostal;
        this.direccion = direccion;
        this.fechaAlta = fechaAlta;
    }
    */
}
