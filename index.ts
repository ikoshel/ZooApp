// Ініціалізуйте фабрики
const animalFactory = new AnimalFactory();
const clientFactory = new ClientFactory();
const employeeFactory = new EmployeeFactory();
const ticketFactory = new TicketFactory();

// Ініціалізуйте департменти
const administration = new Administration(employeeFactory);
const advertisementDepartment = new AdvertisementDepartment(clientFactory);
const ticketBooth = new TicketBooth(ticketFactory);

// Шаблон Builder у дії
const director = new Director();
const ticketBuilder = new TicketBuilder();
director.setBuilder(ticketBuilder);

// Логіка додатку
function runApp(): void {
    console.log("Running Zoo Application...\n");

    // Додаємо декілька нових працівників
    let employee: IEmployee = administration.hireEmployee("John Doe", "Manager", "john@zoo.com");
    let vet: IEmployee = administration.hireEmployee("Jane Smith", "Vet", "jane@zoo.com");

    // Додаємо декілька нових клієнтів
    let client: IClient = advertisementDepartment.addClient("Alice Johnson", "alice@gmail.com");
    let childClient: IClient = advertisementDepartment.addClient("Bob Brown", "bob@gmail.com");

    // Випускаємо декілька квитків
    director.constructTicket(1, "adult", 500);
    let adultTicket: ITicket = ticketBuilder.build();
    director.constructTicket(2, "child", 250);
    let childTicket: ITicket = ticketBuilder.build();

    // Продажа квитків
    client.buyTicket(adultTicket.type);
    childClient.buyTicket(childTicket.type);

    // Додаємо кілька тварин
    let tiger: IAnimal = animalFactory.createAnimal("Stripes", "Tiger", 5, 95);
    let penguin: IAnimal = animalFactory.createAnimal("Waddles", "Penguin", 8, 87);
    tiger.feed();
    penguin.feed();

    // Працівники виконують роботу
    employee.work();
    vet.work();
}

runApp();