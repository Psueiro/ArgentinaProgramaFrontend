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