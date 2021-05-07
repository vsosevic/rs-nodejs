const ENG_ALPHABET_LENGTH = 26;
const apos = 'a'.charCodeAt();
const zpos = 'z'.charCodeAt();
const Apos = 'A'.charCodeAt();
const Zpos = 'Z'.charCodeAt();

function shift(message, shift, action) {
const result_arr = message.split('').map(char => {
    // Shift to the right.
    if (action === 'encode' && shift > 0 || action === 'decode' && shift < 0) {
        if (char >='a' && char <= 'z')
            return String.fromCharCode(apos + (char.charCodeAt() - apos + Math.abs(shift)) % ENG_ALPHABET_LENGTH);
        else if (char >='A' && char <= 'Z')
            return String.fromCharCode(Apos + (char.charCodeAt() - Apos + Math.abs(shift)) % ENG_ALPHABET_LENGTH);
        else
            return char;
    // Otherwise shift to the left.
    } else {
        if (char >='a' && char <= 'z')
            return String.fromCharCode(zpos - (zpos - char.charCodeAt() + Math.abs(shift)) % ENG_ALPHABET_LENGTH);
        else if (char >='A' && char <= 'Z')
            return String.fromCharCode(Zpos - (Zpos - char.charCodeAt() + Math.abs(shift)) % ENG_ALPHABET_LENGTH);
        else
            return char;
    }

  });
  return result_arr.join('');
}

module.exports = {
  shift
};

