// BEGIN (write your solution here) (write your solution here)
const sumSquareDifference = (num) => {
  const squareSum = (n) => {
    if (n === 1) {
      return 1;
    }
    return (n ** 2) + squareSum(n - 1);
  };
  const sum = (n) => {
    if (n === 1) {
      return 1;
    }
    return n + sum(n - 1);
  };
  const square = n => n ** 2;
  return square(sum(num)) - squareSum(num);
};
// END

// BEGIN (write your solution here)
// const sumOfSquares = (n) => {
//   let sum = 0;
//   let i = 1;
//   while (i <= n) {
//     sum += i * i;
//     i += 1;
//   }

//   return sum;
// };

// const squareOfSum = (n) => {
//   let sum = 0;
//   let i = 1;
//   while (i <= n) {
//     sum += i;
//     i += 1;
//   }

//   return sum * sum;
// };

// const sumSquareDifference = n =>
//   squareOfSum(n) - sumOfSquares(n);
// END