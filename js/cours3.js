//modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Suppression du contenu HTML de la liste
//document.getElementById("langages").innerHTML = "";


//Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation ";

//definition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");
//autre syntaxe = document.querySelector("h1").id = "titre";


//ajout et Suppression de classes
var titreElt = document.querySelector("h1"); // accés au premier titre
titreElt.classList.remove("debut");
titreElt.classList.add("titre");
console.log(titreElt);

//creation ou ajout nouveau elements

var pythonElt = document.createElement("li"); // création d'un élément li
pythonElt.id = "python"; // définition de son identifiant
pythonElt.textContent = "Python"; // définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // insertion du nouvel élément

var rubyElt = document.createElement("li"); // création d'un élément li
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby")); // définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // insertion du nouvel élément

//ajout d'un noeud avant un autre noeud

var perlElt = document.createElement("li");// création de l'élément li
perlElt.id = "perl";
perlElt.textContent = "Perl"; // définition du contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));


//choix de la postion exacte du noeud

   /* beforebegin: avant l'élément existant lui-même.

    afterbegin: juste à l'intérieur de l'élément existant, avant son premier enfant.

    beforeend: juste à l'intérieur de l'élément existant, après son dernier enfant.

    afterend: après l'élément existant lui-même.*/

//ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin", '<li id="javascript">Javascript</li>');


//remplacer ou supprimer un noeud

var bashElt = document.createElement("li"); // création d'un élément li
bashElt.id = "bash"; //définition de son identifiant
bashElt.textContent = "Bash"; // défnition de son contenu textuel
//remplacement de l'élément identifié par "perl" par le nouvel éléments
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));


var lienElt = document.createElement("a");
lienElt.id = "lien wiki";
document.getElementById("langages").insertAdjacentHTML("afterEnd", '<p> En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complete</p>');

/* autre méthode
var pElt = document.createElement("p");
var lienElt = document.createElement("a");
lienElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienElt.textContent = "liste";
pElt.appendChild(document.createTextNode("En voici une "));
pElt.appendChild(lienElt);
pElt.appendChild(document.createTextNode(" plus complète."));
document.getElementById("contenu").appendChild(pElt);
*/