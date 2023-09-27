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

const getPeopleFromAPI = (endpoint) => {
    return fetch(`https://reqres.in/api/${endpoint}`)
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


/* Person -> String */
const createCard = ({name, avatar, email}) => `
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="${avatar}" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="${avatar}" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">${name}</p>
                    <p class="subtitle is-6">${email}</p>
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

const renderPage = async () => {
    const firstPagePeople = await getPeopleFromAPI('users?page=1');
    const secondPagePeople = await getPeopleFromAPI('users?page=2');

    const people = [...firstPagePeople, ...secondPagePeople];

    const template = people
        .map(person => createCard(person))
        .join('')

    pageContent.innerHTML = template;
}

renderPage();