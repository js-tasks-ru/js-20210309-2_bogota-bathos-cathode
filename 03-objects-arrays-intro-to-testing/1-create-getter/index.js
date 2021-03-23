/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathParts = path.split('.');

  return (obj) => {
    let index = 0;
    while (obj != null && index < pathParts.length) {
      obj = obj[pathParts[index++]];
    }
    return obj;
  };
}
