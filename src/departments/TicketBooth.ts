class TicketBooth {
    private ticketFactory: TicketFactory;

    constructor(ticketFactory: TicketFactory) {
        this.ticketFactory = ticketFactory;
    }

    issueTicket(id: number, type: string, price: number): ITicket {
        const ticket = this.ticketFactory.createTicket(id, type, price);
        console.log(`TicketBooth: Issued a new ticket of type: ${ticket.type}`);
        return ticket;
    }

    // more methods and logic relating to ticketing booth
}