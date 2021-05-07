const { Transform } = require('stream');
const { shift } = require('./shifter');

class Transformer extends Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = +shift;
  }

  _transform(chunk, encoding, callback) {
    const src = chunk.toString('utf8');
    const result = shift(src, this.shift, this.action);
    this.push(result);
    callback();
  }
}

module.exports = Transformer;
