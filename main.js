
document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.getElementById("login-page");
    const loginLink = document.getElementById("login-link");
    const loginForm = document.getElementById("login-form");

    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginPage.style.display = "flex";
    });

    window.addEventListener("click", (e) => {
        if (e.target === loginPage) {
            loginPage.style.display = "none";
        }
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "password") {
            alert("Login successful!");
            loginPage.style.display = "none";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We will get back to you soon.");
        contactForm.reset();
    });
});
