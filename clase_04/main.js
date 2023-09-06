const TIEMPO_RETRASO = 2000;
const seriesList = [
    'the boys',
    'one piece',
    'the big bang theory',
    'Dr House',
    'breaking bad'
]
const capitalize = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
}

const generateParagraph = (string) => `<p>${string}</p>`;

const createCard = (paragraph) => `<div>
    <h1>Card title</h1>
    ${paragraph}
</div>`;

const informationServer = new Promise((done) => {
    setTimeout(()=> {
        done(seriesList)
    },TIEMPO_RETRASO);
});

informationServer
    .then(list => list.map(capitalize))
    .then(list => list.map(generateParagraph))
    .then(list => list.map(createCard))
    .then(list => list.join("_"))
    .then(lastValue => console.log(lastValue));
