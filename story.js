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

