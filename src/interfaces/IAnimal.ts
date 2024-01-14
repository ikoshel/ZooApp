interface IAnimal {
    name: string;
    type: string;
    age: number;
    health: number; // Здоров'я можна вимірювати за шкалою від 1 до 100
    feed(): void; // Метод зв'язаний з годуванням тварини
    checkHealth(): void; // Метод пов'язаний з перевіркою стану здоров'я тварини
}