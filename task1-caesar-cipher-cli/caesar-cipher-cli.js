const program = require('commander');
const fs = require('fs');
const { pipeline } = require('stream');
const validateOptions = require('./src/validation');
const Transformer = require('./src/transformer');

program
  .storeOptionsAsProperties(false)
  .option('-a --action <action>', 'encode or decode')
  .option('-s --shift <shift>', 'shift')
  .option('-i --input <file>', 'input file')
  .option('-o --output <file>', 'output file')
  .parse(process.argv);

const { action, shift, input, output } = program.opts();

validateOptions(action, shift, input, output, () => process.exit(-1));

pipeline(
  input ? fs.createReadStream(input) : process.stdin,
  new Transformer(action, shift),
  output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout,
  (err) => {
    if (err) {
      console.error('Pipeline error: ', err);
      process.exit(-1);
    }
  }
);
