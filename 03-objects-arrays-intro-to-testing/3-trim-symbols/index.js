/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let counter = 0;

  return string
    .split('')
    .reduce((newString, letter) => {
      if (newString.slice(-1) === letter) {
        counter++;
        if (!size || counter < size) {
          return newString + letter;
        }
        return newString;
      }
      counter = 0;
      return newString + (size !== 0 ? letter : '');
    }, '');
}
