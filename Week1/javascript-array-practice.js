// Create employee array
let employees = ["John", "Alice", "Bob"];

// Add employees
employees.push("David");
employees.push("Sam");

// Remove an employee
employees.splice(employees.indexOf("Bob"), 1);

// Display employee list
console.log("Employee List:");
employees.forEach(employee => {
    console.log(employee);
});