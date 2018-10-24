/*
Activité 2
*/

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

function creerElementLien(lien){
    var titreLien = document.createElement("a");
        titreLien.href = lien.url;
        titreLien.style.color = "#428bca";
        titreLien.style.textDecoration = "none";
        titreLien.style.marginRight = "5px";
        titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
        urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
        ligneTitre.style.margin = "0px";
        ligneTitre.appendChild(titreLien);
        ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
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

//------------------------ ajout bouton "ajouter un lien"-----------------------------------------------//
var boutonAjouterLien = document.createElement("button");
    boutonAjouterLien.textContent = "Ajouter un lien";
    boutonAjouterLien.id = "ajouterUnLien";
    document.body.insertBefore(boutonAjouterLien, contenu);
    document.getElementById("ajouterUnLien").addEventListener("click", clic);



function clic(){

        boutonAjouterLien.style.display = "none";
         var titreLien = document.createElement("input");
            titreLien.id = "titreLien";
            titreLien.placeholder = "Entrez votre nouveau titre";
            titreLien.style.margin = "5px";

            document.body.insertBefore(titreLien, contenu);

        var newUrl = document.createElement("input");
            newUrl.id = "newUrl";
            newUrl.placeholder = "Entrez l'Url du lien";
            newUrl.style.margin = "5px";
            document.body.insertBefore(newUrl, contenu);

        var newAuteur = document.createElement("input");
            newAuteur.id = "newAuteur";
            newAuteur.placeholder = "Entrez votre nom";
            newAuteur.style.margin = "5px";
            document.body.insertBefore(newAuteur, contenu);


        var envoyer = document.createElement("button");
        envoyer.textContent = "valider";
        envoyer.id = "ajouterUnLink";
        document.body.insertBefore(envoyer, contenu);


 /* Création du formulaire */
        var form = document.createElement("form") ;
            form.id = "formulaire";
            document.body.insertBefore(form, contenu);
        form.appendChild(titreLien);
        form.appendChild(newUrl);
        form.appendChild(newAuteur);
        form.appendChild(envoyer);

/* Ajout de l'évènement submit */
//var envoyer = document.getElementById("ajouterUnLink");

    envoyer.addEventListener("click" , function() {
       /* Créer objet lien */
       var ajouterLien = {
           titre : document.getElementById("titreLien").value,
           url : document.getElementById("newUrl").value,
           auteur: document.getElementById("newAuteur").value
       };

       /* Déclaration du nouveau lien à ajouter */
       var nouveauLien = creerElementLien(ajouterLien);

       /* Ajouter du nouveau lien en haut de la liste */
       var d1 = document.getElementById('contenu');
       d1.insertAdjacentElement('afterbegin', creerElementLien(ajouterLien));

       form.style.visibility = "hidden";

        /*// Messsage de confirmation
        var messageElt = document.createElement("p");
        messageElt.textContent = "Le lien \"" +  document.getElementById("titreLien").value + "\" a bien été ajouté.";
        contenu.insertBefore(messageElt, boutonAjouterLien);

        // Suppression du message
        setTimeout(function(){
        pElt.removeChild(messageElt);
        }, 2000);*/

    });



}



