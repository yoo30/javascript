/*function clic() {
	console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");

//ajout d'un gestionnaire pour l'évenement click
boutonElt.addEventListener("click", clic);

// Suppression du gestionnaire pour l'événement click
boutonElt.removeEventListener("click", clic);*/



//autre syntaxe

var boutonELt = document.getElementById("bouton");
//ajout d'un gestionnaire pour l'évenement click
boutonELt.addEventListener("click", function(){

	console.log("Click :!!!!");
});

//ajout d'un événement qui affiche le type et la cible de l'évébnement
document.getElementById("bouton").addEventListener("click", function(e){

	console.log("Evénement : " + e.type + " , texte dela cible : " +e.target.textContent);
}) ;


//gestion de l'appui sur une touche du clavier produisant un caractére
document.addEventListener("keypress", function(e){

	console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});

//aafiche des informations sur un événement clavier
function infosClavier(e){

	console.log("Evenement clavier : " + e.type + " , touche : " + e.keyCode);
}

//gestion de l'appui et du relachement d'une touche du clazvier
document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);


//renvoie le nom du bouton souris à paritr de son code 
function getBoutonSouris(code){
	var bouton = "inconnu";
	switch (code){
		case 0: // 0 est le code du bouton gauche
			bouton = "gauche";
			break;
		case 1: //1 est le code du bouton milieu
			bouton = "milieu";
			break;
		case 2: // 2 est le code du bouton droit
			bouton = "droit";
			break;
	}
	return bouton;
}


//affiche des informations sur un événement souris
function infosSouris(e){
	console.log("Evénement souris : " + e.type + ", bouton " + getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);

}

//gestion du clic souris
document.addEventListener("click", infosSouris);
// Gestion de l'appui et du relâchement d'un bouton de la souris

document.addEventListener("mousedown", infosSouris);

document.addEventListener("mouseup", infosSouris);

// Gestion de la fin du chargement de la page web

window.addEventListener("load", function () {

    console.log("Page entièrement chargée");

});

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});


// Gestion du clic sur le document
document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});
// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
});


// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation(); // Arrêt de la propagation de l'événement
});


// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    console.log("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien
});