// Function to calculate age based on birth year
function calculateAge() {
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    alert('The person is approximately ' + age + ' years old.');
}

// Create a form to calculate age
function createAgeCalculatorForm() {
    const form = document.createElement('form');
    const birthYearInput = document.createElement('input');
    birthYearInput.setAttribute('type', 'number');
    birthYearInput.setAttribute('id', 'birthYear');
    birthYearInput.setAttribute('placeholder', 'Enter birth year');

    const calculateButton = document.createElement('button');
    calculateButton.textContent = 'Calculate Age';
    calculateButton.addEventListener('click', calculateAge);

    form.appendChild(birthYearInput);
    form.appendChild(calculateButton);

    const ageCalculatorContainer = document.getElementById('ageCalculatorContainer');
    ageCalculatorContainer.appendChild(form);
}

// Create the age calculator form
createAgeCalculatorForm();