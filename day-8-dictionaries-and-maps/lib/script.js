function processData(input) {
    let [n, ...entries] = input.split("\n");
    //  3 = n
    // sam 99912222 = entries[0]
    // tom 11122222 = entries[1]
    // harry 12299933 = entries[2]
    // Inserts 3 entries
    // 'sam' = entries[3]
    // 'edward' = entries[4]
    // 'harry = entries[5]
    // Checks if name has phone number
    // entries[0] to entries[2] is for inserting
    // entries[3] to entries[5] is for checking if exists
    // entries = [ 'sam 99912222', 'tom 11122222', 'harry 12299933', 'sam', 'edward', 'harry' ]
    let phonebook = {};
    for(let i = 0; i < n; i++){
        let [name, number] = entries[i].split(" ");
        // let name = sam, number = 99912222;
        phonebook[name] = number;
        // phonebook = {sam: 99912222, ... edward: undefined}
        i++;
    }
    
    for(let i = 0; i + +n < entries.length; i++){
        // entries[3] = sam
        // phonebook[entries[3]] = 99912222
        phonebook[entries[i + +n]] ? 
        console.log(`${entries[i + +n]}=${phonebook[entries[i + +n]]}`) : 
        console.log("Not found");
    } 
}

function processData(input) {
    input = input.split('\n');
    let n = parseInt(input[0]);

    let phonebook = []
    for (let i = 0; i < n; i++){
        let line = input[i+1];
        line = line.split(' ');
        phonebook[line[0]] = line[1];
    }

    for (let i = n+1; i < input.length; i++ ){
        let num = (phonebook[input[i]]);
        if (num !== undefined){
            console.log(input[i]+'='+num);
        } else {
            console.log('Not found');
        }
    }
} 