import prompt from 'prompt-sync';
let ler = prompt()

console.log('Digite a quantidade de numeros que vão aparecer: ');
let qtdnum = Number(ler());

let numero = [];


for  (let cont = 0; cont < qtdnum; cont ++) {
    numero[cont] = Number(ler())

}

console.log('Você digitou: ')

for (let item of numero.reverse()) {
    console.log(item)
}


/*var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);
var length = array.length;
var left = null;
var right = null;
for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
  var temporary = array[left];
  array[left] = array[right];
  array[right] = temporary;
}
console.log(array);*/