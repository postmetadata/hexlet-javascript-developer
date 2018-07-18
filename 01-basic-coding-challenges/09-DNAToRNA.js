const convert = (str) => {
  let holder = '';
  if (str === '') return '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'G') {
      holder += 'C';
    } else if (str[i] === 'C') {
      holder += 'G';
    } else if (str[i] === 'T') {
      holder += 'A';
    } else if (str[i] === 'A') {
      holder += 'U';
    } else {
      return null;
    }
  }
  return holder;
};

console.log(convert('GCTACG'));

// export default (n) => {
//   let rna = '';
//   for (let i = 0; i < length(n); i += 1) {
//     switch (n[i]) {
//       case 'G':
//         rna += 'C';
//         break;
//       case 'C':
//         rna += 'G';
//         break;
//       case 'T':
//         rna += 'A';
//         break;
//       case 'A':
//         rna += 'U';
//         break;
//       default:
//         return null;
//     }
//   }

//   return rna;
// };