const fs = require('fs');
const path = require('path/posix')
const encoding = 'utf8'

function crear(nombre, contenido) {
    fs.writeFile(nombre, contenido, encoding, (error) =>{
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log('archivo guardado, campeón');
        }
    });
}

function editar(archivo, contenido) {
    fs.appendFile(archivo, contenido, encoding, (error) =>{
        if (error) throw error
        console.log('archivo guardado')
    })
}

function borrar(archivo) {
    fs.unlink(archivo, (error)=>{
        if (error) throw error
        console.log('file deleted')
    })
    
}

function leer() {
    fs.readFile(path, encoding, (error, data) =>{
        if (error) throw error
        console.log(data)
    })
}



crear('', '')
editar('', '')
borrar('')
leer('')