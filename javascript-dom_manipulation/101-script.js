document.addEventListener("DOMContentLoaded", function () {
    var btnTranslate = document.getElementById("btn_translate");
    var languageCode = document.getElementById("language_code");
    var helloElement = document.getElementById("hello");

    btnTranslate.addEventListener("click", function () {
        var selectedLanguage = languageCode.value;
        if (selectedLanguage) {
            fetch(`https://hellosalut.stefanbohacek.dev/?lang=${selectedLanguage}`)
                .then(response => response.json())
                .then(data => {
                    helloElement.textContent = data.hello;
                })
                .catch(error => {
                    console.error('Error fetching translation:', error);
                });
        } else {
            helloElement.textContent = "Please choose a language";
        }
    });
});