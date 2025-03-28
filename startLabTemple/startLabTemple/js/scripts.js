import { temples, url } from "../data/temples.js"; 

console.log(temples);
console.log(url);

// grab a reference to the division where we display items
const showHere = document.querySelector('#showHere');
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const closeButton = document.querySelector('#mydialog button');
const mypara = document.querySelector('#mydialog p');

closeButton.addEventListener('click', () => mydialog.close());

// loop through the array JSON file items
function displayitems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement("img")
        photo.src = `${url}${x.path}`
        photo.alt = x.name
        // ad an event listner to each division on the page
        photo.addEventListener('click', () => showStuff(x));

        showHere.appendChild(photo)
    });// end loop

} //end function

// start to display all items in the JSON file
displayitems(temples)

// populate the dialog with information when the imag eis clicked
function showStuff(x) {
    mytitle.innerHTML = x.name
    mydialog.showModal();
} // end of function
