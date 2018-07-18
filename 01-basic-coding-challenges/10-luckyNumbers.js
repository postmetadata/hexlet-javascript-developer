const perfectNumber = (num) => {
  let counter = 0;

  const checkNextNum = (num) => {
    const str = String(num);
    let holder = 0;
    for (let i = 0; i <= str.length - 1; i += 1) {
      const number = Number(str[i]);
      const result = Math.pow(number, 2);
      holder += result;
    }
    return holder;
  }

  const checkNumber = (num) => {
    if (num === 1) {
      return true;
    }
    if (num > 1 && counter < 10) {
      counter += 1;
      const hold = checkNextNum(num);
      return checkNumber(hold);
    }
    return false;
  }

  return checkNumber(num);
}

// BEGIN
// export default (num) => {
//   let number = num;
//   for (let i = 0; i < 10; i += 1) {
//     number = sumOfSquareDigits(number);
//     if (number === 1) {
//       return true;
//     }
//   }
//   return false;
// };
// END