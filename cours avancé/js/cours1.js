var ageUser = parseInt(prompt("Veuillez entre votre age :"));


if ((ageUser > 1) && (ageUser < 17)){
    alert("Vous n'êtes pas encore majeur");
}else if ((ageUser < 18) && (ageUser < 49)){
    alert("Vous êtes majeurmais pas encore senior");

}else if ((ageUser > 50 ) && ( ageUser < 59)){

    alert("Vous êtes senior mais pas encore retraité");
}else if ((ageUser > 60) && (ageUser < 120)){

    alert("Vous êtes retraité ");
}else{

    alert("Age non conforme");
}
