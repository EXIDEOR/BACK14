//async await

//Tenemos 3 acciones que debe hacerse una después de otra

function construir(muro) {
    console.log('building')

    setTimeout(() => {
        muro.construido = true
        callback(muro)
    }, 500);

}

function aplanar(muro) {
    console.log('aplanando')
    muro.aplanado = true
    return muro
}

function pintar(muro) {
    console.log('pintando')
    muro.pintado = true
    return muro
}

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
}

const muroConstruido = construir(muro)
const muroConstruido = aplanar(muroConstruido)
const muroConstruido = pintar(muroAplanado)