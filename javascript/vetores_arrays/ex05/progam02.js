import prompt from 'prompt-sync';
const ler = prompt();

console.log('Digite um numero e saiba sua tabuada: \n');
let num = Number(ler());

let numero = []

for (let cont = 0; cont < 11; cont ++) {
    numero[cont] = num * cont
}

console.log(`\nA tabuada de ${num} é: \n`)

for (let item of numero) {
    console.log(item)
}