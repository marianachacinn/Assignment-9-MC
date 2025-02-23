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

console.log ('Task 2: Creating a Manager Class') //task 2
class Manager extends Employee { //manger works off the employeee class
    constructor(name, id, department, salary, teamSize) { //added teamsize
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }
    getDetails() { //returns updated employee details
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
    calculateBonus() { //manager bonus includes a 10% of annual salary
        return this.calculateAnnualSalary() * 0.10;
    }
}//test cases
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus()); // Expected output: 9600

console.log ('Task 3: Creating a Company Class') //task 3
class Company {
    constructor(name) { //properties: name and array for employees
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) { //add an employee to the array
        this.employees.push(employee);
    }
    listEmployees() { //logs all employees details
        this.employees.forEach(emp => console.log(emp.getDetails()));
    }
}//test cases
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"