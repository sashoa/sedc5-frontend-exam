import Book from '../js/Book.js';

export default class Novel extends Book {
    constructor(members) {
        super(members);
        this.author = members.author;
        this.series = members.series;
        this.seriesNumber = members.seriesNumber;
    }
}