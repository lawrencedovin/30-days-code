function factorial(n) {
    // if(n <= 1) {
    //     return n * 1;
    // }
    
    // return n * factorial(n-1);

    return n <= 1 ? n * 1 : n * factorial(n-1);
} 

console.log(factorial(4));