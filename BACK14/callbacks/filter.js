// //si el callback retorna true, añade el valor al array de resultado
// //si retorna false, ignora el valor

// function filter(que haga algo, callback) {
//     const resultado = []

//     return resultado
// }

// //usar callback + elemento del arreglo
// //el callback debe recibir un valor, elemento de array

// const resultado1 = filter(array, x => x % 2 === 0)
// const soloUnos = filter(array, x => ===1)


//-------------------------EJEMPLO TAREA

const arreglo = [1, 2, 3, 4, 5];
const texto = ['a', 'b', 'c'];


// Si el callback retorna verdadero, añade el valor al array de resultado
// Si el callback retorna falso, ignora el valor
function filter(arr, callback) {
    const resultado = [];
    for (let index = 0; index < arr.length; index++) {
        if(callback(arr[index])===true)  
            resultado.push((arr[index]));
    }
    return resultado;
}

// El callback debe de recibir un valor, que sera un elemento del arreglo

const resultado1 = filter(arreglo, x => x % 2 === 0); // [2, 4]
const soloUnos = filter(arreglo, x => x === 1); // [1]
console.log(soloUnos)