class Doggy {
    public readonly poops: boolean = true
    constructor(public readonly name: string, public readonly age: number) {

    }
}

const lgg = new Doggy("LG", 13)
// lgg.name = "Foo"
console.log(lgg.age)

class DogList {
    private doggies: Doggy[] = [];

    static instance: DogList = new DogList();

    private constructor() {};

    static  addDog(dog: Doggy) {
        DogList.instance.doggies.push(dog)
    }

    getDogs() {
        return this.doggies;
    }
}

DogList.addDog(lgg); 
console.log(DogList.instance.getDogs())

// const dl = new DogList();