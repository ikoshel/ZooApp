interface ITicket {
    id: number;
    type: string; // Тип квитка: 'дорослий', 'дитячий', 'сімейний'
    price: number;
    validate(): void; // Метод, що використовується для валідації квитка при вході
}