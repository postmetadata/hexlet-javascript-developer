// поиск простого числа

const isPrime = (num) => {
  let simple = 0;
  for (let counter = 2; counter <= num; counter++) {
    console.log("Счетчик "+counter);
    if (num % counter === 0) {
      console.log(counter);
      simple +=1;
    }
  }
  console.log("Всего "+simple);
  if (simple === 1) {
    return true;
  } else {
    return false
  }
}
// END

export default isPrime;