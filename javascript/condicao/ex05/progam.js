import prompt from 'prompt-sync';
import Febre from './function.js'
const ler = prompt();

console.log('Digite sua temperatura: ');
let temp = Number(ler());

Febre(temp)
