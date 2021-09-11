function NPueblo(){
        var Pueblo = [ "Dakari","Dustin","Lenno","Gaetano","Hamilton","Leben","Loring","Scoville","Tabor","Wellington",
        "Bodie","Kolmanskop","Iultin","Plymouth","Varosha","Townshend","Finch","Fawn","Rosebud","Maple",
        "Paradise","Ferret","Hen","Daffodil","Grizzly","Primrose","Elk"]

        var rand_Pueblo = Math.floor(Math.random()*Pueblo.length);  
	document.getElementById('result').innerHTML =
         "<h1>Pueblo:</h1><div class='alert alert-success'><h2>"+Pueblo[rand_Pueblo]+"</h2></div>";
	


}