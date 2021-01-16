// EJERCICIO 1
function adivinaFuturo(empresa, ciudad, cargo, sueldo) {
    console.log("Trabajarás en " + empresa + " en " + ciudad + " como " + cargo + " y ganarás " + sueldo + " euros")
}
adivinaFuturo("Montecastelo", "Vigo", "alumno", 0)
adivinaFuturo("PSA", "Vigo", "soldador", 1000)
adivinaFuturo("Palo Alto", "Google", "programador", 1500)

// EJERCICIO 2
function edadPerro(edadHumano, equivalencia) {
    edadHumano = edadHumano * equivalencia;
    console.log("La edad del perro es " + edadHumano + " en años perro.")
}
edadPerro(1, 7)
edadPerro(2, 7)
edadPerro(5, 10)

// EJERCICIO 3
function calculaSumimistros(edadActual, consumoDiario) {
    const diasAnho = 365
    const edadMax = 100
    let consumoAnual = consumoDiario * diasAnho
    let consumoMax = Math.round((edadMax - edadActual) * consumoAnual)
    console.log("Necesitarás " + consumoMax + " para poder subsistir hasta la edad de " + edadMax)
}
calculaSumimistros(20, 3)
calculaSumimistros(30, 5)
calculaSumimistros(21, 3.17)

// EJERCICIO 4
function calculaPerimetro(r) {
    const PI = 3.14
    let perimetro = 2 * PI * r
    console.log("El perímetro es " + perimetro)
}

function calculaSuperficie(r) {
    const PI = 3.14
    let area = PI * r * r;
    console.log("El área es " + area)
}

calculaPerimetro(1)
calculaPerimetro(21)
calculaPerimetro(415)
calculaSuperficie(1)
calculaSuperficie(21)
calculaSuperficie(415)

// EJERCICIO 5
function celsiusEnFahrenheit(tempC) {
    tempF = tempC * 9 / 5 + 32
    console.log(tempC + "ºC equivalen a " + tempF + "ºF")
}

function fahrenheitEnCelsius(tempF) {
    tempC = (tempF - 32) * 5 / 9
    console.log(tempF + "ºF equivalen a " + tempC + "ºC")
}

celsiusEnFahrenheit(21)
celsiusEnFahrenheit(40)
celsiusEnFahrenheit(27.5)
fahrenheitEnCelsius(74)
fahrenheitEnCelsius(80.2)
fahrenheitEnCelsius(30)

