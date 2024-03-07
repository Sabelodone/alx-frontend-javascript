// File: Car.js
const cloneSymbol = Symbol('clone');

export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    get brand() {
        return this._brand;
    }

    get motor() {
        return this._motor;
    }

    get color() {
        return this._color;
    }

    [cloneSymbol]() {
        const { _brand, _motor, _color } = this;
        return new Car(_brand, _motor, _color);
    }

    cloneCar() {
        return this[cloneSymbol]();
    }
}
