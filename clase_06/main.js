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

const createCard = () => `
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                </div>
            </div>

            <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
`;

const pageContent = document.getElementById('content');
pageContent.innerHTML = createCard();
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