// constructor
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

const book1 = new Book('Book one', 'John Doe', 2013)
const book2 = new Book('Book two', 'jane Doe', 2016)

console.log(book1.getSummary())