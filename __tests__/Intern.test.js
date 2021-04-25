const Intern = require("../lib/Intern");

test("construct intern object", () => {
    const intern = new Intern ("Amy", 890, "amy@amy.com", "UCF");
    expect(intern.name).toBe("Amy");
    expect(intern.id).toBe(890);
    expect(intern.email).toBe("amy@amy.com");
    expect(intern.school).toBe("UCF");
})
test("get intern school", () => {
    const intern = new Intern ("Amy", 890, "amy@amy.com", "UCF");
    expect(intern.getSchool()).toBe("UCF");
})
test("get intern role", () => {
    const intern = new Intern ("Amy", 890, "amy@amy.com", "UCF");
    expect(intern.getRole()).toBe("intern")
})