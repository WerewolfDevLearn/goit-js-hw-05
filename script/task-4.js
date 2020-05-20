class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value = `${this._value}${str}`;
  }

  prepend(str) {
    this._value = `${str}${this._value}`;
  }

  pad(str) {
    this._value = `${str}${this._value}${str}`;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder._value); // '.^'

builder.prepend('^');
console.log(builder._value); // '^.^'

builder.pad('=');
console.log(builder._value); // '=^.^='
