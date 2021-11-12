function factory(result) {
    console.log('workin')

    return function() {
        console.log('resultado: ', result)
    }
}

const r = factory('salu2')

r()

//suma parcial
function factorySumaParcial() {
    return function (b){
        return a + b

    }
}

const suma2 = factorySumaParcial(5)
function suma(b) {
    return 2 + b
}