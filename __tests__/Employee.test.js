const Employee = require("../lib/Employee")

test("Create Employee object", () => {
    const employee = new Employee("Jane", 626, "Jane@jane.com")
    expect(employee.name).toBe("Jane");
    expect(employee.id).toBe(626);
    expect(employee.email).toBe("Jane@jane.com");
})
test("get the employee name", () => {
    const employee = new Employee("Jane", 626, "Jane@jane.com");
    expect(employee.getName()).toBe("Jane");
})
test("get the employee id number", () => {
    const employee = new Employee("Jane", 626, "Jane@jane.com");
    expect(employee.getId()).toEqual(expect.any(Number));
})
test("get the employee email", () => {
    const employee = new Employee("Jane", 626, "Jane@jane.com");
    expect(employee.getEmail()).toEqual(expect.any(String));
})
test("get the employee role", () => {
    const employee = new Employee("Jane", 626, "Jane@jane.com");
    expect(employee.getRole()).toBe("employee");
})