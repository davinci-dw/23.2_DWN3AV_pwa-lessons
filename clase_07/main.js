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
            const {id, avatar, ...rest} = person;
            return {
                name: generateName(rest),
                avatar,
                id
            }
        }));
}

const getPersonFromAPI = (id) => {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(something => something.json())
        .then(({data}) => data)
}


/* Person -> String */
const createCard = ({name, avatar, id}) => `
    <div class="card" person-id="${id}">
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

const renderModal = (person) => {
    const {first_name, email} = person;
    const titleName = modal.querySelector('.modal-card-title');
    const emailElement = modal.querySelector('.modal-card-body-email');
    titleName.innerHTML = first_name;
    emailElement.innerHTML = email;
}

const renderPage = async () => {
    const firstPagePeople = await getPeopleFromAPI('users?page=1');
    const secondPagePeople = await getPeopleFromAPI('users?page=2');

    const people = [...firstPagePeople, ...secondPagePeople];
    const template = people
        .map(person => createCard(person))
        .join('')
    pageContent.innerHTML = template; //add to DOM
}

const modal = document.querySelector('.modal');

modal.querySelector('.delete').addEventListener('click', () => {
    modal.classList.remove('is-active');
});
const render = async () => {
    await renderPage(); //Promise

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', async (event) => {
            const id = +event.currentTarget.getAttribute('person-id');
            const person = await getPersonFromAPI(id);
            modal.classList.add('is-active');
            renderModal(person);
        });
    });
}


render();
