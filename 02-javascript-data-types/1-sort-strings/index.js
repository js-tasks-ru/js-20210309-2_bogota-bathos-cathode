/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const filterDirection = {
    asc: 1,
    desc: -1,
  };

  const collator = Intl.Collator('ru', {
    sensitivity: 'case',
    caseFirst: 'upper'
  });

  return [...arr].sort((a, b) => {
    return filterDirection[param] * collator.compare(a, b);
  });
}
