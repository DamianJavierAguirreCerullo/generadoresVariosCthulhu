function Sodas() {
    const Sodas = [
        "Hulthuc: Ginger Ale; Tónica; Común", 
        "Grapette: Uva; Naranja; Ginger Ale; Comun",
        "NuGrape: Uva; Ginger Ale; Frutilla",
        "Brandywine: Uva; Tónica; Común",
        "Nuicy: Naranja; Tónica; Ginger Ale; Común",
        "Coca-Cola: Cola",
        "Pepsi-Cola: Cola",
        "Bluebird: Frutilla; Naranja; Común",
        "Vernor’s: Ginger Ale",
        "Royal Crown: Ginger Ale",
        "Chelmsford: Ginger Ale"
    ]

    const Company = Math.floor(Math.random() * Sodas.length)
    document.getElementById("result").innerHTML =
    "<h1>Soda:</h1>"+"<h2>"+Sodas[Company]+"</h2>"
}