// function binaryCalc(n) {
//     let arr = [];
//     while(n >= 1){
//         arr.unshift(binaryEvenOdd(n));
//         n = Math.floor(n / 2);
//         binaryEvenOdd(n);
//     }
//     return consecutiveOnes(arr);
//     // return(arr);
// }

// function binaryEvenOdd(n) {
//     return n % 2 == 0 ? 0 : 1;
// }

// function consecutiveOnes(n) {
//     let j = 0;
//     for (let i = 0; i < n.length; i++) {
//         if(n[i] == 0){
//             return j;
//         }
//         j++;
//     }
// }

function binaryCalc(n) {
    let count = 0;
    let max = 0;
    let binary = 0;
    while(n > 0){
        evenOddRemainder(n) === 1 ? count++ : count = 0;
        
        if(count > max) {
            max = count;
        }

        binary = evenOddRemainder(n) + binary;
        n = Math.floor(n / 2);
    }

    console.log(max);
}


function evenOddRemainder(n) {
    return n % 2 == 0 ? 0 : 1;
}


console.log(binaryCalc(16));