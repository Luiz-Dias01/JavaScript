import prompt from 'prompt-sync';
let ler = prompt()

console.log('Digite quantos numeros você quer: ');
let qtdnum = Number(ler());

let numero  = [];

for (let cont = 0; cont < qtdnum; cont ++) {
    numero[cont] = Number(ler())
}

console.log('O dobro desses numeros são')


for (let item of numero) {
    console.log(`O dobro de ${item} é ${item * 2}`)
} 