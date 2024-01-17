import { Administration } from './Administration';
import { EmployeeFactory } from '../factories/EmployeeFactory';
import { IEmployee } from '../interfaces/IEmployee';

describe('Administration', () => {
    let administration: Administration;
    let employeeFactory: EmployeeFactory;

    beforeEach(() => {
        employeeFactory = EmployeeFactory.getInstance();
        administration = new Administration(employeeFactory);
    });

    test('should hire an employee correctly', () => {
        const employee: IEmployee = administration.hireEmployee('John Doe', 'Manager', 'john.doe@example.com');
        expect(employee.name).toBe('John Doe');
        expect(employee.position).toBe('Manager');
        expect(employee.contact).toBe('john.doe@example.com');
    });

    test('should fire an employee correctly', () => {
        administration.hireEmployee('John Doe', 'Manager', 'john.doe@example.com');
        administration.fireEmployee('John Doe');
        expect(() => administration.getEmployee('John Doe')).toThrowError(`Employee John Doe not found.`);
    });

    test('should promote an employee correctly', () => {
        administration.hireEmployee('John Doe', 'Manager', 'john.doe@example.com');
        administration.promoteEmployee('John Doe', 'Senior Manager');
        const employee: IEmployee = administration.getEmployee('John Doe');
        expect(employee.position).toBe('Senior Manager');
    });

    test('should get an employee correctly', () => {
        administration.hireEmployee('John Doe', 'Manager', 'john.doe@example.com');
        const employee: IEmployee = administration.getEmployee('John Doe');
        expect(employee.name).toBe('John Doe');
        expect(employee.position).toBe('Manager');
        expect(employee.contact).toBe('john.doe@example.com');
    });
});