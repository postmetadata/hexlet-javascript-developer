const ackermann = (m, n) => {
  // BAD VALUES
  if (m < 0 || n < 0) {
    return;
  }
  // GUARD EXPRESSION
  if (m === 0) {
    return n + 1;
  }
  // SECON GUARD EXPRESSION
  if (m > 0 && n === 0) {
    return ackermann(m - 1, 1);
  }
  // RECURSION
  if (m > 0 && n > 0) {
  return ackermann(m - 1, ackermann(m, n - 1));
  }
};

export default ackermann;

// END
