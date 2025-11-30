    document.addEventListener("DOMContentLoaded", function () {

    let profileLink = document.querySelector(".account-icons .dropdown-toggle");
    let dropdownMenu = document.querySelector(".account-icons .dropdown-menu");
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (!profileLink || !dropdownMenu) return;

    if (loggedInUser && loggedInUser !== "") {

        profileLink.textContent = loggedInUser;

        dropdownMenu.innerHTML = `
            <li><a class="dropdown-item" href="#" id="logoutLink">Logout</a></li>
        `;

        let logoutLink = document.querySelector("#logoutLink");
        logoutLink.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("loggedInUser");
            location.reload();
        });
    } else {
        profileLink.textContent = "Profile";
        dropdownMenu.innerHTML = `
            <li><a class="dropdown-item" href="login.html">Login</a></li>
            <li><a class="dropdown-item" href="register.html">Register</a></li>
        `;
    }
});
