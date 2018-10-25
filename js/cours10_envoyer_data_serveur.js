/*//creation d'un objet FormData
var identite = new FormData();
//ajout d'informations dans l'objet
identite.append("login", "Bob");
identite.append("password", "azerty");
//creation et configuration d'une requete HTTP POST vers le fichier post_form.php
var req = new XMLHttpRequest();
req.open("POST", "http://localhost/javascript-web-srv/post_form.php");
//envoi de la requete en incluant l'objet
req.send(identite);
*/

var commande = new FormData();
commande.append("couleur", "rouge");
commande.append("pointure", "43");
// Envoi de l'objet FormData au serveur
ajaxPost("http://localhost/javascript-web-srv/post_form.php", commande,
    function (reponse) {
        // Affichage dans la console en cas de succès
        console.log("Commande envoyée au serveur");
    }
);

var form = document.querySelector("form");
//gestion de la soumission du formulaire
form.addEventListener("submit", function(e){

    e.preventDefault();
    //recuperation des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    //envoi des donnees du formulaire au serveur
    //la fonction callback est ici vide
    ajaxPost("http://localhost/javascript-web-srv/post_form.php", data, function () {});

});


// Création d'un objet représentant un film
var film = {
    titre: "Zootopie",
    annee: "2016",
    realisateur: "Byron Howard et Rich Moore"
};
// Envoi de l'objet au serveur
ajaxPost("http://localhost/javascript-web-srv/post_json.php", film,
    function (reponse) {
        // Le film est affiché dans la console en cas de succès
        console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur");
    },
    true // Valeur du paramètre isJson
);
