class CarFactory {
  createEngine() {
    throw new Error("createEngine must need to override");
  }
  createTire() {
    throw new Error("createTire must need to override");
  }
}

class SportsCarFactory extends CarFactory {
  createEngine() {
    return new SportEngine();
  }
  createTire() {
    return new SportTire();
  }
}

class NormalCarFactory extends CarFactory {
  createEngine() {
    return new NormalEngine();
  }
  createTire() {
    return new NormalTire();
  }
}

class SportEngine {
  constructor() {
    this.type = "sport engine";
  }
}
class SportTire {
  constructor() {
    this.type = "sport tire";
  }
}
class NormalEngine {
  constructor() {
    this.type = "Normal Engine";
  }
}
class NormalTire {
  constructor() {
    this.type = "Normal tire";
  }
}
function assembleCar(factory) {
  const engine = factory.createEngine();
  const tire = factory.createTire();
  console.log(`My car's engine ${engine.type} and tire is ${tire.type}`);
}
// Sports Car
const sportsCar = new SportsCarFactory();
assembleCar(sportsCar);

//Normal Car
const normalCar = new NormalCarFactory();
assembleCar(normalCar);
