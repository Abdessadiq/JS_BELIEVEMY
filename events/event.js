
let a = document.querySelector('a');
let button = document.querySelector('button');
// a.onclick = () => {
//     if (confirm('Etes-vous sur ?')) {
//         location.href = "https://believemy.com";
//     }
// }
// button.onmouseover = () => document.body.style.backgroundColor = 'red';
// button.onmouseout = () => document.body.style.backgroundColor = 'white';

// Utiliser addEventLister avec JAVASCRIPT

// a.addEventListener('click', ()=>{
//     // console.log(e);
//     if (confirm('Etes-vous sur de vouloir supprimer cet article')) {
//         location.href = 'https://believemy.com';
//     }
// })
// button.addEventListener('mouseover', () => {
// document.body.style.backgroundColor = 'orange'
// })

function backgroundWhite(){
    document.body.style.backgroundColor = 'white'
}
// button.addEventListener('mouseout', backgroundWhite)

// Supprimer un Evenement 
// button.removeEventListener('mouseout', backgroundWhite)


// --
let article = document.querySelector('article');
let h1 = document.querySelector('h1');

article.addEventListener('click', () => {
    alert('article cliqué')
})
h1.addEventListener('click', (e) => {
    alert('titre cliqué')
    e.stopPropagation();
    console.log(e);
})
// 6. Planifier l'exécution d'un script (setTimeout, setInterval)

// setTimeout
// affiche Bonjour après 3 sec : une seule fois
let timer = setTimeout("alert('Bonjour')", 3000)

// pour arrêter un timeout
clearTimeout(timer)

// setInterval
// affiche chaque 3sec Bonjour : en permannance..
let interval = setInterval("alert('Bonjour')", 3000)
clearInterval(interval);



