const Manager = require("../lib/Manager");

test("Creates the manager object", () => {
    const manager = new Manager("Judy", 123, "Judy@judy.com", 12)
    expect(manager.name).toBe("Judy");
    expect(manager.id).toBe(123);
    expect(manager.email).toBe("Judy@judy.com");
    expect(manager.officeNumber).toBe(12);
})
test("get the manager office number", () => {
    const manager = new Manager("Judy", 123, "Judy@judy.com", 12)
    expect(manager.getOfficeNumber()).toBe(12);
})
test("get the employees role", () => {
    const manager = new Manager("Judy", 123, "Judy@judy.com", 12);
    expect(manager.getRole()). toBe("manager");
})