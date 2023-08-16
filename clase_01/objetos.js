const sergio = {
    firstName: "Sergio",
    lastName: "Medina",
    age: 30,
    getFirstName: function() {
        return this.firstName;
    },
    setFirstName: function (newFirstName){
        this.firstName = newFirstName;
    }
}

sergio.setFirstName("Sergio Daniel");
console.log(sergio.getFirstName());