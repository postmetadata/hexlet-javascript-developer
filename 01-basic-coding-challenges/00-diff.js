// Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

// BEGIN (write your solution here) (write your solution here)
const diff = (a, b) => {
    const c = Math.abs(a - b);
    if (c < 180) {
      return c;
    } else if (c > 180) {
      return 360 - c;
    } else if (c === 180) {
      return 180;
    } else if (c === 0) {
      return 0;
    }
    return false;
  };
  // END
//   export default diff;

console.log(diff(0, 45)); // 45
console.log(diff(0, 180)); // 180
console.log(diff(0, 190)); // 170
console.log(diff(120, 280)); // 160
console.log(diff(180, 180)); // 0
console.log(diff(0, 0)); // 0
console.log(diff(360, 240)); // 120
console.log(diff(180, 0)); // 180