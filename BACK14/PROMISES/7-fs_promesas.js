const fs = require('fs/promises');

const encoding = 'utf8'

async function crearArchivo(nombre, contenido) {
    await fs.writeFile(nombre, contenido, encoding, (error) =>{
        console.log(result)
        console.log('archivo creado')
    });
}


const ejecutar = async () => {
    await crearArchivo('ejercicio.txt', 'el nuevo ejercicio con async')

    console.log('funciones ejecutadas ')
}

crearArchivo('ejercicio.txt', 'el nuevo ejercicio con async')


//-------------------------------------------
// function crearArchivo(nombre, contenido) {
//     const fs = require(nombre, contenido, encoding)
// }

function borrar() {

}

function editar() {

}
function leer() {

}