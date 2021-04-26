
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//Github user: @yamilesquivel , website : yamilesquivel.github.io


export class BankAccount {
  constructor(balance = 0,isOpen = false ) {
   this.balance = balance;
   this.isOpen =isOpen;
  }

  open(amount) {
    
    if (amount === undefined) amount = 0;
    if(this.isOpen) throw new ValueError;
    this.isOpen = true;
    this.balance += amount;
  }

  close() {
    if(!this.isOpen) throw new ValueError;
    this.balance = 0;
    this.isOpen = false;
  }

 deposit(amount) {
    if(amount < 0 || !this.isOpen) throw new ValueError;
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance - amount < 0 || amount < 0 || !this.isOpen) throw new ValueError;
    this.balance -= amount;
  }

  getbalance() {
    if (this.isOpen) {
     return  this.balance;
    } else {
      throw new ValueError;
    }
    }
  
  
}


export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

