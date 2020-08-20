let arr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];

function maxHourglassSum(arr){
    //setting maxSum initially to -63 because that is lowest possible outcome for hourglass.
    //-9 -9 -9
    //   -9
    //-9 -9 -9
    // = -63
    var maxSum = -63;
    var tempSum = 0;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {           
            tempSum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + 
                                  arr[i+1][j+1] + 
                      arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if(tempSum > maxSum) {
                maxSum = tempSum;           
            }
        }
    }
    console.log(maxSum);
}

console.table(arr);
console.log(arr.length);
maxHourglassSum(arr);