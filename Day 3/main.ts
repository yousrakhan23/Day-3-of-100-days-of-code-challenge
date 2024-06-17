
// Q # 51:

// original function for calculating area of a rectangle:Refactoring to Arrow Functions: Take a simple function 
//that calculates the area of a rectangle and refactor it into an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript,
// making your code cleaner and more readable.

function calculateArea(width: number , height: number): number{
    return width * height ; 
}

let calculateAreaArrow = ( width : number , height : number ,  ): number => width * height ;

console.log(calculateAreaArrow(8,9));

//........................................................................................................................

// Q # 52:

//Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, 
//model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

// Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps 
//organize related information neatly.


let smartPhone = {
    brand: "Oppo" ,
    model: "A37" , 
    specs: {
        storage: "256GB" ,
        screenSize: "7 inches" ,
        batteryLife: "17 hours" 
    }
};
console.log(smartPhone);

//......................................................................................................

// Q # 53:

//Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer
// programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific
// skills from this list and show them.

// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand 
//specific pieces of information.


let developerSkills = {
    languages : ["TypeScript" , "JavaScript" , "Python"],
    frameworks: ["React" , "Angular" , "Vue"],
    tools: ["git" , "webpack" , "docker"]
};

let {  languages , frameworks , tools } = developerSkills;

console.log(`Language : ${languages[0]} , Framework : ${frameworks[0]} , Tool : ${tools[0]}`);

//................................................................................................................

// Q # 54:

function createObjectWithDynamicKey(key : string , value : string){
    let dynamicObject = {} ; 
    dynamicObject[key] = value;
    return dynamicObject;
}

let userPreference = createObjectWithDynamicKey("theme" , "dark");

console.log(userPreference);

//...............................................................................................................

// Q # 55:

let originalNumbers  = [1, 2, 3, 4, 5,];

let doubleNumbers = originalNumbers.map(number => number * 2 );

console.log( "Original Array: ",originalNumbers);
console.log( "New Array: ",doubleNumbers);

//.................................................................................................................

// Q # 56:

const mixedArray = [1 , "apple" , 2 , "banana" , true , "carrot"];

let stringArray = mixedArray.filter(item => typeof item === "string");

console.log(stringArray);

//......................................................................................................

// Q # 57:

let grades = [82 , 79 , 97 , 90 , 67 , 95 ];

let averageGrade = grades.reduce((total , grade) => total + grade , 0) / grades.length;

console.log(averageGrade);

//............................................................................................................

// Q # 58:

function averageScore(...scores: number[]) : number{
    let total = scores.reduce((sum , score ) => sum + score , 0);
    return total / scores.length ;
}

console.log(averageScore(80 , 90 , 100 , 70));

//..................................................................................................................

// Q # 59:

function makeAdder(valueToAdd: number):(number:number) => number{
    return function (number:number) : number{
        return number + valueToAdd;
    };
}

let addFive = makeAdder(5);

console.log(addFive(10));

//.........................................................................................................

// Q # 60:

let userProfile = (function(){
    let name = "Yousra";

    let age = "20";
    
    return {
        displayInfo: function (){
            console.log(`Name: ${name} , Age: ${age}`);
        }
    };

})();

userProfile.displayInfo();

// ......................................................................................................
