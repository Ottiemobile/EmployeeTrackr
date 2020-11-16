
const inquirer = require('inquirer');

const mysql = require('mysql2');


const connection = require('./db/connection');

 require('console.table');

function quit(){
    console.log('Thank you for using EmployeeTrackr!');
    process.exit();
}

function startApp(){
    inquirer
    .prompt({
        name: "appStart",

        type: "list",

        message: "Welcome to EmployeeTrackr! What would you like to do?",

        choices: [
            "Add Department",
            "Add Employee",
            "Add Role",
            "View Roles",
            "View Departments",
            "View Employees",
            //"Update Employee",
            "Leave"

        ]
    
    })
    .then((answer) => {
        switch(answer.appStart) {
            case "View Departments":
                viewDepartment();
            break;

            case "Add Department": 
                addDepartment();
            break;

            case "View Employees":
                viewEmployee();
            break;

            case "Add Employee": 
                addEmployee();
            break;

            case "View Roles":
                viewRole();
            break;

            case "Add Role": 
                addRole();
            break;


            case "Leave":
                quit();
            break;
        }
    });

}

function viewDepartment() {
    let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if(err) throw err;
        console.table(res);
        startApp();
    });
}

function addDepartment() {
    inquirer.prompt([
        {
            type:"input",
            message: "What is the new Department name?",
            name:"departmentName"
        }
    ])
    .then(function(answer) {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], function(err,res) {
        if (err) throw err;
        console.table(res)
        startApp();  
        });
    });
}

function viewEmployee() {
    
  let query = "SELECT * FROM employee";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    
    startApp();
  
    });
  

}


function addEmployee() {
    inquirer.prompt([
      {
        type: "input",
        message: "Please enter the Employee's first name:",
        name: "firstName"
      },
     
      {
        type: "input",
        message: "Please input the Employee's last name:",
        name: "lastName"
      },
     
      {
        type: "input",
        message: "Enter the Employee's Role ID Number:",
        name: "roleID"
      },
     
      {
        type: "input",
        message: "Enter the Employee's ID Number:",
        name: "managerID"
      }
    ])
    .then(function(answer) {
  
      
      connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();


        });

    });
  

}

function viewRole() {
    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      
      startApp();
    
      });
}

function addRole() {
    inquirer.prompt([
        {
            type:"input",
            message: "Please enter the name of the new Role:",
            name: "roleTitle"
        },



        {
            type: "input",
            message: "Enter the Salary of the new role:",
            name: "roleSalary"
        },

        {
            type: "input",
            message: "Please enter the Department ID Number (DIN): ",
            name: "roleDept"
        }
    ])

    .then(function(answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)" , [answer.roleTitle, answer.roleSalary, answer.roleDept], function(err, res) {
            if (err) throw err;
            console.table(res);
            
            startApp();
        });
    
    
    });


}

startApp();