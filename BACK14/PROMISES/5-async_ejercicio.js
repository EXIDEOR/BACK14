// Construiremos el equivalente a callbacks usando promises
// Si el muro no cumple con la fase anterior haremos reject de la promise

function construir(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Contruir recibio el muro:')
            console.log(muro);
            muro.construido = true;

            const error = muro.construido
                ? null
                : new Error('No se pudo construir');

            if (error)
                reject(error); // Se termina la ejecucion con reject

            resolve(muro);
        }, 1000);
    })
}

function aplanar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Aplanar recibio el muro:')
            console.log(muro);
            muro.aplanado = true;

            const error = muro.construido && muro.aplanado
                ? null
                : new Error('No se pudo aplanar');

            if (error)
                reject(error); // Se termina la ejecucion con reject
 
            resolve(muro);
        }, 1000);
    })
}

function pintar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Pintar recibio el muro:')
            console.log(muro);
            muro.pintado = true;

            const error = muro.aplanado && muro.pintado
                ? null
                : new Error('No se pudo pintar');

            if (error)
                reject(error); // Se termina la ejecucion con reject

            resolve(muro);
        }, 1000);
    })
}

async function ejecutarConstrucción() {
    const muro = {} //es un objeto
    
    try{
        const muroConstruido = await construir(muro)//guarda el valor del resolve
        const muroAplanado = await aplanar(muroConstruido)
        const muroPintado = await pintar(muroAplanado)
        
    }catch (error) { //el reject, cae aqui
        console.log('oh oh, upss')
        console.log(error)

    }

    console.log('muro terminado')
    console.log(muroPintado)

}

ejecutarConstrucción()

