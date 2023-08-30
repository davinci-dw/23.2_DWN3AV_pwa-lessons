const serieManager = new SeriesApp();

serieManager.addSerie(new Serie());

const primerSerie = serieManager.getSeries()[0];
primerSerie.setYear(2023);
console.log(primerSerie.getYear());