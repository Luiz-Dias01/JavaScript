import prompt from 'prompt-sync';
let ler = prompt()

console.log('Digite um numero: ');
let num = Number(ler())

let numero = [];

for (let cont = 0; cont < 11; cont ++) {
    numero[cont] = num * cont
}

for (let item of numero) {
    console.log(item)
}