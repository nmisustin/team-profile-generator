const inquirer = require("inquirer");
const fs = require("fs")
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const employeeArray = [];

async function promptNewEngineer (){
    const answers = await inquirer
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
    }])
    createEngineer(answers.name, answers.id, answers.email, answers.github);
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
    }])
    createIntern(answers.name, answers.id, answers.email, answers.school);
}
async function promptNewManager(){
    const answers = await inquirer
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
    ) 
    return await createManager(answers.name, answers.id, answers.email, answers.officeNumber);     
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
            await promptNewEngineer();
        }
        else if(answer.addTeamMember === "Intern"){
            await promptNewIntern();
        }
        else{
            keepGoing = false;
        };
    }
   return createHtml(employeeArray);
}
function createEngineer(name, id, email, github){
    const engineer = new Engineer(name, id, email, github);
    console.log(engineer);
    employeeArray.push(engineer);
    console.log(employeeArray)
}
function createIntern(name, id, email, school){
    const intern = new Intern(name, id, email, school);
    console.log(intern);
    employeeArray.push(intern)
    console.log(employeeArray);
}
function createHtml(employeeArray){
    const cardArray = [];
    for(let i = 0; i<employeeArray.length; i++){
        let employee = employeeArray[i];
        if(employee instanceof Manager){
            let card = `<div class = "card col-4">
            <div class="card-header">
                <h2 class= "card-title">${employee.name}</h2>
                <h3 class= "card-subtitle">Manager</h3>
            </div>
            <div>
                <ul class= "list-group">
                    <li class= "list-group-item"> ID: ${employee.id}</li>
                    <li class= "list-group-item"> Email:<a href ="mailto: ${employee.email}"> ${employee.email}</a></li>
                    <li class= "list-group-item"> Office Number: ${employee.officeNumber}</li>
                </ul>
            </div>
            </div>`
            cardArray.push(card);
        }
        else if(employee instanceof Engineer){
            let card = `<div class = "card col-4">
            <div class="card-header">
                <h2 class= "card-title">${employee.name}</h2>
                <h3 class= "card-subtitle">Engineer</h3>
            </div>
            <div>
                <ul class= "list-group">
                    <li class= "list-group-item"> ID: ${employee.id}</li>
                    <li class= "list-group-item"> Email:<a href ="mailto: ${employee.email}"> ${employee.email}</a></li>
                    <li class= "list-group-item"> GitHub: <a href= "github.com/${employee.github}" target = "_blank"> ${employee.github}</a></li>
                </ul>
            </div>
            </div>`
            cardArray.push(card);
        }
        else if(employee instanceof Intern){
            let card = `<div class = "card col-4">
            <div class="card-header">
                <h2 class= "card-title">${employee.name}</h2>
                <h3 class= "card-subtitle">Intern</h3>
            </div>
            <div>
                <ul class= "list-group">
                    <li class= "list-group-item"> ID: ${employee.id}</li>
                    <li class= "list-group-item"> Email:<a href ="mailto: ${employee.email}"> ${employee.email}</a></li>
                    <li class= "list-group-item"> School: ${employee.school}</li>
                </ul>
            </div>
            </div>`
            cardArray.push(card);
        }
    }
    console.log(cardArray);
    let cards = cardArray.join("");
    let html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" 
        />
        <title>Team Profile</title>
      </head>
      <body>
        <nav class="navbar">
            <h1>Team Profile</h1>
        </nav>
        <div class= "container">
        `+ cards +`
        </div>
      </body>
    </html>`
    return html;
}
module.exports = promptNewManager;   