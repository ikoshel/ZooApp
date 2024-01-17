import {Ticket} from "../classes/Ticket";

export interface IClient {
    name: string;
    contact: string;
    tickets: Ticket[];

    buyTicket(id: number, type: string, price: number): void;
}