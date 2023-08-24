import prompt from 'prompt-sync';
import Triangulo from './function.js'
const ler = prompt();

console.log('Digite a base do Triangulo: ');
let base = Number(ler());

console.log('Digite a altura do Triangulo: ');
let altura = Number(ler());

let valor = Triangulo(base, altura);

console.log(`A área do Triangulo equivale a ${valor}`)