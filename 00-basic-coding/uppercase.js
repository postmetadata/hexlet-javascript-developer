import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const checkStr = (str) => {
  let me = "";
  me += str[0].toUpperCase();
  for (let i=1; i < str.length; i++) {

    if (str[i-1] === " ") {
      me += str[i].toUpperCase();
    } else {
      me += str[i];
    }
    
  }
  return me;
}

export default checkStr;

// END
