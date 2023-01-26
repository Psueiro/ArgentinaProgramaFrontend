const translations = [];


function Startup()
{

fetch("../js/info.json")

// ///Aside bar
// //First

//     translations.push({id:"hardSkills",en: "Hard Skills", es:"Habilidades Sólidas"});

//     translations.push({id:"xrayskills",en: "X-Ray Skills", es:"Habilidad con Rayos X"});
//     translations.push({id:"fourHandedDent",en: "4 Handed Dentistry", es:"Tratamiento a 4 manos"});
//     translations.push({id:"dentalPre",en: "Dental Procedure Preparation", es:"Preparación de Tratamiento Dental"});
//     translations.push({id:"dentalDoc",en: "Dental Procedure Documentation", es:"Documentación de Tratamiento Dental"});
//     translations.push({id:"dentistEq",en: "Dentist Equipment Maintenance", es:"Mantenimiento de Equipamiento de Dentista"});

//     //Second

//     translations.push({id:"softSkills",en: "Soft Skills", es:"Habilidades Ligeras"});

//     translations.push({id:"compassion",en: "Compassion", es:"Compasión"});
//     translations.push({id:"teamwork",en: "Teamwork", es:"Tratamiento a 4 manos"});
//     translations.push({id:"greatAttitude",en: "Great Attitude", es:"Preparación de Tratamiento Dental"});
//     translations.push({id:"customerService",en: "Customer Service", es:"Documentación de Tratamiento Dental"});

//     //Third

//     translations.push({id:"languages",en: "Soft Skills", es:"Habilidades Ligeras"});

//     translations.push({id:"english",en: "English", es:"Inglés"});
//     translations.push({id:"spanish",en: "Spanish", es:"Español"});
//     translations.push({id:"german",en: "German", es:"Alemán"});

// /////Main

// ////Column1

// ///Main Title

// translations.push({id:"exp",en: document.getElementById("exp").innerHTML, es:"Experiencia"});

// //Sub title 1

// translations.push({id:"hamptomDentalSpa",en: "Hampton Dental Spa", es:"Spa Dental de Hampton"});

// //Bullet Points 

// translations.push({id:"bullet1",en: document.getElementById("bullet1").innerHTML, es:"Spa Dental de Hampton"});
// translations.push({id:"bullet2",en: document.getElementById("bullet2").innerHTML, es:"Spa Dental de Hampton"});
// translations.push({id:"bullet3",en: document.getElementById("bullet3").innerHTML, es:"Spa Dental de Hampton"});
// translations.push({id:"bullet4",en: document.getElementById("bullet4").innerHTML, es:"Spa Dental de Hampton"});
// translations.push({id:"bullet5",en: document.getElementById("bullet5").innerHTML, es:"Spa Dental de Hampton"});

// //Sub title 2

// translations.push({id:"brayDental",en: document.getElementById("brayDental").innerHTML, es:"Clínica Dental de Bray"});

// //Bullet Points 
// translations.push({id:"bullet6",en: document.getElementById("bullet6").innerHTML, es:"Spa Dental de Hampton"});
// translations.push({id:"bullet7",en: document.getElementById("bullet7").innerHTML, es:"Spa Dental de Hampton"});
// translations.push({id:"bullet8",en: document.getElementById("bullet8").innerHTML, es:"Spa Dental de Hampton"});
// translations.push({id:"bullet9",en: document.getElementById("bullet9").innerHTML, es:"Spa Dental de Hampton"});
// translations.push({id:"bullet10",en: document.getElementById("bullet10").innerHTML, es:"Spa Dental de Hampton"});

// //Sub title 3

// translations.push({id:"volunteer",en: document.getElementById("volunteer").innerHTML, es:"Voluntaria de Asistente Dental"});

// //Bullet Points 
// translations.push({id:"bullet11",en: document.getElementById("bullet11").innerHTML, es:"Spa Dental de Hampton"});
// translations.push({id:"bullet12",en: document.getElementById("bullet12").innerHTML, es:"Spa Dental de Hampton"});
// translations.push({id:"bullet13",en: document.getElementById("bullet13").innerHTML, es:"Spa Dental de Hampton"});
// translations.push({id:"bullet14",en: document.getElementById("bullet14").innerHTML, es:"Spa Dental de Hampton"});


// ////Column2

// ////Main Title 1

// translations.push({id:"volunteer",en: document.getElementById("volunteer").innerHTML, es:"Voluntaria de Asistente Dental"});


}

function ReplaceTextEnglish()
{
    
    for (let i = 0; i < translations.length; i++)
    {
        document.getElementById(translations[i].id).innerHTML = translations[i].en;
    }

}

function ReplaceTextSpanish()
{
    for (let i = 0; i < translations.length; i++)
    {
        document.getElementById(translations[i].id).innerHTML = translations[i].es;
    }
}