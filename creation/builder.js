class Burger {
  constructor() {
    this.size = "Large";
    this.cheese = false;
    this.lettuce = false;
    this.tomato = false;
  }
}

class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }

  addSize(size) {
    this.burger.size = size;
    return this; // Return `this` to allow method chaining
  }

  addCheese() {
    this.burger.cheese = true;
    return this; // Return `this` to allow method chaining
  }

  addLettuce() {
    this.burger.lettuce = true;
    return this;
  }

  addTomato() {
    this.burger.tomato = true;
    return this;
  }

  build() {
    return this.burger; // Return the fully built burger
  }
}
const myBurger = new BurgerBuilder("Large").addCheese().addLettuce().build();

console.log(myBurger);
// Output: Burger { size: 'Large', cheese: true, lettuce: true, tomato: false }
