export  function isValidNumber(numnumberStrber) {
  
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