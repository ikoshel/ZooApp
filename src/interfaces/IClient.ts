interface IClient {
    name: string;
    contact: string;
    buyTicket(type: string): void; // Метод, який дозволяє клієнту купувати квитки
}