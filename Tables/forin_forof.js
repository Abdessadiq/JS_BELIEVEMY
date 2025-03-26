let panier = ['fraise', 'banane', 'poire'];

for (const fruit in panier) {
   console.log(panier[fruit]);
}
for (const element of panier) {
   console.log(element);
}
for (const element of panier) {
   console.log(panier.indexOf(element));
}
