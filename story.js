const subButton = document.querySelector('#checkout')
const retButton = document.querySelector('#return')

function submition() {
    return 0;
}
subButton.addEventListener('click', submition)

const logEvent = () => {
    // Gets the book from the input field
    const bookInput = document.querySelector("#book");
    const currentBook = bookInput.value;

    // Gets the customer from the input field
    const customerInput = document.querySelector("#cust");
    const currentCustomer = customerInput.value;

    // // Will eventually get the genre from the input field
    // const genreInput = document.querySelector("#genre");
    // const currentGenre = genreInput.value;

    const eventType = event.target.id;
    let eventMessage = ``;

    switch (eventType) {
        case "checkout":
            eventMessage = `${currentBook} was just checked out by ${currentCustomer}.`;
            break;
        case "return":
            eventMessage = `${currentCustomer} just returned ${currentBook}. `;
            if (bookOverdue) {
                eventMessage += `Since ${currentBook} was overdue, ${currentCustomer} was fined $5.00 and scolded by the librarian.`;
            }
            break;
        case "register":
            eventMessage = `${currentCustomer} just got a new library card! Happy reading, ${currentCustomer}!`
            break;
        case "recommend":
            eventMessage = `The librarian just recommended some ${genre} books for ${currentCustomer}!`
            break;
        default:
            break;
    }

    const logDiv = document.querySelector("#log");
    const eventNode = document.createElement("h5");
    eventNode.textContent = eventMessage;
    logDiv.appendChild(eventNode);
}