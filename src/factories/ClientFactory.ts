class ClientFactory {
    createClient(name: string, contact: string): IClient {
        return new Client(name, contact);
    }
}