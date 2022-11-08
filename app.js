
var inputText = document.querySelector("#user-input");
var btnTranslate = document.querySelector("#btn");
var outputText = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var input = inputText.value; 

    fetch(getTranslationURL(input))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText; 
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)

