export class Tecnologias{

    id_tecnologia?:number;
    nombre_tecnologia:string;
    porcentaje_tecnologia:number;

    constructor(nombre_tecnologia:string, porcentaje_tecnologia:number) {
       
    this.nombre_tecnologia = nombre_tecnologia;
    this.porcentaje_tecnologia = porcentaje_tecnologia;
    
    }   
}