
//como asignar variables
let edad = 10
let nombre = 'emilia'
let profesor = false


const apodo = 'pedro'
apodo = 'yo'
//no se puede cambiar porque es una constante

//lista: array o vector
//el array puede ser array multiple y puede tener mas array adentro 
//el array constnte no se modifica la caja pero el contenido si, es decir no lo podes redefinir pero si agregar cosas.
let numeros = [1,2,3]
let LETRAS = ['a','b','c','d']
const MULTIPLE = [[1,2,3],[4,5,6]]
console.log(numeros)

//objeto(diccionario)
//camelcase,
// clave nombre valor 'emilia'
//el objeto puede tener funciones que hacen cosas dentro
let mejorProfesor = {
    nombre : 'emilia',
    apellido: 'polliotto',
    edadd : 19,
}

//array de objetos literales
let alumno1 = {nombre:'emilia', apellido:'polliotto'}
let alumno2 = {nombre:'lucas', apellido:'qcy'}
let alumno3 = {nombre:'pilar', apellido:'goenaga'}
const ALUMNO = [alumno1,alumno2,alumno3]
console.log(ALUMNO)
console.log(ALUMNO[0].nombre)

//operadores
//python AND, 
//JAVA &
//PYTHON OR
//JAVA ||
//TRUTHY OR FALSY

//strings y numeros se pueden concatenar

//operadores aritmeticos
// == igualdad devil compara solo el valor
/// === igualdad estricta compara el valor y el tipo de dato

// != , !==
//typeof te devuelve el tipo de dato
//.tofixed() corta el numero en la cantidad de decimales que le digas

//parseo de datos
