// Exemple 1 comment fusion plusieurs tableau entre eux ..
let fruit = ["fraise", "banane", "poire"];
let alements = ["choccolat", "soucre", "lait", ...fruit];
console.log(alements);

// Exemple 2  : comment découper une chaine de caractére en plusieur elements ..
let phrase = "Bonjour !";

let phraseTab = [...phrase];
console.log(phraseTab);

// Exeemple 3 : séléctionner un element et stocker les autre dans une variable ..
let devise = ["euro", "euyen", "dollars"];

// Sans Spread Operator
let firstDev = devise[0];
let others = [devise[1], devise[2]];

// Avec  Spread Operator
let [firstDev1, ...others1] = devise;
console.log(firstDev);
console.log(others);
