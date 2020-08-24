function swap(input, index_A, index_B) {
    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);

    // Track number of elements swapped during a single array traversal
    let numSwaps = 0; 
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n-1; j++){
            if(a[j] > a[j + 1]){
                swap(a, j, j+1);
                numSwaps++
            }
        }
    }
    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n-1]}`);
}