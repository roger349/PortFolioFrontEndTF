export class Proyectos{

    id_proyecto?:number;
    tipo_proyecto:string;
    descripcion_proyecto:string;

    constructor(tipo_proyecto:string, descripcion_proyecto:string) {

    this.tipo_proyecto = tipo_proyecto;
    this.descripcion_proyecto = descripcion_proyecto;
    
    }   
}