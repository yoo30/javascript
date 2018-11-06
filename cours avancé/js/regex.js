
    function preview() {
        var value = document.getElementById("text").value;

        value = value.replace(/\[b\]([\s\S]*?)\[\/b\]/g, '<strong>$1</strong>'); // Gras
        value = value.replace(/\[i\]([\s\S]*?)\[\/i\]/g, '<em>$1</em>'); // Italique
        value = value.replace(/\[s\]([\s\S]*?)\[\/s\]/g, '<del>$1</del>'); // Barré
        value = value.replace(/\[u\]([\s\S]*?)\[\/u\]/g, '<span style="text-decoration: underline">$1</span>'); // Souligné

        document.getElementById("output").innerHTML = value;
    }


var sentence = 'Dans 22 jours, j\'aurai 24 ans';

var result = sentence.replace(/(\d+)/g, function(str, p1) {
    p1 = parseInt(p1);

    if (!isNaN(p1)) {
        return num2Letters(p1);
    }
});

alert(result); // Affiche : « Dans vingt-deux jours, j'aurai vingt-quatre ans »



//Rechercher la position d'une occurrence
var sentence = 'Si ton tonton';

var result = sentence.search(/\bton\b/);

if (result > -1) { // On vérifie que quelque chose a été trouvé
    alert('La position est ' + result); // 3
}




//Récupérer toutes les occurrences
var sentence = 'Si ton tonton tond ton tonton, ton tonton tondu sera tondu';

var result = sentence.match(/\btonton\b/g);

alert('Il y a ' + result.length + ' "tonton" :\n\n' + result);


//Couper avec une regex

var family = 'Guillaume,Pauline;Clarisse:Arnaud;Benoît;Maxime';
var result = family.split(/[,:;]/);

alert(result);
