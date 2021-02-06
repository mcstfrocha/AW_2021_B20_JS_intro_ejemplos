let record = {
    nombre: "",
    num_intentos: -1
}

while(true) {
    let secreto = Math.ceil(Math.random()*100)
    let intento = -1
    let num_intentos = 0
    let matriz_intentos = []
    console.log("Adivine el número")
    while(intento != secreto) {
        intento = prompt("Adivine el número")
        matriz_intentos.push(intento)
        num_intentos++
        console.log("Intento " + num_intentos + ": " + intento)
        if (secreto > intento){
            console.log("Es mayor que " + intento)
        } else if (secreto < intento){
            console.log("Es menor que " + intento)
        } else {
            let cad_intentos = ""
            for (let i = 0; i < matriz_intentos.length; i++) {
                cad_intentos += matriz_intentos[i]
                if (i != (matriz_intentos.length-1)) {
                    cad_intentos += ", "
                }
            }
            cad_intentos = cad_intentos.substring(0, cad_intentos.length - 2)
            console.log("Correcto. Adivinaste en el número de intentos " + num_intentos + ": " + cad_intentos)
        }
    }
}