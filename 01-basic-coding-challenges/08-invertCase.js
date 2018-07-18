const sendMeLetter = (str) => {
  let holder = '';
  for (let i = 0; i < str.length; i += 1) {
    const check = str[i] === str[i].toUpperCase();
    holder += check ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  return holder;
}

console.log(sendMeLetter('Show'));

// const invertCase = (str) => {
//   let result = '';
//   for (let i = 0; i < length(str); i += 1) {
//     const upper = str[i] === toUpperCase(str[i]);
//     result += upper ? toLowerCase(str[i]) : toUpperCase(str[i]);
//   }

//   return result;
// };

// export default invertCase;
