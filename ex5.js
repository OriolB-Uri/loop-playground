/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca.
 * Comrpruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 * Porque la variable i del for y la variable llamada veces tienen el mismo valor y como requisito para que se ejecute el for tenemos que i tiene que ser menor que "veces"
 * ---------------------------------------------------
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces.
 * ATENCIÓN: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 */

let veces = 15;

// PROHIBIDO modificar el código a partir de aquí

for (let i = 5; i < veces; i++) {
  console.log("No me voy a ejecutar...");
}
