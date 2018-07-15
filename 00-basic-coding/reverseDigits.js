// BEGIN (write your solution here)
const reverseDigits = (num) => {
    let holder = '';
    let reverse = Math.abs(num).toString();
    let counter = reverse.length - 1;

    if ((Math.abs(num)) != num ) {
        holder += '-';
    }
    
    while (counter >= 0) {
        holder += reverse[counter];
        counter -= 1;        
    }

    console.log(+holder);
}

reverseDigits(-9556);