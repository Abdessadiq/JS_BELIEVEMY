let header = document.getElementsByTagName('header')
// console.log(header)

let logo = document.getElementById('logo')
// console.log(logo)

let container = document.getElementsByClassName('container')
// console.log(container)




let h1 = document.querySelector('h1')
// modifier la proprieté de l'objet .. on modifier que le text
h1.textContent = 'Hello word'


h1.innerHTML = "<div> Ceci c'est de changer avec des balaise html .. </div>"
// console.log(h1)


//4 - Ajouter des éléments au DOM (append, prepend, insertBefore)

// 1ére méthode :Ecrit juste un texte
document.write("test")

//2éme méthode : Ajouter un élément brut 
let h = document.querySelector('h1')
h.append('test')
// document.body.append('text')

// 3éme méthode (celle pour les objets..)

// - créer un élément
let helloWord = document.createElement('div')

// - Le peronnaliser
helloWord.textContent = 'hello word'

// - L'ajouter à notre page.. il y a 4 façon

// document.body.append(helloWord); // 1 
document.body.appendChild(helloWord) // 2 la même que 1 mais 1er mieux

document.body.insertBefore(helloWord, document.querySelector('.container')) // 3

// document.querySelector('.container').prepend(helloWord) // 4

// 7. Supprimer des éléments du DOM

document.querySelector('h1').remove();