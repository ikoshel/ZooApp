import {IEmployee} from "../interfaces/IEmployee";

export class Employee implements IEmployee {
    name: string;
    position: string;
    contact: string;

    constructor(name: string, position: string, contact: string) {
        if (name.length === 0) {
            throw new Error(`Employee name cannot be empty.`);
        }
        if (position.length === 0) {
            throw new Error(`Employee position cannot be empty.`);
        }
        if (contact.length === 0) {
            throw new Error(`Employee contact cannot be empty.`);
        }
        this.name = name;
        this.position = position;
        this.contact = contact;
    }

    work(): void {
        switch (this.position) {
            case 'Manager':
                console.log(`Employee ${this.name} is managing the work.`);
                this.manageWork();
                break;
            case 'Vet':
                console.log(`Employee ${this.name} is taking care of the animals.`);
                this.careForAnimals();
                break;
            default:
                console.log(`Employee ${this.name} is working.`);
                this.doWork();
                break;
        }
    }

    manageWork(): void {
        console.log(`Assigning tasks to employees...`);
    }

    careForAnimals(): void {
        console.log(`Checking health of animals...`);
    }

    doWork(): void {
        console.log(`Performing assigned tasks...`);
    }
}