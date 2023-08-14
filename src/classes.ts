interface Settings {
    font?: string
    theme: boolean
    save(): void
}

abstract class Model {

    id?: number
    created_at?: Date
    updated_at?: Date
    deleted_at?: Date

    static counter = 0

    constructor() {this.id = Model.counter}

    abstract create(): void
    abstract update(): void
    abstract delete(): void

    abstract get<T>(): T
    abstract all<T>(): Array<T>
}

class Employer extends Model implements Settings {
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

    constructor(username: string, salary: number | string, public theme: boolean) {
        super()

        this.#username = username
        this.#salary = Number.parseInt(salary.toString())
        this.toString = () => {
            return `${this.#username} (${this.#salary})`
        }
        Employer.created++
    }

    create(): void {
        this.created_at = new Date()
        Employer.counter++

        console.log('created..')
    }

    update(): void {
        this.updated_at = new Date()
        console.log('updated..')
    }

    delete(): void {
        this.deleted_at = new Date()
        Employer.counter--

        console.log('deleted..')
    }

    get<Employer>(): Employer {
        throw new Error("Not implemented yet");
    }

    all<Employer>(): Employer[] {
        throw new Error("Not implemented yet");
    }

    save(): void {
        console.log('saved.')
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
let averroes = new Employer("averroes", 10000, true)
console.log(Employer.created);
console.log('====================================');

console.log('====================================');
// console.log(averroes.#username); CANNOT DO THIS
// console.log(averroes.#salary); CANNOT DO THIS
console.log(averroes.username);
console.log(averroes.salary);
console.log(averroes.theme)
console.log(averroes.toString());
console.log('====================================');

console.log('====================================');
console.log(Employer.counter);
console.log(averroes.created_at);
console.log(averroes.updated_at);
console.log(averroes.deleted_at);

averroes.create();
console.log(Employer.counter);

averroes.update();
averroes.delete();

console.log(Employer.counter);
console.log(averroes.created_at);
console.log(averroes.updated_at);
console.log(averroes.deleted_at);

console.log('====================================');


interface Book {
    title: string
    type: string
    isbn: number
}

interface Game {
    type: string
    title: string
    style: string
    price: string
}

class Collection<T> {

    data : T[] = []

    add(element: T): void {
        this.data.push(element)
    }
}

const books = new Collection<Book>()
books.add({
    title: "book 1",
    type: "Book",
    isbn: 32343
})
books.add({
    title: "book 2",
    type: "Book",
    isbn: 47387
})

console.log('====================================');
console.log(books);
console.log('====================================');