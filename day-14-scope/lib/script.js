class Difference {
    constructor(arr) {
        this.arr = arr;
        this.maximumDifference = this.computeDifference();
    }

    computeDifference() {
        this.arr = this.arr.map((el) => {
            return Math.abs(el);
        });
        this.arr.sort();
        return Math.abs(this.arr[0] - this.arr[this.arr.length-1]);
    }
}

let t1 = new Difference([1, -2, -5]);
console.log(t1.maximumDifference);

// Java Solution

// public Difference(int[] a)
//     {
//     this.elements=a;
// }
// public void computeDifference()
//     {
//     int min=elements[0];
//     int max=elements[0];
//     for(int i=0;i<elements.length;i++)
//         {
//         if(elements[i]<min)
//             {
//             min=elements[i];
//         }
//         if(elements[i]>max)
//             {
//             max=elements[i];
//         }                
//     }
// maximumDifference = Math.abs(max-min);    
// }