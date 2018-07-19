const isPowerOfThree = (num) => {
  if (num === 1) return true;
  for (let i = 2; 3 ** i <= num; i += 1) {
    if (num === 3 ** i) return true;
  }
}

console.log(isPowerOfThree(9));

// BEGIN
// export default (num) => {
//   let current = 1;
//   while (current < num) {
//     current *= 3;
//   }

//   return current === num;
};