var btnTranslate = document.querySelector('#btn-translate');
console.log(btnTranslate);

var txtInput = document.querySelector('#txt-input');
console.log(txtInput);

var outputDiv = document.querySelector('#output');

// var mockServerUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function constructTranslationUrl(text) {
    return serverUrl + '?' + 'text=' + text
}

function errorHandler(error) {
    console.log("error occured: ", error)

}

function clickEventHandler() {
    var inputText = txtInput.value; //input

    //calling server for processing
    fetch(constructTranslationUrl(inputText)).then(response => response.json()) //processing
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        }).catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);




// var getTextArea=document.getElementsByTagName('textarea');
// console.log(getTextArea);

// var class_select=document.getElementsByClassName('.head');
// console.log(class_select);

// var translate=document.querySelector("[name='Translator']");
// console.log(translate);