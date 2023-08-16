class Person {
    firstName= "";
    lastName= "";
    age= 0;
    getFirstName() {
        return this.firstName;
    };
    setFirstName(newFirstName){
        this.firstName = newFirstName;
    };
    getLastName() {
        return this.lastName;
    };
    setLastName(lastName){
      this.lastName = lastName;
    };
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getName() {
        return this.getFirstName() + " " + this.getLastName();
    };
    constructor(firstName, lastName, age) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setAge(age);
    }
}

const sergio = new Person("Sergio Daniel", "Medina", 30);

console.log(sergio.getName(), sergio.getAge());