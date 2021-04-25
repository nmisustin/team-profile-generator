const Engineer = require("../lib/Engineer");

test("Engineer object is constructed", () => {
    const engineer = new Engineer("Bob", 345, "Bob@bob.com", "bobsworld");
    expect(engineer.name).toBe("Bob");
    expect(engineer.id).toBe(345);
    expect(engineer.email).toBe("Bob@bob.com");
    expect(engineer.github).toBe("bobsworld");
});
test("get the github of the Engineer", () => {
    const engineer= new Engineer("Bob", 345, "Bob@bob.com", "bobsworld");
    expect(engineer.getGithub()).toBe("bobsworld");
})
test("get the engineer role", () => {
    const engineer = new Engineer("Bob", 345, "Bob@bob.com", "bobsworld");
    expect(engineer.getRole()).toBe("engineer");
})