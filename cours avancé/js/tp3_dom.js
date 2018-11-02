var conteneur = document.getElementById("output");

var paraElt = document.createElement("p");
var textPara = document.createTextNode("Langages basés sur ECMAScript :");
paraElt.appendChild(textPara);

var dlElt = document.createElement("dl");

var contenu = [

    {
        dt: "Javascript",
        dd: "JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur"
    },
    {
        dt: "JScript",
        dd: "JScript est le nom générique de plusieurs implémentations d'ECMAScript 3 créées par Microsoft"
    },
    {
        dt: "ActionScript",
        dd: "ActionScript est le langage de programmation utilisé au sein d'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator)."
    },
    {
        dt: "EX4",
        dd: "ECMAScript for XML (E4X) est une extension XML au langage ECMAScript."
    }

];


for ( var i = 0, c = contenu.length; i < c; i++){

    var dtElt = document.createElement("dt");
    var dtEltText = document.createTextNode(contenu[i].dt);
    dtElt.appendChild(dtEltText);

    var ddElt = document.createElement("dd");
    var ddEltText = document.createTextNode(contenu[i].dd);
    ddElt.appendChild(ddEltText);

    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);
};

conteneur.appendChild(paraElt);
conteneur.appendChild(dlElt);
