document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#loginForm");
    let msg = document.querySelector("#loginMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let usernameInput = document.querySelector("#username").value;
        let passwordInput = document.querySelector("#password").value;

        let storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            msg.textContent = "No registered user found!";
            msg.style.color = "red";
            return;
        }

        if (usernameInput === storedUser.username && passwordInput === storedUser.password) {
            localStorage.setItem("loggedInUser", storedUser.username);
            msg.style.color = "green";
            msg.textContent = "Login successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        } else {
            msg.style.color = "red";
            msg.textContent = "Username or password is incorrect!";
        }
    });
});
