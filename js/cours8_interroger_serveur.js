/* requete synchrone

//création d'une requete HTTP
var req = new XMLHttpRequest();
//requete HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);
//envoi de la requete
req.send(null);
//affiche la reponse reçue pour la requete
console.log(req.responseText);
*/

//requete asynchrone

/*var req = new XMLHttpRequest();
//la requete est asynchrone lorsque le troisiéme parametres vaut true ou est absent
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
//gestion de l'événement indiquant la fin de la requete
req.addEventListener("load", function(){

	if (req.status >= 200 && req.status < 400){ //le serveur a reussi à traiter la requete
	//affiche la reponse reçue pour la requete
		console.log(req.responseText);
	} else {
	//affichage des informations sur l'echec du traitement de la requete
	  console.error(req.status + " " + req.statusText);
  }
});

req.addEventListener("error", function (){
  //la requete n'a pas reussi a ateindre le serveur
  console.error("Erreur réseau");

});
req.send(null);*/




function afficher(reponse) {
    console.log(reponse);

}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);

// fonction anonyme
ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {

    //separation du texte pour obtenir un tableau contenant les langages
    var langages = reponse.split(";");
    var listeElt = document.getElementById("langages");
    //ajout de chaque langage dans la liste
    langages.forEach(function (langage){

    	var langageElt = document.createElement("li");
    	langageElt.textContent = langage;
    	listeElt.appendChild(langageElt);

    });

});

