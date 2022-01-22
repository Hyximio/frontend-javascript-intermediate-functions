// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.

const eMails = ["n.eeken@novi-education.nl", "t.mellink@novi.nl", "novi.nlaapjesk@outlook.com", "a.wiersma@outlook.com"];

/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

// function getEmailDomain( _eMail ) {
//     return _eMail.split("@")[1];
// }
console.log( " -- Opdracht 1 --\n" );

let getEmailDomain = ( _eMail ) => _eMail.split("@")[1];

for ( const eMail of eMails )
    console.log( getEmailDomain(eMail) );


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
console.log( "\n -- Opdracht 2 --\n" );

function typeOfEmail( _eMail ){
    switch( getEmailDomain( _eMail ) ){
        case "novi-education.nl": return "Student";
        case "novi.nl": return "Medewerker";
        case "outlook.com": return "Extern";
        default: return ("Unknown type of e-mail: " + domain);
    }
}

for ( const eMail of eMails )
    console.log( typeOfEmail(eMail) );

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
console.log( "\n -- Opdracht 3 --\n" );

const eMailValids = ["n.eeken@novi.nl", "tessmellink@novi.nl", "n.eekenanovi.nl", "n.eeken@novinl.", "tessmellink@novi,nl"];

function checkEmailValidity( _eMail ){

    // Check if only 1 '@' and a ',' exist
    if ( (_eMail.match( /@/g ) || []).length !== 1 || _eMail.search(",") !== -1)
        return false;

    const domain = getEmailDomain( _eMail );

    // Check if only 1 '.' exist in domain
    if ( ( domain.match( /\./g ) || []).length !== 1 )
        return false;

    // Check if '.' is not at the beginning or the end of domain
    if ( domain[0] === "." || domain.slice(-1) === "." )
        return false;

    return true;
}

for ( const eMail of eMailValids )
    console.log( eMail + " : " + checkEmailValidity( eMail ) );
