"use strict";
let theName = 'Ada';
let age = 26;
let hired = true;
let all = 'Any';
let anonymous;
all = false;
function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
let combinedVar;
let anArray = ["Python", "Java", "JavaScript", "PHP", "C++"];
let multiDemArray = ["Java", "Python", "C++", 174, ["Ada", "MECEFFEUK"]];
let showMessage = true;
const showDetails = (name, age, salary) => {
    if (showMessage) {
        return `Hello ${name}, you're ${age} year(s) old | ${salary}`;
    }
    return true;
};
showDetails("ada", 26, 10000);
let myObject = {
    id: 101,
    username: "Averroes",
    skills: {
        1: "Python",
        2: "JavaScript"
    }
};
//# sourceMappingURL=type_annotation.js.map