var person = {
  firstName: "Mohammed",
  lastName: "Alali",
  age: 30,

  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

document.write(person.firstName+"<br>");
delete person.firstName;
document.write(person.firstName+"<br>");