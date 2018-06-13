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

const elonMusk = bookCreator("Elon Musk", "Biography", "978-0062301239");

const steveJobs = bookCreator("Steve Jobs", "Walter Isaacson", "Biography", "1-4516-4853-7");

const mobyDick = bookCreator("Moby-Dick", "Herman Melville", "Fiction", "978-0-321-22800-0");

const scarTissue = bookCreator("Scar Tissue", "Anthony Kiedis", "Autobiography", "1-4013-0101-0");

const gandhi = bookCreator("The Story of My Experiments", "Mahatma Gandhi", "Autobiography", "978-0486245935")

const life3 = bookCreator("Life 3.0", "Max Tegmark", "Sci-Fi", "978-1-101-94659-6");

const martian = bookCreator("The Martian", "Andy Weir", "Sci-Fi", "978-0-8041-3902-1");

const mockingbird = bookCreator("To Kill A Mocking Bird", "Harper Lee", "Fiction", "978-0446310789");

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