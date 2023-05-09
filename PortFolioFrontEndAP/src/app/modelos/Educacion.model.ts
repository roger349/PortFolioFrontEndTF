export class Educacion{

    id_educacion:number;
    titulo:string;
    condicion:string;
    institucion:string;

    constructor(id_educacion:number, titulo:string, condicion:string, institucion:string) {

    this.id_educacion = id_educacion;
    this.titulo = titulo;
    this.condicion = condicion;
    this.institucion = institucion;   
    }
}