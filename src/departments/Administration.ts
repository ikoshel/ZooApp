import {IEmployee} from "../interfaces/IEmployee";
import {EmployeeFactory} from "../factories/EmployeeFactory";

export class Administration {
    private employees: IEmployee[] = [];

    constructor(private employeeFactory: EmployeeFactory) {
        if (!employeeFactory) {
            throw new Error(`EmployeeFactory is undefined.`);
        }
        this.employeeFactory = employeeFactory;
    }

    hireEmployee(name: string, position: string, contact: string): IEmployee {
        if (name.length === 0 || position.length === 0 || contact.length === 0) {
            throw new Error(`Invalid parameters for hiring an employee.`);
        }
        const employee = this.employeeFactory.createEmployee(name, position, contact);
        this.employees.push(employee);
        console.log(`Administration: Hired a new Employee: ${employee.name}`);
        return employee;
    }

    fireEmployee(name: string): void {
        const index = this.employees.findIndex(employee => employee.name === name);
        if (index === -1) {
            throw new Error(`Employee ${name} not found.`);
        }
        this.employees.splice(index, 1);
        console.log(`Administration: Fired Employee: ${name}`);
    }

    promoteEmployee(name: string, newPosition: string): void {
        const employee = this.employees.find(employee => employee.name === name);
        if (!employee) {
            throw new Error(`Employee ${name} not found.`);
        }
        employee.position = newPosition;
        console.log(`Administration: Promoted Employee ${name} to ${newPosition}`);
    }

    getEmployee(name: string): IEmployee {
        const employee = this.employees.find(employee => employee.name === name);
        if (!employee) {
            throw new Error(`Employee ${name} not found.`);
        }
        return employee;
    }
}