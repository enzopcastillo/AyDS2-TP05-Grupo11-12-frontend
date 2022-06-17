import { Cliente } from "./cliente";
import { Maquinaria } from "./maquinaria";

export class Alquiler {
    idAlquiler!: number;
    cliente!: Cliente;
    maquinaria!: Maquinaria;
    fechaAlquiler!: string;
    fechaDevolucion!: string;
    precio!: number;
}
