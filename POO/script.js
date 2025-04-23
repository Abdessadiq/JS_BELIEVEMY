let yannis = {
  prenom: "Yannis",
  nom: "Talib",
  email: "yannisbhml@gmail.com",

  // ici il va afficher prenom is not defined parce que il considére que prenom c'est une variable et non pas
  // une proprité de l'objet pour que ça fonctionne il fout l'afficher avec yanniss.prenom
  sePresenter: function () {
    // console.log("Bonjour je m'appelle : "+ prenom);
  },
};
yannis.sePresenter();
// L'avantage des objets lattéraux c'est que on les utilise généralement pour transmettre les information ..
function receviorMesCordonne() {
  return { latitude: 12, langitude: 100 };
}

let coord = receviorMesCordonne();
console.log(coord.langitude);
// . Créer un objet avec un constructeur personnalisé

// Créer une fonction constructeur ..

// C'est une convention de mettre un Maj au début de nom
function User(prenom, nom, email) {
  this.prenom = prenom;
  this.nom = nom;
  this.email = email;
}
// On crée un objet

var salim = new User("salim", "kojovali", "kojovali@gmail.com");
