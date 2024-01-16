import { EmployeeFactory } from './EmployeeFactory';
import { IEmployee } from '../interfaces/IEmployee';

describe('EmployeeFactory', () => {
    let employeeFactory: EmployeeFactory;

    beforeEach(() => {
        employeeFactory = EmployeeFactory.getInstance();
    });

    test('should create an employee correctly', () => {
        const employee: IEmployee = employeeFactory.createEmployee('John Doe', 'Manager', 'john.doe@example.com');
        expect(employee.name).toBe('John Doe');
        expect(employee.position).toBe('Manager');
        expect(employee.contact).toBe('john.doe@example.com');
    });

    test('should return a different instance when creating an employee with different parameters', () => {
        const employee1: IEmployee = employeeFactory.createEmployee('John Doe', 'Manager', 'john.doe@example.com');
        const employee2: IEmployee = employeeFactory.createEmployee('Jane Doe', 'Manager', 'jane.doe@example.com');
        expect(employee1).not.toBe(employee2);
    });
});