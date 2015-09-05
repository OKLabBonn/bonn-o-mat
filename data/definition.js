// DEFINITIONEN


///////////////////////////////////////////////////////////////////////
// ALLGEMEINE/EINFACHE EINSTELLUNGEN:


// FRAGENKATALOG
var fileQuestions = "Fragen.csv";


// LISTE DER PARTEIEN/KANDIDATEN (bitte mit Komma trennen, Reihenfolge beachten und mit "" umschliessen)
// Liste der Parteipositionen und Begruendungen
var strPartyFiles = "CDU.csv, SPD.csv,GRUENE.csv";
// Liste der Parteinamen - kurz 
var strPartyNamesShort = "Sridharan, Ruhenstroth-Bauer,Schmidt";
// Liste der Parteinamen - lang
var strPartyNamesLong = "Ashok-Alexander Sridharan - CDU,Peter Ruhenstroth-Bauer - SPD, Tom Schmidt - Bündnis90/DIE GRÜNEN,";
// Logos der Parteien (sollten im Format 50x25px sein)
var strPartyLogosImg = "CDU.png,SPD.png,GRUENE.png";
// Internetseiten der Parteien/Kandidaten ohne http://
var strPartyInternet = "www.sridharan.de, www.peter-ruhenstroth-bauer.de/stadtbonn/de/home, gruene-bonn.de/fraktion/gruene-transparent/tom-schmidt-aufsichtsrat-sparkasse.html,";
// Anzahl der Parteien, die in der detaillierten Auswertung sofort angezeigt werden sollen. 0 = alle 
var intPartyDefaultShow = 3


// UeBERSCHRIFTEN UND TEXTE
// Hauptueberschrift
var heading1 = "Bonn-O-Mat";
// zweite Ueberschrift
var heading2 = "Informationen zur Bonner OberbürgermeisterInwahl 2015";
// Kurzer Text um was es bei der Wahl geht
var explainingText = "Am 13. September 2015 findet die Wahl des Oberbürgermeisters bzw. Oberbürgermeisterin der Stadt Bonn statt. Der Bonn-o-Mat ist keine Wahlempfehlung, sondern ein Informationsangebot zu Wahlen!"; 


// IMPRESSUM, KONTAKT
// (optional) Redaktion: Person(en), die die Fragen ausgearbeitet hat
var imprintEditorialNames = "";
// (optional) Redaktion: Kontakt-E-mail
var imprintEditorialEmail = "";
 // (optional) Technik: Person(en), die das System aufgesetzt hat
var imprintTechnicsNames = "";
 // (optional) Technik: Kontakt-E-mail
var imprintTechnicsEmail = "";
// (optional) Quellenangaben zu den Bildern
var imprintPictures = "Alle auf dieser Website abgebildete Logos sind Eigentum der jeweiligen Rechteinhaber."; 
// (optional) Link zu einer Datenschutzerklaerung ohne http:// - erlaubt die anonyme Statistik
var imprintPrivacyUrl = "";



///////////////////////////////////////////////////////////////////////
// ERWEITERTE EINSTELLUNGEN:

// Trennzeichen fuer die CSV-Dateien (Excel benutzt haeufig Semikolon, OpenOffice/LibreOffice ein Komma)
var separator = ";";

// Designvorlage (CSS) im Ordner /styles 
var design = "opendatal";

// (To Do) Sprache
// var language = "de";



///////////////////////////////////////////////////////////////////////
// PROFESSIONELLE EINSTELLUNGEN:


// STATISTIK
// Anonyme Auswertung zulassen: true/1 oder false/0 
// Die Einwilligung des Nutzers und eine Datenschutzerklaerung (s.o.) werden benoetigt!
// Als Ergebnis erhaelt man die Liste mit der persoenlichen Auswahl in der Variablen "mowpersonal" (-1,0,1) 
// und die Liste mit der Anzahl der Uebereinstimmungen mit den Parteien als "mowparties" (5,1,0,2) zurueck.
// Als Trennzeichen fuer die Werte dient wieder ein Komma ;-)
// Das Skript und der Mat-O-Wahl sollten auf der gleichen Domain liegen. 
var statsRecord = 0;
var statsServer = "http://localhost/Test/vote.php";
