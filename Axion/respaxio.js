const url = "https://lesoublisdelinfo.com/api.php";

// let requete = new XMLHttpRequest();

// requete.open('POST', url);
// requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// requete.responseType = 'json';
// requete.send('prenom=John');

// requete.onload = function() {
//   if (requete.readyState === XMLHttpRequest.DONE) {
//     if (requete.status === 200) {
//       let reponse = requete.response;
//       console.log(reponse);
//     }
//     else {
//       alert('Un problème est intervenu, merci de revenir plus tard.');
//     }
//   }
// }

// Avec fetch
// async function envoyerPrenom(prenom) {
//   const requete = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: new URLSearchParams({
//       prenom,
//     }),
//   });

//   if (!requete.ok) {
//     alert("Un problème est survenu.");
//   } else {
//     const donnees = await requete.json();
//     console.log(donnees);
//   }
// }

// envoyerPrenom("Elon");

// Avec axios
const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
axios
  .post(
    url,
    new URLSearchParams({
      prenom: "Steve",
    })
  )
  .then(function (donnes) {
    console.log(donnes.data);
  })
  .catch(function (error) {
    console.log(error);
  });
