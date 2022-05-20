// includes. Investiga el método 'includes'. que va a aparecer en cada línea? true o false?

console.log("Manzana".includes("az")); // false
console.log("Manzana".includes("Ma")); // true
console.log(("Manzana" + "s").includes("as")); // true

console.log("En un lugar de la Mancha...".includes("lugar", 7)); // false
console.log("En un lugar de la Mancha...".includes("lugar", 6)); // true

// BONUS: Modifica el '7' de la sentencia anterior para que se muestre TRUE en vez de FALSE.