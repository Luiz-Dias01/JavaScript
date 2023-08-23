import prompt from 'prompt-sync';
let ler = prompt()

let numero = []

console.log('digite cinco nomes :')
for (let cont = 0; cont < 5; cont ++) {
    numero[cont] = String(ler())
}

console.log('Você digitou :')

for (let item of numero) {
    console.log(item)
}