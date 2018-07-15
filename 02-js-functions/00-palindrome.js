const isPalindrome = (str) => {
  // guard expression
  if (str.length < 2) {
    return true;
  }
  // recursion
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substr(1, (str.length - 2)));
  }
  return false;
};


console.log(isPalindrome('404'));