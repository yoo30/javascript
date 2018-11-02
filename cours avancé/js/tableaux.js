var nicks = [], //creaztion du tableau vide
    nick;

while (nick = prompt("Entrez un nom :")){ //si la valeur assignée à la variable "nick"est valide (differente de null)alors la boucle s'execute

var ulElt = document.createElement("ul");
var liElts = document.createElement("li");
    nicks.push(nick);//ajoute le nouveau prénom

    nicks.forEach(function (nick){
        //var prenom = nick.value;
        liElts.textContent = nick;
    });

   document.getElementById("liste").appendChild(ulElt);
   ulElt.appendChild(liElts);

}

if (nicks.length > 0){ //on regarde le nombre d'items

    alert(nicks.join(' ')); //affiche les prénoms à la suite
} else{
    alert("Il n\'y a aucun prénom en mémoire ! ");
}
