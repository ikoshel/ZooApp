class AdvertisementDepartment {
    private clientFactory: ClientFactory;

    constructor(clientFactory: ClientFactory) {
        this.clientFactory = clientFactory;
    }

    addClient(name: string, contact: string): IClient {
        const client = this.clientFactory.createClient(name, contact);
        console.log(`Advertisement Department: Added a new client: ${client.name}`);
        return client;
    }

    // Інші методи та логіка, що стосуються рекламного відділу
}