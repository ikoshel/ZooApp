class Animal implements IAnimal {
    name: string;
    type: string;
    age: number;
    health: number;

    constructor(name: string, type: string, age: number, health: number) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.health = health;
    }

    feed(): void {
        console.log(`${this.name} is being fed.`);
        // логіка годування тварини
    }

    checkHealth(): void {
        console.log(`The health of ${this.name} is ${this.health}.`);
        // логіка перевірки здоров'я
    }
}