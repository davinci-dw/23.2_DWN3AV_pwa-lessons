const sergio = {
    firstName: "Sergio",
    lastName: "Medina",
    age: 30,
    getFirstName: function() {
        return this.firstName;
    },
    setFirstName: function (newFirstName){
        this.firstName = newFirstName;
    },
    getLastName: function () {
        return this.lastName;
    },
    getName: function () {
        return this.getFirstName() + " " + this.getLastName();
    }
}

sergio.setFirstName("Sergio Daniel");
console.log(sergio.getName());