let informations = ['suerSayen', '25', 'Home'];

// encien version  = Système SANS décomposition
let pseudo = informations[0];
let age = informations[1];
let sexe = informations[2];
console.log(pseudo);
console.log(age);
console.log(sexe);

// avec destructuring .. AVEC décomposition

let [pseudo1, age1,sexe1] = informations;

console.log(pseudo1);
console.log(age1);
console.log(sexe1);