module.exports = function reverse (n) {
 return (n >= 0) ? Number(n.toString().split('').reverse().join('')) : Number((n * -1).toString().split('').reverse().join(''));
};
