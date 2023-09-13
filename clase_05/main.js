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

const valid = true;

const peoplePromise = new Promise((done, reject) => {
    setTimeout(() => {
        if(valid) {
            done(peopleList);
        } else {
            reject({message: 'invalid request'});
        }
    }, 5000);
})

peoplePromise
    .then((people) => console.log(people));