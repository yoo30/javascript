/* Activité 2: liste des liens Web à afficher */

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

//------------------- fonction ajaxPost--------------------

// Exécute un appel AJAX POST

// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès

// Le paramètre isJson permet d'indiquer si l'envoi concerne des données JSON

function ajaxPost(url, data, callback, isJson) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });

    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    req.send(data);

}
//---------------fonction ajaxGet--------------------

//Execute un appel AJAX GET
//prend en parametres l'URL cible et la fonction callback appelée en cas de succés
function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function (){
    if ( req.status >= 200 && req.status < 400) {
      //appelle de la fonction callback en lui passant la reponse de la requete
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function (){
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}




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

//------------Création de la fonction creerInputElement---------------
function creerInputElement(placeholder , id) {
    var inputElt = document.createElement("input") ;

    inputElt.setAttribute("type" , "text") ;
    inputElt.setAttribute("required" , "required") ;
    inputElt.setAttribute("placeholder" , placeholder) ;
    inputElt.setAttribute("id" , id) ;
    inputElt.setAttribute("name" , id) ;

    inputElt.style.marginRight = "5px" ;
    return inputElt ;
}

var contenu = document.getElementById("contenu");

//------------Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien ---

ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", function (reponse) {

    var liens = JSON.parse(reponse);
    liens.forEach(function (lien) {
        var elementLien = creerElementLien(lien);
        contenu.appendChild(elementLien);
    })
});

//liens.forEach(function (lien) {
    //var elementLien = creerElementLien(lien);
   // contenu.appendChild(elementLien);
//});


//--------------------Création et positionnement du bouton "Ajouter un lien" --------
var boutonElt = document.createElement("button") ;
boutonElt.textContent = "Ajouter un lien" ;
var pElt = document.createElement("p") ; // Création d'un paragraphe pour contenir boutonElt

pElt.appendChild(boutonElt);
document.body.insertBefore(pElt , contenu);

//------------------------- Ajout évènement click sur boutonElt -------------
boutonElt.addEventListener("click" , function (e) {
    boutonElt.style.display = "none" ;
    e.preventDefault(); //action par defaut enlever

//-------------------------- Création du formulaire ---------------------------
    var form = document.createElement("append") ;

//--------------------- Création des éléments du formulaire-----------------
    var inputAuteurElt = creerInputElement("Entrez votre nom" , "auteur") ;
    var inputTitreElt = creerInputElement("Entrez le titre du lien" , "titre") ;
    var inputUrlElt = creerInputElement("Entrez l'URL du lien" , "url") ;

//--------------------------- Bouton "Ajouter -----------------------------
    var boutonAjouter = document.createElement("button") ;
    boutonAjouter.textContent = "Ajouter" ;

//---------------------Insertion des éléments dans le formulaire----------------
    form.appendChild(inputAuteurElt) ;
    form.appendChild(inputTitreElt) ;
    form.appendChild(inputUrlElt) ;
    form.appendChild(boutonAjouter) ;

//------------------Insertion du formulaire dans pElt----------------------
    pElt.insertBefore(form, boutonElt);


//---------------------------- Ajout de l'évènement submit ---------------
boutonAjouter.addEventListener("click" , function() {

        var regexUrl1 = /http:\/\/.+/;
        var regexUrl2 = /https:\/\/.+/;
        var urlTester = document.getElementById("url").value;

//----------------------- controle des champs input--------------
     if ((!regexUrl1.test(document.getElementById("url").value))
        && (!regexUrl2.test(document.getElementById("url").value))){
            urlTester = "http://" +  document.getElementById("url").value;
        }else{
            urlTester =document.getElementById("url").value;
        }

    if ((document.getElementById("titre").value == "") || (document.getElementById("url").value == "") || (document.getElementById("auteur").value == "")){
            alert("Veuillez remplir les champs vides");

        }else{

//----------------------------- Créer objet lien ----------------------
        var ajouterLien = {
           titre : document.getElementById("titre").value,
           url : urlTester,
           auteur: document.getElementById("auteur").value
       };
}
//-------------Déclaration du nouveau lien à ajouter---------------

       var nouveauLien = creerElementLien(ajouterLien);

// -------------Envoi de l'objet au serveur------------

ajaxPost(
    "https://oc-jswebsrv.herokuapp.com/api/lien",
     ajouterLien,
    function (reponse) {


    },
    true // Valeur du paramètre isJson
);

//-------------Ajouter du nouveau lien en haut de la liste ---------------
       var d1 = document.getElementById('contenu');
       d1.insertAdjacentElement('afterbegin', nouveauLien);

       form.style.visibility = "hidden";
       boutonElt.style.display = "" ;

//---------------------- Messsage de confirmation ------------------------
        var messageElt = document.createElement("p");
        messageElt.classList.add("message");
        messageElt.textContent = "Le lien \"" +  document.getElementById("titre").value + "\" a bien été ajouté.";
        pElt.insertBefore(messageElt, boutonElt);

//------------------- Suppression du message------------------------------
        setTimeout(function(){
        pElt.removeChild(messageElt);
        }, 2000);
    pElt.removeChild(form);
    });


});

