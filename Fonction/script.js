//   |*********************|| Créer 1er Fonction ||**********************************|

    function direBonjour() {
        console.log('Bonjour.. !');  
    }

    direBonjour();

//   |*********************|| Créer  Fonction avec les params ||**********************************|

        function addition(Num1, num2) {
            console.log(num2+ Num1);  
        }
    
        addition(12.12,14.14);


        function direHello(name) {
            console.log(" Bonjour ! "+name)
        }
        direHello("ABDESSADIQ")
//   |*********************|| portée des variable (SCOPE) ||**********************************|
function crieDeGuerre() {
    let crie = "Toujours plus fort ! "; // local la variable n'est accécible que dans la function..
    console.log(crie)
}
crieDeGuerre();

//   |*********************|| fonctions : Pratique Débutant ..  ) ||**********************************|
function abracadabra () {
    let prenom = prompt("Prénom : ");
    let nom = prompt("nom : ");
    let age = prompt("age : ");
    alert( "Sapristi ! On ne m'avait pas prévenu que c'était vous, "
        + prenom 
        + "! Euh... Je veux dire... Monsieur le grand magicien !" 
        + nom 
        + " ! Cela fait déjà " 
        + age
        + " ans que vous faites rayonner notre contrée !." );

}
// abracadabra();

//   |*********************|| fonctions : Pratique avancé.. ..  ) ||**********************************|

function calculerIMC(poids, taille) {
    
    // Converti la taille en centimètres => mètres
    let tailleEnMetres = taille / 100;
  
    // Calcule la taille à la puissance 2
    let tailleCalculee = Math.pow(tailleEnMetres, 2);
  
    // Calcule l'IMC
    let resultat       = poids / tailleCalculee;

    // Retourne notre résultat
    return resultat;
  
    // Version simplifiée de cette fonction : return poids / Math.pow((taille / 100), 2);

}

let poids   = prompt("Quel est votre poids ? (en kg)");
let taille  = prompt("Quelle est votre taille ? (en cm)");

alert(calculerIMC(poids, taille));