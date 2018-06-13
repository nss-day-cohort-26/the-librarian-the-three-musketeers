const sideBar = document.querySelector("#side-bar");
const fragment = document.createDocumentFragment();

const booksAvailable = () => {
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
        } else if (library[prop].checkedOut === true) {
            let unavailable = document.createElement("li");
            unavailable.innerHTML = `${prop}`;
            unavailable.style.color = "red";
            fragment.appendChild(unavailable);
        } 
    }
    sideBar.appendChild(fragment);
}

booksAvailable();

const subButton = document.querySelector('#checkout')
const retButton = document.querySelector('#return')

function submition(){
    return 0;
}
subButton.addEventListener('click', submition)