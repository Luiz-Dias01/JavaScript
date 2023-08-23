import prompt from 'prompt-sync';
const ler = prompt();

console.log('Digite cinco nomes e os retornarei: \n');

let nome = []

for (let cont = 0; cont < 5; cont ++) {
    console.log(`digite o ${cont + 1}° nome`)
    nome[cont] = String(ler());
}

console.log(`Os nomes digitados foram: \n`);

for (let item of nome) {
    console.log(item)
}

