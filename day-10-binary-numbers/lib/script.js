function binaryCalc(n) {
    let arr = [];
    while(n >= 1){
        arr.unshift(binaryEvenOdd(n));
        n = Math.floor(n / 2);
        binaryEvenOdd(n);
    }

    console.log(arr);
}

function binaryEvenOdd(n) {
    return n % 2 == 0 ? 0 : 1;
}

console.log(binaryCalc(45));