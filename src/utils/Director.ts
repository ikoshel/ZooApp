class Director {
    private builder: ITicketBuilder;

    setBuilder(builder: ITicketBuilder): void {
        this.builder = builder;
    }

    constructTicket(id: number, type: string, price: number): void {
        this.builder.setID(id);
        this.builder.setType(type);
        this.builder.setPrice(price);
    }
}