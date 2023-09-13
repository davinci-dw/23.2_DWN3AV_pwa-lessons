const peopleList = [
    {
        firstName: 'Sergio',
        lastName: 'Medina',
        title: 'Mr.',
        age: 30
    },
    {
        firstName: 'Maria',
        lastName: 'Gomez',
        title: 'Ms.',
        age: 25
    },
    {
        firstName: 'Carlos',
        lastName: 'Lopez',
        title: 'Mr.',
        age: 35
    },
    {
        firstName: 'Ana',
        lastName: 'Rodriguez',
        title: 'Ms.',
        age: 28
    },
    {
        firstName: 'Diego',
        lastName: 'Martinez',
        title: 'Mr.',
        age: 32
    },
    {
        firstName: 'Laura',
        lastName: 'Fernandez',
        title: 'Ms.',
        age: 27
    },
    {
        firstName: 'Javier',
        lastName: 'Perez',
        title: 'Mr.',
        age: 40
    },
    {
        firstName: 'Elena',
        lastName: 'Garcia',
        title: 'Ms.',
        age: 22
    },
    {
        firstName: 'Pedro',
        lastName: 'Sanchez',
        title: 'Mr.',
        age: 33
    },
    {
        firstName: 'Luisa',
        lastName: 'Torres',
        title: 'Ms.',
        age: 29
    }
];

const valid = false;

const generateName = (people) => {
    return `${people.title} ${people.firstName} ${people.lastName}`
};

const generatePerson = (person) => {
    const {age, ...other} = person;
    return {
        age,
        name: generateName(other)
    }
}

const getPeopleFromAPI = () => {
    fetch("https://randomuser.me/api/?results=10")
        .then(something => something.json())
        .then(({results}) => results)
        .then(results => results.map((person) => {
            const {name, dob} = person;
            return {name, dob}
        }))
        .then(results => results.map((person) => {
            const {dob, name} = person;
            return {
                age: dob.age,
                firstName: name.first,
                lastName: name.last,
                title: name.title
            }
        }))
        .then(data => console.log(data));
}

const peoplePromise = new Promise((done, reject) => {
    setTimeout(() => {
        if(valid) {
            done(peopleList);
        } else {
            reject({message: 'invalid request'});
        }
    }, 1000);
})
peoplePromise
    .then((people) => people.map(generatePerson))
    .catch((error) => {
        console.error(error)
        return [{
            firstName: 'Generic',
            lastName: 'User',
            title: 'Mr.',
            age: 19,
            message: error
        }]
    })
    //.then((people) => console.log(people));

getPeopleFromAPI();