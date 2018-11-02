// On crée l'élément conteneur
var mainDiv = document.createElement('div');
mainDiv.id = 'divTP1';

// On crée tous les nœuds textuels, pour plus de facilité
var textNodes = [
    document.createTextNode('Le '),
    document.createTextNode('World Wide Web Consortium'),
    document.createTextNode(', abrégé par le sigle '),
    document.createTextNode('W3C'),
    document.createTextNode(', est un '),
    document.createTextNode('organisme de standardisation'),
    document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du '),
    document.createTextNode('World Wide Web'),
    document.createTextNode('.')
];

// On crée les deux <strong> et les deux <a>
var w3cStrong1 = document.createElement('strong');
var w3cStrong2 = document.createElement('strong');

w3cStrong1.appendChild(textNodes[1]);
w3cStrong2.appendChild(textNodes[3]);

var orgLink = document.createElement('a');
var wwwLink = document.createElement('a');

orgLink.href = 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
orgLink.title = 'Organisme de normalisation';
orgLink.appendChild(textNodes[5]);

wwwLink.href = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
wwwLink.title = 'World Wide Web';
wwwLink.appendChild(textNodes[7]);

// On insère le tout dans mainDiv
mainDiv.appendChild(textNodes[0]);
mainDiv.appendChild(w3cStrong1);
mainDiv.appendChild(textNodes[2]);
mainDiv.appendChild(w3cStrong2);
mainDiv.appendChild(textNodes[4]);
mainDiv.appendChild(orgLink);
mainDiv.appendChild(textNodes[6]);
mainDiv.appendChild(wwwLink);
mainDiv.appendChild(textNodes[8]);

// On insère mainDiv dans le <body>
document.body.appendChild(mainDiv);


//methode plus rapide

/*
// On crée l'élément conteneur
var mainDiv = document.createElement('div');
    mainDiv.id = 'divTP1';

// On crée les deux <strong> et les deux <a>
var w3cStrong1 = document.createElement('strong');
var w3cStrong2 = document.createElement('strong');

w3cStrong1.appendChild(document.createTextNode('World Wide Web Consortium'));
w3cStrong2.appendChild(document.createTextNode('W3C'));

var orgLink = document.createElement('a');
var wwwLink = document.createElement('a');

orgLink.href  = 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
orgLink.title = 'Organisme de normalisation';
orgLink.appendChild(document.createTextNode('organisme de standardisation'));

wwwLink.href  = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
wwwLink.title = 'World Wide Web';
wwwLink.appendChild(document.createTextNode('World Wide Web'));

// On insère le tout dans mainDiv
mainDiv.appendChild(document.createTextNode('Le '));
mainDiv.appendChild(w3cStrong1);
mainDiv.appendChild(document.createTextNode(', abrégé par le sigle '));
mainDiv.appendChild(w3cStrong2);
mainDiv.appendChild(document.createTextNode(', est un '));
mainDiv.appendChild(orgLink);
mainDiv.appendChild(document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du '));
mainDiv.appendChild(wwwLink);
mainDiv.appendChild(document.createTextNode('.'));

// On insère mainDiv dans le #output
document.getElementById('output').appendChild(mainDiv);
*/
