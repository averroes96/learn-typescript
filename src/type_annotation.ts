let theName: string = 'Ada'
let age: number = 26
let hired: boolean = true

let all: any = 'Any'
let anonymous // any

all = false

function add(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

let combinedVar: (string | number)

let anArray: string[] = ["Python", "Java", "JavaScript", "PHP", "C++"]
let multiDemArray: (string | number | string[])[] = ["Java", "Python", "C++", 174, ["Ada", "MECEFFEUK"]]

let showMessage = true

const showDetails = (name: string, age: number, salary: number): string | boolean => {
  if (showMessage) {
     return `Hello ${name}, you're ${age} year(s) old | ${salary}`
  }

  return true
}

showDetails("ada", 26, 10000)

// with objects

let myObject: {
  id: number,
  readonly username: string,
  hired?: boolean,
  skills: {
    1: string,
    2: string
  }
} = {
  id: 101,
  username: "Averroes",
  skills: {
    1: "Python",
    2: "JavaScript"
  }
}