Task 1: Creating an Employee Class
Scenario:
You are developing a Human Resources (HR) system for a company and need to create an Employee class to represent employees.

Requirements:

Create a class Employee with the following properties:
name (string)
id (number)
department (string)
salary (number)
Add a method getDetails() that returns a formatted string of employee details.
Add a method calculateAnnualSalary() that returns the employee’s annual salary (salary * 12).
Instantiate an employee object and log its details to the console.
Test Cases:

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000
Submission: Commit your changes to GitHub with the message:
"Task 1 - Created Employee Class"

Task 2: Creating a Manager Class (Inheritance & Method Overriding)
Scenario:
Managers have additional responsibilities compared to regular employees. Create a Manager class that extends Employee.

Requirements:

The Manager class should inherit from Employee.
Add a new property: teamSize (number).
Override getDetails() to include the team size.
Add a method calculateBonus() that returns 10% of the manager’s annual salary.
Test Cases:

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600
Submission: Commit your changes to GitHub with the message:
"Task 2 - Created Manager Class with Inheritance"

Task 3: Creating a Company Class
Scenario:
A company needs to store and manage employee data efficiently.

Requirements:

Create a Company class with:
A property name (string) for the company’s name.
An array employees to store employee objects.
Add methods:
addEmployee(employee): Adds an employee to the array.
listEmployees(): Logs all employees’ details.
Test Cases:

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
Submission: Commit your changes to GitHub with the message:
"Task 3 - Created Company Class"

Task 4: Implementing a Payroll System
Scenario:
The HR department needs to process salaries efficiently.

Requirements:

Add a method calculateTotalPayroll() to the Company class that returns the sum of all employee salaries (including managers).
Modify calculateAnnualSalary() in the Employee class to consider bonuses for managers.
Test Cases:

console.log(company.calculateTotalPayroll()); 
// Expected output: 172800 (assuming emp1 and mgr1 salaries)
Submission: Commit your changes to GitHub with the message:
"Task 4 - Implemented Payroll System"

Task 5: Implementing Promotions
Scenario:
A company wants to promote employees to managerial positions.

Requirements:

Add a method promoteToManager(employee, teamSize) in the Company class.
This method should convert an Employee into a Manager while retaining their original details.
Test Cases:

company.promoteToManager(emp1, 3);
company.listEmployees();
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"
Submission: Commit your changes to GitHub with the message:
"Task 5 - Implemented Promotion System"