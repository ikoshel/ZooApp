import { TicketFactory } from './TicketFactory';
import { ITicket } from '../interfaces/ITicket';

describe('TicketFactory', () => {
    let ticketFactory: TicketFactory;

    beforeEach(() => {
        ticketFactory = TicketFactory.getInstance();
    });

    test('should create a ticket correctly', () => {
        const ticket: ITicket = ticketFactory.createTicket(1, 'Regular', 100);
        expect(ticket.id).toBe(1);
        expect(ticket.type).toBe('Regular');
        expect(ticket.price).toBe(100);
    });
});