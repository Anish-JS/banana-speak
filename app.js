var btnTranslate=document.querySelector('#btn-translate');
console.log(btnTranslate);

var txtInput=document.querySelector('#txt-input');
console.log(txtInput);

var outputDiv=document.querySelector('#output');

outputDiv.innerHTML="Hello, How you doin?"
console.log(outputDiv);

function clickEventHandler(){
    outputDiv.innerText="ajajajajaja  "+txtInput.value;
}

btnTranslate.addEventListener("click",clickEventHandler);


// var getTextArea=document.getElementsByTagName('textarea');
// console.log(getTextArea);

// var class_select=document.getElementsByClassName('.head');
// console.log(class_select);

// var translate=document.querySelector("[name='Translator']");
// console.log(translate);