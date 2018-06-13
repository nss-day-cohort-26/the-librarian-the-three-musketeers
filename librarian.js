const librarian = Object.create({}, {
  register: {
    value: function (customer) {
      if (customer.cardNumber != 0) {
        customer.cardNumber = Math.floor(Math.random() * (1e10));
      }
    }
  },

  checkout: {
    value: function (title) {
      if (library[title].checkedOut === false) {
        const today = new Date();
        const newDueDate = new Date();
        newDueDate.setDate(today.getDate() + 7);
        library[title].dueDate = newDueDate;
        return library[title];
      }
    }
  },

});

