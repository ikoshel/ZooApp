import {Director} from "./src/utils/Director";
import {TicketBuilder} from "./src/utils/Builder";
import {TicketBooth} from "./src/departments/TicketBooth";
import {AdvertisementDepartment} from "./src/departments/AdvertisementDepartment";
import {Administration} from "./src/departments/Administration";
import {AnimalFactory} from "./src/factories/AnimalFactory";
import {ClientFactory} from "./src/factories/ClientFactory";
import {EmployeeFactory} from "./src/factories/EmployeeFactory";
import {TicketFactory} from "./src/factories/TicketFactory";
import {ADULT_TICKET_PRICE, CHILD_TICKET_PRICE, FAMILY_TICKET_PRICE} from "./src/TicketPrices";

// Initialize factories
const animalFactory = AnimalFactory.getInstance();
const clientFactory = ClientFactory.getInstance();
const employeeFactory = EmployeeFactory.getInstance();
const ticketFactory = TicketFactory.getInstance();

// Initialize departments
const administration = new Administration(employeeFactory);
const advertisementDepartment = new AdvertisementDepartment(clientFactory);
const ticketBooth = new TicketBooth(ticketFactory);

// Builder pattern in action
const director = Director.getInstance();
const ticketBuilder = TicketBuilder.getInstance();
director.setBuilder(ticketBuilder);

// Application logic
function runApp(): void {
    // Hiring several new employees
    let employee = administration.hireEmployee("John Doe", "Manager", "john@zoo.com");
    let vet = administration.hireEmployee("Jane Smith", "Vet", "jane@zoo.com");

    // Adding several new clients
    let client = advertisementDepartment.addClient("Alice Johnson", "alice@gmail.com");
    let childClient = advertisementDepartment.addClient("Bob Brown", "bob@gmail.com");

    // Issuing several tickets
    director.constructAdultTicket(1, ADULT_TICKET_PRICE);
    let adultTicket = ticketBuilder.build();
    director.constructChildTicket(2, CHILD_TICKET_PRICE);
    let childTicket = ticketBuilder.build();

    // Issuing a family ticket
    director.constructFamilyTicket(3, FAMILY_TICKET_PRICE);
    let familyTicket = ticketBuilder.build();

    // Clients buy tickets through the ticket booth
    ticketBooth.sellTicket(client, adultTicket.id, adultTicket.type, adultTicket.price);
    ticketBooth.sellTicket(childClient, childTicket.id, childTicket.type, childTicket.price);

    // A client buys a family ticket through the ticket booth
    ticketBooth.sellTicket(client, familyTicket.id, familyTicket.type, familyTicket.price);

    // Adding several animals
    let tiger = animalFactory.createAnimal("Stripes", "Tiger", 5, 95);
    let penguin = animalFactory.createAnimal("Waddles", "Penguin", 8, 87);
    tiger.feed();
    penguin.feed();

    // Employees do their work
    employee.work();
    vet.work();
}

runApp();