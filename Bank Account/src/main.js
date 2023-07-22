// Bank Account class with methods for deposit, withdraw, and check balance
// Classe Conta Bancária com métodos para depositar, sacar e verificar o saldo
class BankAccount {
  constructor() {
    this.balance = 0; // Initialize balance as 0 / Inicializa o saldo como 0
  }

  // Deposit money into the account
  // Deposita dinheiro na conta
  deposit(amount) {
    this.balance += amount;
  }

  // Withdraw money from the account
  // Retira dinheiro da conta
  withdraw(amount) {
    if (amount > this.balance) {
    // If the withdrawal amount is greater than the balance, display an error message / Se o valor de retirada for maior que o saldo, exibe uma mensagem de erro
      console.log("Insufficient balance."); 
    } else {
      this.balance -= amount;
    }
  }

  // Check the account balance
  // Verifica o saldo da conta
  checkBalance() {
    return this.balance;
  }
}

// Account with additional interest feature
// Conta Poupança com recurso adicional de juros
class SavingsAccount extends BankAccount {
  constructor() {
    super(); // Call the constructor of the parent class / Chama o construtor da classe pai
    this.interestRate = 0.05; // Set the interest rate for the savings account / Define a taxa de juros para a conta poupança
  }

  // Apply interest to the savings account balance
  // Aplica juros ao saldo da conta poupança
  applyInterest() {
    const interestAmount = this.balance * this.interestRate;
    this.balance += interestAmount;
  }
}

// Checking Account with overdraft limit feature
// Conta Corrente com recurso de limite de cheque especial
class CheckingAccount extends BankAccount {
  constructor() {
    super(); // Call the constructor of the parent class / Chama o construtor da classe pai
    this.overdraftLimit = 500; // Set the overdraft limit for the checking account / Define o limite de cheque especial para a conta corrente
  }

  // Withdraw money from the checking account, allowing overdraft up to the limit
  // Retira dinheiro da conta corrente, permitindo cheque especial até o limite
  withdraw(amount) {
    const totalBalance = this.balance + this.overdraftLimit;
    if (amount > totalBalance) {
    // If the withdrawal amount exceeds the total balance and overdraft limit, display an error message / Se o valor de retirada exceder o saldo total e o limite de cheque especial, exibe uma mensagem de erro
      console.log("Insufficient balance and overdraft limit exceeded."); 
    } else {
      this.balance -= amount;
    }
  }
}


const savingsAccount = new SavingsAccount();
savingsAccount.deposit(1000);
console.log(`Savings Account Balance: ${savingsAccount.checkBalance()}`); // Output: Savings Account Balance: 1000
savingsAccount.applyInterest();
console.log(`Savings Account Balance after applying interest: ${savingsAccount.checkBalance()}`); // Output: Savings Account Balance after applying interest: 1050

const checkingAccount = new CheckingAccount();
checkingAccount.deposit(800);
console.log(`Checking Account Balance: ${checkingAccount.checkBalance()}`); // Output: Checking Account Balance: 800
checkingAccount.withdraw(900);
console.log(`Checking Account Balance after withdrawal: ${checkingAccount.checkBalance()}`); // Output: Checking Account Balance after withdrawal: -100 (Overdraft limit used)
