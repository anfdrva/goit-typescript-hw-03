// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);


// export {};


class Key{
    private signature: number;
    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number{
        return this.signature;
    }
}

class Person{
    constructor(private key: Key) {
        this.key = key;
    }

    getKey() {
        return this.key;
    }
}

abstract class House{
    protected tenants: Person[];
    protected door: boolean;

    constructor(protected key: Key) {
        this.key = key;
    }

    comeIn(newTenant: Person) {
        if (this.door) {
            this.tenants.push(newTenant);
        }
    }

    abstract openDoor(keyToEnterTheHouse: Key): void;
}

class MyHouse extends House{
    openDoor(keyToEnterTheHouse: Key): void {
        if (this.key.getSignature() === keyToEnterTheHouse.getSignature()) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export { };