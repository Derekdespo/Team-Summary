// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
// basically this will extend the employee class to determine a more specific role
class Intern extends Employee {
    // constructor includes the parameters from the Employee class and then adds the Intern specific parameter of school
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // returns the school of the new Employee -> Intern
    getSchool() {
        return this.school;
    }
    // returns the new Employee's role as an Intern
    getRole() {
        return "Intern";
    }
}
// allows the other files to access this code
module.exports = Intern;