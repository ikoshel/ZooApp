class EmployeeFactory {
    createEmployee(name: string, position: string, contact: string): IEmployee {
        return new Employee(name, position, contact);
    }
}