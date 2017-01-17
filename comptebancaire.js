const depot = 1;
const retrait = 2;

var soldefinal;

var nomclient = prompt("Quel est votre Nom?");
var nomcompte = parseInt (prompt("Quel est votre numero de compte?"));
var soldeinitial = parseInt (prompt ("Quelle est votre solde initial?"));
var codetransaction = parseInt (prompt("Si vous voulez faire un dépot tapez 1, si vous voulez faire un retrait tapez 2"));
var montanttransaction = parseInt (prompt("Quelle est le montant de votre transaction?"));


if (codetransaction == 1) {
	soldefinal = soldeinitial += montanttransaction;
}

else if (codetransaction == 2) {
	soldefinal = soldeinitial -= montanttransaction;}

else {
	alert("ERREUR, code invalide!")
}

alert(nomclient +" qui as le numero de compte"+ nomcompte+ " avait un solde initial de" +soldeinitial+ " et son solde final est de" +soldefinal+ ".")




