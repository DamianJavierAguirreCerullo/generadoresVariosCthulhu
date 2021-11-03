// Area de 
var Criatura = document.getElementById("Criaturas");
var crear = document.getElementById("creador");
crear.addEventListener ("click",Crear_criatura);

// registro de criaturas

var Angel_descarnado = {
        Nombre : "Angel Descarnado de la Noche" ,
        FUE_max : 18 ,
        FUE_min : 3 ,
        CON_max : 18 ,
        CON_min : 3 ,
        TAM_max : 24 ,
        TAM_min : 4 ,
        DES_max : 18 ,
        DES_min : 8 ,
        INT_max : 6 ,
        INT_min : 1 ,
        POD_max : 18 ,
        POD_min : 3 ,
        Movimiento : "6/12 Volando"
}

var Antiguo = {
        Nombre : "Antiguo" ,
        FUE_max : 48 ,
        FUE_min : 28 ,
        CON_max : 24 ,
        CON_min : 9 ,
        TAM_max : 48 ,
        TAM_min : 8 ,
        DES_max : 24 ,
        DES_min : 9 ,
        INT_max : 18 ,
        INT_min : 13 ,
        POD_max : 18 ,
        POD_min : 3 ,
        Movimiento : "8/10 Volando"
}

var Byakhee = {
        Nombre : "Byakhee" ,
        FUE_max : 30 ,
        FUE_min : 5 ,
        CON_max : 18 ,
        CON_min : 3 ,
        TAM_max : 30 ,
        TAM_min : 5 ,
        DES_max : 21 ,
        DES_min : 6 ,
        INT_max : 18 ,
        INT_min : 3 ,
        POD_max : 18 ,
        POD_min : 3 ,
        Movimiento : "5/16 Volando"
}

var Cthonian = {
        Nombre : "Cthonian" ,
        FUE_max : 18 ,
        FUE_min : 3 ,
        CON_max : 48 ,
        CON_min : 33 ,
        TAM_max : 18 ,
        TAM_min : 3 ,
        DES_max : 12 ,
        DES_min : 2 ,
        INT_max : 30 ,
        INT_min : 5 ,
        POD_max : 30 ,
        POD_min : 5 ,
        Movimiento : "6/1 Cavando"
}

var Color_surgido_del_espacio = {
        Nombre : "Color Surgido del espacio" ,
        FUE_max : 6 ,
        FUE_min : 1 ,
        DES_max : 24 ,
        DES_min : 14 ,
        INT_max : 24 ,
        INT_min : 4 ,
        POD_max : 12 ,
        POD_min : 6 ,
        Movimiento : "12 Fluyendo / 20 Volando "
}

var Dagon_e_hidra = {
        Nombre : "Dagón e Hidra" ,
        FUE_max : 260 ,
        CON_max : 250 ,
        TAM_max : 300 ,
        DES_max : 100 ,
        INT_max : 100 ,
        POD_max : 150 ,
        Movimiento : "10/15 Nadando"
}

var Dhole = {
        Nombre : "Dhole" ,
        FUE_max : 1000 ,
        FUE_min : 10 ,
        CON_max : 200 ,
        CON_min : 101 ,
        TAM_max : 100 ,
        TAM_min : 1 ,
        DES_max : 4 ,
        DES_min : 1 ,
        INT_max : 12 ,
        INT_min : 2 ,
        POD_max : 60 ,
        POD_min : 10 ,
        Movimiento : "15 Reptando / 10 Excavando"
}

var El_horror_en_la_tinta = {
        Nombre : "Ursus Miles (El horror de la tinta)" ,
        FUE_max : 110 ,
        CON_max : 300 ,
        TAM_max : 130 ,
        DES_max : 80 ,
        INT_max : 20 ,
        POD_max : 150 ,
        Movimiento : "10"
}

var Ghast = {
        Nombre : "Ghast" ,
        FUE_max : "" ,
        FUE_min : "" ,
        CON_max : "" ,
        CON_min : "" ,
        TAM_max : "" ,
        TAM_min : "" ,
        DES_max : "" ,
        DES_min : "" ,
        INT_max : "" ,
        INT_min : "" ,
        POD_max : "" ,
        POD_min : "" ,
        Movimiento : "10"
}

