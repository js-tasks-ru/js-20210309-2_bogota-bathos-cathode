/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return (obj) => {
    const paths = path.split('.');
    let index = 0;
    while (obj != null && index < paths.length) {
      obj = obj[paths[index++]];
    }
    return obj;
  };
}
