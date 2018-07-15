const diff = (a, b) => {
    if ((b - a) < 180 || (b - a) === 0) {
        return b - a;
    } else {
        return 360 - b - a;
    }
}

console.log(diff(0, 360)); // 0
console.log(diff(0, 180)); // 170
console.log(diff(0, 190)); // 160
console.log(diff(120, 280)); // 
console.log(diff(0, 0)); // 0