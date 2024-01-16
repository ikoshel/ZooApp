import { Client } from './Client';

describe('Client', () => {
    let client: Client;

    beforeEach(() => {
        client = new Client('John Doe', 'john.doe@example.com');
    });

    test('should buy a ticket', () => {
        client.buyTicket(1, 'adult', 500);
        expect(client.tickets.length).toBe(1);
    });

    test('should throw error when ticket type is empty', () => {
        expect(() => client.buyTicket(1, '', 500)).toThrowError('Ticket type cannot be empty.');
    });

    test('should throw error when ticket price is negative', () => {
        expect(() => client.buyTicket(1, 'adult', -500)).toThrowError('Ticket price cannot be negative. Received: -500');
    });

    test('should throw error when ticket type is invalid', () => {
        expect(() => client.buyTicket(1, 'invalid', 500)).toThrowError('Invalid ticket type.');
    });
});