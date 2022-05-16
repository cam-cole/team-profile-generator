const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

function App() {
    this.manager;
    this.engineers = [];
    this.interns = [];
}

App.prototype.initializeApp = function() {
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is the name of the manager?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the manager id?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the email of the manager?'
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is the manager office number?'
        })
        .then(({ name, id, email, officeNumber }) => {
            this.manager = new Manager(name, id, email, officeNumber);
        })
}

module.exports = App;