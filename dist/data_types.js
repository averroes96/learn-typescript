"use strict";
let randName = "Ada";
console.log(typeof (randName));
let myAge = 27;
console.log(typeof (myAge));
function getAction(btn) {
    console.log(btn.up);
    console.log(btn.right);
    console.log(btn.down);
    console.log(btn.left);
    console.log(btn.X);
}
getAction({
    up: "JUMP",
    right: "MOVE RIGHT",
    down: "GET DOWN",
    left: "MOVE LEFT",
    X: true
});
function compare(num1, num2) {
    if (Number(num1) == Number(num2))
        return 0;
    if (Number(num1) > Number(num2))
        return 1;
    return -1;
}
console.log('====================================');
console.log(compare("27", 27));
console.log('====================================');
console.log('====================================');
console.log(compare("25", 27));
console.log('====================================');
console.log('====================================');
console.log(compare("30", 27));
console.log('====================================');
let article = [11, "Title 11", true];
article = [10, "Title 10", false];
var KidsLevel;
(function (KidsLevel) {
    KidsLevel[KidsLevel["Beginner"] = 0] = "Beginner";
    KidsLevel[KidsLevel["Newbie"] = 1] = "Newbie";
})(KidsLevel || (KidsLevel = {}));
var Levels;
(function (Levels) {
    Levels[Levels["Beginner"] = 0] = "Beginner";
    Levels[Levels["Newbie"] = 1] = "Newbie";
    Levels[Levels["EASY"] = 2] = "EASY";
    Levels[Levels["MEDIUM"] = 3] = "MEDIUM";
    Levels[Levels["HARD"] = 4] = "HARD";
})(Levels || (Levels = {}));
let timing = 5;
if (timing > 15)
    console.log(Levels.Beginner);
else if (timing > 9)
    console.log(Levels.Newbie);
else if (timing > 6)
    console.log(Levels.EASY);
else if (timing > 3)
    console.log(Levels.MEDIUM);
else
    console.log(Levels.HARD);
let anImage = document.getElementById('an-img');
let aButton = document.getElementById('a-btn');
console.log(anImage.src);
console.log(aButton.value);
//# sourceMappingURL=data_types.js.map