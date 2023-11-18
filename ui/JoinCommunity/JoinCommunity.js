// Get the form element and submit button
const joinForm = document.getElementById('joinForm');
const joinButton = document.getElementById('joinButton');

// Add a click event listener to the "Join" button
joinButton.addEventListener('click', function () {
    // Get the form fields
    const addressInput = document.getElementById('address');
    const childAgeInput = document.getElementById('childAge');
    const childGenderInput = document.getElementById('childGender');

    // Get the error message elements
    const addressError = document.getElementById('addressError');
    const childAgeError = document.getElementById('childAgeError');
    const childGenderError = document.getElementById('childGenderError');

    // Reset error messages
    addressError.textContent = '';
    childAgeError.textContent = '';
    childGenderError.textContent = '';

    // Validate the form fields
    let isValid = true;

    if (addressInput.value.trim() === '') {
        addressError.textContent = 'Address is required';
        isValid = false;
    }

    if (childAgeInput.value.trim() === '') {
        childAgeError.textContent = 'Child\'s age is required';
        isValid = false;
    }

    if (childGenderInput.value.trim() === '') {
        childGenderError.textContent = 'Child\'s gender is required';
        isValid = false;
    }

    // If the form is valid, you can perform the submission action here
    if (isValid) {
        // Perform the submission action (e.g., close the modal and show the thank you message)
        $('#joinModal').modal('hide');
        $('#thanksModal').modal('show');
    }
});
