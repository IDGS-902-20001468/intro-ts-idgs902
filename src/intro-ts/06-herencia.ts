class Persona5{
    protected nombre:string='';
    protected edad:number=0;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Edad: ${this.edad}`)
    }
}

class Empleado extends Persona5{
    private sueldo:number=0;
    constructor(nom:string, edad:number, sueldo:number){
        super(nom,edad);
        this.sueldo=sueldo;
    }

    imprimir(){
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`)
    }
}

