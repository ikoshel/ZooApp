import {IClient} from "../interfaces/IClient";
import {ClientFactory} from "../factories/ClientFactory";

export class AdvertisementDepartment {
    private clients: IClient[] = [];

    constructor(private clientFactory: ClientFactory) {
        if (!clientFactory) {
            throw new Error(`ClientFactory is undefined.`);
        }
        this.clientFactory = clientFactory;
    }

    addClient(name: string, contact: string): IClient {
        if (name.length === 0 || contact.length === 0) {
            throw new Error(`Invalid parameters for adding a client.`);
        }
        const client = this.clientFactory.createClient(name, contact);
        this.clients.push(client);
        console.log(`Advertisement Department: Added a new client: ${client.name}`);
        return client;
    }

    removeClient(name: string): void {
        const index = this.clients.findIndex(client => client.name === name);
        if (index === -1) {
            throw new Error(`Client ${name} not found.`);
        }
        this.clients.splice(index, 1);
        console.log(`Advertisement Department: Removed client: ${name}`);
    }

    updateClientContact(name: string, newContact: string): void {
        const client = this.clients.find(client => client.name === name);
        if (!client) {
            throw new Error(`Client ${name} not found.`);
        }
        client.contact = newContact;
        console.log(`Advertisement Department: Updated contact of client ${name} to ${newContact}`);
    }

    getClient(name: string): IClient {
        const client = this.clients.find(client => client.name === name);
        if (!client) {
            throw new Error(`Client ${name} not found.`);
        }
        return client;
    }
}