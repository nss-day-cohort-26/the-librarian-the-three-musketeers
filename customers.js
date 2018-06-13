class Customer {
    constructor(genres, name, address) {

        this.genres = genres;
        this.shelf = {}
        this.first = name.split(" ")[0]
        this.last = name.split(" ")[1]
        this.cardNumber = 0;

    }

    Checkout(title){
        const book = librarian.checkout(title)
        if (book){
            this.shelf[book.title] = book;
        }
    }

    ReturnBook(title){
        if (this.shelf[title]){
            librarian.return(title);
            delete this.shelf[title]
        } else{
            alert('You can not return a book you do not have')
        }
    }

}

const EHuck = new Customer(['sci-fi', 'fantasy', 'mystery'], 'Elliot Huck', '123 Some St.')
const ELusky = new Customer(['sci-fi',  'fantasy', 'graphic-novel'], 'Evan Lusky', '666 Other St.')
const SReddy = new Customer(['sci-fi', 'bio', 'self-improvement'], 'Sathvik Reddy', '777 Lucky St.')
