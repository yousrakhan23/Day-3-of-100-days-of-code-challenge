"use strict";
// Q # 51:
// original function for calculating area of a rectangle:
function calculateArea(width, height) {
    return width * height;
}
let calculateAreaArrow = (width, height) => width * height;
console.log(calculateAreaArrow(8, 9));
//........................................................................................................................
// Q # 52:
let smartPhone = {
    brand: "Oppo",
    model: "A37",
    specs: {
        storage: "256GB",
        screenSize: "7 inches",
        batteryLife: "17 hours"
    }
};
console.log(smartPhone);
//......................................................................................................
// Q # 53:
let developerSkills = {
    languages: ["TypeScript", "JavaScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["git", "webpack", "docker"]
};
let { languages, frameworks, tools } = developerSkills;
console.log(`Language : ${languages[0]} , Framework : ${frameworks[0]} , Tool : ${tools[0]}`);
//................................................................................................................
// Q # 54:
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
//...............................................................................................................
// Q # 55:
let originalNumbers = [1, 2, 3, 4, 5,];
let doubleNumbers = originalNumbers.map(number => number * 2);
console.log("Original Array: ", originalNumbers);
console.log("New Array: ", doubleNumbers);
//.................................................................................................................
// Q # 56:
const mixedArray = [1, "apple", 2, "banana", true, "carrot"];
let stringArray = mixedArray.filter(item => typeof item === "string");
console.log(stringArray);
//......................................................................................................
// Q # 57:
let grades = [82, 79, 97, 90, 67, 95];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
//............................................................................................................
// Q # 58:
function averageScore(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScore(80, 90, 100, 70));
//..................................................................................................................
// Q # 59:
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));
//.........................................................................................................
// Q # 60:
let userProfile = (function () {
    let name = "Yousra";
    let age = "20";
    return {
        displayInfo: function () {
            console.log(`Name: ${name} , Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();
// ......................................................................................................
