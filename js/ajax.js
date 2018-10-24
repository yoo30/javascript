//Execute un appel AJAX GET
//prend en parametres l'URL cible et la fonction callback appelée en cas de succés
function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function (){
    if ( req.status >= 200 && req.status < 400) {
      //appelle de la fonction callback en lui passant la reponse de la requete
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function (){
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}
