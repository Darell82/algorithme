var max;

var nb1 = parseInt (prompt ("Donnez un nombre svp"));
var nb2 = parseInt (prompt ("Donnez un nombre svp"));
var nb3 = parseInt (prompt ("Donnez un nombre svp"));
var nb4 = parseInt (prompt ("Donnez un nombre svp"));

if (nb1 > nb2) {
   max = nb1;
    
}else { 
	max = nb2;
}


if (nb3 > max) {
   max = nb3;
}

if (nb4 > max) {
   max = nb4;    
}


alert("Le nombre plus grand est: " +max+ ".");