// let listDePays = ["France", "Belgique", "Japon", "Maroc"];

// for (const element of listDePays) {
//     console.log(element);
// }

// listDePays.forEach(function(pays){
//     console.log(pays);
// });

// nouvelle façon avec arrow function
// listDePays.forEach(pays => console.log(pays));
// Les tableau associatif
let monTableauAssociatif ={
    "nom" : "marck",
    "prenom": "zuckergurg",
    "poste" : "PDG meta",
}


let theChaine = (monTableauAssociatif) =>{
let chaine = '';
for (const key in monTableauAssociatif) {
        chaine += (key + " : " + monTableauAssociatif[key]+ "\n");
}
console.log(chaine);
}
theChaine(monTableauAssociatif);

