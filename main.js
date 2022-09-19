"use strict"

//Update the HTML
//
// Tables are a little old school, you need to refactor the code so that each coffee is displayed
// in a div that contains a heading displaying the coffee name, and the type of roast in a paragraph.
// Don't display the ids, these are only for our application's internal use
//
// When the page loads, the coffees should be sorted by their ids in ascending order
//
// Add functionality to search through the coffees by name,
// and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)
//
// Add functionality to update the displayed coffee as the user types into the
// search box, or as soon as they select an option from the select.


// ############################################ MY CODE ####################
// function renderCoffee(coffee) {
//     let html = '<div class="coffee">';
//     html += '<p>' + coffee.id + '</p>';
//     html += '<h1>' + coffee.name + '</h1>';
//     html += '<p>' + coffee.roast + '</p>';
//     html += '</div>';
//
//     return html;
// }


// ################################### ORIGINAL CODE ################################
//function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

                        //let coffees = [
                        //     {id: 1, name: 'Light City', roast: 'light'},
                        //     {id: 2, name: 'Half City', roast: 'light'},
                        //     {id: 3, name: 'Cinnamon', roast: 'light'},
                        //     {id: 4, name: 'City', roast: 'medium'},
                        //     {id: 5, name: 'American', roast: 'medium'},
                        //     {id: 6, name: 'Breakfast', roast: 'medium'},
                        //     {id: 7, name: 'High', roast: 'dark'},
                        //     {id: 8, name: 'Continental', roast: 'dark'},
                        //     {id: 9, name: 'New Orleans', roast: 'dark'},
                        //     {id: 10, name: 'European', roast: 'dark'},
                        //     {id: 11, name: 'Espresso', roast: 'dark'},
                        //     {id: 12, name: 'Viennese', roast: 'dark'},
                        //     {id: 13, name: 'Italian', roast: 'dark'},
                        //     {id: 14, name: 'French', roast: 'dark'},
                        // ];

function renderCoffee(coffee) { // Adds divs for every item in coffees variable
    let html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) { // This chooses how to display/ what order the coffees will be displayed
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value; // whether the user selected roast is dark, light, medium, this variable stores the dark, light or medium value
    let filteredCoffees = []; // filtered coffees is the new array that will display the user-input values
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all"){
            filteredCoffees = coffees;
        }


        // else {
        //     filteredCoffees.push(coffees.);
        // }


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

const addCoffee = () => {

}

// function myFunction() {
//     let input, filter, tbody, divId, a, i, txtValue;
//     input = document.getElementById("formInput");
//     filter = input.value.toUpperCase();
//     tbody = document.getElementById("coffees");
//     divId = tbody.getElementsByClassName("coffee");
//     for (i = 0; i < divId.length; i++) {
//         a = divId[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             divId[i].style.display = "";
//         } else {
//             divId[i].style.display = "none";
//         }
//     }
// }



// Get user input from a form field
let formInput = document.getElementById('formInput');

// let userTyping = formInput.onkeyup = function (){
//     updateCoffees(formInput.value);
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];




let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

let allCoffee = tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);

