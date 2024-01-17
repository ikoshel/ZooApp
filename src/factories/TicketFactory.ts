import {ITicket} from "../interfaces/ITicket";
import {Ticket} from "../classes/Ticket";

export class TicketFactory {
    private static instance: TicketFactory;

    private constructor() {
    }

    public static getInstance(): TicketFactory {
        if (!TicketFactory.instance) {
            TicketFactory.instance = new TicketFactory();
        }
        return TicketFactory.instance;
    }

    createTicket(id: number, type: string, price: number): ITicket {
        return new Ticket(id, type, price);
    }
}