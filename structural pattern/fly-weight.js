/**
 * The Flyweight pattern reduces memory usage by sharing as much data as possible with similar objects.


 */
class FlyWeight {
  constructor(shape) {
    this.shape = shape;
  }

  draw(color) {
    console.log(`Drawing ${color} ${this.shape}`);
  }
}

class ShapeFactory {
  constructor() {
    this.shapes = {};
  }

  getShape(type) {
    if (!this.shapes[type]) {
      this.shapes[type] = new FlyWeight(type);
      return this.shapes[type];
    }
    return this.shapes[type];
  }
}

const shapeFactory = new ShapeFactory();

const circle = shapeFactory.getShape("circle");
circle.draw("red");

const circle2 = shapeFactory.getShape("circle");
circle2.draw("green");
