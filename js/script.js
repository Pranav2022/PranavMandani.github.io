function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const certificates = document.querySelectorAll(".certification-name img");

    certificates.forEach((certificate) => {
        certificate.addEventListener("click", function () {
            const imageUrl = this.src;
            window.open(imageUrl, "_blank");
        });
    });
});

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Add logic to send data to the server and handle email sending (server-side).
    // You may use Fetch API or AJAX to send data to the server.

    // For demonstration purposes, let's log the data to the console.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

let currentSlide = 1;

showSlide(currentSlide);

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        currentSlide = 1;
    }

    if (n < 1) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide - 1].style.display = "block";
}
