class Employer {
    #username: string
    #salary: number
    toString: () => string

    private static _created: number = 0
    public static get created(): number {
        return Employer._created
    }
    public static set created(value: number) {
        Employer._created = value
    }

    constructor(username: string, salary: number | string) {
        this.#username = username
        this.#salary = Number.parseInt(salary.toString())
        this.toString = () => {
            return `${this.#username} (${this.#salary})`
        }
        Employer.created++
    }

    
    public get username() : string {
        return this.#username
    }

    
    public set username(username : string) {
        this.#username = username;
    }

    
    public get salary() : number {
        return this.#salary
    }

    
    public set salaray(salary : string | number) {
        this.#salary = this.#salary = Number.parseInt(salary.toString())
    }    
    
}
console.log('====================================');
console.log(Employer.created);
let averroes = new Employer("averroes", 10000)
console.log(Employer.created);
console.log('====================================');

console.log('====================================');
// console.log(averroes.#username); CANNOT DO THIS
// console.log(averroes.#salary); CANNOT DO THIS
console.log(averroes.username);
console.log(averroes.salary);
console.log(averroes.toString());
console.log('====================================');