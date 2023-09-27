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
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="${avatar}" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title">${name}</p>
                </div>
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