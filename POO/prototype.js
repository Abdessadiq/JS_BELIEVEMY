// Les prototype avec JS Il permet de faire le partage des méthode ou le partage des propriété ..
// avec le prototype on peut ajouter des proprité ou des méthode dans nos objects...
function User(prenom, nom, email) {
  this.prenom = prenom;
  this.nom = nom;
  this.email = email;
}

User.prototype.sePresenter = function () {
  console.log(
    ` Je suis ${this.nom} ${this.prenom} et vous pouvez me contactez avec l'email ${this.email}`
  );
};
var salim = new User("salim", "kojovali", "kojovali@gmail.com");
salim.sePresenter();


