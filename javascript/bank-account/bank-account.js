
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

  

/*
  close() {
    throw new Error('Remove this statement and implement this function');
  }

  deposit() {
    throw new Error('Remove this statement and implement this function');
  }

  withdraw() {
    throw new Error('Remove this statement and implement this function');
  }

  get balance() {
    throw new Error('Remove this statement and implement this function');
  }
*/

}


export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

