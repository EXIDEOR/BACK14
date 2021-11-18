async function ejecutaPromesas() {
    const resultado1 = await promesa1() //tarea larga proceso asincrono
    const resultado2 = 'texto: ' + resultado1 //tarea corta proceso sincrono

    return resultado2
}