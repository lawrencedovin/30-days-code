class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person{
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores
    }
    calculate() {
        let add = (a, b) => a + b;
        let sum = this.scores.reduce(add);
        // adds all values of array and produces
        // a single output
        let average = sum / this.scores.length;

        switch(true) {
            case 90 <= average && average <= 100:
                return "O";
            case 80 <= average && average < 90:
                return "E";
            case 70 <= average && average < 80:
                return "A";
            case 55 <= average && average < 70:
                return "P";
            case 40 <= average && average <= 55:
                return "D";
            case average < 40:
                return "T";
            default: 
                return "Incorrect";
        }
    }
}

let s1 = new Student("Lawrence", "Dovin", 3, [80,90, 95]);

console.log(s1.calculate());