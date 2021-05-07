const fs = require('fs');

function validateFile(file, fileType) {
  if (fileType !== 'input' && fileType !== 'output') {
    return false;
  }

  if (fs.existsSync(file)) {
    try {
      fs.accessSync(file, fileType === 'input' ? fs.constants.W_OK : fs.constants.R_OK);
    } catch (err) {
      console.error(`"${file}" is not writable. Check file access rights.`);
      return false;
    }
  } else {
    console.error(`"${file}" does not exist. Try to create one.`);
    return false;
  }

  return true;
}

function validateOptions(action, shift, input, output, terminateCallback) {
  let hasError = false;

  if (input && !validateFile(input, 'input')) {
    hasError = true;
  }

  if (output && !validateFile(output, 'output')) {
    hasError = true;
  }

  if (action === undefined) {
    console.error('"action" option required');
    hasError = true;
  } else if (action !== 'encode' && action !== 'decode') {
    console.error('"action" must be "encode" or "decode"');
    hasError = true;
  }

  if (shift === undefined) {
    console.error('"shift" option required');
    hasError = true;
  } else if (!Number.isInteger(+shift)) {
    console.error('"shift" must be an integer');
    hasError = true;
  }

  if (hasError) {
    terminateCallback();
  }
}

module.exports = validateOptions;
