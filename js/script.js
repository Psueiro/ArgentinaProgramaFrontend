const translations = [];


async function Startup() {

    const response = await fetch("../js/info.json");
    const data = await response.json();

    for (var key in data) {
        for (var line in data[key]) {
            translations.push({id: data[key][line].id , en: data[key][line].en,es:data[key][line].es});
        }
    }

}

function ReplaceTextEnglish() {

    for (let i = 0; i < translations.length; i++) {
        document.getElementById(translations[i].id).innerHTML = translations[i].en;
    }

}

function ReplaceTextSpanish() {
    for (let i = 0; i < translations.length; i++) {
        document.getElementById(translations[i].id).innerHTML = translations[i].es;
    }
}

function CheckForms(){
var allInputForms = document.getElementsByClassName("form-control");
var allInvalidMessages = document.getElementsByClassName("invalid-feedback");
var allValidMessages = document.getElementsByClassName("valid-feedback");
var validCount = 0;
for (i = 0; i<allInputForms.length; i++)
    {
      if(allInputForms[i].value === "" )
      {
          allInvalidMessages[i].style.display = "contents";
          allValidMessages[i].style.display = "none";

      }
      else
      {
          allInvalidMessages[i].style.display = "none";
          allValidMessages[i].style.display = "contents";
            validCount++;
            if(validCount===allInputForms.length)
            document.getElementById("sentMessage").style.display = "contents";
            else 
            document.getElementById("sentMessage").style.display = "none";
      }

    }
}