// Function to check if a word or phrase is a palindrome
// Função para verificar se uma palavra ou frase é um palíndromo
function isPalindrome(str) {
  // Remove spaces and convert the input string to lowercase
  // Remove os espaços e converte a string de entrada para letras minúsculas
  const cleanedStr = str.replace(/\s/g, '').toLowerCase();


  let left = 0;
  let right = cleanedStr.length - 1;

  // Check characters from both ends towards the middle
  // Verifica os caracteres das duas extremidades em direção ao meio
  while (left < right) {
    // If characters at the pointers are different, it's not a palindrome
    // Se os caracteres nos ponteiros forem diferentes, não é um palíndromo
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }

    // Move the pointers closer to the middle
    // Move os ponteiros em direção ao meio
    left++;
    right--;
  }

  // If the loop completes without finding any mismatch, it's a palindrome
  // Se o loop for concluído sem encontrar nenhuma diferença, é um palíndromo
  return true;
}

const word1 = "racecar";
console.log(`Is "${word1}" a palindrome? ${isPalindrome(word1)}`); // Output: true

const word2 = "hello";
console.log(`Is "${word2}" a palindrome? ${isPalindrome(word2)}`); // Output: false

const phrase1 = "A man a plan a canal Panama";
console.log(`Is "${phrase1}" a palindrome? ${isPalindrome(phrase1)}`); // Output: true

const phrase2 = "Anotaram a data da maratona";
console.log(`"${phrase2}" é um  palíndromo? ${isPalindrome(phrase2)}`); // Output: true
