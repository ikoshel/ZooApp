class Administration {
    private employeeFactory: EmployeeFactory;

    constructor(employeeFactory: EmployeeFactory) {
        this.employeeFactory = employeeFactory;
    }

    hireEmployee(name: string, position: string, contact: string): IEmployee {
        const employee = this.employeeFactory.createEmployee(name, position, contact);
        console.log(`Administration: Hired a new Employee: ${employee.name}`);
        return employee;
    }

    // Інші методи і логіка, що стосуються адміністрації
}