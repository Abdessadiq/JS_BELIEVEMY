const url = "https://blockchain.info/ticker";

async function recupererPrix() {
  const req = await fetch(url, {
    method: "GET",
  });
  if (!req.ok) {
    alert("un probléme est survenu");
  } else {
    let data = await req.json();
    // console.log(data);
    document.querySelector("span").textContent = data.USD.last;
  }
}
recupererPrix();

// setInterval(recupererPrix, 1000);

// Envoyé des données avec Fetch
const URL = "https://lesoublisdelinfo.com/api.php";

// let requete = new XMLHttpRequest();

// // Get
// // requete.open('GET', URL);
// // requete.responseType = 'json';
// // requete.send();

// // Post
// requete.open("POST", URL);
// requete.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// requete.responseType = "json";
// requete.send("prenom=John");

// requete.onload = function () {
//   if (requete.readyState === XMLHttpRequest.DONE) {
//     if (requete.status === 200) {
//       let reponse = requete.response;
//       console.log(reponse);
//     } else {
//       alert("Un problème est intervenu, merci de revenir plus tard.");
//     }
//   }
// };
async function envoyerPreno(prenom) {
  const request = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      prenom,
    },
  });
  if (!request.ok) {
    alert("Un probléme est survenu..");
  } else {
    const donnees = await request.json();
    console.log(donnees);
  }
}
envoyerPreno("elon");
// La méthode PAtch de protocol HTTP c'est pour récupérer un objet et de modéfier qu'une seul partie de cet objet ..
