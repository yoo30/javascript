



var tableElt = document.getElementById("table");






ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {

console.log(JSON.parse(reponse));

var donneesTableaux = JSON.parse(reponse);

donneesTableaux.forEach(function (tableau){

        // Crée une ligne de tableau HTML pour chaque tableau
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + tableau.Nom + "</td>" + "<td>" + tableau.Année + "</td>" +
            "<td>" + tableau.Auteur + "</td>";
tableElt.appendChild(ligneElt);
}) ;

});
