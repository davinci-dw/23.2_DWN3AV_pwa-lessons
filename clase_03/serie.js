class Serie {
    title = '';
    year = '';
    imageUrl = '';

    constructor(title, year) {
        this.setYear(year);
        this.setTitle(title);
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setYear(year) {
        this.year = year;
    }

    getYear() {
        return this.year;
    }

    setImageUrl(imageUrl) {
        this.imageUrl = imageUrl;
    }

    getImageUrl() {
        return this.imageUrl;
    }

}