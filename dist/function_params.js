"use strict";
function showInfo(name, age, country) {
    console.log(`${name} | ${age} | ${country}`);
}
showInfo("Ada", 26);
function addAll(...nums) {
    let res = 0;
    nums.forEach((number) => res += number);
    return res;
}
console.log(addAll(10, 20, 30, 100));
//# sourceMappingURL=function_params.js.map