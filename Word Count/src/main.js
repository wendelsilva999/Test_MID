const fs = require("fs");
// We use the native "fs" module of Node.js to manipulate files and directories.
// chamamos o modulo fs nativo do nodejs para para manipular arquivos e diretórios 

// Function to count the number of words in a text
// Função para contar o número de palavras em um texto
function countWords(text) {
  // Use a regular expression to split the text into words
  // Usa uma expressão regular para dividir o texto em palavras
  const words = text.split(/\s+/);

  // Filter out empty strings to remove any extra spaces
  // Filtra strings vazias para remover espaços extras
  const filteredWords = words.filter((word) => word !== "");

  // Return the number of words
  // Retorna o número de palavras
  return filteredWords.length;
}

// Read the text file
// Lê o arquivo de texto
fs.readFile("texto.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file: ", err);
  } else {
    // Count the number of words in the text and display the result
    // Conta o número de palavras no texto e exibe o resultado
    const wordCount = countWords(data);
    console.log(`Number of words in the text: ${wordCount}`);
  }
});
