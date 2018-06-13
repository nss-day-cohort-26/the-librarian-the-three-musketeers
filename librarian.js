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
      if (library[title].checkedOut === true) {
        const today = new Date();
        if (today.getTime() > library[title].dueDate.getTime()) {
          customer.fees += 5;
          console.log(`The overdue fee is $5.00; you owe a total of ${customer.fees}`);
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

