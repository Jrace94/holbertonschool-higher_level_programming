document.addEventListener("DOMContentLoaded", function () {
    var updateHeader = document.getElementById("update_header");
    var header = document.querySelector("header");

    updateHeader.addEventListener("click", function () {
        header.textContent = "New Header!!!";
    });
});