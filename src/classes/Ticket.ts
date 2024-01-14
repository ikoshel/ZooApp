class Ticket implements ITicket {
    id: number;
    type: string;
    price: number;

    constructor(id: number, type: string, price: number) {
        this.id = id;
        this.type = type;
        this.price = price;
    }

    validate(): void {
        console.log(`Ticket ${this.id} of type ${this.type} is validated.`);
        // Логіка щодо валідації квитка
    }
}