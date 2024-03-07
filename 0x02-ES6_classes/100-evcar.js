import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; // Use underscore attribute version
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const CarClass = super.constructor; // Get the constructor of the superclass (Car)
    const clonedCar = new CarClass(this.brand, this.motor, this.color); // Instantiate a new Car object with the same attributes
    return clonedCar;
  }
}
