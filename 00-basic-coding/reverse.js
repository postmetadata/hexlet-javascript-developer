// BEGIN (write your solution here)
const reverse = (str) => {
  let counter = str.length-1;
  let result = '';
  while (counter >= 0 ) {
    result = result + str[counter];
    counter = counter - 1;
  }
  return result;
}
// END

export default reverse;
