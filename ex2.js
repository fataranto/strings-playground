// podemos usar for para iterar por todo el string.

let saludo = "Buen día!";


for (let i = 0; i < saludo.length; i++) {
    console.log(saludo[i], i);
}

// ¿Cuántas veces se ha ejecutado la línea 7 al hacer node ex2.js? ¿Por qué?
// 9 veces, porque es la cantidad de caracteres de "Buen día!", incluido el espacio y el signo de exclamación al final