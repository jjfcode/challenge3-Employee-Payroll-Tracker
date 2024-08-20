// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employees = []; // empty array

  let proceed = true;

  while (proceed) {
    const firstName = prompt("Enter First name:"); // Prompt First Name
    const lastName = prompt("Enter Last Name:"); // Prompt Last Name
    const salary = prompt("Enter Salary:"); // Prompt Salary

    const newEmployee = {
      firstName,
      lastName,
      salary,
    };

    employees.push(newEmployee);

    const isContinue = confirm(
      "Do you want to continuo click ok or click cancel to quit"
    );

    if (isContinue === false) {
      proceed = false;
    }
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

  let salaryTotal = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    salaryTotal += parseFloat(employeesArray[i].salary);
  }

  let average = salaryTotal / employeesArray.length;
  
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${average}`);

};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congratulations to ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
