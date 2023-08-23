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

console.log(notas.join(' - '))


let soma = 0;
for(let cont = 0; cont < notas.length; cont ++){
    soma = soma + notas[cont];
}

media = soma / notas.length;

console.log(`A média é: ${media}`)

