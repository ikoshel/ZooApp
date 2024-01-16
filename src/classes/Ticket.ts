import {ITicket} from "../interfaces/ITicket";
export class Ticket implements ITicket {
    id: number;
    type: string;
    price: number;
    used: boolean;

    constructor(id: number, type: string, price: number) {
        if (id < 0) {
            throw new Error(`Ticket id cannot be negative. Received: ${id}`);
        }
        if (type.length === 0) {
            throw new Error(`Ticket type cannot be empty.`);
        }
        if (price < 0) {
            throw new Error(`Ticket price cannot be negative. Received: ${price}`);
        }
        this.id = id;
        this.type = type;
        this.price = price;
        this.used = false;
    }

    validate(): void {
        if (this.used) {
            throw new Error(`Ticket ${this.id} of type ${this.type} has already been used.`);
        }
        console.log(`Ticket ${this.id} of type ${this.type} is validated.`);
        this.used = true;
    }
}