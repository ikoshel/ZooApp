import { TicketBuilder } from './Builder';
import { Ticket } from '../classes/Ticket';

describe('TicketBuilder', () => {
    let ticketBuilder: TicketBuilder;

    beforeEach(() => {
        ticketBuilder = TicketBuilder.getInstance();
    });

    test('should create a ticket correctly', () => {
        ticketBuilder.setID(1);
        ticketBuilder.setType('Regular');
        ticketBuilder.setPrice(100);
        const ticket: Ticket = ticketBuilder.build();
        expect(ticket.id).toBe(1);
        expect(ticket.type).toBe('Regular');
        expect(ticket.price).toBe(100);
    });
});