export interface ITicket {
    id: number;
    type: string;
    price: number;
    used: boolean;

    validate(): void;
}