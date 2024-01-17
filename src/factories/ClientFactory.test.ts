import { ClientFactory } from './ClientFactory';
import { IClient } from '../interfaces/IClient';

describe('ClientFactory', () => {
    let clientFactory: ClientFactory;

    beforeEach(() => {
        clientFactory = ClientFactory.getInstance();
    });

    test('should create a client correctly', () => {
        const client: IClient = clientFactory.createClient('John Doe', 'john.doe@example.com');
        expect(client.name).toBe('John Doe');
        expect(client.contact).toBe('john.doe@example.com');
    });
});