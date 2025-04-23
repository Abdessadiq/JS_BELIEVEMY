// ---------- || AJAX ||-----------

//blockchain.info/ticker

const url = "https://blockchain.info/ticker";

function getPrice() {
  // Créer une requête
  let req = new XMLHttpRequest(); // Créer un Objet

  req.open("GET", url); // Premiere Parm GET/POST 2em Param l'url
  req.responseType = "json"; // Nous attendant du JSON
  req.send();
  // dés qu'on reçoit une réponse, cette fonction est exécutée..

  req.onload = function () {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        let res = req.response; // On stock la réponse..
        let priceUSD = res.USD.last;
        document.querySelector("#price_label").textContent = priceUSD;
      } else {
        alert("Un problème est intervenu, merci de reveni plustart..");
      }
    }
  };
}
setInterval(getPrice, 1000);

//. Utiliser une API : envoyer des données

const URL = "https://lesoublisdelinfo.com/api.php";

// Créer Une requete
let resq = new XMLHttpRequest();

// Ouvrir la requete Pour GET Récupérer des donnée..
// resq.open("GET", URL);

// Envoyé avec POST

resq.open("POST", URL);
resq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// Indiquer que nous attendant de json
resq.responseType = "json";
resq.send("prenom=ABDESSADIQ");

resq.onload = function () {
  if (resq.readyState === XMLHttpRequest.DONE) {
    if (resq.status === 200) {
      let resp = resq.response;
      console.log(resp.resultat);
    }
  } else {
    alert("Un problème est intervenu, merci de revenir plus tard..");
  }
};
