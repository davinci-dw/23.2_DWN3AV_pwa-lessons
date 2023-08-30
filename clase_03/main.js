const serieManager = new SeriesApp();

serieManager.addSerie(new Serie("Spiderman", "1930"));
serieManager.addSerie(new Serie("Capitán américa", "2023"));
serieManager.addSerie(new Serie("Hulk", "2021"));
serieManager.addSerie(new Serie("Hulk", "2021"));

const content = document.querySelector('.content');

content.innerHTML = serieManager.generateList();