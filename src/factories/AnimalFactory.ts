class AnimalFactory {
    private cache: Map<string, IAnimal> = new Map();

    createAnimal(name: string, type: string, age: number, health: number): IAnimal {
        let cacheKey = `${type}_${age}_${health}`;
        if (!this.cache.has(cacheKey)) {
            const animal = new Animal(name, type, age, health);
            this.cache.set(cacheKey, animal);
            return animal;
        }
        // Create a new object with the same prototype and properties as the cached animal
        const cachedAnimal = this.cache.get(cacheKey);
        return Object.assign(Object.create(Object.getPrototypeOf(cachedAnimal)), cachedAnimal);
    }
}