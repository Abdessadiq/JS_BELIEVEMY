// Etape 1 - Sélectionner nos éléments

let input = document.querySelector("#prix");
let error = document.querySelector("small");
let form = document.querySelector("#formulaire");

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
nombreAliatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;
// Etape 6 - Créer la fonction vérifier

function verifier(nombre){
    let instruction = document.createElement('div');
    if (nombre < nombreAliatoire) {
        // c'est plus
        // Aouter un contenu "c'est plus "
        instruction.textContent = `# ${coups} ( ${nombre} ) C'est plus !`;
        // ajouter les classes instruction et plus 
        instruction.className = "instruction plus";

        
    } else if( nombre> nombreAliatoire){
          // Aouter un contenu "c'est moins "
          instruction.textContent = `# ${coups} ( ${nombre} ) C'est moins !`;
          // ajouter les classes instruction et mois 
          instruction.className = "instruction moins";
        
    }else{
          // Aouter un contenu "c'est l ejuste prix "
          instruction.textContent = `# ${coups} ( ${nombre} ) Félicitation vous aver trouvé le juste prix  !`;
          // ajouter les classes instruction juste prix
          instruction.className = "instruction fini";
          input.disabled = true;
    }

    document.querySelector('#instructions').prepend(instruction);

}


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', ()=>{
  if (isNaN(input.value)) {
    error.style.display = "inline";
  } else {
    error.style.display = "none";
  }

})

// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (isNaN(input.value) || input.value == "" ) {
        input.style.borderColor = "red"
    } else {
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);

    }
})


