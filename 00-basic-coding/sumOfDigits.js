import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const addDigits = (num) => {
  let holder = num;
  let sum = 0;
  let tmp = 0;

  while (holder > 0) {
      tmp = holder % 10;
      holder = (holder - tmp)/10;
      sum += tmp;
  }

  if (sum > 9) {
    return addDigits(sum);
  } else {
    return sum;
  }
}

export default addDigits;
// END
