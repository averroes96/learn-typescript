function showInfo(name: string, age: number, country?: string){
    console.log(`${name} | ${age} | ${country}`)
}

showInfo("Ada", 26)

// REST parameter
function addAll(...nums: number[]): number {
    let res = 0
    nums.forEach((number) => res += number)

    return res
}

console.log(addAll(10, 20 ,30, 100))