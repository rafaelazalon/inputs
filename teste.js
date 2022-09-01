import entrada from 'readline-sync';

console.log("Calculadora de soma entre x e y: \n")

let x = entrada.question("Informe o valor de x: ")
let y = entrada.question("Informe o valor de y: ")

let soma = Number(x) + Number(y);

console.log(x+" + "+y+" = "+soma);