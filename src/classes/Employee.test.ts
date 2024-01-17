import { Employee } from './Employee';

describe('Employee', () => {
    let employee: Employee;

    beforeEach(() => {
        employee = new Employee('John Doe', 'Manager', 'john.doe@example.com');
    });

    test('should have correct name', () => {
        expect(employee.name).toBe('John Doe');
    });

    test('should have correct position', () => {
        expect(employee.position).toBe('Manager');
    });

    test('should have correct contact', () => {
        expect(employee.contact).toBe('john.doe@example.com');
    });

    test('should work correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        employee.work();
        expect(consoleSpy).toHaveBeenCalledWith('Employee John Doe is managing the work.');
    });

    test('should manage work correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        employee.manageWork();
        expect(consoleSpy).toHaveBeenCalledWith('Assigning tasks to employees...');
    });
});