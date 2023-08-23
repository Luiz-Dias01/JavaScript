import prompt from 'prompt-sync';
const ler = prompt();


console.log('digite quantos numero vão aparecer e veja seu dobro: ');
let qtdnum = Number(ler());

let dobro = [];

for (let cont = 0; cont < qtdnum; cont++) {
    console.log(`Digite o ${cont + 1}° numero: `)
    dobro[cont] = Number(ler());
}

console.log('\nOs numero digitados foram: ');

for (let item of dobro) {
    console.log(item);

    
}

console.log('\nSeu valor dobrado é: ')

for (let item of dobro) {
    console.log(item * 2);
}