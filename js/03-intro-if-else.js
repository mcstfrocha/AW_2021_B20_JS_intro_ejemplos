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
let m = mayorNum(num1, num2)
console.log("El número mayor de " + num1 + " y " + num2 + " es " + m)
num1 = 100
num2 = 1
console.log("El número mayor de " + num1 + " y " + num2 + " es " + mayorNum(num1, num2))

// EJERCICIO 2
function holaMundo(idioma) {
    let saludo
    if (idioma == "es") {
        saludo = "Hola mundo"
    } else if (idioma == "de") {
        saludo = "Hallo Welt"
    } else if (idioma == "it") {
        saludo = "Ciao mondo"
    } else if (idioma == "fr") {
        saludo = "Salut monde"
    } else {
        saludo = "Hello World"
    }
    return saludo
}

console.log("es: " + holaMundo("es"))
console.log("de: " + holaMundo("de"))
console.log("it: " + holaMundo("it"))
console.log("fr: " + holaMundo("fr"))
console.log("xx: " + holaMundo("xx"))

// EJERCICIO 3
function asignaNota(num) {
    let calif
    if ((num >= 90) && (num <= 100)) {
        calif = "SOB"
    } else if ((num >= 70) && (num < 90)) {
        calif = "NOT"
    } else if ((num >= 60) && (num < 70)) {
        calif = "BIEN"
    } else if ((num >= 50) && (num < 60)) {
        calif = "SUF"
    } else {
        calif = "INSUF"
    }
    return calif
}

console.log("33: " + asignaNota(33))
console.log("55: " + asignaNota(55))
console.log("66: " + asignaNota(66))
console.log("77: " + asignaNota(77))
console.log("88: " + asignaNota(88))
console.log("100: " + asignaNota(100))

// EJERCICIO 4
function pluraliza(num, sust) {
    let res
    if ((sust == "oveja")&&(num>1)) {
        res = "rebaño"
    } else {
        res = num + " " + sust
        if (num > 1) {
            res = res + "s"
        }
    }
    return res
}

console.log(pluraliza(1,"gato"))
console.log(pluraliza(2,"gato"))
console.log(pluraliza(1,"oveja"))
console.log(pluraliza(2,"oveja"))