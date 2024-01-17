import {ITicketBuilder} from "../interfaces/ITicketBuilder";
import {Ticket} from "../classes/Ticket";

export class TicketBuilder implements ITicketBuilder {
    private static instance: TicketBuilder;
    private id: number;
    private type: string;
    private price: number;

    private constructor() {
        this.id = 0;
        this.type = '';
        this.price = 0;
    }

    public static getInstance(): TicketBuilder {
        if (!TicketBuilder.instance) {
            TicketBuilder.instance = new TicketBuilder();
        }
        return TicketBuilder.instance;
    }

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