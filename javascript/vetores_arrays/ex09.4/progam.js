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

console.log('A média é: ');

let soma = 0;
for(let cont = 0; cont < notas.length; cont ++){
    soma = soma + notas[cont];
}

media = soma / notas.length;



let maior = Math.max.apply(null, notas);
let menor = Math.min.apply(null, notas);

console.log(`A média é: ${media}`);
console.log('A maior nota é: ' + maior);
console.log(`A menor nota é: ${menor}`)
