module.exports = function reverse (n) {
  return Number((n * -1).toString().split('').reverse().join(''));
}
