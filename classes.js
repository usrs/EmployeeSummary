class Employee {
  constructor (name, id, email) {
  this.name = name,
  this.id = id,
  this.email = email
  }
}

class Engineer extends Employee{
  constructor(name, id, email, gitHub) {
    super(name, id, email)
    this.gitHub = gitHub
  }
}

class Intern extends Employee{
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }
}

class Manager extends Employee{
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }
}

module.exports = Employee
module.exports = Engineer
module.exports = Intern
module.exports = Manager