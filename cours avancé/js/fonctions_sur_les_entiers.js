Math.floor(33.15); // Retourne : 33
Math.floor(33.95); // Retourne : 33
Math.floor(34); // Retourne : 34


Math.ceil(33.15); // Retourne : 34
Math.ceil(33.95); // Retourne : 34
Math.ceil(34); // Retourne : 34


Math.round(33.15); // Retourne : 33
Math.round(33.95); // Retourne : 34
Math.round(34); // Retourne : 34


//puissance  et racine carrée

Math.pow(3, 2); // Le premier paramètre est la base, le deuxième est l'exposant
// Ce calcul donne donc : 3 * 3 = 9

Math.sqrt(9); // Retourne : 3


//Les cosinus et sinus

Math.cos(Math.PI); // Retourne : -1
Math.sin(Math.PI); // Retourne : environ 0
//Les résultats obtenus sont exprimés en radians



//Retrouver les valeurs maximum ou minimum

Math.max(42, 4, 38, 1337, 105); // Retourne : 1337
Math.min(42, 4, 38, 1337, 105); // Retourne : 4


//Choisir un nombre aléatoire

function rand(min, max, integer) {

    if (!integer) {
        return Math.random() * (max - min) + min;
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}


//Les fonctions de contrôle

var myNumber = parseInt("test"); // Notre conversion sera un échec et renverra « NaN »

alert(isNaN(myNumber)); // Affiche « true », cette variable ne contient pas de nombre


var myNumber = 1/0; // 1 divisé par 0 tend vers l'infini

alert(isFinite(myNumber)); // Affiche « false », ce nombre tend vers l'infini


