import square from './square';

// BEGIN (write your solution here)
import { getTriangleArea } from './myMathModule.js';

const func = (n) => getTriangleArea(n, square(n)/2);
export default func;
// END
