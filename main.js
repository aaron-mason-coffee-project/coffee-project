"use strict"

function renderCoffee(coffee) { // Adds divs for every item in coffees variable
    let html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '<div>' + coffee.img + "</div>";
    html += '</div>';

    return html;
}


function renderCoffees(coffees) { // This chooses how to display/ what order the coffees will be displayed
    let html = '';
    // let displayPref = document.getElementById('coffeeDisplaySection').style.columns;
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value; // whether the user selected roast is dark, light, medium, this variable stores the dark, light or medium value
    let filteredCoffees = []; // filtered coffees is the new array that will display the user-input values
    let coffeeDisplaySection = document.getElementById("coffeeDisplaySection");
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all"){
            filteredCoffees = coffees;
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


const search = () => {
    const searchBox = document.getElementById("formInput").value.toUpperCase();
    // const coffeesTbody = document.getElementById("coffees");
    const coffee = document.querySelectorAll(".coffee");
    const coffeeName = document.getElementsByTagName("h2");

    for(let i = 0; i < coffeeName.length; i++) {
        let match = coffee[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox) > -1 ) {
                coffee[i].style.display = "";
            }else {
                coffee[i].style.display = "none";
            }
        }
    }
}

let addRoastSelection = document.querySelector('#roast-selection2');
let secondInput = document.querySelector('#secondInput');
let submitButton2 = document.getElementById('submit2');

let buttonClick = submitButton2.addEventListener('onclick', addCoffee);



//
function  addCoffee() {
    let newCoffee = {
        id: coffees[coffees.length-1].id +1,
        name: secondInput.value,
        roast: addRoastSelection.value,
        img: '<img src="img/coffeeicon.png">'
    };
    coffees.push(newCoffee);
    let x = [];

    for (let i = 0; i < coffees.length; i++){
        x = x + coffees[i];
    }
    alert(`Your ${newCoffee.name} ${newCoffee.roast} has been added!`);
    updateCoffees();

}



// Get user input from a form field
let formInput = document.getElementById('formInput');


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light', img: '<img src="img/coffeeicon.png">'},
    {id: 2, name: 'Half City', roast: 'light', img: '<img src="img/coffeeicon.png">'},
    {id: 3, name: 'Cinnamon', roast: 'light', img: '<img src="img/coffeeicon.png">'},
    {id: 4, name: 'City', roast: 'medium', img: '<img src="img/coffeeicon.png">'},
    {id: 5, name: 'American', roast: 'medium', img: '<img src="img/coffeeicon.png">'},
    {id: 6, name: 'Breakfast', roast: 'medium', img: '<img src="img/coffeeicon.png">'},
    {id: 7, name: 'High', roast: 'dark', img: '<img src="img/coffeeicon.png">'},
    {id: 8, name: 'Continental', roast: 'dark', img: '<img src="img/coffeeicon.png">'},
    {id: 9, name: 'New Orleans', roast: 'dark', img: '<img src="img/coffeeicon.png">'},
    {id: 10, name: 'European', roast: 'dark', img: '<img src="img/coffeeicon.png">'},
    {id: 11, name: 'Espresso', roast: 'dark', img: '<img src="img/coffeeicon.png">'},
    {id: 12, name: 'Viennese', roast: 'dark', img: '<img src="img/coffeeicon.png">'},
    {id: 13, name: 'Italian', roast: 'dark', img: '<img src="img/coffeeicon.png">'},
    {id: 14, name: 'French', roast: 'dark', img: '<img src="img/coffeeicon.png">'},
];




let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

let allCoffee = tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);