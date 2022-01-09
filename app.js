const btnTranslate = document.querySelector("#btn-translate");
console.log(btnTranslate);

let txtInput = document.querySelector("#txt-input");
console.log(txtInput);

let outputDiv = document.querySelector("#output");

// var mockServerUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

const serverUrl = "https://api.funtranslations.com/translate/minion.json";

const constructTranslationUrl = (text) => {
  return serverUrl + "?" + "text=" + text;
  //   `${serverUrl}?text=${text}`;
};
console.log(constructTranslationUrl("hi"));

//   return serverUrl + "?" + "text=" + text;

const errorHandler = (error) => console.log("error occured: ", error);

const clickEventHandler = () => {
  let inputText = txtInput.value; //input

  //calling server for processing
  fetch(constructTranslationUrl(inputText))
    .then((response) => response.json()) //processing
    .then((json) => {
      let translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; //output
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickEventHandler);

// var getTextArea=document.getElementsByTagName('textarea');
// console.log(getTextArea);

// var class_select=document.getElementsByClassName('.head');
// console.log(class_select);

// var translate=document.querySelector("[name='Translator']");
// console.log(translate);
