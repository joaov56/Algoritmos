// Obtenha uma array contendo apenas as letras
// Obtenha uma array contendo apenas os números
// Obtenha o maior número da array acima

const array = [1, "a", 5, "d", 200, "z"];

function algorithm(array) {
  const letters = [];
  const numbers = [];
  for (item of array) {
    if (typeof item == "string") {
      letters.push(item);
    } else if (typeof item == "number") {
      numbers.push(item);
    }
  }
  var maior = numbers.sort(function (a, b) {
    return b - a;
  })[0];

  console.log(letters);
  console.log(numbers);
  console.log(maior);

  return letters, numbers, maior;
}

algorithm(array);
