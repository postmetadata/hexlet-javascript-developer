const reverseString = (str) => {
  // guard expression
  
  if (str.length === 1) {
    return str;
  }
  if (str.length > 1) {
    return str[str.length - 1] + reverseString(str.substr(0, (str.length - 1)));
  }
  return '';
};

console.log(reverseString('nowweare'));

// const reverse = (str) => {
//   const len = length(str);
//   if (len === 0) {
//     return str;
//   }

//   return str[len - 1] + reverse(substr(str, 0, len - 1));
// };

// export default reverse;
