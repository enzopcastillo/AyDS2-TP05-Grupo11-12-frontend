import { Cliente } from "./cliente";
import { Maquinaria } from "./maquinaria";

export class Alquiler {
    _id!: string;
    cliente!: Cliente;
    maquinaria!: Maquinaria;
    fechaAlquiler!: string;
    fechaDevolucion!: string;
    precio!: number;

    constructor(){}
}
