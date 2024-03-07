// File: Currency.js
export default class Currency {
    constructor(code, name) {
        this._code = "";
        this._name = "";

        this.code = code;
        this.name = name;
    }

    get code() {
        return this._code;
    }

    set code(newCode) {
        this._code = newCode;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
