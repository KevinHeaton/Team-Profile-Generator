const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/pageTemplate');

// profiles
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Employee array
const employeeArray = [];

// prompts for getting employee data
const addEmployee = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your name!');
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'idNumber',
      message: 'What is your id number?',
      validate: idNumberInput => {
        if (idNumberInput) {
            return true;
        } else {
            console.log('Please enter your id!');
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter your email!');
            return false;
        }
      }
    },
    {
      type: 'list',
      name: 'role',
      message: 'What is your role?',
      choices: ['Employee', 'Manager', 'Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?',
      when: (input) => input.role === 'Manager',
      validate: officeNumberInput => {
        if (officeNumberInput) {
            return true;
        } else {
            console.log('Please enter your office number!');
            return false;
        }  
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
      when: (input) => input.role === 'Engineer',
      validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the name of your school?',
      when: (input) => input.role === 'Intern',
      validate: schoolInput => {
        if (schoolInput) {
            return true;
        } else {
            console.log('Please enter your school name!');
            return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another employee?',
      default: false
    }
  ])
  .then(employeeData => {
    let { name, idNumber, email, role, officeNumber, github, school, confirmAddEmployee } = employeeData;
    let employee;

    if (role === 'Employee') {
      employee = new Employee (name, idNumber, email);

    } else if (role === 'Manager') {
      employee = new Manager (name, idNumber, email, officeNumber);

    } else if (role === 'Engineer') {
      employee = new Engineer (name, idNumber, email, github);

    } else if (role === 'Intern') {
      employee = new Intern (name, idNumber, email, school);

    }

    employeeArray.push(employee);

    if (confirmAddEmployee) {
      return addEmployee(employeeArray);
    } else {
      return employeeArray;
    }
  })
};



addEmployee();
