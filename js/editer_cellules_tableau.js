var output = document.getElementById('output'), cells;

if (output) {
    cells = output.getElementsByTagName('td');

    for (var i=0, c=cells.length; i<c; i++) {
        cells[i].onclick = function() {
            if (this.getAttribute("data-state")) return; // Si data-state est présent, on ne fait rien
            // Car ça veut dire qu'on est déjà en train d'éditer la cellule

            var text  = this.innerHTML; // On récupère le contenu de la cellule
            var input = document.createElement("input"); // On crée un input
                input.value = text;
                input.type = "text";

            this.innerHTML = '';     // On efface le contenu de la cellule
            this.appendChild(input); // On place l'input dans la cellule,
            this.setAttribute("data-state", "edit"); // On indique que la cellule est en cours d'édition

            input.focus(); // On place le curseur dans l'input (c'est important)
            input.onblur = function() { // Quand l'input perd le focus...
                this.parentNode.removeAttribute("data-state"); // On supprime l'attribut
                this.parentNode.innerHTML = this.value; // Et on remplace la contenu de la cellule (et donc l'input) par la valeur de l'input
            };
        };
    }
}
