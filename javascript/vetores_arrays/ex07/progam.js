import prompt from 'prompt-sync';
let ler = prompt()

console.log('Digite quantos numeros vâo aparecer: ');
let qtdnum = Number(ler());

let numero = [];

for (let cont = 0; cont < qtdnum; cont++) {
    numero[cont] = Number(ler())
}

console.log('Você digitou: ')

for (let item of numero) {
    console.log(item)
}

console.log('Os numeros pares são: ')

for (let item of numero) {
    let par = item % 2;

    if (par == 0) {
        console.log(item)
    }
}