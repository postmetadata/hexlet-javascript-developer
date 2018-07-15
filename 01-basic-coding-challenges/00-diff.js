// Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

const diff = (a, b) => {
  const c = Math.abs(a - b);
  if (c > 180) {
    return 360 - c;
  }
  return c;
};

//export default diff;

// Teacher's Answert
// const diff = (a, b) => {
//   const angle = Math.abs(a - b);
//   const difference = angle > 180 ? 360 - angle : angle;
//   return difference;
// };