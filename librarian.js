let bookOverdue = false;

const librarian = Object.create({}, {
  register: {
    value: function (customer) {
      if (customer.cardNumber === 0) {
        customer.cardNumber = Math.floor(Math.random() * (1e10));
      }
    }
  },

  checkout: {
    value: function (title) {
      if (library[title].checkedOut === false) {
        library[title].checkedOut = true;
        const today = new Date();
        const newDueDate = new Date();
        newDueDate.setDate(today.getDate() + 7);
        library[title].dueDate = newDueDate;
        return library[title];
      }
    }
  },

  return: {
    value: function (customer, title) {
      bookOverdue = false;
      if (library[title].checkedOut === true) {
        const today = new Date();
        if (today.getTime() > library[title].dueDate.getTime()) {
          bookOverdue = true;
          customer.fees += 5;
          console.log(`The overdue fee is $5.00, so you now owe a total of $${customer.fees}.00; shame on you for returning things late!`);
        }
        library[title].checkedOut = false;
        library[title].dueDate = {};
      }
    }
  },

  recommend: {
    value: function (genre) {
      const booksByGenre = [];
      for (book in library) {
        if ((library[book].genre === genre) && (library[book].checkedOut === false)) {
          booksByGenre.push(library[book]);
        }
      }
      return booksByGenre;
    }
  }

});

