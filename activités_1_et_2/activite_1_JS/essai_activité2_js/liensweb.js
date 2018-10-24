/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

function creerElementLien(lien) {

    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}
var contenu = document.getElementById("contenu");

// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});



//------------------creation nouvelle div avec champs "input"------------------
var divAjoutLien = document.createElement("div");
    divAjoutLien.id = "divAjoutLien";
 document.body.insertBefore(divAjoutLien , contenu);



//-----------creation formulaire
var formElt = document.createElement("form");
    formElt.id = "formulaire";
    document.getElementById("divAjoutLien").appendChild(formElt);

//creation du boutton "ajouter un lien" placer avant div"contenu"
var boutonAjouterLien = document.createElement("button");
    boutonAjouterLien.textContent = "Ajouter un lien";
    boutonAjouterLien.id = "ajouterUnLien";
document.body.insertBefore(boutonAjouterLien, contenu);



boutonAjouterLien.addEventListener("click", function(){

    boutonAjouterLien.style.display = "none";

    var titre = document.createElement("input");
        titre.id = "titre";
        titre.setAttribute("required","required");
        titre.placeholder = "Entrez votre titre";
        titre.style.margin = "5px";
    document.getElementById("formulaire").appendChild(titre);


    var url = document.createElement("input");
        url.id = "url";
        url.setAttribute("required","required");
        url.placeholder = "Entrez l'URL du lien";
        url.style.margin = "5px";
    document.getElementById("formulaire").appendChild(url);

    var auteur = document.createElement("input");
        auteur.id = "auteur";
        auteur.setAttribute("required","required");
        auteur.placeholder = "Entrez votre nom";
        auteur.style.margin = "5px";
    document.getElementById("formulaire").appendChild(auteur);

 //---------------creation boutton pour ajouter nouveau lien-----------------
    var buttonAjout = document.createElement("button");
        buttonAjout.textContent = "Ajouter";
        buttonAjout.type = "submit";
        buttonAjout.addEventListener("submit", function(){

    var regexUrl1 = /http:\/\/.+/;
    var regexUrl2 = /https:\/\/.+/;
      if ((!regexUrl1.test(url.value)) && (!regexUrl2.test(url.value))){
            url.value = "http://" + url.value;
        }else{
            url.value = url.value;
        }

        if ((lien.value == "") || (url.value == "") || (pseudo.value == "")){
            alert("Veuillez remplir les champs vides");

        }else{
        var ajouterLien = {
           titre : document.getElementById("titre").value,
           url :    document.getElementById("url").value,
           auteur: document.getElementById("auteur").value
           };
        var nouveauLien = creerElementLien(ajouterLien);

//----------------------Ajout du nouveau lien en haut de la liste ----------
       var d1 = document.getElementById('contenu');
       d1.insertAdjacentElement('afterbegin', nouveauLien);

        lien.value = "";
        lien.setAttribute("required","");
        url.value = "";
        url.setAttribute("required","");
        pseudo.value = "";
        pseudo.setAttribute("required","");
        divAjoutLien.style.display = "";
        boutonAjouterLien.style.display = "";
        }


    })

document.getElementById("formulaire").appendChild(buttonAjout);


});

document.body.insertBefore(divAjoutLien, contenu);


