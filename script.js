var textInput = document.querySelector("#text-input");
var btnTranslation = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/groot.json";

var getTranslationURL = (input) => {
  return url + "?" + "text=" + input;
};

var errors = (err) => {
  alert("Oops! Something went wrong! Try again after sometime:)");
};

btnTranslation.addEventListener("click", function clickHandler() {
  var inputText = textInput.value;
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translated = json.contents.translated;
      output.innerText = translated;
    })
    .catch(errors);
});
