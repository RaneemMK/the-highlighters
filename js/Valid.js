    function validateName() {
        var name = document.getElementById('name').value;

        // Check if the name contains only letters and is not more than 25 characters
        if (!/^[A-Za-z ]{1,25}$/.test(name)) {
            document.getElementById('nameError').innerText = 'Invalid name format.';
            return false;
        }

        // Clear any previous error messages
        document.getElementById('nameError').innerText = '';
        return true;
    }

    function validatePhoneNumber() {
        var phoneNumber = document.getElementById('phoneNumber').value;

       // Check if the phone number matches the specified pattern
       if (!/^(050|059|056|054|053|055)\d{0,8}$/.test(phoneNumber)) {
        document.getElementById('phoneError').innerText = 'Invalid phone number format.';
    } else {
        // Clear the error message
        document.getElementById('phoneError').innerText = '';
    }

        // Check if the phone number has more than 10 digits
        if (phoneNumber.length > 10) {
            document.getElementById('phoneError').innerText = 'Phone number should not exceed 10 digits.';
            return false;
        }

        // Clear any previous error messages
        document.getElementById('phoneError').innerText = '';
        return true;
    }

    function submitForm() {
        // Validate name and phone number
        var isNameValid = validateName();
        var isPhoneNumberValid = validatePhoneNumber();

        // If both name and phone number are valid, show success message
        if (isNameValid && isPhoneNumberValid) {
            document.getElementById('successMessage').innerText = 'Thank you!';
            // Clear the form fields
            document.getElementById('name').value = '';
            document.getElementById('phoneNumber').value = '';
        }
    }
