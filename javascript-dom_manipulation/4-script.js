document.addEventListener("DOMContentLoaded", function () {
    var addItem = document.getElementById("add_item");
    var myList = document.querySelector(".my_list");

    addItem.addEventListener("click", function () {
        var newItem = document.createElement("li");
        newItem.textContent = "Item";
        myList.appendChild(newItem);
    });
});