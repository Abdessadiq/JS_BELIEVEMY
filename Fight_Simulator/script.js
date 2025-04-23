class Personnage {
  constructor(pseudo, classe, sante, attaque, niveau = 1) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = this.sante;
    this.attaque = attaque;
    this.niveau = niveau;
  }
  evoluer() {
    this.niveau++;
    console.log(`${this.pseudo} passe au niveau ${this.niveau}`);
  }
  verifierSante() {
    if (this.sante <= 0) {
      this.sante = 0;
      console.log(this.pseudo + " a perdu");
    }
  }
  get infos() {
    return `Le personnage ${this.pseudo} de classe ${this.classe} a ${this.sante} points de vie et est au niveau ${this.niveau}`;
  }
}

class Magicien extends Personnage {
  constructor(pseudo) {
    super(this.pseudo, "magicien", 170, 90);
  }
  attaquer(personnage) {
    personnage.sante--;
    console.log(
      `${this.pseudo} attaque ${personnage.pseudo} en lançant un sort (${this.attaque} dégat)`
    );
    this.evoluer();
    personnage.verifierSante();
  }
  coupSpecial(personnage) {
    personnage.sante = personnage.sante * 5;
    console.log(
      `${this.pseudo} attaque avec son coup spécial puissance des arcanes ${
        personnage.pseudo
      } (${this.attaque * 5} dégât).`
    );
    this.evoluer();
    personnage.verifierSante();
  }
}
class Guerrier extends Personnage {
  constructor(pseudo) {
    super(this.pseudo, "guerrier", 350, 50);
  }
  attaquer(personnage) {}
}
