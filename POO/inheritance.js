// Le concept d'héritage en javascript

function Animal(nbrPaw, weight) {
  this.nbrPaw = nbrPaw;
  this.weight = weight;
}
// on a ajouter la méthode dans avec le prototype pour que les objet fils hérite également de ce comportement..

Animal.prototype.sePresenter = function () {
  console.log(`L animal posside ${this.nbrPaw} et il paise ${this.weight}`);
};

function Bird(nbrPaw, weight, wingsLength) {
  // La fonction call il permet d'appeller une fonction constructeur ..
  Animal.call(this, nbrPaw, weight);
  this.wingsLength = wingsLength;
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructeur = Bird;
function Mammal(nbrPaw, weight, hairType) {
  Animal.call(this, nbrPaw, weight);
  this.hairType = hairType;
}

var parrot = new Bird(2, "1KG", "Large");
console.log(parrot);
// il affiche pas il dit que parrot.sePresenter() is not a function
// Pour que ça fonctionne il faut présiser à js dans protype que cet objet est un animal .. avec :
// Bird.prototype = Object.create(Animal.prototype); voir en haut..
// mais il y a un problème c'est que la proprieté constructeur dans __proto__
// qui permet de créer des objet Bird à désparu on peux le recréer avec : Bird.prototype.constructeur =  Bird

parrot.sePresenter();

// Call et Apply permettent d'invoquer immédiatemetnt une fonction
// call
let gandalef = {
  titre: "Magicien",
};

function direBonjour() {
  console.log(this.titre); // avec l'utilisation de call on peut afficher titre..
}
// direBonjour.call(gandalef);

function sayHello(arme, degat) {
  console.log(
    `Bonjour : ${this.titre}, vous possédez ${arme} qui donne ${degat} point de dégats `
  );
}

// Avec apply on passe les argument que par table
sayHello.apply(gandalef, ["un bâton", 100]);
// alors que avec call on peut passer les param avec valeur

sayHello.call(gandalef, "halo", 100);

// l'object de bind c'est de changé le concext de this..
this.valeur = "Window";
let monObj = {
  valeur: "Object",
  getValeur: function () {
    console.log(this.valeur);
  },
};

let maValeur = monObj.getValeur;
maValeur(); // afficher undefined
// pour régler ça on utilise bind
let maValeurAvecBind = monObj.getValeur.bind(monObj);
maValeurAvecBind();

class Ani {
  constructor(nbrPaw, weight) {
    this.nbrPaw = nbrPaw;
    this.weight = weight;
  }
  pres() {
    console.log(
      ` Cet animal posséde ${this.nbrPaw} et il paise ${this.weight}`
    );
  }
}

class Birdx extends Ani {
  constructor(nbrPaw, weight, wingsLength) {
    super(nbrPaw, weight);
    this.wingsLength = wingsLength;
  }
  voler() {
    console.log(`Je vole mon aile est : ${this.wingsLength}`);
  }
}
parrotx = new Birdx(3, "1.5KG", "Moyen");
parrotx.voler();
parrotx.pres();
