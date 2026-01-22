export const usePasswordValidation = (password) => {
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[^A-Za-z0-9]/.test(password);
  const getPasswordScore = (password) => {
    let score = 0;
    const len = password.length;
    if (len > 3) {
      score = Math.min(6, Math.floor(len / 3));
      score += +hasLowerCase + +hasUpperCase + +hasNumbers + +hasSymbols;
    }
    return score;
  };
  const getPasswordStrength = (score) => {
    if (score > 8) {
      return "Strong";
    } else if (score > 5) {
      return "Medium";
    } else {
      return "Weak";
    }
  };
  const passwordScore = getPasswordScore(password);
  const passwordStrength = getPasswordStrength(passwordScore);
  const passwordIndication = {
    lc: hasLowerCase,
    uc: hasUpperCase,
    num: hasNumbers,
    sym: hasSymbols,
  };
  return [passwordScore, passwordStrength, passwordIndication];
};
