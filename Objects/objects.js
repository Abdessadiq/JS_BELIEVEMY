let nombers = [ 10,20,45,23,10,10,10];
 let monSet = new Set(nombers);
// affiche Set(4) {size: 4, 10, 20, 45, 23}
// console.log(monSet); 
 let monSet1 = new Set();
 monSet1.add('800');
 monSet1.add(400);
 monSet1.delete(400);

// console.log( monSet1.size);
//  console.log(monSet1);



let users = new Map();
// Pour ajouter une valeur
users.set('marck Zukerburg', {
    email : 'mark@facebook.com',
    poste : 'PDG'
});
users.set('Bill Gates', {
    email : 'bill@micros.com',
    poste : 'souver le monde'
});

// console.log(users);

let voitureA = {
    owner : 'Tesla',
    mark : 'Cybertruck',
}
let voitureB = {
    owner : 'Renault',
    mark : 'Espace',
}
let voitures = new WeakSet([voitureA, voitureB]);
console.log(voitures);

let voitureC = {
    owner : 'Peaugeau',
    mark : '308',
}
voitures.add(voitureC);
console.log(voitures);
voitures.delete(voitureA);
console.log(voitures);