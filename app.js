const { prompt } = require('inquirer')
const  jest = require('jest')
// const userClass = require('./classes.js')

let employeeArray = []

const employeeSelection = [{
  type: 'list',
  name: 'emCatagory',
  message: `What type of employee are you?`,
  choices: ['Employee', 'Engineer', 'Intern', 'Manager',]
}]
const employeeQuestions = [
  {
  type: 'input',
  name: 'userName',
  message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'userEmail',
    message: 'What is your email?'
  }
  ]
const engineerQuestions = [
  {
    type: 'input',
    name: 'gitHub',
    message: 'what is your GitHub username?'
  },
  {
    type: 'list',
    name: 'choice',
    message: 'Do you want to make another employee?',
    choices: ['true', 'false']
  }
]
const internQuestions = [
  {
    type: 'input',
    name: 'school',
    message: 'What school do you attend?'
  },
  {
    type: 'list',
    name: 'choice',
    message: 'Do you want to make another employee?',
    choices: ['true', 'false']
  }
]
const managerQuestions = [
  {
    type: 'input',
    name: 'officeNum',
    message: 'What is your office number?'
  },
  {
    type: 'list',
    name: 'choice',
    message: 'Do you want to make another employee?',
    choices: ['true', 'false']
  }
]
let userId = 0


class Employee {
  constructor(name, id, email) {
    this.name = name,
      this.id = id,
      this.email = email
  }
}

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email)
    this.gitHub = gitHub
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }
}



let makeUser = () => {
  prompt(employeeSelection)
    .then(answers => {
      switch (answers.emCatagory) {
        case 'Employee': {
          prompt(employeeQuestions)
            .then(answers => {
              userId++
              const user = new Employee(answers.userName, userId, answers.userEmail)
              employeeArray.push(user)
              console.log(employeeArray)
              console.log(answers.choice)
              if (answers.choice == 'true') {
                makeUser()
              } else {
                return
              }
            })
        }
          break;
        case 'Engineer': {
          let comboArr = employeeQuestions.concat(engineerQuestions)
          prompt(comboArr)
            .then(answers => {
              userId++
              const user = new Engineer(answers.userName, userId, answers.userEmail, answers.gitHub)
              employeeArray.push(user)
              console.log(employeeArray)
              if (answers.choice == 'true') {
                makeUser()
              } else {
                return
              }
            })
        }
          break;
        case 'Intern': {
          let comboArr = employeeQuestions.concat(internQuestions)
          prompt(comboArr)
            .then(answers => {
              userId++
              const user = new Intern(answers.userName, userId, answers.userEmail, answers.school)
              employeeArray.push(user)
              console.log(employeeArray)
              if (answers.choice == 'true') {
                makeUser()
              } else {
                return
              }
            })
        }
          break;
        case 'Manager': {
          let comboArr = employeeQuestions.concat(managerQuestions)
          prompt(comboArr)
            .then(answers => {
              userId++
              const user = new Manager(answers.userName, userId, answers.userEmail, answers.officeNumber)
              employeeArray.push(user)
              console.log(employeeArray)
              if (answers.choice == 'true') {
                makeUser()
              } else {
                return
              }
            })
        }
          break;
      }
    })
}
makeUser()