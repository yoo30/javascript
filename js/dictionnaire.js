// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
var dlElt = document.createElement("dl");
dlElt.id = "liste";


mots.forEach(function(mot){

    
    var dtElt = document.createElement("dt");
    
    dtElt.textContent = mot.terme;
    var ddElt = document.createElement("dd");
    ddElt.textContent = mot.definition;
    
    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);
    
});

document.getElementById("contenu").appendChild(dlElt);
