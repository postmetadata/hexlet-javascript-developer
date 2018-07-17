const fizzbuzz = (begin, end) => {
  if (begin > end) {
    return;
  }
  for (let i = begin; i <= end; i++) {
    const true3 = i % 3 === 0;
    const true5 = i % 5 === 0;
    const true3res = true3 ? 'Fizz' : '';
    const true5res = true5 ? 'Buzz' : '';
    const result = true3 || true5 ? `${true3res}${true5res}` : i;
    console.log(result);
  }
}

fizzbuzz(0,20);