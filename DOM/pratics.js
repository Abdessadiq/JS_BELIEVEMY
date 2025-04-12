// Pour supprimer l'élément
document.querySelector('#a-supprimer').remove()
  
// Créer les élements
let header = document.createElement('header');
let menu  = document.createElement('div');
let par = document.createElement('p')

// Les personnaliser
header.textContent = "Bienvenu";
header.style.backgroundColor = "#e3b04b";
header.style.padding = "30px";
header.style.color = 'white';
header.style.fontSize = '3rem';
header.style.textAlign = 'center';
menu.innerHTML = "<a href = '#' >Accueil</a> / <a href = '#' >page suivante</a>"
menu.style.padding = "15px";
menu.style.fontSize = "1.2rem"
menu.style.backgroundColor = " #f1d6ab"
par.textContent = 'Ceci est un text créer avec JAVASCRIPT'



// les ajouter
document.body.append(header, menu,par)

