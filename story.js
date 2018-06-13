const checkButton = document.querySelector('#checkout')
const retButton = document.querySelector('#return')
const cardButton = document.querySelector('#libCard')
const recButton = document.querySelector('#recommend')
function erase(){
    const recombler = document.querySelector('#recommendations')
    while (recombler.firstChild) {
        recombler.removeChild(recombler.firstChild);
    }
    recombler.innerHTML = ""
}
function check(){
    erase()
    const title = document.querySelector('#book').value
    const cust = document.querySelector('#cust').value
    customers[cust].Checkout(title)
    const inputs = document.querySelectorAll('input')
    inputs.forEach(x => x.value = "")
}

function ret(){
    erase()
    const title = document.querySelector('#book').value
    const cust = document.querySelector('#cust').value
    customers[cust].ReturnBook(title)
    const inputs = document.querySelectorAll('input')
    inputs.forEach(x => x.value = "")
}

function cardMake(){
    erase()
    const title = document.querySelector('#book').value
    const cust = document.querySelector('#cust').value
    librarian.register(customers[cust])
    const inputs = document.querySelectorAll('input')
    inputs.forEach(x => x.value = "")
}

function recom(){
    erase()
    const genre = document.querySelector('#genre').value
    const recs = librarian.recommend(genre)
    const recombler = document.querySelector('#recommendations')
    recs.forEach(vol => {
        const br = document.createElement('br')
        recombler.appendChild(br)
        const tite = vol.title
        const tex = document.createTextNode(tite)
        recombler.appendChild(br)
    } )
    const inputs = document.querySelectorAll('input')
    inputs.forEach(x => x.value = "")
}

checkButton.addEventListener('click', check)
retButton.addEventListener('click', ret)
cardButton.addEventListener('click', cardMake)
recButton.addEventListener('click', recom)



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
