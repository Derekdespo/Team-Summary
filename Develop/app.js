const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// This empty array will get information passed into it from the prompts
const teamMembers = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUser() {
    inquirer.prompt ([
        // The initial question will ask the user which type of Employee they would like to add to their page
        // Selecting a role will prompt further questions | selecting done will print the page
        {
            type: "list",
            name: "memberChoice",
            message: "Which team member would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        }
    ]).then(response => {
        if(response.memberChoice === "Manager") {
            createManager();
        }
        else if(response.memberChoice === "Engineer") {
            createEngineer();
        }
        else if(response.memberChoice === "Intern") {
            createIntern();
        }
        else {
            createTheTeam();
            console.log("Success! Team created!")
        }
    })
}
// calls the promptUser function
promptUser();

// function to create a new manager with information inputed by the user through prompts
const createManager = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's Work ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number."
        }
        // then function to push the gathered information into the teamMembers array
    ]).then(response => {
        const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(newManager);
        promptUser();
    })
}
// function to create a new Engineer with information inputed by the user in response to the prompts
const createEngineer = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's Work ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email."
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's Github Username."
        }
        // then function to push the new Engineer into the teamMembers array
    ]).then(response => {
        const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
        teamMembers.push(newEngineer);
        promptUser();
    })
}
// function to create a new Intern with information inputed by the user in response to the prompts
const createIntern = () => {
inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "Enter the intern's name"
    },
    {
        type: "input",
        name: "id",
        message: "Enter the intern's Work ID."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's email."
    },
    {
        type: "input",
        name: "school",
        message: "Enter the interns's College/University."
    }
    // then function to push the new Intern into the teamMembers array
]).then(response => {
    const newIntern = new Intern(response.name, response.id, response.email, response.school);
    teamMembers.push(newIntern);
    promptUser();
})
}


// this function will create the full team in the html using writeFileSync and running the render function with the teamMembers array as its parameter
const createTheTeam =() => {
    fs.writeFileSync("team.html", render(teamMembers), "utf-8") 
}