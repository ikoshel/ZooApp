import {ITicketBuilder} from "../interfaces/ITicketBuilder";
import {TicketBuilder} from "./Builder";
import {ADULT_TICKET_TYPE, CHILD_TICKET_TYPE, FAMILY_TICKET_TYPE} from "../TicketTypes";

export class Director {
    private static instance: Director;
    private builder: ITicketBuilder;

    private constructor() {
        this.builder = TicketBuilder.getInstance();
    }

    public static getInstance(): Director {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    setBuilder(builder: ITicketBuilder): void {
        this.builder = builder;
    }

    constructAdultTicket(id: number, price: number): void {
        this.builder.setID(id);
        this.builder.setType(ADULT_TICKET_TYPE);
        this.builder.setPrice(price);
    }

    constructChildTicket(id: number, price: number): void {
        this.builder.setID(id);
        this.builder.setType(CHILD_TICKET_TYPE);
        this.builder.setPrice(price);
    }

    constructFamilyTicket(id: number, price: number): void {
        this.builder.setID(id);
        this.builder.setType(FAMILY_TICKET_TYPE);
        this.builder.setPrice(price);
    }
}