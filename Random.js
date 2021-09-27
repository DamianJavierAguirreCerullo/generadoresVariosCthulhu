var tiradas = document.getElementById("CantidadTiradas")
var numero = document.getElementById("numeros");
var lanzar = document.getElementById("lanzador");
lanzar.addEventListener ("click",Random);


function Random(){

        var max = parseInt(numero.value);
        const min = 1;
        var resultado = Math.floor(Math.random() * (max - min +1 )) + min;
        document.getElementById("result").innerHTML =
        "<h1>Numero Aleatorio :</h1><div ><h2>"+resultado+"</h2></div>";

      
}