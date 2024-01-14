interface ITicketBuilder {
    setID(id: number): void;
    setType(type: string): void;
    setPrice(price: number): void;
}

class TicketBuilder implements ITicketBuilder {
    private id: number;
    private type: string;
    private price: number;

    setID(id: number): void {
        this.id = id;
    }

    setType(type: string): void {
        this.type = type;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    build(): Ticket {
        return new Ticket(this.id, this.type, this.price);
    }
}