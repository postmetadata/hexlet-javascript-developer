// итеративный


const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  const iter = (divisor) => {
    if (num === 1) {
      return 1;
    } else if (num % divisor === 0) {
      return divisor;
    }
    return iter(divisor + 1);
  };
  return iter(2);
  // END
};

export default smallestDivisor;
