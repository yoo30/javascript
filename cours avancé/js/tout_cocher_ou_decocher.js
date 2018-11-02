function checkOrUncheckAll(status) {
    // On récupère la liste de tous les inputs de type checkbox enfants de li, eux-mêmes enfants de ol et de #output
    var checkboxes = document.querySelectorAll("#output > ol > li > input[type='checkbox']");

    for (var i=0, c=checkboxes.length; i<c; i++) {
        checkboxes[i].checked = status;
    }
}

var buttonCheck   = document.getElementById('button-check');
var buttonUncheck = document.getElementById('button-uncheck');

if (buttonCheck && buttonUncheck) {
    buttonCheck.addEventListener('click', function() {
        checkOrUncheckAll(true)
    }, false);

    buttonUncheck.addEventListener('click', function() {
        checkOrUncheckAll(false)
    }, false);
}


/* methode avec fonctions anonymes

var buttonCheck   = document.getElementById('button-check'),
    buttonUncheck = document.getElementById('button-uncheck');

if (buttonCheck && buttonUncheck) {
    buttonCheck.addEventListener('click', function() {
        var checkboxes = document.querySelectorAll("#output > ol > li > input[type='checkbox']");

        for (var i=0, c=checkboxes.length; i<c; i++) {
            checkboxes[i].checked = true;
        }
    }, false);

    buttonUncheck.addEventListener('click', function() {
        var checkboxes = document.querySelectorAll("#output > ol > li > input[type='checkbox']");

        for (var i=0, c=checkboxes.length; i<c; i++) {
            checkboxes[i].checked = false;
        }
    }, false);
}
*/
