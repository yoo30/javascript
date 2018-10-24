var compteurElt = document.getElementById("compteur");

//diminue le compteur jusqu'a 0
function diminuerCompteur(){
	//conversion en nombre du texte du compteur
	var compteur = Number(compteurElt.textContent);
	if (compteur > 1){
	compteurElt.textContent = compteur -1;
	} else {
		//annule l'éxecution répétée
		clearInterval(intervalId);
		//modifie le titre de la page
		var titre = document.getElementById("titre");
		titre.textContent = "BOUMMMM !!!";
		//modification du titre au bout de 2 secondes
		setTimeout(function (){
			titre.textContent = "Tout est cassé !";
		}, 2000);
	} 
}

//appelle de la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);



var bloc = document.getElementById("bloc");
var cadre = document.getElementById("cadre");
var vitesse = 7; // valeur du déplacement en pixels
//conversion en nombre du diametre du bloc(valeur  de la forme "XXpx")
var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null;	//identifiant de l'animation

//déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBloc(){
	//conversion en nombre de la position gauche du bloc (valeur dela forme "XXpx")
	var xBloc = parseFloat(getComputedStyle(bloc).left);
	// conversion en nombre de la largeur gauche du cadre (valeur de la forme "XXpx")
	var xMax = parseFloat(getComputedStyle(cadre).width);
	if (xBloc + largeurBloc <= xMax){
	//déplacemnt du bloc
	bloc.style.left = (xBloc + vitesse) + "px";
	//demande au navigateur d'appeller deplacerBloc dés que possible
	animationId = requestAnimationFrame(deplacerBloc); 
	} else {
		//annulation de l'animation
		cancelAnimationFrame(animationId);
	}
}
animationId = requestAnimationFrame(deplacerBloc); // début de l'animation


/* syntaxe 
function animer() {

    // Code de l'animation

    // ...

    requestAnimationFrame(animer);

}

requestAnimationFrame(animer);
*/