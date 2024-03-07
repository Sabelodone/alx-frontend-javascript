// File: Pricing.js
export default class Pricing {
    constructor(amount, currency) {
        this._amount = 0;
        this._currency = null;

        this.amount = amount;
        this.currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        this._amount = newAmount;
    }

    get currency() {
        return this._currency;
    }

    set currency(newCurrency) {
        this._currency = newCurrency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}
