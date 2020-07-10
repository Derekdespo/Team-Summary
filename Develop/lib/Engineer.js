// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
// basically this will extend the employee class to determine a more specific role
class Engineer extends Employee {
    // constructor includes the parameters from the Employee class and then adds the Engineer specific parameter of github
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // function to return a new Employee -> Engineer's github
    getGithub() {
        return this.github;
    }
    // function to return the role of Engineer to the new Employee
    getRole() {
        return "Engineer";
    }
}
// allows the other files to access this code
module.exports = Engineer;