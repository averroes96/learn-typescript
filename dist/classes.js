"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employer_username, _Employer_salary;
class Employer {
    static get created() {
        return Employer._created;
    }
    static set created(value) {
        Employer._created = value;
    }
    constructor(username, salary) {
        _Employer_username.set(this, void 0);
        _Employer_salary.set(this, void 0);
        __classPrivateFieldSet(this, _Employer_username, username, "f");
        __classPrivateFieldSet(this, _Employer_salary, Number.parseInt(salary.toString()), "f");
        this.toString = () => {
            return `${__classPrivateFieldGet(this, _Employer_username, "f")} (${__classPrivateFieldGet(this, _Employer_salary, "f")})`;
        };
        Employer.created++;
    }
    get username() {
        return __classPrivateFieldGet(this, _Employer_username, "f");
    }
    set username(username) {
        __classPrivateFieldSet(this, _Employer_username, username, "f");
    }
    get salary() {
        return __classPrivateFieldGet(this, _Employer_salary, "f");
    }
    set salaray(salary) {
        __classPrivateFieldSet(this, _Employer_salary, __classPrivateFieldSet(this, _Employer_salary, Number.parseInt(salary.toString()), "f"), "f");
    }
}
_Employer_username = new WeakMap(), _Employer_salary = new WeakMap();
Employer._created = 0;
console.log('====================================');
console.log(Employer.created);
let averroes = new Employer("averroes", 10000);
console.log(Employer.created);
console.log('====================================');
console.log('====================================');
console.log(averroes.username);
console.log(averroes.salary);
console.log(averroes.toString());
console.log('====================================');
//# sourceMappingURL=classes.js.map