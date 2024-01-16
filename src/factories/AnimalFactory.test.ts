import {AnimalFactory} from './AnimalFactory';
import {IAnimal} from '../interfaces/IAnimal';

describe('AnimalFactory', () => {
    let animalFactory: AnimalFactory;

    beforeEach(() => {
        animalFactory = AnimalFactory.getInstance();
    });

    test('should create an animal correctly', () => {
        const animal: IAnimal = animalFactory.createAnimal('Lion', 'Mammal', 5, 100);
        expect(animal.name).toBe('Lion');
        expect(animal.type).toBe('Mammal');
        expect(animal.age).toBe(5);
        expect(animal.health).toBe(100);
    });

    test('should throw an error when creating an animal with invalid parameters', () => {
        expect(() => animalFactory.createAnimal('', 'Mammal', 5, 100)).toThrowError(`Invalid parameters for creating an animal.`);
        expect(() => animalFactory.createAnimal('Lion', '', 5, 100)).toThrowError(`Invalid parameters for creating an animal.`);
        expect(() => animalFactory.createAnimal('Lion', 'Mammal', -1, 100)).toThrowError(`Invalid parameters for creating an animal.`);
        expect(() => animalFactory.createAnimal('Lion', 'Mammal', 5, -1)).toThrowError(`Invalid parameters for creating an animal.`);
    });
});