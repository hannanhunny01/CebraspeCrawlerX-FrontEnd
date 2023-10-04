export function isValidNumber(numberStr) {
  // Check if the number has at least 11 digits (3 + 8)
  if (numberStr.length < 11) {
    return false;
  }

  // Check if the third digit is 9
  if (numberStr[2] !== '9') {
    return false;
  }

  // Check if the remaining characters are digits
  for (let i = 3; i < numberStr.length; i++) {
    if (!/[0-9]/.test(numberStr[i])) {
      return false;
    }
  }

  // If all checks pass, the number is valid
  return true;
}

export   function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  export function isPasswordValid(password) {
    if (password.length < 8) {
      return false;
    }
  
    const legalCharactersPattern = /^[a-zA-Z0-9!@#$%^&*()-_=+{}[]|;:'",.<>?]*$/;
  
    return legalCharactersPattern.test(password);
  }

/*  export function isValidNumber(phoneNumber) {
    if (/^\d{11}$/.test(phoneNumber)) {
      if (phoneNumber.charAt(2) === '9') {
        return true; // Valid phone number
      }
    }
    
    return false; // Invalid phone number
  }  */

  export function isNumeric(inputString) {
    // Use a regular expression to check if the string contains only numbers
    return /^\d+$/.test(inputString);
  }