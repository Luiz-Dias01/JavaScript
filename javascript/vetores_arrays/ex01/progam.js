import prompt from 'prompt-sync';
const ler = prompt();

console.log('Digite cinco numero e os retornarei: \n');

let num = []

for (let cont = 0; cont < 5; cont ++) {
    console.log(`Digite o ${cont + 1}° numero`)
    num[cont] = Number(ler());
}

console.log('Os numeros digitados foram: \n')

for (let item of num) {
    console.log(item)
}