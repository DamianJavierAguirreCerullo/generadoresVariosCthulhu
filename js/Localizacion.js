

function Localizacion(){

    var random_localizacion = Math.floor(Math.random() * (20 - 1 + 1) +1)
    var Localiza = random_localizacion

    if (Localiza < 4) {
        Impacto = "en la pierna derecha"
    }

        else if (Localiza < 7) {
            Impacto = "en la pierna Izquierda"
        }

        else if (Localiza < 11) {
            Impacto = "en el abdomen"
        }

        else if (Localiza < 16) {
            Impacto = "en el torso"
        }

        else if (Localiza < 18) {
            Impacto = "en el brazo derecha"
        }

        else if (Localiza < 20) {
            Impacto = "en el brazo izquierdo"
        }

        else {
            Impacto = "Impacto en la cabeza"
        }

    document.getElementById("result").innerHTML =
    "<h1>Impacto en "+Impacto+"</h1>"

}