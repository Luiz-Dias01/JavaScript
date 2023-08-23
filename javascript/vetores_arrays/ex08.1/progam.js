import prompt from 'prompt-sync';
let ler = prompt()

console.log('Escolha quantos nomes vâo aparecer: ');
let qtdnome = Number(ler());

let nome = [];

let filtro = ''

for (let cont = 0; cont < qtdnome; cont++) {
    nome[cont] = String(ler())
}

console.log('Os nomes após os filtros são: ');

for (let cont = 0; cont < qtdnome; cont ++) {
    nome[cont]

    for (let pos = 0;pos < 1; pos ++) {
        filtro = nome[cont].charAt(pos);
    }

    if (filtro == 'L' || filtro == 'l') {
        console.log(nome[cont]);
    }
}