var Gnoph_keh = {
        Nombre : "Gnoph_keh" ,
        FUE_max : "" ,
        FUE_min : "" ,
        CON_max : "" ,
        CON_min : "" ,
        TAM_max : "" ,
        TAM_min : "" ,
        DES_max : "" ,
        DES_min : "" ,
        INT_max : "" ,
        INT_min : "" ,
        POD_max : "" ,
        POD_min : "" ,
        Movimiento : "9"
}

var Gul = {
        Nombre : "Gul" ,
        FUE_max : "" ,
        FUE_min : "" ,
        CON_max : "" ,
        CON_min : "" ,
        TAM_max : "" ,
        TAM_min : "" ,
        DES_max : "" ,
        DES_min : "" ,
        INT_max : "" ,
        INT_min : "" ,
        POD_max : "" ,
        POD_min : "" ,
        Movimiento : "9"
}

// var  = {
//         Nombre : "" ,
//         FUE_max :  ,
//         FUE_min :  ,
//         CON_max :  ,
//         CON_min :  ,
//         TAM_max :  ,
//         TAM_min :  ,
//         DES_max :  ,
//         DES_min :  ,
//         INT_max :  ,
//         INT_min :  ,
//         POD_max :  ,
//         POD_min :  ,
//         Movimiento : ""
// }








