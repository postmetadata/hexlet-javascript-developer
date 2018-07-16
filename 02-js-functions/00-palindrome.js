const isPalindrome = (str) => {
  // guard expression
  if (str.length < 2) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substr(1, (str.length - 2)));
  }
  return false;
};

console.log(isPalindrome('444'));

// const isPalindrome = (str) => {
//     // guard expression
//     if (str.length < 2) {
//       return true;
//     }
    
//     const startPoint = str[0];
//     const endPoint = str[str.length - 1];
  
//     // second guard expression
//     if (startPoint !== endPoint) {
//       return false;
//     }
    
//     // recursion
//     const cutTheString = str.substr(1, (str.length - 2));
//     return isPalindrome(cutTheString);
//   };