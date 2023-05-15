export class ExperienciaLaboral {

    id_experiencia?: number;
    nombre_empresa: string;
    fecha_inicio:string;
    fecha_fin:string;
    descripcion_puesto: string;

   constructor(nombre_empresa:string, fecha_inicio:string, fecha_fin: string, descripcion_puesto:string) {
    
    this.nombre_empresa = nombre_empresa;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.descripcion_puesto = descripcion_puesto;
 }
} 