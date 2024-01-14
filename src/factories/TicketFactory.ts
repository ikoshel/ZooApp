class TicketFactory {
    createTicket(id: number, type: string, price: number): ITicket {
        return new Ticket(id, type, price);
    }
}