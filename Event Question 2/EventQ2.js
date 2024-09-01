function validateName() {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        return false;
    } else {
        nameError.style.display = "none";
        return true;
    }
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email.";
        emailError.style.display = "block";
        return false;
    } else {
        emailError.style.display = "none";
        return true;
    }
}

function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("password-error");

    if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        passwordError.style.display = "block";
        return false;
    } else {
        passwordError.style.display = "none";
        return true;
    }
}

const form = document.getElementById("registration-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateName() && validateEmail() && validatePassword()) {
       
        console.log("Form submitted successfully!");
    }
});


const nameInput = document.getElementById("name");
nameInput.addEventListener("input", validateName);
nameInput.addEventListener("blur", validateName);

const emailInput = document.getElementById("email");
emailInput.addEventListener("input", validateEmail);
emailInput.addEventListener("blur", validateEmail);

const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", validatePassword);
passwordInput.addEventListener("blur", validatePassword);