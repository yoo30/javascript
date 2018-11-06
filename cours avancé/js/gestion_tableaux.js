//Concaténer deux tableaux

var myArray = ['test1', 'test2'].concat(['test3', 'test4']);
alert(myArray);


//Parcourir un tableau

var myArray = ["C'est", "un", "test"];

myArray.forEach(function(value, index, array) {
    alert(
        'Index : ' + index + '\n' +
        'Valeur : ' + value
    );
});


//Rechercher un élément dans un tableau

var element2 = ['test'],
     myArray = ['test', element2];

alert(myArray.indexOf(element2)); // Affiche : 1


//Trier un tableau
//La méthode reverse()

var myArray = [1, 2, 3, 4, 5];

myArray.reverse();

alert(myArray); // Affiche : 5,4,3,2,1

//La méthode sort()

var myArray = [3, 1, 5, 10, 4, 2];

myArray.sort(function(a, b) {

    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }

});

alert(myArray); // Affiche : 1,2,3,4,5,10


//Extraire une partie d'un tableau

var myArray = [1, 2, 3, 4, 5];

alert(myArray.slice(1, 3)); // Affiche : 2,3
alert(myArray.slice(2)); // Affiche : 3,4,5


//Remplacer une partie d'un tableau

var myArray = [1, 2, 3, 4, 5];

var result = myArray.splice(1, 2); // On retire 2 éléments à partir de l'index 1

alert(myArray); // Affiche : 1,4,5

alert(result); // Affiche : 2,3

//Tester l'existence d'un tableau
alert(Array.isArray(['test']));


//Les piles

var myArray = ['Livre 1'];

var result = myArray.push('Livre 2', 'Livre 3');

alert(myArray); // Affiche : « Livre 1,Livre 2,Livre 3 »
alert(result); // Affiche : « 3 »

result = myArray.pop();

alert(myArray); // Affiche : « Livre 1,Livre 2 »
alert(result); // Affiche : « Livre 3 »


//ou avec unshift() et shift()

var myArray = ['Livre 3'];

var result = myArray.unshift('Livre 1', 'Livre 2');

alert(myArray); // Affiche : « Livre 1,Livre 2,Livre 3 »
alert(result); // Affiche : « 3 »

result = myArray.shift();

alert(myArray); // Affiche : « Livre 2,Livre 3 »
alert(result); // Affiche : « Livre 1 »



//les files

var myArray = ['Fanboy 1', 'Fanboy 2'];

var result = myArray.push('Fanboy 3', 'Fanboy 4');

alert(myArray); // Affiche : « Fanboy 1,Fanboy 2,Fanboy 3,Fanboy 4 »
alert(result); // Affiche : « 4 »

result = myArray.shift();

alert(myArray); // Affiche : « Fanboy 2,Fanboy 3,Fanboy 4 »
alert(result); // Affiche : « Fanboy 1 »


//ou

var myArray = ['Fanboy 3', 'Fanboy 4'];

var result = myArray.unshift('Fanboy 1', 'Fanboy 2');

alert(myArray); // Affiche : « Fanboy 1,Fanboy 2,Fanboy 3,Fanboy 4 »
alert(result); // Affiche : « 4 »

result = myArray.pop();

alert(myArray); // Affiche : « Fanboy 1,Fanboy 2,Fanboy 3 »
alert(result); // Affiche : « Fanboy 4 »
