function sumar(a:number,b:number):void{
    console.log(a+b)
}
let num = sumar(7,4)

function sumar2(a:number,b:number):number{
    return a+b
}

const sumaFlecha=(a:number,b:number):number=>{
    return a+b
}

function multiplicar(numero1:number, numero2?:number, base:number=2):number{
    return numero1*base;
}

const resultado2 = multiplicar(5, 0, 10)
const resultado = sumar(2, 7)

interface Persona2{
    nombre:string;
    edad:number;
    grupo:()=>void;
}

function UTL(alumno:Persona2, cuatrimestre:number):void{
    alumno.edad = 23;
    console.log(alumno);
}

const NuevoAlumno:Persona2={
    nombre:'Mario',
    edad: 25,
    grupo(){
        console.log('IDGS',this.edad);
    }
}
UTL(NuevoAlumno,44);
console.log(NuevoAlumno)

function calculaEdad(persona:Persona, x:number){
    persona.edad = x
    console.log(persona.edad)
}

//funcion anonima
const funcSumar=function(n1:number,n2:number):number{
    return n1+n2
}
console.log(funcSumar(4,9))

//funcion con parametros opcionales
function calcular(n1:number, n2:number, n3?:number):number{
    if(n3)
        return n1+n2+n3
    else
        return n1+n2
}

console.log(calcular(3,2,5))
console.log(calcular(3,2))

//Parametros REST en funciones
function calcular2(...valores:number[]){
    let suma=0;
    for(let x=0; x>valores.length; x++)
        suma += valores[x]
    return suma
}
console.log(calcular2(10,2,3,4))
console.log(calcular2(1,2))