function createSubmitButton() {
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit'; 
    const submitButtonContainer = document.getElementById('submitButtonContainer');
    submitButtonContainer.appendChild(submitButton);

    setTimeout(() => {
        submitButton.textContent = 'Changed'; 
    }, 2000);

    return submitButton;
}
createSubmitButton();