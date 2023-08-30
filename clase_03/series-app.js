class SeriesApp {
    series = [];
    getSeries() {
        return this.series;
    }
    addSerie(serie) {
        this.series.push(serie);
    }
    generateList() {
        return this.getSeries().map(serie => `
            <div class="card">
                <h3>${serie.getTitle()}</h3>
                <p>${serie.getYear()}</p>
            </div>
        `).join('')
    }
}