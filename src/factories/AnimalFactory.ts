import {IAnimal} from "../interfaces/IAnimal";
import {Animal} from "../classes/Animal";

export class AnimalFactory {
    private static instance: AnimalFactory;
    private cache: Map<string, IAnimal> = new Map();

    private constructor() {
    }

    static getInstance(): AnimalFactory {
        if (!AnimalFactory.instance) {
            AnimalFactory.instance = new AnimalFactory();
        }
        return AnimalFactory.instance;
    }

    createAnimal(name: string, type: string, age: number, health: number): IAnimal {
        if (name.length === 0 || type.length === 0 || age < 0 || health < 0) {
            throw new Error(`Invalid parameters for creating an animal.`);
        }
        let cacheKey = `${type}_${age}_${health}`;
        if (!this.cache.has(cacheKey)) {
            const animal = new Animal(name, type, age, health);
            this.cache.set(cacheKey, animal);
            return animal;
        }
        const cachedAnimal = this.cache.get(cacheKey);
        return Object.assign(Object.create(Object.getPrototypeOf(cachedAnimal)), cachedAnimal);
    }
}