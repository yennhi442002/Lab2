// Function to create a submit button and change its text after 2 seconds
function createSubmitButton() {
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit'; // Initial text for the button

    // Changing the text of the button after 2 seconds
    setTimeout(() => {
        submitButton.textContent = 'New Text'; // New text for the button
    }, 2000);

    return submitButton;
}

// Function to create a form and handle the submit event
function createForm() {
    const form = document.createElement('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        const submitButtonValue = document.getElementById('submitButton').textContent;
        alert('Value of the submit button: ' + submitButtonValue);
    });

    // Appending the form to the container in the HTML
    const formContainer = document.getElementById('formContainer');
    formContainer.appendChild(form);

    return form;
}

// Create the form and handle the submit event
const form = createForm();

// Create the submit button and append it to the form
const submitButton = createSubmitButton();
form.appendChild(submitButton);