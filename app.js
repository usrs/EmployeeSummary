const { prompt } = require('inquirer')
const  jest = require('jest')

const employeeArray = ['Employee', 'Engineer', 'Intern', 'Manager']
const employeeQuestions = ['What is your name?', 'What is your email?']
const engineerQuestions = ['what is your GitHub username?']
const internQuestions = ['What school do you attend?']
const managerQuestions = ['What is your office number?']
const answers = []
let userId = 0



prompt(answers) {
  type: 'list',
  name: 'Employee Catagory',
  message: `What type of employee are you?`,
  choices: employeeArray
}
  .then(answers => {
    switch (answers) {
      case 'Employee': {
        prompt() {
          type: 'input',
          name: `${userId++1}`,
          message: `${employeeQuestions}`
        }
        .then(console.log(answers))
      }
        break;
      case 'Engineer': {

      }
        break;
      case 'Intern': {

      }
        break;
      case 'Manager': {

      }
        break;
    }
  })