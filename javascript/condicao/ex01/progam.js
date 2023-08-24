import prompt from 'prompt-sync';
import Dobro from './function.js'
const ler = prompt()

console.log('Digite um numero e te direi seu dobro: ');
let num = Number(ler());

let valor = Dobro(num)

console.log(`O dobro de ${num} é ${valor}`)