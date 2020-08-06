function main() {
    const N = parseInt(readLine(), 10);

    switch(1 <= N && N <= 100){
        case N % 2 != 0 || N >= 6 && N <= 20: 
            console.log("Weird");
            break;
        case N % 2 == 0 && N >= 2 && N <= 5 || N % 2 == 0 && N >= 20: 
            console.log("Not Weird");
            break;
        default: 
            console.log("Error number out of range");
            break;
    }
}