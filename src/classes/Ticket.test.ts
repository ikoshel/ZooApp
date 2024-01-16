import { Ticket } from './Ticket';

describe('Ticket', () => {
    let ticket: Ticket;

    beforeEach(() => {
        ticket = new Ticket(1, 'Adult', 50);
    });

    test('should have correct id', () => {
        expect(ticket.id).toBe(1);
    });

    test('should have correct type', () => {
        expect(ticket.type).toBe('Adult');
    });

    test('should have correct price', () => {
        expect(ticket.price).toBe(50);
    });

    test('should be unused initially', () => {
        expect(ticket.used).toBe(false);
    });

    test('should validate correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        ticket.validate();
        expect(consoleSpy).toHaveBeenCalledWith('Ticket 1 of type Adult is validated.');
        expect(ticket.used).toBe(true);
    });

    test('should throw error when validating used ticket', () => {
        ticket.validate();
        expect(() => ticket.validate()).toThrowError('Ticket 1 of type Adult has already been used.');
    });
});