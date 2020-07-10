const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUser() {
    inquirer.prompt ([
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
        }
    })
}
promptUser();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
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
    ]).then(response => {
        const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(newManager);
        promptUser();
    })
}

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
    ]).then(response => {
        const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
        teamMembers.push(newEngineer);
        promptUser();
    })
}

const createIntern = () => {

}

const createTheTeam =() => {
    fs.writeFileSync("team.html", render(teamMembers), "utf-8") 
}
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
