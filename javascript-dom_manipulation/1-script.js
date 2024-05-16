document.addEventListener("DOMContentLoaded", function () {
    var redHeader = document.getElementById("red_header");
    var header = document.querySelector("header");

    redHeader.addEventListener("click", function () {
        header.style.color = "#FF0000";
    });
});