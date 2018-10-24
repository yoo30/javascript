var avion = {
    marque: "Airbus",
    couleur: "A320"
};
console.log(avion);
//transfomr l'objet Javascript en chaine de caracteres JSON
var texteAvion = JSON.stringify(avion);
console.log(texteAvion);
//transformr la chaine de carcteres JSON en objet Javascript
console.log(JSON.parse(texteAvion));



var avions = [

    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }

];
console.log(avions);
//transforme le tableau d'objetc JS en chaine de caracteres JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// transforme la chaine de caracteres JSON ne tableaux d'objects JS
console.log(JSON.parse(texteAvions));

ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse){

    //transforme la reponse en tableau d'objets JS
    var films = JSON.parse(reponse);
    //affiche le titre de chaque film
    films.forEach(function (film){
    console.log(film.titre);
    })
});
