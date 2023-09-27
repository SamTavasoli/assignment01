// STEP 1
            // Convert the following highlighted identifiers to Camel Case notation:

            // let some_month
            // function the Month()
            // let current-month
            // let summer_month
            // let MyLibrary-function
let someMonth;
function theMonth() {}
let currentMonth;
let summerMonth;
let myLibrayFunction;


// STEP 2
            // Give me an example of a 
            // numeric literal expression, 
            // a string literal expression, 
            // a Boolean literal expression, 
            // and a null literal expression.
let numericalLiteral = 44;
let stringLiteral = "Hello, World!";
let booleanLiteral = true;
let nullLiteral = null;


// STEP 3
            // Give me two examples of complex / variable expressions.
let complexExpression1 = 5 * (3 / 2) + 10;
let complexExpression2 = booleanLiteral ? numericLiteral : stringLiteral;


// STER 4
            // Declare (but do not assign) 9 variables for the following identifiers: 
            // First Name, 
            // Last Name, 
            // Address, 
            // City, 
            // State, 
            // Zip Code, 
            // Your Age, 
            // Referral Source, 
            // May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
// let strFirstName;
// let strLastName;
// let strAddress;
// let strCity;
// let strState;
// let iZipCode;
// let iYourAge;
// let referralSource;
// let weContactYou;


// STEP 5

                            // Take the 3 of the 9 variables that you created above and demonstrate 
                            // 3 ways for declaring and assigning values to those variables.
                // Declaration and Assignment at the same time
                // let strFirstName = "John";
                // let strLastName = "Doe";
                // let iZipCode = 12345;

                // First declaration and then assignment
                // let strFirstName;
                // let strLastName;
                // let iZipCode;

                // Later in the code...
                // strFirstName = "John";
                // strLastName = "Doe";
                // iZipCode = 12345;

                // declaration and assignment in one line
                // let strFirstName = "John", strLastName = "Doe", iZipCode = 12345;


// STER 6
                // Create a variable.
                // Add a number and a string and display the coerced result in the browser’s console window.
let createVariable = 5 + "10"; // Result will be "510"
console.log(createVariable);


// STEP 7
                // Create two variables.
                // For the first variable, add a Boolean and a string and display the coerced result.
                // For the second variable, add a number and a Boolean and display the coerced result.
let var1 = true + " is boolean"; // "true is boolean"
console.log(var1);
let var2 = 5 + true; // Result will be 6 because true is coerced to 1
console.log(var2);



// STEP 8
                // Is the following string literal valid? If not, how would you fix it?
                
                // let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
                // console.log(someString)

                // No is not correct, but if we use the double quote outside, then we can use the single quote in inside
let someString = "Who once said, 'Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.'"
console.log(someString)




// STEP 9
                // Create a variable that produces a null value in the console window.
                // Then, create a variable that produces an undefined value in the console window.
let nullVar = null;
console.log(nullVar); // Will print null
let undefinedVar;
console.log(undefinedVar); // Will print undefined

 

// STEP 10
                // Use the unary typeof operator on various literals to return 
                // the following types within the console window: string, number, Boolean, object, and undefined.
console.log(typeof "Hello"); // string
console.log(typeof 34); // number
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof undefined); // undefined


// STEP 11
                // Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
                // Hello Zak Ruvalcaba, welcome to the JavaScript class!
let name = "Zak Ruvalcaba";
let course = "JavaScript";
alert("Hello " + name + ",\nWelcome to the " + course + " class!");


// STEP 12
                // Declare a variable called name and set it equal to your name.
                // Substitute your name in the previous alert string with the variable instead.
let name = "Saman Tavasoli";
alert("Hello " + name + ",\nWelcome to the JavaScript class!");


// STEP 13
                // Declare a variable called course and set it equal to “JavaScript”.             
                // Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
let name = "Saman Tavasoli";
let course = "JavaScript";
alert("Hello " + name + ",\nWelcome to the " + course + " class!");

// STEP 14
                // Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

                // Hello Zak Ruvalcaba.
                // Welcome to the JavaScript class!

let name = "Zak Ruvalcaba";  // you should replace this with your own name
let course = "JavaScript";

let greetingMessage = "Hello " + name + ".\nWelcome to the " + course + " class!";
console.log(greetingMessage);  // You'd use alert(greetingMessage); in a real browser environment



//  STEP 15, 16, 17, 18, 19, 20
                // Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
                // Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be               captured in the course variable.
                // Declare a variable called x and assign it a value of 10.
                // Declare a variable called y and assign it a value of 20.
                // Display the sum of those two numbers in the console window.
                // Declare a variable called x and assign it a value of 20.
                // Add and assign 20 to that variable and display the result in the console window.
                // The result should be 40.
                // Declare a variable called x and assign it a value of 20.
                // Multiply and assign 5 to that variable and display the result in the console window.
                // The result should be 100.
                // Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
                // Divide and assign 1 to that variable and display the result in the console window.
                // The result should be 2. If you got 6.66 try again.

let x = 10;
let y = 20;
console.log(x + y); // Will print 30

x = 20;
x += 20; // Equivalent to x = x + 20
console.log(x); // Will print 40

x *= 5; // Equivalent to x = x * 5
console.log(x); // Will print 100

x = 20 % 3; // Getting the remainder
x /= 1; // Equivalent to x = x / 1
console.log(x); // Will print the remainder of 20 divided by 3


// STEP 21, 22
                // Using a set of Comparison and Logical operators, write an application that evaluates to true 
                // and displays the result within the console window.
                // Using a set of Comparison and Logical operators, write an application that evaluates to false 
                // and displays the result within the console window. The application cannot use the same operators used in the previous application.
// Evaluates to true
console.log((5 > 3) && (12 / 4 === 3));

// Evaluates to false using different operators
console.log((5 < 3) || (12 / 4 !== 3));                