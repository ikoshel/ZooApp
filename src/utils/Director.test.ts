import { Director } from './Director';
import { TicketBuilder } from './Builder';
import { ADULT_TICKET_TYPE, CHILD_TICKET_TYPE, FAMILY_TICKET_TYPE } from '../TicketTypes';
import { Ticket } from '../classes/Ticket';

describe('Director', () => {
    let director: Director;
    let ticketBuilder: TicketBuilder;

    beforeEach(() => {
        director = Director.getInstance();
        ticketBuilder = TicketBuilder.getInstance();
        director.setBuilder(ticketBuilder);
    });

    test('should construct an adult ticket correctly', () => {
        director.constructAdultTicket(1, 100);
        const ticket: Ticket = ticketBuilder.build();
        expect(ticket.id).toBe(1);
        expect(ticket.type).toBe(ADULT_TICKET_TYPE);
        expect(ticket.price).toBe(100);
    });

    test('should construct a child ticket correctly', () => {
        director.constructChildTicket(1, 50);
        const ticket: Ticket = ticketBuilder.build();
        expect(ticket.id).toBe(1);
        expect(ticket.type).toBe(CHILD_TICKET_TYPE);
        expect(ticket.price).toBe(50);
    });

    test('should construct a family ticket correctly', () => {
        director.constructFamilyTicket(1, 200);
        const ticket: Ticket = ticketBuilder.build();
        expect(ticket.id).toBe(1);
        expect(ticket.type).toBe(FAMILY_TICKET_TYPE);
        expect(ticket.price).toBe(200);
    });
});