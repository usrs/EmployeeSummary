class Employee {
  constructor (name, id, email,)
  this.name = name
  this.id = id
  this.email = email
}

class Engineer extends Employee{
  super(name, id, email)
  constructor(gitHub)
  this.gitHub = gitHub
}

class Intern extends Employee{
  super(name, id, email)
  constructor(school)
  this.school = school
}

class Manager extends Employee{
  super(name, id, email)
  constructor(officeNumber)
  this.officeNumber = officeNumber
}

module.exports = Employee
module.exports = Engineer
module.exports = Intern
module.exports = Manager