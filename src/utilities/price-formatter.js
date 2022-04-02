export const stringPriceToNumber = (string) => {
  return parseFloat(string.substr(1));
};

export const floatFix = (number) => {
  return parseFloat(number.toFixed(2));
};

export const floatPriceToString = (number) => {
  return `$${number.toFixed(2)}`;
};
