console.log('Objetos literales')

// console.warn('Creando un objeto literal')
const personaje = {
nombre: 'Toni Stark',
codeName: 'Ironman',
estaVivo: false,
edad: 40,
coords: {
    lat: 34.034,
    Ing: -118.8,
    },
trajes: ['Mark I', 'Mark v', 'Hulkbuster'],
dirección: {
        zip: '10880, 90625',
        ubicación: 'Malibú California',
    },
'última película': 'End Game',
}

// console.warn(`Accediendo al objeto y sus propiedades`)

// console.log( personaje )
// console.log(`nombre: ${personaje.nombre}`)
// console.log(`apodo: ${personaje[`codeName`]}`)
// console.log(`edad: ${personaje.edad}`)
// console.log(`latitud: ${personaje.coords.lat}`)

// let x = 'estaVivo'
// console.log(`latitud: ${personaje.nomb[x]}`)
// console.log(`última-película: ${personaje[`última-película`]}`)

// console.warn(`Borrando una propiedad del objeto`)
// delete personaje.edad
// console.log({ personaje })

// console.warn('Creando una nueva propiedad del objeto')
// personaje.casado = false

console.warn('Imprimiendo la cantidad de trajes que tiene')

console.log(`cantidad de trajes: ${personaje.trajes.length}`)

console.warn('Imprimiendo el nombre del traje 3')

console.log(`nombre del traje: ${personaje.trajes[2]}`)