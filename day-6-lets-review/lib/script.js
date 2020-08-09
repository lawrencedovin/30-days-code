function processData(input) {
    let inputArr = input.split('\n').slice(1);
    //Stores each string into an array separated by a new line, slice skips over the 2
    console.log(inputArr);
    inputCopy.forEach((str) => {
        // forEach string inside the inputArray
        let even = [];
        let odd = [];

        for(let i = 0; i < str.length; i++) {
            i == 0 || i % 2 == 0 ? even.push(str[i]) : odd.push(str[i]);
        }
        console.log(even.join('') + " " + odd.join(''));
    });
} 

console.log(processData("2\nHacker\nRank"));