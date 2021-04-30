const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Choices = require("inquirer/lib/objects/choices");

let managerCount = 0;
let internCount = 0;
let engineerCount = 0;
const employeeArray = [];

function firstPrompt(){
    inquirer
    .prompt(
        [{
            name:"name",
            type: "input",
            message: "What is the managers name"
        },
        {
            name: "id",
            type: "input",
            message: "What is the id number?"
        },
        {
            name: "email",
            type: "input",
            message: "What is the manager's email?"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the manager's office number?"
        },
        {
            name: "addTeamMember",
            type: "list",
            message: "Choose any additional team members here.",
            choices: ["Engineer", "Intern", "Manager", "I'm done!"]
        }]
    ).then(answers => createManager(answers.name, answers.id, answers.email, answers.officeNumber));
    
}
function createManager(name, id, email, officeNumber){
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
}
firstPrompt()
//.then(answers => createManager(answers));
    