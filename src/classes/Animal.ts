import {IAnimal} from "../interfaces/IAnimal";

export class Animal implements IAnimal {
    name: string;
    type: string;
    age: number;
    health: number;

    constructor(name: string, type: string, age: number, health: number) {
        if (age < 0) {
            throw new Error(`Animal age cannot be negative. Received: ${age}`);
        }
        if (health < 0 || health > 100) {
            throw new Error(`Animal health must be between 0 and 100. Received: ${health}`);
        }
        if (age < 0) {
            throw new Error(`Animal age cannot be negative. Received: ${age}`);
        }
        if (health < 0 || health > 100) {
            throw new Error(`Animal health must be between 0 and 100. Received: ${health}`);
        }
        this.name = name;
        this.type = type;
        this.age = age;
        this.health = health;
    }

    feed(): void {
        if (this.health >= 100) {
            throw new Error(`Animal ${this.name} is already full health. It does not need feeding.`);
        }

        try {
            this.health = Math.min(this.health + 10, 100);
        } catch (error: any) {
            console.error(`Error while feeding ${this.name}: ${error.message}`);
        }
    }

    checkHealth(): void {
        console.log(`Animal ${this.name} health is ${this.health}`);
    }
}