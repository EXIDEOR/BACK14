// const fs = require('fs')
// //QUE SON LOS UTF8
// fs.writeFile('hola.txt', 'hola desde FS', 'utf8', (error) => {
//     if (error) {
//         console.log('error; '+ error)
//     }else {
//         console.log('archivo creado correctamente')
        
//     }
// })

const fs = require('fs');

fs.writeFile('./carpeta/hola.txt', 'Hola Koders', 'utf8', (error) => {
    if (error) { // {error: 'Todo salio mal'} | false | undefined
        console.error(error)
    } else {
        console.log('Se creo el archivo correctamente');
    }
});


function borrar() {

}

function editar() {

}

function leer() {

}