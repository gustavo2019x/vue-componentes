// src/funcoes.js
export function soma(a, b) {
    return a + b;
  }
  
  export function subtracao(a, b) {
    return a - b;
  }
  
  export function multiplicacao(a, b) {
    return a * b;
  }
  
  // Exportação de uma função por padrão
  export default function divisao(a, b) {
    if (b === 0) {
      throw new Error('Divisão por zero não é permitida.');
    }
    return a / b;
  }
  