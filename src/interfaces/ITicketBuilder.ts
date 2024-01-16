export interface ITicketBuilder {
    setID(id: number): void;

    setType(type: string): void;

    setPrice(price: number): void;
}