try {
    let recompance = prompt("choisissez votre recompanse ! épéé, arc, haches ");
    var degats = 10 ;
    switch (recompance) {
        case "épéé":
            degats = 40;
            break;
        case "arc":
            degats = 20;
            break;
        case "haches":
            degats = 30;
            break;
    
        default:
            throw new Error("Vous nous pouvez pas tricher ! ");
    }
    alert("Votre dégats est : " + degats);
    
} catch (error) {
    alert(error)
}