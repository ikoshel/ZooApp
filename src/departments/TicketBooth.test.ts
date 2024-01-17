import { TicketBooth } from './TicketBooth';
import { TicketFactory } from '../factories/TicketFactory';
import { Client } from '../classes/Client';

describe('TicketBooth', () => {
    let ticketBooth: TicketBooth;
    let ticketFactory: TicketFactory;
    let client: Client;

    beforeEach(() => {
        ticketFactory = TicketFactory.getInstance()
        ticketBooth = new TicketBooth(ticketFactory);
        client = new Client('John Doe', 'john.doe@example.com');
    });

    test('should issue a ticket correctly', () => {
        const ticket = ticketBooth.issueTicket(1, 'Adult', 50);
        expect(ticket.id).toBe(1);
        expect(ticket.type).toBe('Adult');
        expect(ticket.price).toBe(50);
    });

    test('should validate a ticket correctly', () => {
        ticketBooth.issueTicket(1, 'Adult', 50);
        ticketBooth.validateTicket(1);
        const ticket = ticketBooth.getTicket(1);
        expect(ticket.used).toBe(true);
    });

    test('should refund a ticket correctly', () => {
        ticketBooth.issueTicket(1, 'Adult', 50);
        ticketBooth.refundTicket(1);
        expect(() => ticketBooth.getTicket(1)).toThrowError(`Ticket with id 1 not found.`);
    });

    test('should get a ticket correctly', () => {
        ticketBooth.issueTicket(1, 'Adult', 50);
        const ticket = ticketBooth.getTicket(1);
        expect(ticket.id).toBe(1);
        expect(ticket.type).toBe('Adult');
        expect(ticket.price).toBe(50);
    });
});