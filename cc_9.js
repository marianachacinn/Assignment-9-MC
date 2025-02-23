console.log ('Task 1: Creating an Employee Class') //task 1
class Employee {
    constructor(name, id, department, salary) { //properties: name, id, department & salary
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    getDetails() { //returns employee details
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
    calculateAnnualSalary() { //retunrs employee's annual salary (salary*12)
        return this.salary * 12;
    }
}//test cases
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); // Expected output: 60000