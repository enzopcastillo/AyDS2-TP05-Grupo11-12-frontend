export class Maquinaria {
    codigo: string;
    marca: string;
    modelo: string;
    fechaAdquisicion: string;
    imagen: string;
    estado: string;

    constructor(codigo='', marca='', modelo='', fechaAdquisicion='', imagen='', estado=''){
        this.codigo = codigo;
        this.marca = marca;
        this.modelo = modelo;
        this.fechaAdquisicion = fechaAdquisicion;
        this.imagen = imagen;
        this.estado = estado;
    }
}
