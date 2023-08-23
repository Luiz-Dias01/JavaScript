import prompt from 'prompt-sync';
let ler = prompt()

console.log('Escolha quantos numeros vão aparecer');
let qtdnum = Number(ler());

let numero = []

for (let cont = 0; cont < qtdnum; cont ++) {
    numero[cont] = Number(ler())
}

console.log('Você digitou :')

for (let item of numero) {
    console.log(item)
}
