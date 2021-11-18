/* ------------------------- Async y Await EJERCICIO ------------------------ */
const fs = require('fs/promises');
async function crearArchivo(archivo, contenido) {
    try { 
        await fs.writeFile(archivo, contenido, 'utf8')
        console.log('Archivo creado de forma correcta');
    }
    catch (error) {
        console.error(error);
    }
}
async function editarArchivo (archivo, contenido) {
    try { 
        await fs.appendFile(archivo, contenido, 'utf8')
        console.log('Archivo editado de forma correcta');
    }
    catch (error) {
        console.error(error);
    }
}
async function leerArchivo (archivo) {
    try { 
       
        //console.log('Archivo borrado de forma correcta');
        const result =  await fs.readFile(archivo, 'utf8')
        console.log (result);
    }
    catch (error) {
        console.error(error);
    }
}
async function borrarArchivo (archivo, contenido) {
    try { 
        await fs.unlink(archivo, contenido, 'utf8')
        console.log('Archivo borrado de forma correcta');
    }
    catch (error) {
        console.error(error);
    }
}
async function main () {
   await crearArchivo('archivopromise.txt', 'Archivo creado correctamente');
   await leerArchivo('archivopromise.txt');
await editarArchivo('archivopromise.txt', 'Archivo creadp corectamente');
await borrarArchivo('archivopromise.txt ', 'Archivo borrado exitosamente');
}
main();