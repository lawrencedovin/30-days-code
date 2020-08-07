function Person(initialAge){
    // Add some more code to run some checks on initialAge
    if(initialAge > 0){
        this.initialAge = initialAge;
    } else {
        this.initialAge = 0;
        console.log("Age is not valid, setting age to 0.");
    }

  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if(this.initialAge < 13){
        console.log("You are young.");
    } else if (this.initialAge >= 13 && this.initialAge < 18){
        console.log("You are a teenager.");
    } else {
        console.log("You are old.");
    }

  };
   this.yearPasses=function(){
          // Increment the age of the person in here
          return this.initialAge++;

   };
}