function Crear_criatura(){

        var Poder_especial_criatura = "No"

        var Codigo_criatura = parseInt(Criatura.value);

        //

        //if de calculos para hechizos
        var Probabilidad_hechizo_criatura = Math.floor(Math.random() * (100 - 1 + 1) + 1)


        // if criaturas

        if (Codigo_criatura === 1) {

         var Nombre_criatura = Angel_descarnado.Nombre;

         var Fuerza_criatura = (Math.floor(Math.random() * (Angel_descarnado.FUE_max - Angel_descarnado.FUE_min + 1 ) + Angel_descarnado.FUE_min)) * 5;

         var Constitucion_criatura = Math.floor(Math.random() * (Angel_descarnado.CON_max - Angel_descarnado.CON_min + 1 ) + Angel_descarnado.CON_min) * 5;

         var Tamaño_criatura = Math.floor(Math.random() * (Angel_descarnado.TAM_max - Angel_descarnado.TAM_min + 1 ) + Angel_descarnado.TAM_min) * 5;

         var Destresa_criatura = Math.floor(Math.random() * (Angel_descarnado.DES_max - Angel_descarnado.DES_min + 1 ) + Angel_descarnado.DES_min) * 5;

         var Inteligencia_criatura = Math.floor(Math.random() * (Angel_descarnado.INT_max - Angel_descarnado.INT_min + 1 ) + Angel_descarnado.INT_min) * 5;

         var Poder_criatura = Math.floor(Math.random() * (Angel_descarnado.POD_max - Angel_descarnado.POD_min + 1 ) + Angel_descarnado.POD_min) * 5;

         var Movimiento_criatura = Angel_descarnado.Movimiento;

        }
         

        else if (Codigo_criatura === 2) {

         var Nombre_criatura = Antiguo.Nombre;

         var Fuerza_criatura = Math.floor(Math.random() * (Antiguo.FUE_max - Antiguo.FUE_min + 1 ) + Antiguo.FUE_min) * 5;

         var Constitucion_criatura = Math.floor(Math.random() * (Antiguo.CON_max - Antiguo.CON_min + 1 ) + Antiguo.CON_min) * 5;

         var Tamaño_criatura = Math.floor(Math.random() * (Antiguo.TAM_max - Antiguo.TAM_min + 1 ) + Antiguo.TAM_min) * 5;

         var Destresa_criatura = Math.floor(Math.random() * (Antiguo.DES_max - Antiguo.DES_min + 1 ) + Antiguo.DES_min) * 5;

         var Inteligencia_criatura = Math.floor(Math.random() * (Antiguo.INT_max - Antiguo.INT_min + 1 ) + Antiguo.INT_min) * 5;

         var Poder_criatura = Math.floor(Math.random() * (Antiguo.POD_max - Antiguo.POD_min + 1 ) + Antiguo.POD_min) * 5;

         var Movimiento_criatura = Antiguo.Movimiento;

                if (Probabilidad_hechizo_criatura < 71){
                        var Hechizo_criatura = ""
                }

         var Poder_especial_criatura = Hechizo_criatura

        }
         

        else if (Codigo_criatura === 3) {

         var Nombre_criatura = Byakhee.Nombre;

         var Fuerza_criatura = Math.floor(Math.random() * (Byakhee.FUE_max - Byakhee.FUE_min + 1 ) + Byakhee.FUE_min) * 5;

         var Constitucion_criatura = Math.floor(Math.random() * (Byakhee.CON_max - Byakhee.CON_min + 1 ) + Byakhee.CON_min) * 5;

         var Tamaño_criatura = Math.floor(Math.random() * (Byakhee.TAM_max - Byakhee.TAM_min + 1 ) + Byakhee.TAM_min) * 5;

         var Destresa_criatura = Math.floor(Math.random() * (Byakhee.DES_max - Byakhee.DES_min + 1 ) + Byakhee.DES_min) * 5;

         var Inteligencia_criatura = Math.floor(Math.random() * (Byakhee.INT_max - Byakhee.INT_min + 1 ) + Byakhee.INT_min) * 5;

         var Poder_criatura = Math.floor(Math.random() * (Byakhee.POD_max - Byakhee.POD_min + 1 ) + Byakhee.POD_min) * 5;

         var Movimiento_criatura = Byakhee.Movimiento;

        }
         

        else if (Codigo_criatura === 4) {

         var Nombre_criatura = Cthonian.Nombre;

         var Fuerza_criatura = Math.floor(Math.random() * (Cthonian.FUE_max - Cthonian.FUE_min + 1 ) + Cthonian.FUE_min) * 25;

         var Constitucion_criatura = Math.floor(Math.random() * (Cthonian.CON_max - Cthonian.CON_min + 1 ) + Cthonian.CON_min) * 5;

         var Tamaño_criatura = Math.floor(Math.random() * (Cthonian.TAM_max - Cthonian.TAM_min + 1 ) + Cthonian.TAM_min) * 25;

         var Destresa_criatura = Math.floor(Math.random() * (Cthonian.DES_max - Cthonian.DES_min + 1 ) + Cthonian.DES_min) * 5;

         var Inteligencia_criatura = Math.floor(Math.random() * (Cthonian.INT_max - Cthonian.INT_min + 1 ) + Cthonian.INT_min) * 5;

         var Poder_criatura = Math.floor(Math.random() * (Cthonian.POD_max - Cthonian.POD_min + 1 ) + Cthonian.POD_min) * 5;

         var Movimiento_criatura = Cthonian.Movimiento;

        }
         

        else if (Codigo_criatura === 5) {

         var Nombre_criatura = Color_surgido_del_espacio.Nombre;

         var Fuerza_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.FUE_max - Color_surgido_del_espacio.FUE_min + 1 ) + Color_surgido_del_espacio.FUE_min) * 5;

         var Constitucion_criatura = "N/A"
         
         var Destresa_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.DES_max - Color_surgido_del_espacio.DES_min + 1 ) + Color_surgido_del_espacio.DES_min) * 5;
         
         var Inteligencia_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.INT_max - Color_surgido_del_espacio.INT_min + 1 ) + Color_surgido_del_espacio.INT_min) * 5;
         
         var Poder_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.POD_max - Color_surgido_del_espacio.POD_min + 1 ) + Color_surgido_del_espacio.POD_min) * 5;

         var Tamaño_criatura = Poder_criatura;
         
         var Movimiento_criatura = Color_surgido_del_espacio.Movimiento;

        }

        
        else if (Codigo_criatura === 6) {

                var Nombre_criatura = Dagon_e_hidra.Nombre;
       
                var Fuerza_criatura = Dagon_e_hidra.FUE_max
       
                var Constitucion_criatura = Dagon_e_hidra.CON_max
       
                var Tamaño_criatura = Dagon_e_hidra.TAM_max
       
                var Destresa_criatura = Dagon_e_hidra.DES_max
       
                var Inteligencia_criatura = Dagon_e_hidra.INT_max
       
                var Poder_criatura = Dagon_e_hidra.POD_max
       
                var Movimiento_criatura = Dagon_e_hidra.Movimiento;
       
               }

        else if (Codigo_criatura === 36) {

                var Nombre_criatura = El_horror_en_la_tinta.Nombre;
       
                var Fuerza_criatura = El_horror_en_la_tinta.FUE_max
       
                var Constitucion_criatura = El_horror_en_la_tinta.CON_max
       
                var Tamaño_criatura = El_horror_en_la_tinta.TAM_max
       
                var Destresa_criatura = El_horror_en_la_tinta.DES_max
       
                var Inteligencia_criatura = El_horror_en_la_tinta.INT_max
       
                var Poder_criatura = El_horror_en_la_tinta.POD_max
       
                var Movimiento_criatura = El_horror_en_la_tinta.Movimiento;
       
               }



        else if (Codigo_criatura === 7) {

                var Nombre_criatura = Dhole.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Dhole.FUE_max - Dhole.FUE_min + 1 ) + Dhole.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Dhole.CON_max - Dhole.CON_min + 1 ) + Dhole.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * ((Dhole.TAM_max + (Fuerza_criatura/5)) - Dhole.TAM_min + 1 ) + Dhole.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Dhole.DES_max - Dhole.DES_min + 1 ) + Dhole.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Dhole.INT_max - Dhole.INT_min + 1 ) + Dhole.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Dhole.POD_max - Dhole.POD_min + 1 ) + Dhole.POD_min) * 5;
       
                var Movimiento_criatura = Dhole.Movimiento;
       
               }
               
               
        else if (Codigo_criatura === 8) {

                var Nombre_criatura = Byakhee.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Byakhee.FUE_max - Byakhee.FUE_min + 1 ) + Byakhee.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Byakhee.CON_max - Byakhee.CON_min + 1 ) + Byakhee.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Byakhee.TAM_max - Byakhee.TAM_min + 1 ) + Byakhee.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Byakhee.DES_max - Byakhee.DES_min + 1 ) + Byakhee.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Byakhee.INT_max - Byakhee.INT_min + 1 ) + Byakhee.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Byakhee.POD_max - Byakhee.POD_min + 1 ) + Byakhee.POD_min) * 5;
       
                var Movimiento_criatura = Byakhee.Movimiento;
       
               }
                
         

        // if de Corpulencia 

        var Corpulencia = Fuerza_criatura + Tamaño_criatura

        if (Corpulencia < 65 ){
                var Corpulencia_criatura = -2
                var Daño_extra_criatura = -2

        }

                else if (Corpulencia < 85){
                        var Corpulencia_criatura = -1
                        var Daño_extra_criatura = -1
                }

                else if (Corpulencia < 125){
                        var Corpulencia_criatura = 0
                        var Daño_extra_criatura = 0
                }

                else if (Corpulencia < 165){
                        var Corpulencia_criatura = 1
                        var Daño_extra_criatura = "1D4"
                }

                else if (Corpulencia < 205){
                        var Corpulencia_criatura = 2
                        var Daño_extra_criatura = "1D6"
                }

                else {
                        var Corpulencia_criatura = (Math.ceil(((Corpulencia - 204) / 80))) + 2
                        var Daño_extra_criatura = (Corpulencia_criatura-1) + "D6"

                }


        var  Vida_criatura  = Math.floor((Tamaño_criatura+Constitucion_criatura)/10);

        var Magia_criatura = (Poder_criatura/5)









        
         
         document.getElementById("result").innerHTML =
        "<br><h3> Nombre : "+Nombre_criatura+"</h3>"+
        "<h3><br>Stats</h3>"+
        "<ul><li> Fue : "+Fuerza_criatura+
        "<br><li> Con : "+Constitucion_criatura+
        "<br><li> Pod : "+Poder_criatura+
        "<br><li> Des : "+Destresa_criatura+
        "<br><li> Tam : "+Tamaño_criatura+
        "<br><li> Int : "+Inteligencia_criatura+
        "<br><li> PV  : "+Vida_criatura+
        "<br><li>"+"Corpulencia media: "+Corpulencia_criatura+
        "<br><li>"+"Bonificación al daño media: "+Daño_extra_criatura+
        "<br><li>"+"Media de puntos de magia: "+Magia_criatura+
        "<br><li>"+"Movimiento: "+Movimiento_criatura+
        "<br><li>"+"Poder Especial: "+Poder_especial_criatura

}