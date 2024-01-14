class EmployeeFactory {
    private cache: Map<string, IEmployee> = new Map();

    createEmployee(name: string, position: string, contact: string): IEmployee {
        let cacheKey = `${position}_${contact}`;
        if (!this.cache.has(cacheKey)) {
            const employee = new Employee(name, position, contact);
            this.cache.set(cacheKey, employee);
            return employee;
        }
        const cachedEmployee = this.cache.get(cacheKey);
        return Object.assign(Object.create(Object.getPrototypeOf(cachedEmployee)), cachedEmployee);
    }
}