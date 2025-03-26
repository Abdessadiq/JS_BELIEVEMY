let chien = {
    race : "Shiba",
    poil : 'Court',
    aboyer : () => console.log("weaaf weaaaf")
}
console.log(chien.race);
chien.aboyer();
let magicien = {
    attaquer : () => console.log("Le magicien lance un sort..")
}

let guerrier = {
    attaquer : () => console.log("Le guerrer prend son épé ..")
}
magicien.attaquer();
guerrier.attaquer();