{tableau}
variables tableau[1, 4, 3]:ENTIER
		coucou["cou", "moi,"]:chaine
		autre["cou", 3]:mixte

afficher("tableau")
[1, 4, 3]

tableau[]<~4

afficher(tableau[3])

[4]

tableau<~ [2, 3]

afficher (tableau[1])

[3]

variables compteur:ENTIER

{boucle}

POUR compteur ALLANT DE 0 A 10 AU PAS DE 1
	FAIRE afficher("bonjour")
	alaligne

	bonjour
	bonjour
	bonjour
	bonjour
	bonjour
	bonjour
	bonjour
	bonjour
	bonjour
	bonjour
	bonjour

FPOUR {fin du pour}

POUR compteur ALLANT DE 0 A 10 AU PAS DE 1
	FAIRE tableau[]<~compteur+2
FINPOUR

[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


{"boucle ou l'on connait le nombre de tour"}
variables compteur:ENTIER
	tableau[2, 3, 4, 5]

POUR compteur ALLANT DE 0 A 3 AU PAS DE 1
	FAIRE afficher(tableau[compteur])
FINPOUR

[2, 3, 4, 5]



variables test:ENTIER
test<~1
{boucle}
TANT QUE test < 10 {condition}
FAIRE afficher ("non", alaligne)
	  test<~ test + 1

FINTANTQUE

variables test:ENTIER
		question["on arrete?",
				 "tu aimes pas?",
				 "on arrete2?"
				 "etc...."
test<~0
{boucle}
TANT QUE test < 10 {condition}
FAIRE afficher ("non", alaligne)
	afficher (question[test])
	saisir (question)
	si question = "oui"
		alors test<~ 9
	  fsi
	  test <~ test + 2

FINTANTQUE






