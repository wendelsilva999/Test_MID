// Function to calculate the factorial of a positive integer
// Função para calcular o fatorial de um número inteiro positivo
function factorial(n) {
  // Check if the number is negative.
  // Verifica se o número é negativo.
  if (n < 0) {
    return console.log("número negativo inserido.");
    // se o número for negativo ele para aqui e não realiza nenhum calculo.
  }
  // If the number is 0 or 1, the factorial is 1, so return 1 directly
  // Caso o número seja 0 ou 1, o fatorial é 1, então retorna 1 diretamente
  if (n === 0 || n === 1) {
    return 1;
  }

  // Initialize a variable to store the factorial result 
  // Inicializa uma variável para armazenar o resultado do fatorial 
  let result = 1;

  // Loop to calculate the factorial from 2 up to the value of 'n'
  // Loop para calcular o fatorial a partir de 2 até o valor de 'n'
  for (let i = 2; i <= n; i++) {
    result *= i; // Multiply the current value of 'result' by the value of 'i'
    // Multiplica o valor atual de 'result' pelo valor de 'i'
  }

  // Return the factorial result
  // Retorna o resultado do fatorial
  return result;
}

const number = 12;
console.log(`O fatorial de ${number} é ${factorial(number)}`);