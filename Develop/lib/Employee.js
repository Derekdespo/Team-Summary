// TODO: Write code to define and export the Employee class
// Set up the Employee Class
class Employee {
    // constructor set up to include name, id, and email as parameters
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // function to return a new Employee name
    getName() {
        return this.name;
    }
    // function to return a new Employee ID
    getId() {
        return this.id;
    }
    // function to return a new Employee email
    getEmail() {
        return this.email;
    }
    // function that will just return role as being an employee, will get changed later
    getRole() {
        return "Employee";
    }
}
// allows the other files to access this code
module.exports = Employee;

