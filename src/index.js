module.exports = function reverse (n) {
  if (n < 0) n *= -1;
  
  let str_number = n.toString();
  str_number = str_number.split('').reverse().join('');
  return Number(str_number);
}
