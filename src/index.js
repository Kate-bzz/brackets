module.exports = function check(str, bracketsConfig) {
    if (str === undefined || bracketsConfig === undefined) {
    return false;
  }

  let left = true;
  while (str.length != 0 && left) {
    left = false;

    for (let config of bracketsConfig) {
      let bracket = config.join('');
      if (str.includes(bracket)) {
        str = str.replace(bracket, '');
        left = true;
      }
    }
  }

  return str.length == 0;
}
