var compteurElt = document.getElementById("compteurmsg");
var boutonElt = document.getElementById("button");
var intervalId = null;
var demarre = false; // etat du chronometre : demarré (true) ou arrété (false)


function augmenterCompteur () {

compteurElt.textContent = Number(compteurElt.textContent) +1;
}

 boutonElt.addEventListener("click", function () {
    if (!demarre) {
        // Démarre le chronomètre : appelle augmenterCompteur toutes les secondes
        intervalId = setInterval(augmenterCompteur, 1000);
        boutonElt.textContent = "Arrêter"; // Modifie le texte du bouton
    } else {
        clearInterval(intervalId); // Arrête le chronomètre
        boutonElt.textContent = "Démarrer"; // Modifie le texte du bouton
    }
    // Inverse la valeur de l'état du chronomètre
    demarre = !demarre;
});
