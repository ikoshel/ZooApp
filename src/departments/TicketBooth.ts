import {ITicket} from "../interfaces/ITicket";
import {Client} from "../classes/Client";
import {TicketFactory} from "../factories/TicketFactory";

export class TicketBooth {
    private tickets: ITicket[] = [];

    constructor(private ticketFactory: TicketFactory) {
        if (!ticketFactory) {
            throw new Error(`TicketFactory is undefined.`);
        }
        this.ticketFactory = ticketFactory;
    }

    sellTicket(client: Client, id: number, type: string, price: number): void {
        // Logic to sell ticket
        client.buyTicket(id, type, price);
    }

    issueTicket(id: number, type: string, price: number): ITicket {
        try {
            const ticket = this.ticketFactory.createTicket(id, type, price);
            this.tickets.push(ticket);
            console.log(`TicketBooth: Issued a new ticket of type: ${ticket.type}`);
            return ticket;
        } catch (error: any) {
            console.error(`Error while issuing ticket: ${error.message}`);
            throw error; // Re-throw the error to propagate it further if needed
        }
    }

    validateTicket(id: number): void {
        const ticket = this.tickets.find(ticket => ticket.id === id);
        if (!ticket) {
            throw new Error(`Ticket with id ${id} not found.`);
        }
        ticket.validate();
    }

    refundTicket(id: number): void {
        const index = this.tickets.findIndex(ticket => ticket.id === id);
        if (index === -1) {
            throw new Error(`Ticket with id ${id} not found.`);
        }
        this.tickets.splice(index, 1);
        console.log(`TicketBooth: Refunded ticket with id: ${id}`);
    }

    getTicket(id: number): ITicket {
        const ticket = this.tickets.find(ticket => ticket.id === id);
        if (!ticket) {
            throw new Error(`Ticket with id ${id} not found.`);
        }
        return ticket;
    }
}