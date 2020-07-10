// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")
// basically this will extend the employee class to determine a more specific role
class Manager extends Employee {
    // constructor includes the parameters from the Employee class and then adds the Manager specific parameter of officeNumber
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // returns the office number of the new Employee -> Manager
    getOfficeNumber() {
        return this.officeNumber;
    }
    // returns the employees role as a manager
    getRole() {
        return "Manager";
    }
}
// allows the other files to access this code
module.exports = Manager; 