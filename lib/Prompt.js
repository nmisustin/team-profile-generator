const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Choices = require("inquirer/lib/objects/choices");

const employeeArray = [];

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
async function promptNewIntern(){
    const answers = await inquirer
    .prompt([{
        name:"name",
        type: "input",
        message: "What is the intern's name"
    },
    {
        name: "id",
        type: "input",
        message: "What is the id number?"
    },
    {
        name: "email",
        type: "input",
        message: "What is the intern's email?"
    },
    {
        name: "school",
        type: "input",
        message: "What school does the intern go to?"
    },
    {
        name: "addTeamMember",
        type: "list",
        message: "Choose to add an additional team members here.",
        choices: ["Engineer", "Intern", "Manager", "I'm done!"]
    }])
    createIntern(answers.name, answers.id, answers.email, answers.school, answers.addTeamMember);
}
function promptNewManager(){
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
        }]
    ).then(answers => createManager(answers.name, answers.id, answers.email, answers.officeNumber, answers.addTeamMember));
       
}
async function createManager(name, id, email, officeNumber, addTeamMember){
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
    employeeArray.push(manager);
    let keepGoing = true
    while(keepGoing){
        let answer = await inquirer
        .prompt([
            {
                name: "addTeamMember",
                type: "list",
                message: "Choose add an additional team members here.",
                choices: ["Engineer", "Intern", "I'm done!"]
            }
        ]);
        if(answer.addTeamMember === "Engineer"){
            promptNewEngineer();
        }
        if(answer.addTeamMember === "Intern"){
            promptNewIntern();
        }
        else{
            keepGoing = false;
        };
    }
}
function createEngineer(name, id, email, github, addTeamMember){
    const engineer = new Engineer(name, id, email, github);
    console.log(engineer);
    employeeArray.push(engineer);
    console.log(employeeArray)
}
function createIntern(name, id, email, school, addTeamMember){
    const intern = new Intern(name, id, email, school);
    console.log(intern);
    employeeArray.push(intern)
    console.log(employeeArray);
}
promptNewManager();
    