// EJERCICIO 1
function mayorNum(a, b) {
    let mayor;
    if (a > b) {
        mayor = a
    } else {
        mayor = b
    }
    return mayor
}

let num1 = 10
let num2 = 100
console.log("El número mayor de " + num1 + " y " + num2 + " es " + mayorNum(num1, num2))
num1 = 100
num2 = 1
console.log("El número mayor de " + num1 + " y " + num2 + " es " + mayorNum(num1, num2))