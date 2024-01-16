export interface ITicket {
    id: number;
    type: string;
    price: number;

    validate(): void;
}