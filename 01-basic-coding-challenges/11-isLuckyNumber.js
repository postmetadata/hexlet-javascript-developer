const isLuckyNumber = (num) => {
  const checker = String(num);
  const half = checker.length / 2;
  console.log(checker);
  let temp1 = 0;
  let temp2 = 0;
  for (let i = 0; i <= half - 1; i += 1) {
    temp1 +=  Number(checker[i]);
  }
  for (let i = half; i <= half * 2 - 1; i += 1) {
    temp2 +=  Number(checker[i]);
  }
  console.log(temp1);
  console.log(temp2);
  const wisdom = temp1 === temp2;
  console.log(wisdom);
  return wisdom;
}
isLuckyNumber(4045);