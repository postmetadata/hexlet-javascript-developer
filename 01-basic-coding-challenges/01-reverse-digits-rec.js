const reverseIntRecursion = (num) => {
  const reverse = String(Math.abs(num));
  let holder = '';
  let counter = reverse.length - 1;
  
  const rec = (reverse) => {
    let recounter = 0;
    if (recounter === counter) {
      holder += reverse[counter];
    }
    return 

  }
  
  if (counter === 0) {
    holder += reverse[counter];
    return 
  }


  for (let counter = reverse.length - 1; counter >= 0; counter -= 1) {
    holder += reverse[counter];
  }

  let result = Number(holder);
  return num < 0 ? - result : result;
  
};

const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
    if (begin > end) {
      return NaN;
    } else if (begin === end) {
      return begin;
    } else if (begin + 1 === end ) {
      return begin + end;
    }
    return begin + sequenceSum(begin + 1, end)
  // END
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
