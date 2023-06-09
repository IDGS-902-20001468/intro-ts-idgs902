let vector1:Array<number> =[9,8,7,6]
vector1.push(10)
vector[1]=22

for(let tem of vector1)
    console.log(tem)

let tem1:(number|string)[]=[]
tem1.push('mario')
tem1.push(1234)

interface Persona{
    nombre:string;
    grupo:string;
    edad:number;
    materias:string[];
    activo?:string;
}

const alumno: Persona={
    nombre: 'Mario',
    grupo: 'IDGS123',
    edad: 23,
    materias: ['Espaniol']
}
alumno.activo='Inscrito'
console.table(alumno)