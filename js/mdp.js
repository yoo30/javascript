var form = document.querySelector("form");
form.addEventListener("submit", function(e){

	var mdp1 = form.elements.mdp1.value;
	var mdp2 = form.elements.mdp2.value;
	var message = "Mots de passe OK";
	if (mdp1 === mdp2){

		if (mdp1.length < 6){
			
			var regexmdp = /\d+/;
			if (!regexmdp.test(mdp1)){
				message = "Les mots de passe doivent contenir au moins un nombre !";
			}
		}else{
			message = "Les mots de passe doivent comprendre au minimum 6 caractéres !";
		}


	}else{
		message = "Les mots de passe doivent être identiques !";
	}
document.getElementById("infoMdp").textContent = message;
e.preventDefault();
})

