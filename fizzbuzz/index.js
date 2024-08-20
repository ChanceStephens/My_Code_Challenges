function fizzBuzz(){
for (let i = 1; i <= 100; i++) {                    //⯎ created a for loop to iterate from 1 to 100
        if (i % 3 === 0 && i % 5 === 0) {           //⯎ check if the number is divisible by 3 and 5
            console.log('FizzBuzz')                 //⯎ print FizzBuzz
        } else if (i % 3 === 0) {                   //⯎ check if the number is divisible by 3
            console.log('Fizz')                     //⯎ print Fizz
        } else if (i % 5 === 0) {                   //⯎ check if the number is divisible by 5
            console.log('Buzz')                     //⯎ print Buzz
        } else {
            console.log(i)                          //⯎ print the number
        }
    }
}
fizzBuzz()                                          //⯎ call the function fizzBuzz


function optionalChallenge() {
    let fizzCount = 0;                              //⯎ initialize the fizzCount variable to 0
    let buzzCount = 0;                              //⯎ initialize the buzzCount variable to 0
    let fizzBuzzCount = 0;                          //⯎ initialize the fizzBuzzCount variable to 0

    for (let i = 1; i <= 100; i++) {                //⯎ created a for loop to iterate from 1 to 100
        if (i % 3 === 0 && i % 5 === 0) {           //⯎ check if the number is divisible by 3 and 5
            fizzBuzzCount++;                        //⯎ increment the fizzBuzzCount variable by 1
        } else if (i % 3 === 0) {                   //⯎ check if the number is divisible by 3
            fizzCount++;                            //⯎ increment the fizzCount variable by 1
        } else if (i % 5 === 0) {                   //⯎ check if the number is divisible by 5
            buzzCount++;                            //⯎ increment the buzzCount variable by 1
        }
    }

    console.log(`Total Fizz: ${fizzCount}`);        //⯎ print the total number of Fizz
    console.log(`Total Buzz: ${buzzCount}`);        //⯎ print the total number of Buzz
    console.log(`Total FizzBuzz: ${fizzBuzzCount}`);//⯎ print the total number of FizzBuzz
}

optionalChallenge();


//☪ The modulus operator (%) in JavaScript is used to find the remainder after division of one number by another.                                  
//☪ The operator is particularly useful when you want to check conditions like whether a number is even or odd, divisible by another number, etc.  
//☪    RESOURCES USED:                                                                                                                             
//☪    1. Variables Initialization                                                                                                                 
//☪        Initialized variables (fizzCount, buzzCount, fizzBuzzCount) to store the counts.                                                        
//☪        Resource: JavaScript Variables                                                                                                          
//☪    2. For Loop                                                                                                                                 
//☪        Used a for loop to iterate from 1 to 100.                                                                                               
//☪        Resource: JavaScript For Loop                                                                                                           
//☪    3. If-Else Statements                                                                                                                       
//☪        Used if, else if, and else to check conditions and increment the counters accordingly.                                                  
//☪        Resource: JavaScript If-Else Statement                                                                                                  
//☪    4. Modulus Operator (%)                                                                                                                     
//☪        Used the modulus operator to check if a number is divisible by 3 or 5.                                                                  
//☪        Resource: JavaScript Arithmetic Operators (Scroll down to the section on the modulus operator)                                          
//☪    5. Incrementing Counters                                                                                                                    
//☪        Uncremented the counters using the ++ operator.                                                                                         
//☪        Resource: JavaScript Arithmetic Operators (Includes increment operator ++)                                                              
//☪    6. Console Output                                                                                                                           
//☪        Used console.log() to output the results to the console.                                                                                
//☪        Resource: JavaScript Output (Section on console.log())                                                                                  
//☪    JavaScript Arithmetic   - https://www.w3schools.com/js/js_arithmetic.asp                                                                    
//☪    JavaScript Operators    - https://www.w3schools.com/js/js_operators.asp                                                                     


