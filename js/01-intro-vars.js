/* EJERCICIO 1 */
let empresa = "Google"
let ciudad = "Palo Alto"
let cargo = "Programador"
let sueldo = 1500
console.log("Trabajarás en " + empresa + " en " + ciudad + " como " + cargo + " y ganarás " + sueldo + " euros")

/* EJERCICIO 2 */
let nac = 1981
let fut = 2050
let edad1 = fut - nac
let edad2 = edad1 - 1
console.log("Tendré o bien " + edad1 + " o bien " + edad2 + " años en " + fut)

/* EJERCICIO 3 */
const diasAnho = 365
let edadActual = 40
let edadMax = 100
let consumoDiario = 30
let consumoAnual = consumoDiario * diasAnho
let consumoMax = (edadMax - edadActual) * consumoAnual
console.log("Necesitarás " + consumoMax + " para poder subsistir hasta la edad de " + edadMax)

/* EJERCICIO 4 */
const PI = 3.14
let r = 5
let perimetro = 2 * PI * r
console.log("El perímetro es " + perimetro)
let area = PI * r * r;
console.log("El área es " + area)

/* EJERCICIO 5 */
tempC = 21.5
tempF = tempC * 9 / 5 + 32
console.log(tempC + "ºC equivalen a " + tempF + "ºF")
tempF = 74.7
tempC = (tempF - 32) * 5 / 9
console.log(tempF + "ºF equivalen a " + tempC + "ºC")