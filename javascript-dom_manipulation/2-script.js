document.addEventListener("DOMContentLoaded", function () {
    var redHeader = document.getElementById("red_header");
    var header = document.querySelector("header");

    redHeader.addEventListener("click", function () {
        header.classList.add("red");
    });
});