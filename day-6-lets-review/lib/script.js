function processData(input) {
    let inputCopy = input.split('\n').slice(1);
    inputCopy.forEach((str) => {
        let even = [];
        let odd = [];

        for(let i = 0; i < str.length; i++) {
            i == 0 || i % 2 == 0 ? even.push(str[i]) : odd.push(str[i]);
        }
        console.log(even.join('') + " " + odd.join(''));
    });
} 

console.log(processData("Hacker"));