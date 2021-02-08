// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function generaAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

while (true) {
    let intento
    let min = 0
    let max = 101
    let pista = ""
    let num_intentos = 0
    console.log("Adivine el número")
    while (pista != "=") {
        intento = generaAleatorio(min, max)
        num_intentos++
        pista = prompt("Intento " + num_intentos + ": " + intento)
        if (pista == ">") {
            min = intento + 1
        } else if (pista == "<") {
            max = intento
        } else if (pista == "=") {
            console.log("Adiviné en " + num_intentos + " intentos")
        } else { 
            console.log("Valor no válido")
        }
        console.log(min, max)
    }
}