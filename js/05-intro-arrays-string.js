// Ejercicio 1
let m = ["informática", "comer", "caminar"]

for (let i = 0; i < m.length; i++) {
    console.log("Mi opción #" + (i + 1) + " es " + m[i])
}

let cardinales = ["primera", "segunda", "tercera"]

for (let i = 0; i < m.length; i++) {
    console.log("Mi " + cardinales[i] + " opción es " + m[i])
}

// Ejercicio 2
let dato = ""
let datos = []
while (dato != "fin") {
    dato = prompt("Escriba un dato")
    if (dato != "fin")
        datos.push(dato)
}
let salida = ""
for (let i = 0; i < datos.length; i++) {
    if (i != (datos.length - 1))
        salida += datos[i] + "_"
    else salida += datos[i]
}
console.log(salida)

// Ejercicio 3
function confusion(cad1, cad2) {
    let cad1a = cad1.substring(0,2);
    let cad1b = cad1.substring(2,cad1.length);
    let cad2a = cad2.substring(0,2);
    let cad2b = cad2.substring(2,cad2.length);

    return cad2a + cad1b + ' ' + cad1a + cad2b
}
confusion("hola", "gato")

// Ejercicio 4
function asteriscos(cadena) {
    let primer = cadena[0]
    let resultado = ""
    for (let i = 0; i < cadena.length; i++) {
        if ((cadena[i] == primer)&&(i!=0)) {
            resultado += "*"
        } else resultado += cadena[i]
    }
    return resultado
}

// Ejercicio 5
function gerundios(verbo) {
    let prefijo = verbo.substring(0, verbo.length - 2)
    let terminacion = verbo.substring(verbo.length - 2, verbo.length)
    let ger
    if (terminacion == "ar") {
        ger = prefijo + "ando"
    } else if ((terminacion == "er") || (terminacion == "ir")){
        ger = prefijo + "iendo"
    } else ger = verbo
    return ger
}

