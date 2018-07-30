const substr = (str, start = 0, len = str.length) => {
  if (len === 0) return '';
  if (start > str.length - 1) return '';

  let startIndex = 0;
  if (start >= 0) {
    startIndex = start;
  }

  console.log(startIndex);

  let lastIndex = startIndex;
  if (len > 0) {
    lastIndex = startIndex + len - 1;
  }

  console.log(lastIndex);
  
  if (lastIndex >= str.length - 1) lastIndex = str.length - 1;
  
  let result = '';
  for (let i = startIndex; i <= lastIndex; i += 1) {
    result += str[i];
  }
  return result;

};


console.log(substr('powq', 1, -10));