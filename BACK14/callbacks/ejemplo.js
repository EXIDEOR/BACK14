// let a = 'a'
// let b = 2
// const c = 'text'
// var d = true

// console.log(a, b, c, d)

// if (d) {
//     console.log('true')
// }else {
//     console.log('esto no se imprime')
// }

// const f = () => {
//     console.log('arrow function')
// }

// const f2 = function() {
//     console.log('funcion anonima')
// }

// function cuadrado(x) {
//     console.log('base: ', x)
//     return x*x
// }

// cuadrado(2)
// const otraFuncion = cuadrado
// const resultado2 = otraFuncion(2)


//1) varibale entrada
//2) funcion que recibe y regresa el resultado
//3) validar la función con const resultado y console.log
//3.1 = mostrar resultado en consola por medio de node


// ------- ejercicio básico 1 -------

let num1 = 8
let num2 = 2

function resultadoDiv(num1, num2) {

    if(num2 === 0) {
        return 'error'
    }else {
        const result = num1/num2
        return result
    }
}
const resultado = resultadoDiv(0,0)
console.log(resultado)

//-------------EJEMPLO CALLBACK FOR EACH

const resultado1 = forEach([2, 3, 4], val => val * 2);
console.log(resultado1);

const resultado2 = forEach([2, 3, 4], (val) => {
    return 'mucho texto ' + val;
});
console.log(resultado2);

function forEach(arreglo, callback) {
    const resultado = [];

    for (let index = 0; index < arreglo.length; index++) {
        resultado.push(callback(arreglo[index]));
    }

    return resultado;
}