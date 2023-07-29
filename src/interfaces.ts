// declaration, parameters and methods

interface User {
    id: number,
    username: string,
    country: string,
    sayHello(): string,
    toString: () => string
    getDouble(num: number): number
}

let user: User = {
    id: Math.random(),
    username: "averroes",
    country: "ALG",
    sayHello() {
        return `Hello ${this.username.charAt(0).toUpperCase()}${this.username.substring(1)}`
    },
    toString() {
        return `${this.username} (${this.country})`
    },
    getDouble(n: number) {
        return n * 2
    },
}

console.log(user.id)
console.log(user.username)
console.log(user.country)
console.log(user.sayHello())
console.log(user.toString())
console.log(user.getDouble(6))

// Reopening
interface Setting {
    theme: boolean,
    font: string
}

interface Setting {
    sidebar?: boolean
}

let userSettings: Setting = {
    theme: true,
    font: "Open Sans",
    sidebar: false
}

// Extend
interface Moderator extends User {
    priveleges: number[]
}