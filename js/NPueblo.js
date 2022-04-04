function NPueblo(){
        /*
        var Pueblo = [ "Dakari","Dustin","Lenno","Gaetano","Hamilton","Leben","Loring","Scoville","Tabor","Wellington",
        "Bodie","Kolmanskop","Iultin","Plymouth","Varosha","Townshend","Finch","Fawn","Rosebud","Maple",
        "Paradise","Ferret","Hen","Daffodil","Grizzly","Primrose","Elk"] 
         */

        var Pueblo = ["Garden Lake", "Tuxbury Pond","Merrimac River", "Merrimac Bay","Indian River", "Parker River Oeste", "Parker River Este", "Bachelder Br", "Mill River", "Mud Creek", "Egypt R", "Plum Island", 
        "Hower Pond", "Howlett Brook", "Pye Brook", "Danes Pond", "Ipswich River", "Castle Neck", "Essex Bay", "Essex River", "Annisquam River", "Alewife Br", "Nichols Br", "Fish Br", "Muddy Pond", "Pleasan Pond", 
        "Beck Pond", "Chebacco Lake", "Gravelly", "Round Pound", "Sawmil Br", "Cat Brook", "Miles River", "Wenham Lake", "Bass River", "Porter River", "Crane River", "Water River", "Suntaug Lake", "North River", "Breeds Pond"]

        var rand_Pueblo = Math.floor(Math.random()*Pueblo.length);  
	document.getElementById("result").innerHTML =
        "<h1>Pueblo:</h1><div><h2>"+Pueblo[rand_Pueblo]+"</h2></div>";
	


}