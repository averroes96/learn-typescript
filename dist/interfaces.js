"use strict";
let user = {
    id: Math.random(),
    username: "averroes",
    country: "ALG",
    sayHello() {
        return `Hello ${this.username.charAt(0).toUpperCase()}${this.username.substring(1)}`;
    },
    toString() {
        return `${this.username} (${this.country})`;
    },
    getDouble(n) {
        return n * 2;
    },
};
console.log(user.id);
console.log(user.username);
console.log(user.country);
console.log(user.sayHello());
console.log(user.toString());
console.log(user.getDouble(6));
let userSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false
};
//# sourceMappingURL=interfaces.js.map