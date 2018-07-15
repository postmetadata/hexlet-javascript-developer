const reverseInt = (num) => {
    const reverse = String(Math.abs(num));
    let holder = '';
    if (num < 0) holder += '-';
    for (let counter = reverse.length - 1; counter >= 0; counter -= 1) {
      holder += reverse[counter];
    }
    return Number(holder);
};
  
// export default reverseInt;

// teacher's answer
// const reverseInt = (num) => {
//     const numAsStr = String(Math.abs(num));
//     let reversedStr = '';
//     let i = length(numAsStr) - 1;
  
//     while (i >= 0) {
//       reversedStr += numAsStr[i];
//       i -= 1;
//     }
//     const reversedModule = Number(reversedStr);
  
//     return num < 0 ? -reversedModule : reversedModule;
// };
