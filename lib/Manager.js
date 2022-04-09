const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email);
    this.role = role;
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return {
      officeNumber: this.officeNumber
    }
  }
}

module.exports = Manager;