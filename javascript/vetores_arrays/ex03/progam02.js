import prompt from 'prompt-sync';
const ler = prompt();

console.log('Quantos numeros vão ser retornado? \n');
let qtdnum = Number(ler());

let numero = []

for (let cont = 0; cont < qtdnum; cont ++) {
    console.log(`\nDigite o ${cont + 1}° numero`)
    numero[cont] = Number(ler());
}

console.log('\nOs numeros digitados foram: \n');

for (let item of numero) {
    console.log(item);
}