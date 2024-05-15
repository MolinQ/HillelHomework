
class BankAccount {
    constructor(value) {
        this.value = value;
    }

    getBalance() {
        return this.value
    }

    deposit(depositValue) {
        this.value += depositValue;
    }

    withdraw(withdrawValue) {
        this.value -= withdrawValue;
    }
    
    }
    
    const account1 = new BankAccount(1000);
    
    console.log(account1.getBalance()); // 1000
    
    account1.deposit(500);
    
    console.log(account1.getBalance()); // 1500
    
    account1.withdraw(200);
    
    console.log(account1.getBalance()); // 1300