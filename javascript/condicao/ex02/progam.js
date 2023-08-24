import prompt from 'prompt-sync';
import Triplo from './function.js'
const ler = prompt();

console.log('Digite um numero e te direi seu triplo: ');
let num = Number(ler());

let valor = Triplo(num);

console.log(`O tiplo de ${num} é igual a ${valor}`)