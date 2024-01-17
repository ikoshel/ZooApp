import {IClient} from "../interfaces/IClient";
import {Ticket} from "./Ticket";
import {TicketBuilder} from "../utils/Builder";
import {Director} from "../utils/Director";
import {ADULT_TICKET_TYPE, CHILD_TICKET_TYPE, FAMILY_TICKET_TYPE} from "../TicketTypes";

export class Client implements IClient {
    name: string;
    contact: string;
    tickets: Ticket[] = [];

    constructor(name: string, contact: string) {
        if (name.length === 0) {
            throw new Error(`Client name cannot be empty.`);
        }
        if (contact.length === 0) {
            throw new Error(`Client contact cannot be empty.`);
        }
        this.name = name;
        this.contact = contact;
    }

    buyTicket(id: number, type: string, price: number): void {
        if (type.length === 0) {
            throw new Error(`Ticket type cannot be empty.`);
        }
        if (price < 0) {
            throw new Error(`Ticket price cannot be negative. Received: ${price}`);
        }
        const builder = TicketBuilder.getInstance();
        builder.setID(id);
        builder.setType(type);
        builder.setPrice(price);

        const director = Director.getInstance();
        director.setBuilder(builder);

        if (type === ADULT_TICKET_TYPE) {
            director.constructAdultTicket(id, price);
        } else if (type === CHILD_TICKET_TYPE) {
            director.constructChildTicket(id, price);
        } else if (type === FAMILY_TICKET_TYPE) {
            director.constructFamilyTicket(id, price);
        } else {
            throw new Error(`Invalid ticket type.`);
        }

        const ticket = builder.build();
        this.tickets.push(ticket);

        console.log(`${this.name} has bought a ${type} ticket.`);
    }
}