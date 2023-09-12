// validation.js

// Validate if a name is not empty and is a string
function isValidName(name) {
    return typeof name === 'string' && name.trim() !== '';
  }
  
  module.exports = {
    isValidName,
  };
  