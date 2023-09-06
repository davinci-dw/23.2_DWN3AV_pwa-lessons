const TIEMPO_RETRASO = 2000;
const seriesList = [
    'the boys',
    'one piece',
    'the big bang theory',
    'Dr House',
    'breaking bad'
]

const informationServer = new Promise((done) => {
    setTimeout(()=> {
        done(seriesList)
    },TIEMPO_RETRASO);
});
informationServer
    .then(value => {
        console.log(value);
    })
