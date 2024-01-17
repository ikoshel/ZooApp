import { AdvertisementDepartment } from './AdvertisementDepartment';
import { ClientFactory } from '../factories/ClientFactory';
import { IClient } from '../interfaces/IClient';

describe('AdvertisementDepartment', () => {
    let advertisementDepartment: AdvertisementDepartment;
    let clientFactory: ClientFactory;

    beforeEach(() => {
        clientFactory = ClientFactory.getInstance();
        advertisementDepartment = new AdvertisementDepartment(clientFactory);
    });

    test('should add a client correctly', () => {
        const client: IClient = advertisementDepartment.addClient('John Doe', 'john.doe@example.com');
        expect(client.name).toBe('John Doe');
        expect(client.contact).toBe('john.doe@example.com');
    });

    test('should remove a client correctly', () => {
        advertisementDepartment.addClient('John Doe', 'john.doe@example.com');
        advertisementDepartment.removeClient('John Doe');
        expect(() => advertisementDepartment.getClient('John Doe')).toThrowError(`Client John Doe not found.`);
    });

    test('should update a client contact correctly', () => {
        advertisementDepartment.addClient('John Doe', 'john.doe@example.com');
        advertisementDepartment.updateClientContact('John Doe', 'johndoe@example.com');
        const client: IClient = advertisementDepartment.getClient('John Doe');
        expect(client.contact).toBe('johndoe@example.com');
    });

    test('should get a client correctly', () => {
        advertisementDepartment.addClient('John Doe', 'john.doe@example.com');
        const client: IClient = advertisementDepartment.getClient('John Doe');
        expect(client.name).toBe('John Doe');
        expect(client.contact).toBe('john.doe@example.com');
    });
});