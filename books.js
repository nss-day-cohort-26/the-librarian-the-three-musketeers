const library = {};

// Book Template

const Book = Object.create({}, {
    title: {
        value: "",
        enumerable: true,
        writable: true
    },
    author: {
        value: "",
        enumerable: true,
        writable: true
    },
    genre: {
        value: "",
        enumerable: true,
        writable: true
    },
    isbnNumb: {
        value: "",
        enumerable: true,
        writable: true
    },
    checkedOut: {
        value: false,
        enumerable: true,
        writable: true
    },
    dueDate: {
        value: {},
        enumerable: true,
        writable: true
    }
});

const bookCreator = (title, author, genre, isbnNumb) => {
    const newBook = Object.create(Book);
    newBook.title = title;
    newBook.author = author;
    newBook.genre = genre;
    newBook.isbnNumb = isbnNumb;
    
    library[title] = newBook;
};

// Library of Books

const elonMusk = bookCreator("Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future", "Ashlee Vance", "Biography", "978-0062301239");

const mobyDick = bookCreator("Moby-Dick", "Herman Melville", "Epic", "978-0-321-22800-0");

const scarTissue = bookCreator("Scar Tissue", "Anthony Kiedis", "Autobiography", "1-4013-0101-0");

const life3 = bookCreator("Life 3.0", "Max Tegmark", "Sci-Fi", "978-1-101-94659-6");

const mockingbird = bookCreator("To Kill A Mocking Bird", "Harper Lee", "Southern Gothic", "978-0446310789");

const gatsby = bookCreator("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", "978-0743273565");