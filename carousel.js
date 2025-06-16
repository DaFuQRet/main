function createCarousel(imagesList, parentElementSelector) {
    const parent = document.querySelector(parentElementSelector);

    const carousel = document.createElement("div");
    carousel.classList.add("carousel-container");

    const slides = imagesList.map((url, i) => {
        const img = document.createElement("img");
        img.src = url;
        img.classList.add("carousel-image");
        if (i === 0) img.classList.add("active");
        carousel.appendChild(img);
        return img;
    });

    let current = 0;

    function showNext() {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }

    setInterval(showNext, 3000);

    parent.appendChild(carousel);
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-container");

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();

        if (validateName(form.name) && validateEmail(form.email) && validatePassword(form.password) && validatePlanet(form.planet)) {
            console.log("Form validation successful");
            alert("Enlistment submitted! The Emperor Protects!");
            form.reset();
        } else {
            console.log("Form contains errors");
        }
    });

    function validateName(input) {
        const value = input.value.trim();
        const isValid = /^(\w{3,}\s){1,}\w{3,}$/.test(value);
        errorMessage(input, isValid, "Must be at least 2 words 3+ chars each");
        return isValid;
    }

    function validateEmail(input) {
        const value = input.value.trim();
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        errorMessage(input, isValid, "Enter a valid email address");
        return isValid;
    }

    function validatePassword(input) {
        const value = input.value;
        const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value);
        errorMessage(input, isValid, "8+ chars with 1 number and 1 special char");
        return isValid;
    }

    function validatePlanet(input) {
        const value = input.value.trim();
        const isValid = value.length >= 3;
        errorMessage(input, isValid, "Planet name must be 3+ characters");
        return isValid;
    }

    function errorMessage(input, isValid, message) {
        const errorElement = input.nextElementSibling;
        if (!isValid) {
            input.classList.add("error");
            if (errorElement && errorElement.classList.contains("error-message")) {
                errorElement.textContent = message;
            }
        } else {
            input.classList.remove("error");
            if (errorElement && errorElement.classList.contains("error-message")) {
                errorElement.textContent = "";
            }
        }
    }
});