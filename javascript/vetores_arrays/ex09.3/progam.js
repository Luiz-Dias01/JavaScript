import prompt from 'prompt-sync';
let ler = prompt()

console.log('Digite quantas notas vão aparecer: ');
let qtdnotas = Number(ler());

let notas = []

for (let cont = 0; cont < qtdnotas; cont++) {
    notas[cont] = Number(ler())
}

console.log('Notas digitadas');

console.log(notas.join(' - '));

let menor = Math.min.apply(null, notas);

console.log(`A menor nota foi ${menor}`);