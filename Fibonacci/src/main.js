// Function to calculate the nth number in the Fibonacci sequence using recursion
// Função para calcular o enésimo número na sequência de Fibonacci usando recursão
function fibonacci(n) {
  // Base case: If n is less than or equal to 0, return an error message
  // Caso base: Se n for menor ou igual a 0, retorna uma mensagem de erro
  if (n <= 0) {
    return "Invalid input. Please provide a positive integer greater than zero.";
  } 
  // Base case: If n is 1 or 2, return n - 1 (first two numbers in the sequence are 0 and 1)
  // Caso base: Se n for 1 ou 2, retorna n - 1 (os dois primeiros números da sequência são 0 e 1)
  else if (n === 1 || n === 2) {
    return n - 1;
  } 
  // Recursive case: Calculate the nth number by adding the (n-1)th and (n-2)th numbers in the sequence
  // Caso recursivo: Calcula o enésimo número somando os números (n-1) e (n-2) na sequência
  else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}


const nthNumber = 8;
console.log(`The ${nthNumber}th number in the Fibonacci sequence is: ${fibonacci(nthNumber)}`);

