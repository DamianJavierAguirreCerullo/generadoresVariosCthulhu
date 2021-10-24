var Criatura = document.getElementById("Criaturas");
var crear = document.getElementById("creador");
crear.addEventListener ("click",Crear_criatura);


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
        Movimiento : "8/10 Volando"
}

var Byakhee = {
        Nombre : "Byakhee" ,
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
        Movimiento : "5/16 Volando"
}

var Cthonian = {
        Nombre : "Cthonian" ,
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
        Movimiento : "6/1 Cavando"
}

var Color_surgido_del_espacio = {
        Nombre : "Color Surgido del espacio" ,
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
        Movimiento : "12 Fluyendo / 20 Volando "
}

var Dagon_e_hidra = {
        Nombre : "Dagón e Hidra" ,
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
        Movimiento : "10/15 Nadando"
}

var Dhole = {
        Nombre : "Dhole" ,
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
        Movimiento : "15 Reptando / 10 Excavando"
}

var El_horror_en_la_tinta = {
        Nombre : "El Horror en la Tinta" ,
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
//         FUE_max : "" ,
//         FUE_min : "" ,
//         CON_max : "" ,
//         CON_min : "" ,
//         TAM_max : "" ,
//         TAM_min : "" ,
//         DES_max : "" ,
//         DES_min : "" ,
//         INT_max : "" ,
//         INT_min : "" ,
//         POD_max : "" ,
//         POD_min : "" ,
//         Movimiento : ""
// }








function Crear_criatura(){

         var Codigo = parseInt(Criatura.value);
         pepe = Codigo === 1

        if (Codigo === 1) {

         var Nombre_criatura = Angel_descarnado.Nombre;

         var Fuerza_criatura = (Math.floor(Math.random() * (Angel_descarnado.FUE_max - Angel_descarnado.FUE_min + 1 ) + Angel_descarnado.FUE_min)) * 5;

         var Constitucion_criatura = Math.floor(Math.random() * (Angel_descarnado.CON_max - Angel_descarnado.CON_min + 1 ) + Angel_descarnado.CON_min) * 5;

         var Tamaño_criatura = Math.floor(Math.random() * (Angel_descarnado.TAM_max - Angel_descarnado.TAM_min + 1 ) + Angel_descarnado.TAM_min) * 5;

         var Destresa_criatura = Math.floor(Math.random() * (Angel_descarnado.DES_max - Angel_descarnado.DES_min + 1 ) + Angel_descarnado.DES_min) * 5;

         var Inteligencia_criatura = Math.floor(Math.random() * (Angel_descarnado.INT_max - Angel_descarnado.INT_min + 1 ) + Angel_descarnado.INT_min) * 5;

         var Poder_criatura = Math.floor(Math.random() * (Angel_descarnado.FUE_max - Angel_descarnado.FUE_min + 1 ) + Angel_descarnado.FUE_min) * 5;

         var Movimiento_criatura = Angel_descarnado.Movimiento;

        }
         

        if (Codigo === 2) {

         var Nombre_criatura = Antiguo.Nombre;

         var Fuerza_criatura = Math.floor(Math.random() * (Antiguo.FUE_max - Antiguo.FUE_min + 1 ) + Antiguo.FUE_min) * 5;

         var Constitucion_criatura = Math.floor(Math.random() * (Antiguo.CON_max - Antiguo.CON_min + 1 ) + Antiguo.CON_min) * 5;

         var Tamaño_criatura = Math.floor(Math.random() * (Antiguo.TAM_max - Antiguo.TAM_min + 1 ) + Antiguo.TAM_min) * 5;

         var Destresa_criatura = Math.floor(Math.random() * (Antiguo.DES_max - Antiguo.DES_min + 1 ) + Antiguo.DES_min) * 5;

         var Inteligencia_criatura = Math.floor(Math.random() * (Antiguo.INT_max - Antiguo.INT_min + 1 ) + Antiguo.INT_min) * 5;

         var Poder_criatura = Math.floor(Math.random() * (Antiguo.FUE_max - Antiguo.FUE_min + 1 ) + Antiguo.FUE_min) * 5;

         var Movimiento_criatura = Antiguo.Movimiento;

        }
         

        if (Codigo === 3) {

         var Nombre_criatura = Byakhee.Nombre;

         var Fuerza_criatura = Math.floor(Math.random() * (Byakhee.FUE_max - Byakhee.FUE_min + 1 ) + Byakhee.FUE_min) * 5;

         var Constitucion_criatura = Math.floor(Math.random() * (Byakhee.CON_max - Byakhee.CON_min + 1 ) + Byakhee.CON_min) * 5;

         var Tamaño_criatura = Math.floor(Math.random() * (Byakhee.TAM_max - Byakhee.TAM_min + 1 ) + Byakhee.TAM_min) * 5;

         var Destresa_criatura = Math.floor(Math.random() * (Byakhee.DES_max - Byakhee.DES_min + 1 ) + Byakhee.DES_min) * 5;

         var Inteligencia_criatura = Math.floor(Math.random() * (Byakhee.INT_max - Byakhee.INT_min + 1 ) + Byakhee.INT_min) * 5;

         var Poder_criatura = Math.floor(Math.random() * (Byakhee.FUE_max - Byakhee.FUE_min + 1 ) + Byakhee.FUE_min) * 5;

         var Movimiento_criatura = Byakhee.Movimiento;

        }
         

        if (Codigo === 4) {

         var Nombre_criatura = Cthonian.Nombre;

         var Fuerza_criatura = Math.floor(Math.random() * (Cthonian.FUE_max - Cthonian.FUE_min + 1 ) + Cthonian.FUE_min) * 5;

         var Constitucion_criatura = Math.floor(Math.random() * (Cthonian.CON_max - Cthonian.CON_min + 1 ) + Cthonian.CON_min) * 5;

         var Tamaño_criatura = Math.floor(Math.random() * (Cthonian.TAM_max - Cthonian.TAM_min + 1 ) + Cthonian.TAM_min) * 5;

         var Destresa_criatura = Math.floor(Math.random() * (Cthonian.DES_max - Cthonian.DES_min + 1 ) + Cthonian.DES_min) * 5;

         var Inteligencia_criatura = Math.floor(Math.random() * (Cthonian.INT_max - Cthonian.INT_min + 1 ) + Cthonian.INT_min) * 5;

         var Poder_criatura = Math.floor(Math.random() * (Cthonian.FUE_max - Cthonian.FUE_min + 1 ) + Cthonian.FUE_min) * 5;

         var Movimiento_criatura = Cthonian.Movimiento;

        }
         

        if (Codigo === 5) {

         var Nombre_criatura = Color_surgido_del_espacio.Nombre;

         var Fuerza_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.FUE_max - Color_surgido_del_espacio.FUE_min + 1 ) + Color_surgido_del_espacio.FUE_min) * 5;

         var Constitucion_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.CON_max - Color_surgido_del_espacio.CON_min + 1 ) + Color_surgido_del_espacio.CON_min) * 5;

         var Tamaño_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.TAM_max - Color_surgido_del_espacio.TAM_min + 1 ) + Color_surgido_del_espacio.TAM_min) * 5;

         var Destresa_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.DES_max - Color_surgido_del_espacio.DES_min + 1 ) + Color_surgido_del_espacio.DES_min) * 5;

         var Inteligencia_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.INT_max - Color_surgido_del_espacio.INT_min + 1 ) + Color_surgido_del_espacio.INT_min) * 5;

         var Poder_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.FUE_max - Color_surgido_del_espacio.FUE_min + 1 ) + Color_surgido_del_espacio.FUE_min) * 5;

         var Movimiento_criatura = Color_surgido_del_espacio.Movimiento;

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

                else if (Corpulencia < 285){
                        var Corpulencia_criatura = 3
                        var Daño_extra_criatura = "2D6"
                }

                else if (Corpulencia < 365){
                        var Corpulencia_criatura = 4
                        var Daño_extra_criatura = "3D6"
                }

                else if (Corpulencia < 445){
                        var Corpulencia_criatura = 5
                        var Daño_extra_criatura = "4D6"
                }

                else if (Corpulencia < 525){
                        var Corpulencia_criatura = 6
                        var Daño_extra_criatura = "5D6"
                }


                else if (Corpulencia < 605){
                        var Corpulencia_criatura = 7
                        var Daño_extra_criatura = "6D6"
                }


                else if (Corpulencia < 685){
                        var Corpulencia_criatura = 8
                        var Daño_extra_criatura = "7D6"
                }


                else if (Corpulencia < 765){
                        var Corpulencia_criatura = 9
                        var Daño_extra_criatura = "8D6"
                }


                else if (Corpulencia < 845){
                        var Corpulencia_criatura = 10
                        var Daño_extra_criatura = "9D6"
                }


                else if (Corpulencia < 925){
                        var Corpulencia_criatura = 11
                        var Daño_extra_criatura = "10D6"
                }


                else if (Corpulencia < 1085){
                        var Corpulencia_criatura = 12
                        var Daño_extra_criatura = "11D6"
                }

                else if (Corpulencia < 1165){
                        var Corpulencia_criatura = 13
                        var Daño_extra_criatura = "12D6"
                }

                else if (Corpulencia < 1245){
                        var Corpulencia_criatura = 14
                        var Daño_extra_criatura = "13D6"
                }

                else if (Corpulencia < 1325){
                        var Corpulencia_criatura = 15
                        var Daño_extra_criatura = "14D6"
                }

                else if (Corpulencia < 1405){
                        var Corpulencia_criatura = 16
                        var Daño_extra_criatura = "15D6"
                }




        var  Vida_criatura  = Math.floor((Tamaño_criatura+Constitucion_criatura)/10);

        // var Daño_extra_criatura = 

        // var Corpulencia_criatura =

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
        "<br><li>"+"Bonificación al daño media: "+Daño_extra_criatura+
        "<br><li>"+"Corpulencia media: "+Corpulencia_criatura+
        "<br><li>"+"Media de puntos de magia: "+Magia_criatura+
        "<br><li>"+"Movimiento: "+Movimiento_criatura
}