const isPerfect = (num) => {
  for (let counter = 1; counter <= num; counter += 1) {
    if (counter * ((2 * counter) - 1) === num) return true;
  }
  return false;
};
// export default isPerfect;


// Teacher's Answer
// const isPerfect = (num) => {
//     if (num === 0) return false;
  
//     let sum = 0;
  
//     for (let divisor = 1; divisor < num; divisor += 1) {
//       if (num % divisor === 0) sum += divisor;
//     }
  
//     return sum === num;
//   };