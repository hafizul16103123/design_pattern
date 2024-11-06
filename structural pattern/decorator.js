/**
 * The Decorator pattern adds new functionality to an object dynamically without changing its structure.


 */
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 5;
  }
}

class PeanutDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 10;
  }
}

const rawCoffee = new Coffee();
console.log(rawCoffee.cost()); // 5

const milkCoffee = new MilkDecorator(rawCoffee);
console.log(milkCoffee.cost()); // 5+5

const peanutCoffee = new PeanutDecorator(milkCoffee);
console.log(peanutCoffee.cost()); // 10+10
