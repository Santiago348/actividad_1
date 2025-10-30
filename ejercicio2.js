let nombre = "Santiago";
let nota1 = 5.0;
let nota2 = 3.4;
let nota3 = 3.3;

let promedio = (nota1 + nota2 + nota3) / 3;
let estado = promedio >= 3.5 ? "Aprobado" : "Reprobado";

console.log("Estudiante: " + nombre);
console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
console.log("Promedio: " + promedio.toFixed(2));
console.log("Estado: " + estado); 

