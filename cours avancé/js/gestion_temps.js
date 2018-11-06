//Le constructeur

new Date();
new Date(timestamp);
new Date(dateString);
new Date(année, mois, jour [, heure, minutes, secondes, millisecondes ]);

//Les méthodes statiques

var timestamp = Date.parse('Sat, 04 May 1991 20:00:00 GMT+02:00');


alert(timestamp); // Affiche : 673380000000


//Les méthodes des instances de l'objet Date

/*
    getFullYear() : renvoie l'année sur 4 chiffres ;

    getMonth() : renvoie le mois (0 à 11) ;

    getDate() : renvoie le jour du mois (1 à 31) ;

    getDay() : renvoie le jour de la semaine (0 à 6, la semaine commence le dimanche) ;

    getHours() : renvoie l'heure (0 à 23) ;

    getMinutes() : renvoie les minutes (0 à 59) ;

    getSeconds() : renvoie les secondes (0 à 59) ;

    getMilliseconds() : renvoie les millisecondes (0 à 999).
    */

  var myDate = new Date('Sat, 04 May 1991 20:00:00 GMT+02:00');

alert(myDate.getMonth()); // Affiche : 4
alert(myDate.getDay()); // Affiche : 6



//calculer le temps d'exécution d'un script

var firstTimestamp = new Date().getTime(); // On obtient le timestamp avant l'exécution

slow(); // La fonction travaille…

var secondTimestamp = new Date().getTime(), // On récupère le timestamp après l'exécution
    result = secondTimestamp - firstTimestamp; // On fait la soustraction

alert("Le temps d'exécution est de : " + result + " millisecondes.");



//Les fonctions temporelles
//Utiliser setTimeout() et setInterval()

setTimeout(myFunction, 2000); // myFunction sera exécutée au bout de 2 secondes

//ou avec fonction anonyme
setTimeout(function() {
    // Code…
}, 2000);

/*
<button id="myButton">Annuler le compte à rebours</button>

<script>
    (function() {

        var button = document.getElementById('myButton');

        var timerID = setTimeout(function() { // On crée notre compte à rebours
            alert("Vous n'êtes pas très réactif vous !");
        }, 5000);

        button.addEventListener('click', function() {
            clearTimeout(timerID); // Le compte à rebours est annulé
            alert("Le compte à rebours a bien été annulé."); // Et on prévient l'utilisateur
        });

    })();
</script>
*/


//les animations

var myImg = document.getElementById('myImg');

function anim() {

    var s = myImg.style,
        result = s.opacity = parseFloat(s.opacity) - 0.1;

    if (result > 0.2) {
        setTimeout(anim, 50); // La fonction anim() fait appel à elle-même si elle n'a pas terminé son travail
    }

}

anim(); // Et on lance la première phase de l'animation
