const isPerfect = (num) => {

    let counter = 1;
    let wisdom = false;

    while (counter*(2*counter-1) <= num) {
        if (counter*(2*counter-1) === num) {
            wisdom = true;
        }
        counter += 1;
    }
    console.log(wisdom);
}

isPerfect(2);
isPerfect(6);
isPerfect(7);
isPerfect(28);
isPerfect(29);
isPerfect(8128);
isPerfect(60000);
isPerfect(33550336);