class Client implements IClient {
    name: string;
    contact: string;

    constructor(name: string, contact: string) {
        this.name = name;
        this.contact = contact;
    }

    buyTicket(type: string): void {
        console.log(`${this.name} has bought a ${type} ticket.`);
        // Логіка для купівлі квитка
    }
}