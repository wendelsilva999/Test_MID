// Stack data structure implementation in JavaScript
// Implementação da estrutura de dados de pilha em JavaScript
class Stack {
  constructor() {
    this.items = []; // Array to store the stack elements / Array para armazenar os elementos da pilha
  }

  // Push (add) an element to the top of the stack
  // Adiciona (empilha) um elemento ao topo da pilha
  push(element) {
    this.items.push(element);
  }

  // Pop (remove) an element from the top of the stack and return it
  // Remove (desempilha) um elemento do topo da pilha e o retorna
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty. Cannot pop."; // If the stack is empty, return an error message / Se a pilha estiver vazia, retorna uma mensagem de erro
    }
    return this.items.pop();
  }

  // Check if the stack is empty
  // Verifica se a pilha está vazia
  isEmpty() {
    return this.items.length === 0;
  }
}


const stack = new Stack();

console.log(stack.isEmpty()); // Output: true 

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // Output: 30 (Last element added, so it's the first to be removed)

console.log(stack.isEmpty()); // Output: false (Stack is not empty after adding elements)

console.log(stack.pop()); // Output: 20 (Next element added, so it's the second to be removed)

console.log(stack.pop()); // Output: 10 (First element added, so it's the last to be removed)

console.log(stack.pop()); // Output: "Stack is empty. Cannot pop." (Trying to remove from an empty stack)
