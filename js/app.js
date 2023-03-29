const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', function() {
    document.querySelector('.header-bottom').classList.toggle('open');
});

const colors = [
    '#0aa834',
    '#0a98a8',
    '#4f0aa8',
    '#e8ac15',
]

document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const color = colors[randomIndex];
        card.style.backgroundColor = color;
    });
})

// Another section

const json = {
    "employees": [
        {
            "firstName":"John", 
            "lastName":"Doe"
        },
        {
            "firstName":"Anna", 
            "lastName":"Karenina"
        },
        {
            "firstName":"Jay-Z", 
            "lastName":"Dog"
        },
        {
            "firstName":"Snoop", 
            "lastName":"Shady"
        },
        {
            "firstName":"Slim", 
            "lastName":"Tentacion"
        },
        {
            "firstName":"Kanye", 
            "lastName":"2Pac"
        },
        {
            "firstName":"West", 
            "lastName":"50Cent"
        },
    ],
}

const section = document.querySelector('.placeholder');
const form = document.querySelector('.searchForm');
const input = document.querySelector('.search');

function filterArr(arr, keyword) {
    filteredArr = arr.filter(
        (employee) => 
            (employee.firstName.toLowerCase() + employee.lastName.toLowerCase()).includes(keyword.toLowerCase().replace(/ /g,''))
    );
    return filteredArr;
}

function findElement(arr, keyword) {
    element = arr.find((el) => (el.firstName.toLowerCase() + el.lastName.toLowerCase()) === (keyword.toLowerCase().replace(/ /g,'')))
    return element
}

function showElements(keyword) {
    arr = filterArr(json.employees, keyword);
    arr.forEach((employee, index) => {
        const element = document.createElement('p');
        element.innerText = `${employee.firstName} ${employee.lastName}`;
        element.classList.add('tac');
        element.classList.add('names');
        element.setAttribute('ondblclick', `removeElement(${index})`);
        section.appendChild(element);
    });
}

function printElements() {
    section.innerHTML = '';
    showElements(input.value);
}

function capitalize(word) {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalized
}

function removeElement(id) {
    json.employees = json.employees.filter((employee, index) => index != id); 
    printElements('');
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(!findElement(json.employees, input.value)) {
        arr = input.value.split(' ');
        if(arr.length === 2 && arr[0] && arr[1]) {
            json.employees.push(
                {
                    "firstName": capitalize(arr[0]),
                    "lastName": capitalize(arr[1])
                }
            )
        }
        printElements();
    }
});

input.addEventListener('input', printElements);

showElements('');
json.employees = json.employees.sort((a, b) => a.firstName.localeCompare(b.firstName));