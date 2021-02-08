// EJERCICIO 1
let receta = {
    titulo: "pizza margarita",
    porciones: 5,
    ingredientes: ["mozzarela", "albahaca", "tomate"]
}

console.log(receta.titulo)
console.log("Raciones: " + receta.porciones)
console.log("Ingredientes:")
for (let i = 0; i < receta.ingredientes.length; i++) {
    console.log(receta.ingredientes[i])
}

// EJERCICIO 2
let libros = [
    {
        titulo: "Rebelión en la granja",
        autor: "George Orwell",
        leido: true
    },
    {
        titulo: "Tom Sawyer",
        autor: "Mark Twain",
        leido: false
    }
]

for (let i = 0; i < libros.length; i++) {
    if (libros[i].leido == true)
        console.log("Ya leíste " + libros[i].titulo + " de " + libros[i].autor)
    else console.log("Todavía tienes que leer " + libros[i].titulo + " de " + libros[i].autor)
}
// EJERCICIO 3
let pelicula = {
    titulo: "Star Wars",
    duracion: 125,
    estrellas: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Alec Guinness"]
}

let mensaje = pelicula.titulo + " dura " + pelicula.duracion + ". Protagonistas: "
for (let i = 0; i < pelicula.estrellas.length; i++) {
    mensaje += pelicula.estrellas[i]
    if (i != (pelicula.estrellas.length - 1))
        mensaje += ", "
}
console.log(mensaje)