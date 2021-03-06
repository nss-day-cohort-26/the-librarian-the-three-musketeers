const sideBar = document.querySelector("#side-bar");
const fragment = document.createDocumentFragment();

const booksAvailable = () => {
        const cleardiv = document.querySelector('#side-bar')
        while (cleardiv.firstChild){
            cleardiv.removeChild(cleardiv.firstChild)
        }
        let booksHeader = document.createElement("h3");
        booksHeader.innerHTML = `Library Inventory:`;
        let booksDesc = document.createElement("h5");
        booksDesc.innerHTML = `Green = Available | Red = Unavailable`;
        fragment.appendChild(booksHeader);
        fragment.appendChild(booksDesc);
    for (let avail in library) {
        if (library[avail].checkedOut === false) {
            let available = document.createElement("li");
            available.innerHTML = `${avail}`;
            available.style.color = "green";
            fragment.appendChild(available);
        } else if (library[avail].checkedOut === true) {
            let unavailable = document.createElement("li");
            unavailable.innerHTML = `${avail}`;
            unavailable.style.color = "red";
            fragment.appendChild(unavailable);
        } 
    }
    sideBar.appendChild(fragment);
}

booksAvailable();

const subButton = document.querySelector('#checkout')
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
    logEvent();

    const inputs = document.querySelectorAll('input')
    inputs.forEach(x => x.value = "")
    booksAvailable();
}

function ret(){
    erase()
    const title = document.querySelector('#book').value
    const cust = document.querySelector('#cust').value
    customers[cust].ReturnBook(title)
    const inputs = document.querySelectorAll('input')
    logEvent()

    inputs.forEach(x => x.value = "")
    booksAvailable();
}

function cardMake(){
    erase()
    const title = document.querySelector('#book').value
    const cust = document.querySelector('#cust').value
    librarian.register(customers[cust])
    logEvent();

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
        console.log(tite)
        const tex = document.createTextNode(tite)
        recombler.appendChild(tex)
    } )
    logEvent();

    const inputs = document.querySelectorAll('input')
    inputs.forEach(x => x.value = "")
}
const logEvent = () => {
    // Gets the book from the input field
    const bookInput = document.querySelector("#book");
    const currentBook = bookInput.value;

    // Gets the customer from the input field
    const customerInput = document.querySelector("#cust");
    const currentCustomer = customerInput.value;

    // // Will eventually get the genre from the input field
    const genreInput = document.querySelector("#genre");
    const currentGenre = genreInput.value;

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
        case "libCard":
            eventMessage = `${currentCustomer} just got a new library card! Happy reading, ${currentCustomer}!`
            break;
        case "recommend":
            eventMessage = `The librarian just recommended some ${currentGenre} books for ${currentCustomer}!`
            break;
        default:
            break;
    }

    const logDiv = document.querySelector("#log");
    const eventNode = document.createElement("h5");
    eventNode.textContent = eventMessage;
    logDiv.appendChild(eventNode);
}


checkButton.addEventListener('click', check)
retButton.addEventListener('click', ret)
cardButton.addEventListener('click', cardMake)
recButton.addEventListener('click', recom)



