export class Educacion{

    id_educacion?:number;
    titulo:string;
    condicion:string;
    institucion:string;

    constructor(titulo:string, condicion:string, institucion:string) {

    this.titulo = titulo;
    this.condicion = condicion;
    this.institucion = institucion;   
    }
}