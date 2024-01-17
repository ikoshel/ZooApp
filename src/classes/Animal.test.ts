import { Animal } from './Animal';

describe('Animal', () => {
    let animal: Animal;

    beforeEach(() => {
        animal = new Animal('Lion', 'Carnivore', 5, 80);
    });

    test('should eat food', () => {
        animal.feed();
        expect(animal.checkHealth()).toBe(90);
    });

    test('should be full health after feeding', () => {
        animal.feed();
        animal.feed();
        expect(() => animal.feed()).toThrowError(`Animal Lion is already full health. It does not need feeding.`);
    });

    test('should have correct health after feeding', () => {
        animal.feed();
        expect(animal.checkHealth()).toBe(90);
    });
});