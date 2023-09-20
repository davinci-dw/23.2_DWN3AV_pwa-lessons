const generateName = (people) => {
    return `${people.first_name} ${people.last_name}`
};

const generatePerson = (person) => {
    const {age, ...other} = person;
    return {
        age,
        name: generateName(other)
    }
}

const getPeopleFromAPI = () => {
    return fetch("https://reqres.in/api/users")
        .then(something => something.json())
        .then(({data}) => data)
        .then(results => results.map((person) => {
            const {email, avatar, ...rest} = person;
            return {
                name: generateName(rest),
                email,
                avatar
            }
        }));
}

getPeopleFromAPI()
    /*.then((people) => people.map(generatePerson))
    .catch((error) => {
        console.error(error)
        return [{
            firstName: 'Generic',
            lastName: 'User',
            title: 'Mr.',
            age: 19,
            message: error
        }]
    })*/
    .then((people) => console.log(people));