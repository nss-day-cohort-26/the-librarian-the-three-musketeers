const library = {};

// Book Template

const Book = Object.create({}, {
    title: {
        value: "",
        enumurable: true
    },
    author: {
        value: "",
        enumurable: true
    },
    genre: {
        value: "",
        enumurable: true,
    },
    isbnNumb: {
        value: "",
        enumerable: true
    },
    checkedOut: {
        value: false,
        enumrable: true,
        writable: true
    },
    dueDate: {
        value: {},
        enumrable: true,
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

// Local Storage

const saveDB = function (dbObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(dbObject)

    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDB(library, "Library");

const loadDB = function (localStorageKey) {
    const dbString = localStorage.getItem(localStorageKey)
    return JSON.parse(dbString)
}

const loadDatabase = loadDB("Library");