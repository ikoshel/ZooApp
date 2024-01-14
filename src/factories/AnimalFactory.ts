class AnimalFactory {
    createAnimal(name: string, type: string, age: number, health: number): IAnimal {
        return new Animal(name, type, age, health);
    }
}