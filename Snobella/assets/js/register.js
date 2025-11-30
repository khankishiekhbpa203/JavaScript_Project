document.addEventListener("DOMContentLoaded", function () {

    let form = document.querySelector("#registerForm");
    let msg = document.querySelector("#regMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.querySelector("#name").value;
        let username = document.querySelector("#username").value;
        let gmail = document.querySelector("#gmail").value;
        let password = document.querySelector("#password").value;

        let user = {
            name: name,
            username: username,
            gmail: gmail,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        msg.style.color = "green";
        msg.textContent = "Registration successful!";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    });

});

