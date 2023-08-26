import prompt from 'prompt-sync';
import Quadrado from './function.js';
const ler = prompt();

console.log('Digite o quanto vale o lado do quadrado: ');
let lado = Number(ler());

let valor = Quadrado(lado);

console.log(`A área do quadrado é ${valor}`)