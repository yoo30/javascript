var colorPara = prompt("Veuillez entrer la couleur du texte :");
var colorBackground = prompt("Veuillez entrer la couleur de fond :");

var divsElts = document.getElementsByTagName("div");

for (var i = 0; i < divsElts.length; i++){

	divsElts[i].style.color = colorPara;
	divsElts[i].style.backgroundColor = colorBackground;

}