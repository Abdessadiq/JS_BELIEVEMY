// 1ére méthode : décomposée
let header = document.querySelector('header')
header.style.backgroundColor = '#ffbd69' // à la place de - en fait cameleCase

// 2éme méthode : directe 
 let h1 = document.querySelector('h1')
 h1.style.color = '#111d5e'
 h1.style.textAlign = 'center'

//  3éme méthode : avec une classe
document.querySelector('header').className = "ma_class"