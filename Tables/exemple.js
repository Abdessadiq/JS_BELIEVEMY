 let monTableau = ["Un", "Deux", "Trois", "Quatre", "Cinq"]; 
 let varLet = "LET";
 console.log(monTableau.join());
 console.log(monTableau.join(" / "));
 monTableau.splice(2,0, 'random', 'pie');
 console.log(monTableau);


 let monTableau2D = [
    ["Un", "Deux", "Trois", "Quatre", "Cinq"],
    ["1", "2", "3", "4", "5"]
   
 ]
 console.log(monTableau2D.join( " / "));
 monTableau2D.splice(2,0, ["45","50", "55", "60", "65"  ]);
 console.log(monTableau2D);

//  Les tableau associatif
let monTableauAssociatif ={
    "nom" : "marck",
    "prenom": "zuckergurg",
    "poste" : "PDG meta",
}

console.log(monTableauAssociatif)