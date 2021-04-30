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
            message: "Choose add an additional team members here.",
            choices: ["Engineer", "Intern", "Manager", "I'm done!"]
        }]
    ).then(answers => createManager(answers.name, answers.id, answers.email, answers.officeNumber, answers.addTeamMember));
    
}
function createManager(name, id, email, officeNumber, addTeamMember){
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
    employeeArray.push(manager);
    if(addTeamMember === "Engineer"){
        promptNewEngineer();
    }
}
function promptNewEngineer (){
    inquirer
    .prompt([{
        name:"name",
        type: "input",
        message: "What is the engineer's name"
    },
    {
        name: "id",
        type: "input",
        message: "What is the id number?"
    },
    {
        name: "email",
        type: "input",
        message: "What is the engineer's email?"
    },
    {
        name: "github",
        type: "input",
        message: "What is the engineers's GitHub username?"
    },
    {
        name: "addTeamMember",
        type: "list",
        message: "Choose to add an additional team members here.",
        choices: ["Engineer", "Intern", "Manager", "I'm done!"]
    }]).then(answers => createEngineer(answers.name, answers.id, answers.email, answers.github, answers.addTeamMember));
}
function createEngineer(name, id, email, github, addTeamMember){
    const engineer = new Engineer(name, id, email, github);
    console.log(engineer);
    employeeArray.push(engineer);
    console.log(employeeArray)
    if(addTeamMember === "Engineer"){
        promptNewEngineer();
    }
}
firstPrompt()
    