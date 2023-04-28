let miNombre = 'Jenifer'
let miApellido = 'Roelstraete'
let miEdad = 29
let miMascota = 'Daisy'
let edadMascota = 7

console.log('Mi Nombre:', miNombre)
console.log('Mi Apellido:', miApellido)
console.log('Mi Edad:', miEdad)
console.log('Mi Mascota:', miMascota)
console.log('Edad Mascota:', edadMascota)

let nombreCompleto = miNombre + ' ' + miApellido

const textoPresentacion = `Mi nombre es ${miNombre} ${miApellido} y tengo ${miEdad} años.\nTengo una mascota llamada ${miMascota}, la cual tiene ${edadMascota} años.`
console.log(textoPresentacion)

const sumaEdades = miEdad + edadMascota
const restaEdades = miEdad - edadMascota
const productoEdades = miEdad * edadMascota
const divisionEdades = miEdad / edadMascota
console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)