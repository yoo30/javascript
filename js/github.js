var infosElts = document.getElementById("infos");
var formElt = document.querySelector("form");

formElt.addEventListener("submit", function(e){

    e.preventDefault(); // Annule la publication du formulaire
    var profilSearch = formElt.elements.profil.value;
    ajaxGet("https://api.github.com/users/" + profilSearch , function (reponse){


    var user = JSON.parse(reponse);
    console.log(user);
    var avatarUser = document.createElement("img");
    avatarUser.src = user.avatar_url;
    avatarUser.style.height = "150px";
    avatarUser.style.width = "150px";

    var nameUser = document.createElement("p");
    nameUser.textContent = "Son Pseudo est :" + user.login;
    nameUser.style.fontSize = "1.5em";

    var lienUser = document.createElement("a");
    lienUser.textContent = user.html_url;
    lienUser.href = user.html_url;
    //lienUser.style.textDecoration = "none";



    infosElts.appendChild(avatarUser);
    infosElts.appendChild(nameUser);
    infosElts.appendChild(lienUser);





    });

});
