// Crie um hashmap (ou um objeto simples em JavaScript) que contenha as funções elementares de adição, subtração, multiplicação e divisão.
// Leve em consideração que a divisão não deve permitir dividendo 0
// A função sum permite um array como parâmetro de entrada e adiciona todos os seus elementos.
// A função de subtração permite um array como parâmetro de entrada e subtrai todos os seus elementos.
// Função de multiplicação - Idem
// A função de divisão aceita dois parâmetros: a e b.

const functions = {
  sum(array) {
    const result = array.reduce((a, b) => a + b, 0);
    return result;
  },

  subtraction(array) {
    const result = array.reduce((a, b) => a - b, 0);
    return result;
  },
  division(a, b) {
    if (a == 0 || b == 0) {
      return "Parameters can't be equal to 0 ";
    }

    const result = a / b;

    return result;
  },
};
