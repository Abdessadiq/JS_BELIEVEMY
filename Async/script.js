// La programmation asynchrone..
// On général javascript est un langague synchrone..
//-----------------| Les promisses |--------------
// Les promisses nous permet de créer de code asynchrone avec js
// Les promisses ont 3 état : En cours | Honorée | Rompue

const promisse = new Promise((resolve, reject) => {
  // Tâche asynchrone
  // Promisse honorée : resolve()
  // Promisse Rempue : reject()
});
function charcherScript(script) {
  return new Promise((resolve, reject) => {
    // Créer un element
    let element = document.createElement("script");
    element.src = script;
    document.head.append(element);

    // 2 possibilité.. : Resolve()
    element.onload = () => resolve(`Le fichier ${script} a été chargé`);

    //reject
    element.onerror = () =>
      reject(new Error("Operation de charchement de fichier a été echoué"));
  });
}
const prom = charcherScript("test.js");
prom.then(
  function (result) {
    console.log(result);
  },
  function (error) {
    console.log(error);
  }
);

//Async & Await "Sucres syntaxiques.."


