var ageterrien;
var amars;
var amercure;
var ajupiter;
var asaturne;
var auranus;
var aneptune;
var marcoeff;
var mercoeff;
var jupcoeff;
var satcoeff;
var urcoeff;
var nepcoeff;

const mars = 686.98;
const mercure = 87.97;
const terre = 365;
const jupiter = 4332.59;
const saturne = 10759.23;
const uranus = 30685.40;
const neptune = 602.66;



var ageterrien = prompt ("Quelle est ton age Terrien?")

marcoeff = (mars / terre);
amars = (ageterrien / marcoeff);

mercoeff = (mercure / terre);
amercure = (ageterrien / mercoeff);

jupcoeff = (jupiter / terre);
ajupiter = (ageterrien / jupcoeff);

satcoeff = (saturne / terre);
asaturne = (ageterrien / satcoeff);

urcoeff = (uranus / terre);
auranus = (ageterrien / urcoeff);

nepcoeff = (neptune / terre);
aneptune = (ageterrien / nepcoeff);



alert("Ton age sur Mars est de" +amars+ " ans, \n"  + "Ton age sur Mercure est de" +amercure+ " ans, \n" + "Ton age sur Jupiter est de" +ajupiter+ " ans, \n" + "Ton age sur Saturne est de" +asaturne+
 " ans, \n" + "Ton age sur Uranus est de" +auranus+ " ans, \n" + "Ton age sur Neptune est de" +aneptune+ " ans!\n")