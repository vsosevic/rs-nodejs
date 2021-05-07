# Caesar Cipher CLI encoder/decoder tool

The application is used to encrypt and decrypt using the Caesar cipher.
It transform only latin letters.

## Installation

`npm i` or `npm install`

## How to use

Command string:

`node caesar-cipher-cli options`

Options:

-a, --action: an action encode/decode
-s, --shift: a shift
-i, --input: an input file (optional)
-o, --output: an output file (optional)

## Examples:

`$ node caesar-cipher-cli -a encode --shift 1 --input "./input.txt" --output output.txt`

`$ node caesar-cipher-cli -action encode -s 22 -i input.txt -o "./output.txt"`

`$ node caesar-cipher-cli -a encode --shift -33 -o output.txt`

`$ node caecaesar-cipher-clisar -a decode --shift 44 -i input.txt`

`$ node cacaesar-cipher-cliesar -a decode -s 50`

