class Employee implements IEmployee {
    name: string;
    position: string;
    contact: string;

    constructor(name: string, position: string, contact: string) {
        this.name = name;
        this.position = position;
        this.contact = contact;
    }

    work(): void {
        console.log(`Employee ${this.name} is working.`);
        // Логіка щодо того, що працівник виконує роботу
    };
}