// EJERCICIO 1
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + " es par.")
    } else {
        console.log(i + " es impar.")
    }
}

// EJERCICIO 2
for (let tabla = 1; tabla <= 10; tabla++) {
    console.log('TABLA DEL ' + tabla)
    for (let i = 0; i <= 10; i++) {
        console.log(i + " * " + tabla + ' = ' + i * tabla)
    }
}

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

for (let not = 60; not <= 100; not++) {
    console.log('Para ' + not + ' obtuvo un ' + asignaNota(not));
}
