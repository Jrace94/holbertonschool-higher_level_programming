document.addEventListener("DOMContentLoaded", function () {
    var addItemButton = document.getElementById("add_item");
    var removeItemButton = document.getElementById("remove_item");
    var clearListButton = document.getElementById("clear_list");
    var myList = document.querySelector(".my_list");

    addItemButton.addEventListener("click", function () {
        var newItem = document.createElement("li");
        newItem.textContent = "Item";
        myList.appendChild(newItem);
    });

    removeItemButton.addEventListener("click", function () {
        var lastItem = myList.lastElementChild;
        if (lastItem) {
            myList.removeChild(lastItem);
        }
    });

    clearListButton.addEventListener("click", function () {
        myList.innerHTML = "";
    });
});