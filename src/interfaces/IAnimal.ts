export interface IAnimal {
    name: string;
    type: string;
    age: number;
    health: number;

    feed(): void;

    checkHealth(): void;
}