const tiradas = document.getElementById("CantidadTiradas")
const numero = document.getElementById("numeros");
const lanzar = document.getElementById("lanzador");
lanzar.addEventListener("click",Random);


function Random(){
        const max = parseInt(numero.value);
        const min = 1;
        const resultado = Math.floor(Math.random() * ( max - min + 1 )) + min;
        document.getElementById("result").innerHTML =
        "<h1>Numero Aleatorio :</h1><div ><h2>"+resultado+"</h2></div>";
}