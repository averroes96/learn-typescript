// aliases

type str = string

let randName : str = "Ada"

console.log(typeof(randName))

type strnum = string | number

let myAge : strnum = 27

console.log(typeof(myAge))

// advanced aliases

type Button = {
    up: string,
    right: string,
    down: string,
    left: string
}

type CustomButton = Button & {
    X: boolean
}

function getAction(btn: CustomButton) {
    console.log(btn.up)
    console.log(btn.right)
    console.log(btn.down)
    console.log(btn.left)
    console.log(btn.X);
    
}

getAction({
    up: "JUMP",
    right: "MOVE RIGHT",
    down: "GET DOWN",
    left: "MOVE LEFT",
    X: true
})

// LITERAL TYPES

type Comparator = 0 | 1 | -1

function compare(num1: strnum, num2: strnum): Comparator {
    if (Number(num1) == Number(num2)) return 0 

    if (Number(num1) > Number(num2)) return 1

    return -1
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

// Tuples

let article : readonly [number, string, boolean] = [11, "Title 11", true]
article = [10, "Title 10", false]

// enums

enum KidsLevel {
    Beginner, Newbie
}

enum Levels {
    Beginner = KidsLevel.Beginner, Newbie = KidsLevel.Newbie, EASY, MEDIUM, HARD
}


let timing : number = 5

if (timing > 15) console.log(Levels.Beginner)
else if (timing > 9) console.log(Levels.Newbie)
else if (timing > 6) console.log(Levels.EASY)
else if (timing > 3) console.log(Levels.MEDIUM)
else console.log(Levels.HARD)

// Type Assertion

let anImage = document.getElementById('an-img') as HTMLImageElement
let aButton = <HTMLButtonElement> document.getElementById('a-btn')
console.log(anImage.src);
console.log(aButton.value)
