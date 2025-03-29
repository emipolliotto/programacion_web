//ejercicio1:
//cambia
let ciudad1 = 'salta'
let pais1 = 'argentina'
let edad1 = 19
console.log(ciudad1,pais1,edad1)
edad1 = 20
console.log(edad1)

//no cambia
const ciudad2 = 'salta'
const pais2 = 'argentina'
const edad2 = 19
console.log(ciudad2,pais2,edad2)
edad1 = 20
console.log(edad2)


//ejercicio2:
let valor1 = 12
let valor2 = 15
let valor3 = 24

console.log((valor1+valor2+valor3)/3)
console.log((valor1+valor2+valor3)%2)

//ejercicio3:
let coche = {
    marca :'toyota',
    modelo:'nose',
    anio: 2023,
}
console.log(typeof coche.marca)

//ejercicio4:
let ciudades = ['valencia','paris','londres','napoles','milan']
console.log(ciudades)
ciudades[2]='salta'
console.log(ciudades)

//ejercicio5:
let peliculas=[{titulo1:'peli1',director1:'director1',anio1:'anio1'},
    {titulo2:'peli2',director2:'director2',anio2:'anio2'},
    {titulo3:'peli3',director3:'director3',anio3:'anio3'}]

console.log(peliculas[2].director3)

//ejercicio6:
let var1 = true
let var2 = false
let var3 = false

console.log(var1 || var2)
console.log(var1 && var3)

//ejercicio7:
let num1 = 34
let num2 = 12
let num3 = 7

let resultado = (num2 < num1) && (num1 < num3)
console.log(resultado)

//ejercicio8:
let nombre = 'emilia'
let apellido = 'polliotto'

let juntos = nombre + ' ' + apellido
console.log(juntos)

//ejercicio9:
let numero = 34
console.log(numero)
numero++
console.log(numero)

numero-- 
console.log(numero)

//ejercicio10:
let estudiante = {
    nombre: 'emilia',
    edad: 19,
    carrera: 'negocios',
}

console.log(estudiante.edad)
console.log(estudiante.carrera)
console.log(estudiante.nombre)

//ejercicio11:
let numeros = [[1,2,3],[4,5,6],[7,8,9]]
console.log(numeros[0][1])

//ejecicio12:
let numero1 = 23
let numero2 = 57

console.log(numero1 < numero2)
console.log(numero1 <= numero2)
console.log(numero1 > numero2)
console.log(numero1 >= numero2)
console.log(numero1 == numero2)
console.log(numero1 === numero2)
console.log(numero1 != numero2)
console.log(numero1 !== numero2)

//ejercicio13:
let cualquiera = ''

let cualquiera1 = null
let cualquiera2 = null

console.log(cualquiera)
console.log(cualquiera1)
console.log(cualquiera2)

//ejercicio14:
let numstring = '123'
let cambiado2 = Number(numstring)

let resultados = cambiado2 + 23
console.log(resultados)
