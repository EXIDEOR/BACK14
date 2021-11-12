function irAcasa(callback) {
    console.log('voy a casa')
    console.log('llegue a casa')

    console.log(callback)
    if (callback !== undefined){
        callback()

    }else {
        console.log('no ps wow')
    }
}

function avisar() {
    console.log('ya llegue')
}

function dormir() {
    console.log('a dormir')
}

irAcasa(avisar)

dormir()
irAcasa()