/* eslint-disable no-unused-vars */
class User {
  constructor(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
  }

  get age() { return (new Date).getFullYear() - this.birthYear; }
  get fullName() { return `${this.name} ${this.surname}`; }
}

class Student extends User {
  constructor(name, surname, birthYear) {
    super(name, surname, birthYear);
    this.marks = [];
    this.attendance = [];
  }

  set mark(mark) { this.marks.push(mark); }
  set present(parameter) { this.attendance.push(parameter); }
  get avgMark() { return this.marks.reduce((acc, cur) => acc + cur) / this.marks.length; }
  get avgAttendance() { return this.attendance.reduce((acc, cur) => acc + +cur) / this.attendance.length; }
}

class Teacher extends User {
  constructor(name, surname, birthYear) {
    super(name, surname, birthYear);
    this.activeGroups = [];
    this.allGroups = [];
  }

  set addGroup(group) { this.allGroups.push(group); }
  set activateGroup(groupName) {
    this.allGroups.forEach((element, index) => {
      if (groupName === element) {
        this.activeGroups.push(element);
      }
    });
  }
  set deactiveGroup(groupName) {
    this.activeGroups.forEach((element, index) => {
      if (groupName === element) {
        this.activeGroups.splice(index, 1);
      }
    });
  }
}