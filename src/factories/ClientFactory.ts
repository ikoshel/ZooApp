import {IClient} from "../interfaces/IClient";
import {Client} from "../classes/Client";

export class ClientFactory {
    private static instance: ClientFactory;

    private constructor() {
    }

    public static getInstance(): ClientFactory {
        if (!ClientFactory.instance) {
            ClientFactory.instance = new ClientFactory();
        }
        return ClientFactory.instance;
    }

    createClient(name: string, contact: string): IClient {
        return new Client(name, contact);
    }
}