function bonjour(prenom){
    let resultat = "Bonjour "+ prenom; // variable local
    let maClosure = () => console.log(resultat)
    return maClosure;
}
let maFonction = bonjour("Evan");
maFonction();