var btnTranslate=document.querySelector("#btn-translate");
var inputDiv=document.querySelector("#txtara-in");
var outputDiv=document.querySelector("#txtara-op");
var serverURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL (input){
    return serverURL + "?" + "text=" + input
}

function clickHandler() {
    var inputText = inputDiv.value;

    fetch(getTranslationURL (inputText))
    .then(responce => responce.json())
    .then (json=> {
        var translatedText = json.contents.translated ;
        outputDiv.innerText = translatedText;
})
};

btnTranslate.addEventListener("click" , clickHandler)