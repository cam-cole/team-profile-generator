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
        .prompt([{
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
        }])
        .then(({ name, id, email, officeNumber }) => {
            this.manager = new Manager(name, id, email, officeNumber);
            
            inquirer
                .prompt({
                    type: 'list',
                    name: 'action',
                    message: 'Would you like to add an engineer, an intern or exit the application?',
                    choices: ['Engineer', 'Intern', 'Exit']
                })
                .then(({ action }) => {
                    if (action === 'Engineer') {
                        return this.addEngineer();
                    }
                    else if (action === 'Intern') {
                        return this.addIntern();
                    }
                    else {
                        return this.exitApp();
                    }
                })
        })
}

App.prototype.addEngineer = function() {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'What is the name of the engineer?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the engineer id?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the email of the engineer?'
        },
        {
            type: 'text',
            name: 'github',
            message: 'What is the github username of the engineer?'
        }])
        .then(({ name, id, email, github}) => {
            this.engineers.push(new Engineer(name, id, email, github));

            inquirer
                .prompt({
                    type: 'list',
                    name: 'action',
                    message: 'Would you like to add an engineer, an intern or exit the application?',
                    choices: ['Engineer', 'Intern', 'Exit']
                })
                .then(({ action }) => {
                    if (action === 'Engineer') {
                        return this.addEngineer();
                    }
                    else if (action === 'Intern') {
                        return this.addIntern();
                    }
                    else {
                        return this.exitApp();
                    }
                })
        })
    }

App.prototype.addIntern = function() {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'What is the name of the intern?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the intern id?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the email of the intern?'
        },
        {
            type: 'text',
            name: 'school',
            message: 'What school did the intern go to?'
        }])
        .then(({ name, id, email, school}) => {
            this.interns.push(new Intern(name, id, email, school));

            inquirer
                .prompt({
                    type: 'list',
                    name: 'action',
                    message: 'Would you like to add an engineer, an intern or exit the application?',
                    choices: ['Engineer', 'Intern', 'Exit']
                })
                .then(({ action }) => {
                    if (action === 'Engineer') {
                        return this.addEngineer();
                    }
                    else if (action === 'Intern') {
                        return this.addIntern();
                    }
                    else {
                        return this.exitApp();
                    }
                })
        })
}

App.prototype.exitApp = function() {
    console.log(this.engineers);
    console.log(this.interns);
    console.log('You have successfully exited the application!');
}

module.exports = App;