import prompt from 'prompt-sync';
const ler = prompt();


console.log('digite quantos numero vão aparecer e veja seu dobro: ');
let qtdnum = Number(ler());

let dobro = [];

for (let cont = 0; cont < qtdnum; cont++) {
    dobro[cont] = Number(ler());
}

console.log('Os numero digitados foram: ');

for (let item of dobro) {
    console.log(item);

    
}

console.log()

for (item of dobro) {
    console.log()
}