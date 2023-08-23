import prompt from 'prompt-sync';
let ler = prompt()

console.log('Digite a quantidade de notas que vão aparecer: ');
let qtdnotas = Number(ler());

let notas = []
let media = ''


for (let cont = 0; cont < qtdnotas; cont++) {
    notas[cont] = Number(ler());
}

console.log('Notas digitadas: ');
console.log(notas.join(' - '));

console.log('A maior nota é: ');
let maior = Math.max.apply(null, notas);

console.log(maior);