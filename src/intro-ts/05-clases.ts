class Persona3{
    nombre:string='';
    edad:number=0;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    }

}

let persona:Persona3;
persona=new Persona3('Juan', 23)
persona.imprimir()

// Modificadores de acceso

class Dado{
    private valor:number=0;
    public tirar(){
        this.generar();
    }

    private generar(){
        this.valor = Math.floor(Math.random()*6)+1
    }

    public imprimir(){
        console.log(`Valor: ${this.valor}`)
    }
}

let dado1= new Dado();
dado1.tirar();
dado1.imprimir();


// clase 2

class Persona4{
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    }
}

let persona3:Persona4;
persona3=new Persona4('Juan', 23)
persona3.imprimir()

