// императивный  итеративный процесс

// BEGIN (write your solution here)
const smallestDivisor = (num) => {
  let counter = 2;
  if (num <= 0) {
    return NaN;
  } else if (num === 1) {
    return 1;
  }
  while (num % counter != 0)
     counter = counter + 1;
  return counter;

}
// END

export default smallestDivisor;
