// Area de 
var Criatura = document.getElementById("Criaturas");
var crear = document.getElementById("creador");
crear.addEventListener ("click",Crear_criatura);

var D4 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
var D6 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var D8 = Math.floor(Math.random() * (8 - 1 + 1) + 1);
var D10 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
var D100 = Math.floor(Math.random() * (100 - 1 + 1) + 1);

// grimorio

var Grimorio = ["Ajar un miembro","Aliento de las profundidades","Atormentar","Bendecir hoja","Cancion de Hastur","Cántico de Thoth","Crear barrera de Naach-Tith","Crear niebla de R'lyeh","Crear zombie","Cruz ansada de Prinn","Descomposición verde","Destierro de Yde Etad","Dividir el ka","Dominar","Encantar cuchillo","Encantar daga sacrificial","Encantar libro","Explosion mental","Fabrica de hidromiel espacial","Fundir carne","Garra de Nyogtha","Hechizo mortal","Imitar apariencia","Inducir el pánico","Inmoviliar a una victima","Intercambio de mentes","Mal de ojo","Maldición de Azathoth","Maldición del pellejo pútrido","Nublar la memoria","Ola de olvido","Palabras poderosas","Polvo de Ibn-Ghazi","Polvo de Suleimán","Crear portal","Caja Portal","Encontrar portal","Portal temporal","Proteccion","Protección corporal","Provocar/Curar la ceguera","Puño de Yog-Sothoth","Resurrección","Signo rojo de Shudde M'ell","Signo de Voorish","Simbolo arcano","Sugestión mental","Trasformación corporal de Gorgoroth","Trasferencia de mente"];

var Hechizo_1 = Grimorio[Math.floor(Math.random() * Grimorio.length)];
var Hechizo_2 = Grimorio[Math.floor(Math.random() * Grimorio.length)];
var Hechizo_3 = Grimorio[Math.floor(Math.random() * Grimorio.length)];
var Hechizo_4 = Grimorio[Math.floor(Math.random() * Grimorio.length)];
var Hechizo_5 = Grimorio[Math.floor(Math.random() * Grimorio.length)];
var Hechizo_6 = Grimorio[Math.floor(Math.random() * Grimorio.length)];
var Hechizo_7 = Grimorio[Math.floor(Math.random() * Grimorio.length)];
var Hechizo_8 = Grimorio[Math.floor(Math.random() * Grimorio.length)];
var Hechizo_9 = Grimorio[Math.floor(Math.random() * Grimorio.length)];
var Hechizo_10 = Grimorio[Math.floor(Math.random() * Grimorio.length)];
console.log(Hechizo_1,Hechizo_2,Hechizo_3,Hechizo_4,Hechizo_5,Hechizo_6,Hechizo_7,Hechizo_8,Hechizo_9,Hechizo_10);


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
        FUE_max : 30 ,
        FUE_min : 15 ,
        CON_max : 24 ,
        CON_min : 4 ,
        TAM_max : 36 ,
        TAM_min : 16 ,
        DES_max : 18 ,
        DES_min : 8 ,
        INT_max : 6 ,
        INT_min : 1 ,
        POD_max : 18 ,
        POD_min : 3 ,
        Movimiento : "10"
}

var Gnoph_keh = {
        Nombre : "Gnoph Keh" ,
        FUE_max : 36 ,
        FUE_min : 26 ,
        CON_max : 30 ,
        CON_min : 15 ,
        TAM_max : 36 ,
        TAM_min : 26 ,
        DES_max : 24 ,
        DES_min : 4 ,
        INT_max : 18 ,
        INT_min : 13 ,
        POD_max : 36 ,
        POD_min : 6 ,
        Movimiento : "9"
}

var Gul = {
        Nombre : "Gul" ,
        FUE_max : 24 ,
        FUE_min : 9 ,
        CON_max : 18 ,
        CON_min : 8 ,
        TAM_max : 18 ,
        TAM_min : 8 ,
        DES_max : 18 ,
        DES_min : 8 ,
        INT_max : 18 ,
        INT_min : 8 ,
        POD_max : 18 ,
        POD_min : 8 ,
        Movimiento : "9"
}

 var Habitante_de_las_arenas = {
         Nombre : "Habitante de las Arenas" ,
         FUE_max : 18 ,
         FUE_min : 3 ,
         CON_max : 18 ,
         CON_min : 8 ,
         TAM_max : 24 ,
         TAM_min : 9 ,
         DES_max : 18 ,
         DES_min : 8 ,
         INT_max : 18 ,
         INT_min : 3 ,
         POD_max : 18 ,
         POD_min : 3 ,
         Movimiento : "8"
 }

 var Hombre_serpiente = {
         Nombre : "Hombre Serpiente" ,
         FUE_max : 18 ,
         FUE_min : 3 ,
         CON_max : 18 ,
         CON_min : 3 ,
         TAM_max : 18 ,
         TAM_min : 3 ,
         DES_max : 18 ,
         DES_min : 8 ,
         INT_max : 24 ,
         INT_min : 9 ,
         POD_max : 18 ,
         POD_min : 8 ,
         Movimiento : "8"
 }

 var Horrendo_cazador = {
         Nombre : "Horrendo Cazador" ,
         FUE_max : 42 ,
         FUE_min : 17 ,
         CON_max : 18 ,
         CON_min : 3 ,
         TAM_max : 54 ,
         TAM_min : 29 ,
         DES_max : 21 ,
         DES_min : 6 ,
         INT_max : 18 ,
         INT_min : 13 ,
         POD_max : 36 ,
         POD_min : 6 ,
         Movimiento : "7/11"
 }

 var Lloigor = {
         Nombre : "Lloigor" ,
         FUE_max : 48 ,
         FUE_min : 33 ,
         CON_max : 48 ,
         CON_min : 8 ,
         TAM_max : 8 ,
         TAM_min : 2 ,
         DES_max : 18 ,
         DES_min : 3 ,
         INT_max : 30 ,
         INT_min : 10 ,
         POD_max : 24 ,
         POD_min : 4 ,
         Movimiento : "7(Material)/3(Inmaterial)"
 }

 var Migo = {
         Nombre : "Mi-Go" ,
         FUE_max : 18 ,
         FUE_min : 3 ,
         CON_max : 18 ,
         CON_min : 3 ,
         TAM_max : 18 ,
         TAM_min : 3 ,
         DES_max : 18 ,
         DES_min : 4 ,
         INT_max : 18 ,
         INT_min : 8 ,
         POD_max : 18 ,
         POD_min : 8 ,
         Movimiento : "7/13 Volando"
 }

 var Perros_de_tindalos = {
         Nombre : "Perros de Tíndalos" ,
         FUE_max : 24 ,
         FUE_min : 9 ,
         CON_max : 38 ,
         CON_min : 23 ,
         TAM_max : 24 ,
         TAM_min : 9 ,
         DES_max : 18 ,
         DES_min : 3 ,
         INT_max : 30 ,
         INT_min : 5 ,
         POD_max : 42 ,
         POD_min : 7 ,
         Movimiento : "6/20 Volando"
 }

 var Polipo_volante = {
         Nombre : "Pólipos Volantes" ,
         FUE_max : 60 ,
         FUE_min : 40 ,
         CON_max : 30 ,
         CON_min : 20 ,
         TAM_max : 60 ,
         TAM_min : 40 ,
         DES_max : 18 ,
         DES_min : 8 ,
         INT_max : 24 ,
         INT_min : 4 ,
         POD_max : 24 ,
         POD_min : 9 ,
         Movimiento : "8/12 Volando"
 }

 var Profundo = {
         Nombre : "Profundos" ,
         FUE_max : 24 ,
         FUE_min : 4 ,
         CON_max : 18 ,
         CON_min : 3 ,
         TAM_max : 24 ,
         TAM_min : 9 ,
         DES_max : 18 ,
         DES_min : 3 ,
         INT_max : 18 ,
         INT_min : 8 ,
         POD_max : 18 ,
         POD_min : 3 ,
         Movimiento : "8/10 Nadando"
 }

 var Hibrido_profundo = {
         Nombre : "Híbrido Profundo" ,
         FUE_max : 18 ,
         FUE_min : 8 ,
         CON_max : 18 ,
         CON_min : 8 ,
         TAM_max : 18 ,
         TAM_min : 3 ,
         DES_max : 18 ,
         DES_min : 8 ,
         INT_max : 18 ,
         INT_min : 8 ,
         POD_max : 18 ,
         POD_min : 3 ,
         APA_max : 12 ,
         APA_min : 2 ,
         Movimiento : "8/8 Nadando"
 }

 var Reptante = {
         Nombre : "Reptantes" ,
         FUE_max : 12 ,
         FUE_min : 7 ,
         CON_max : 24 ,
         CON_min : 4 ,
         TAM_max : 18 ,
         TAM_min : 8 ,
         DES_max : 12 ,
         DES_min : 2 ,
         INT_max : 24 ,
         INT_min : 4 ,
         POD_max : 30 ,
         POD_min : 10 ,
         Movimiento : "8"
 }

 var Retoño_oscuro = {
         Nombre : "Retoños oscuros" ,
         FUE_max : 54 ,
         FUE_min : 34 ,
         CON_max : 24 ,
         CON_min : 9 ,
         TAM_max : 54 ,
         TAM_min : 34 ,
         DES_max : 24 ,
         DES_min : 9 ,
         INT_max : 24 ,
         INT_min : 4 ,
         POD_max : 30 ,
         POD_min : 5 ,
         Movimiento : "8"
 }

 var Semilla_estelar = {
         Nombre : "Semillas estelares de Cthulhu" ,
         FUE_max : 12 ,
         FUE_min : 2 ,
         CON_max : 18 ,
         CON_min : 3 ,
         TAM_max : 18 ,
         TAM_min : 3 ,
         DES_max : 18 ,
         DES_min : 3 ,
         INT_max : 36 ,
         INT_min : 6 ,
         POD_max : 36 ,
         POD_min : 6 ,
         Movimiento : "15/15 Nadando"
 }

 var Semilla_informe = {
         Nombre : "Semillas informe" ,
         FUE_max : 42 ,
         FUE_min : 7 ,
         CON_max : 18 ,
         CON_min : 3 ,
         TAM_max : 48 ,
         TAM_min : 13 ,
         DES_max : 24 ,
         DES_min : 14 ,
         INT_max : 18 ,
         INT_min : 8 ,
         POD_max : 18 ,
         POD_min : 3 ,
         Movimiento : "12"
 }

 var Ser_rata = {
         Nombre : "Seres Rata" ,
         FUE_max : 3 ,
         FUE_min : 1 ,
         CON_max : 12 ,
         CON_min : 2 ,
         TAM : 5 ,
         DES_max : 28 ,
         DES_min : 8 ,
         INT_max : 18 ,
         INT_min : 3 ,
         POD_max : 12 ,
         POD_min : 2 ,
         Movimiento : "9"
 }

 var Servidor_de_los_otros_dioses = {
         Nombre : "Servidor de los Otros Dioses" ,
         FUE_max : 24 ,
         FUE_min : 4 ,
         CON_max : 24 ,
         CON_min : 9 ,
         TAM_max : 30 ,
         TAM_min : 10 ,
         DES_max : 24 ,
         DES_min : 9 ,
         INT_max : 30 ,
         INT_min : 5 ,
         POD_max : 24 ,
         POD_min : 14 ,
         Movimiento : "7"
 }

 var Insectos_de_shaggai = {
         Nombre : "Insectos de Shaggai" ,
         FUE_max : 3 ,
         FUE_min : 1 ,
         CON_max : 3 ,
         CON_min : 1 ,
         TAM : 5 ,
         DES_max : 36 ,
         DES_min : 26 ,
         INT_max : 24 ,
         INT_min : 9 ,
         POD_max : 30 ,
         POD_min : 5 ,
         Movimiento : "4/20 Volando"
 }

 var Shantak = {
         Nombre : "Shantak" ,
         FUE_max : 44 ,
         FUE_min : 24 ,
         CON_max : 18 ,
         CON_min : 8 ,
         TAM_max : 60 ,
         TAM_min : 40 ,
         DES_max : 15 ,
         DES_min : 5 ,
         INT_max : 6 ,
         INT_min : 1 ,
         POD_max : 18 ,
         POD_min : 3 ,
         Movimiento : "6/18 Volando"
 }

 var Shoggoth = {
         Nombre : "Shoggoth" ,
         FUE_max : 108 ,
         FUE_min : 18 ,
         CON_max : 72 ,
         CON_min : 12 ,
         TAM_max : 144 ,
         TAM_min : 24 ,
         DES_max : 6 ,
         DES_min : 1 ,
         INT_max : 12 ,
         INT_min : 2 ,
         POD_max : 18 ,
         POD_min : 3 ,
         Movimiento : "6/18 Volando"
 }

 var Señor_de_los_shoggoths_humano = {
         Nombre : "Señor de los Shoggoths humano" ,
         FUE_max : 20 ,
         FUE_min : 10 ,
         CON_max : 18 ,
         CON_min : 8 ,
         TAM_max : 21 ,
         TAM_min : 6 ,
         DES_max : 18 ,
         DES_min : 3 ,
         INT_max : 18 ,
         INT_min : 8 ,
         POD_max : 21 ,
         POD_min : 6 ,
         APA_max : 9 ,
         APA_min : 4 ,
         EDU_max : 18 ,
         EDU_min : 3 ,
         Movimiento : "8 Caminando"
 }

 var Señor_de_los_shoggoths = {
         Nombre : "Señor de los Shoggoths" ,
         FUE_max : 34 ,
         FUE_min : 14 ,
         CON_max : 46 ,
         CON_min : 16 ,
         TAM_max : 19 ,
         TAM_min : 6 ,
         DES_max : 18 ,
         DES_min : 3 ,
         INT_max : 18 ,
         INT_min : 8 ,
         POD_max : 21 ,
         POD_min : 6 ,
         Movimiento : "8 Caminando/10 Rodando"
 }

 var Sirviente_Glaaki = {
         Nombre : "Sirviente de Gla'aki" ,
         FUE_max : 18 ,
         FUE_min : 3 ,
         CON_max : 18 ,
         CON_min : 3 ,
         TAM_max : 18 ,
         TAM_min : 8 ,
         DES_max : 6 ,
         DES_min : 1 ,
         INT_max : 18 ,
         INT_min : 8 ,
         POD_max : 18 ,
         POD_min : 3 ,
         Movimiento : "5"
 }

 var Tcho_tcho = {
         Nombre : "Tcho-Tcho" ,
         FUE_max : 18 ,
         FUE_min : 3 ,
         CON_max : 18 ,
         CON_min : 3 ,
         TAM_max : 14 ,
         TAM_min : 4 ,
         DES_max : 18 ,
         DES_min : 3 ,
         INT_max : 18 ,
         INT_min : 3 ,
         POD_max : 18 ,
         POD_min : 3 ,
         Movimiento : "8"
 }

 var Vagabundo_dimensiona = {
         Nombre : "Vagabundo Dimensional" ,
         FUE_max : 24 ,
         FUE_min : 14 ,
         CON_max : 24 ,
         CON_min : 9 ,
         TAM_max : 24 ,
         TAM_min : 14 ,
         DES_max : 18 ,
         DES_min : 3 ,
         INT_max : 12 ,
         INT_min : 2 ,
         POD_max : 18 ,
         POD_min : 3 ,
         Movimiento : "7"
 }

 var Vampiro_estelar = {
         Nombre : "Vampiro Estelar" ,
         FUE_max : 36 ,
         FUE_min : 16 ,
         CON_max : 18 ,
         CON_min : 8 ,
         TAM_max : 36 ,
         TAM_min : 16 ,
         DES_max : 12 ,
         DES_min : 7 ,
         INT_max : 18 ,
         INT_min : 3 ,
         POD_max : 18 ,
         POD_min : 13 ,
         Movimiento : "6/9 Volando"
 }

 var Vampiro_de_fuego = {
         Nombre : "Vampiro de Fuego" ,
         CON_max : 12 ,
         CON_min : 2 ,
         TAM : 1 ,
         DES_max : 24 ,
         DES_min : 9 ,
         INT_max : 18 ,
         INT_min : 3 ,
         POD_max : 18 ,
         POD_min : 8 ,
         Movimiento : "11 Volando"
 }

 var Yithiano = {
         Nombre : "Yithiano" ,
         FUE_max : 72 ,
         FUE_min : 12 ,
         CON_max : 36 ,
         CON_min : 16 ,
         TAM_max : 66 ,
         TAM_min : 44 ,
         DES_max : 15 ,
         DES_min : 5 ,
         INT_max : 30 ,
         INT_min : 10 ,
         POD_max : 18 ,
         POD_min : 8 ,
         Movimiento : "7"
 }




function Crear_criatura(){

        var Poder_especial_criatura = "No";

        var Apariencia_criatura = 0;

        var Educacion_criatura = 0;

        var Codigo_criatura = parseInt(Criatura.value);

        var Poder_especial_humano = "No";

        //

        //if de calculos para hechizos

        var Probabilidad_hechizo_criatura = Porcentual;


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

         var Constitucion_criatura = 0;
         
         var Destresa_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.DES_max - Color_surgido_del_espacio.DES_min + 1 ) + Color_surgido_del_espacio.DES_min) * 5;
         
         var Inteligencia_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.INT_max - Color_surgido_del_espacio.INT_min + 1 ) + Color_surgido_del_espacio.INT_min) * 5;
         
         var Poder_criatura = Math.floor(Math.random() * (Color_surgido_del_espacio.POD_max - Color_surgido_del_espacio.POD_min + 1 ) + Color_surgido_del_espacio.POD_min) * 5;

         var Tamaño_criatura = Poder_criatura;
         
         var Movimiento_criatura = Color_surgido_del_espacio.Movimiento;

        }

        
        else if (Codigo_criatura === 6) {

                var Nombre_criatura = Dagon_e_hidra.Nombre;
       
                var Fuerza_criatura = Dagon_e_hidra.FUE_max;
       
                var Constitucion_criatura = Dagon_e_hidra.CON_max;
       
                var Tamaño_criatura = Dagon_e_hidra.TAM_max;
       
                var Destresa_criatura = Dagon_e_hidra.DES_max;
       
                var Inteligencia_criatura = Dagon_e_hidra.INT_max;
       
                var Poder_criatura = Dagon_e_hidra.POD_max;
       
                var Movimiento_criatura = Dagon_e_hidra.Movimiento;
       
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

                var Nombre_criatura = Ghast.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Ghast.FUE_max - Ghast.FUE_min + 1 ) + Ghast.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Ghast.CON_max - Ghast.CON_min + 1 ) + Ghast.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Ghast.TAM_max - Ghast.TAM_min + 1 ) + Ghast.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Ghast.DES_max - Ghast.DES_min + 1 ) + Ghast.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Ghast.INT_max - Ghast.INT_min + 1 ) + Ghast.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Ghast.POD_max - Ghast.POD_min + 1 ) + Ghast.POD_min) * 5;
       
                var Movimiento_criatura = Ghast.Movimiento;
       
               }
               
        else if (Codigo_criatura === 9) {

                var Nombre_criatura = Gnoph_keh.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Gnoph_keh.FUE_max - Gnoph_keh.FUE_min + 1 ) + Gnoph_keh.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Gnoph_keh.CON_max - Gnoph_keh.CON_min + 1 ) + Gnoph_keh.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Gnoph_keh.TAM_max - Gnoph_keh.TAM_min + 1 ) + Gnoph_keh.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Gnoph_keh.DES_max - Gnoph_keh.DES_min + 1 ) + Gnoph_keh.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Gnoph_keh.INT_max - Gnoph_keh.INT_min + 1 ) + Gnoph_keh.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Gnoph_keh.POD_max - Gnoph_keh.POD_min + 1 ) + Gnoph_keh.POD_min) * 5;
       
                var Movimiento_criatura = Gnoph_keh.Movimiento;
       
               }
               
        else if (Codigo_criatura === 10) {

                var Nombre_criatura = Gul.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Gul.FUE_max - Gul.FUE_min + 1 ) + Gul.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Gul.CON_max - Gul.CON_min + 1 ) + Gul.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Gul.TAM_max - Gul.TAM_min + 1 ) + Gul.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Gul.DES_max - Gul.DES_min + 1 ) + Gul.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Gul.INT_max - Gul.INT_min + 1 ) + Gul.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Gul.POD_max - Gul.POD_min + 1 ) + Gul.POD_min) * 5;
       
                var Movimiento_criatura = Gul.Movimiento;
       
               }
               
        else if (Codigo_criatura === 11) {

                var Nombre_criatura = Habitante_de_las_arenas.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Habitante_de_las_arenas.FUE_max - Habitante_de_las_arenas.FUE_min + 1 ) + Habitante_de_las_arenas.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Habitante_de_las_arenas.CON_max - Habitante_de_las_arenas.CON_min + 1 ) + Habitante_de_las_arenas.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Habitante_de_las_arenas.TAM_max - Habitante_de_las_arenas.TAM_min + 1 ) + Habitante_de_las_arenas.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Habitante_de_las_arenas.DES_max - Habitante_de_las_arenas.DES_min + 1 ) + Habitante_de_las_arenas.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Habitante_de_las_arenas.INT_max - Habitante_de_las_arenas.INT_min + 1 ) + Habitante_de_las_arenas.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Habitante_de_las_arenas.POD_max - Habitante_de_las_arenas.POD_min + 1 ) + Habitante_de_las_arenas.POD_min) * 5;
       
                var Movimiento_criatura = Habitante_de_las_arenas.Movimiento;
       
               }
               
        else if (Codigo_criatura === 12) {

                var Nombre_criatura = Hibrido_profundo.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Hibrido_profundo.FUE_max - Hibrido_profundo.FUE_min + 1 ) + Hibrido_profundo.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Hibrido_profundo.CON_max - Hibrido_profundo.CON_min + 1 ) + Hibrido_profundo.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Hibrido_profundo.TAM_max - Hibrido_profundo.TAM_min + 1 ) + Hibrido_profundo.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Hibrido_profundo.DES_max - Hibrido_profundo.DES_min + 1 ) + Hibrido_profundo.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Hibrido_profundo.INT_max - Hibrido_profundo.INT_min + 1 ) + Hibrido_profundo.INT_min) * 5;
       
                var Apariencia_criatura = Math.floor(Math.random() * (Hibrido_profundo.APA_max - Hibrido_profundo.APA_min + 1 ) + Hibrido_profundo.APA_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Hibrido_profundo.POD_max - Hibrido_profundo.POD_min + 1 ) + Hibrido_profundo.POD_min) * 5;
       
                var Movimiento_criatura = Hibrido_profundo.Movimiento;
       
               }
               
        else if (Codigo_criatura === 13) {

                var Nombre_criatura = Hombre_serpiente.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Hombre_serpiente.FUE_max - Hombre_serpiente.FUE_min + 1 ) + Hombre_serpiente.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Hombre_serpiente.CON_max - Hombre_serpiente.CON_min + 1 ) + Hombre_serpiente.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Hombre_serpiente.TAM_max - Hombre_serpiente.TAM_min + 1 ) + Hombre_serpiente.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Hombre_serpiente.DES_max - Hombre_serpiente.DES_min + 1 ) + Hombre_serpiente.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Hombre_serpiente.INT_max - Hombre_serpiente.INT_min + 1 ) + Hombre_serpiente.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Hombre_serpiente.POD_max - Hombre_serpiente.POD_min + 1 ) + Hombre_serpiente.POD_min) * 5;
       
                var Movimiento_criatura = Hombre_serpiente.Movimiento;
       
               }
               
        else if (Codigo_criatura === 14) {

                var Nombre_criatura = Horrendo_cazador.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Horrendo_cazador.FUE_max - Horrendo_cazador.FUE_min + 1 ) + Horrendo_cazador.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Horrendo_cazador.CON_max - Horrendo_cazador.CON_min + 1 ) + Horrendo_cazador.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Horrendo_cazador.TAM_max - Horrendo_cazador.TAM_min + 1 ) + Horrendo_cazador.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Horrendo_cazador.DES_max - Horrendo_cazador.DES_min + 1 ) + Horrendo_cazador.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Horrendo_cazador.INT_max - Horrendo_cazador.INT_min + 1 ) + Horrendo_cazador.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Horrendo_cazador.POD_max - Horrendo_cazador.POD_min + 1 ) + Horrendo_cazador.POD_min) * 5;
       
                var Movimiento_criatura = Horrendo_cazador.Movimiento;
       
               }

               else if (Codigo_criatura === 15) {

                var Nombre_criatura = El_horror_en_la_tinta.Nombre;
       
                var Fuerza_criatura = El_horror_en_la_tinta.FUE_max
       
                var Constitucion_criatura = El_horror_en_la_tinta.CON_max
       
                var Tamaño_criatura = El_horror_en_la_tinta.TAM_max
       
                var Destresa_criatura = El_horror_en_la_tinta.DES_max
       
                var Inteligencia_criatura = El_horror_en_la_tinta.INT_max
       
                var Poder_criatura = El_horror_en_la_tinta.POD_max
       
                var Movimiento_criatura = El_horror_en_la_tinta.Movimiento;
       
               }
               
        else if (Codigo_criatura === 16) {

                var Nombre_criatura = Insectos_de_shaggai.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Insectos_de_shaggai.FUE_max - Insectos_de_shaggai.FUE_min + 1 ) + Insectos_de_shaggai.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Insectos_de_shaggai.CON_max - Insectos_de_shaggai.CON_min + 1 ) + Insectos_de_shaggai.CON_min) * 5;
       
                var Tamaño_criatura = Insectos_de_shaggai.TAM;
       
                var Destresa_criatura = Math.floor(Math.random() * (Insectos_de_shaggai.DES_max - Insectos_de_shaggai.DES_min + 1 ) + Insectos_de_shaggai.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Insectos_de_shaggai.INT_max - Insectos_de_shaggai.INT_min + 1 ) + Insectos_de_shaggai.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Insectos_de_shaggai.POD_max - Insectos_de_shaggai.POD_min + 1 ) + Insectos_de_shaggai.POD_min) * 5;
       
                var Movimiento_criatura = Insectos_de_shaggai.Movimiento;
       
               }
               
        else if (Codigo_criatura === 17) {

                var Nombre_criatura = Lloigor.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Lloigor.FUE_max - Lloigor.FUE_min + 1 ) + Lloigor.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Lloigor.CON_max - Lloigor.CON_min + 1 ) + Lloigor.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Lloigor.TAM_max - Lloigor.TAM_min + 1 ) + Lloigor.TAM_min) * 50;
       
                var Destresa_criatura = Math.floor(Math.random() * (Lloigor.DES_max - Lloigor.DES_min + 1 ) + Lloigor.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Lloigor.INT_max - Lloigor.INT_min + 1 ) + Lloigor.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Lloigor.POD_max - Lloigor.POD_min + 1 ) + Lloigor.POD_min) * 5;
       
                var Movimiento_criatura = Lloigor.Movimiento;
       
               }
               
        else if (Codigo_criatura === 18) {

                var Nombre_criatura = Migo.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Migo.FUE_max - Migo.FUE_min + 1 ) + Migo.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Migo.CON_max - Migo.CON_min + 1 ) + Migo.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Migo.TAM_max - Migo.TAM_min + 1 ) + Migo.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Migo.DES_max - Migo.DES_min + 1 ) + Migo.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Migo.INT_max - Migo.INT_min + 1 ) + Migo.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Migo.POD_max - Migo.POD_min + 1 ) + Migo.POD_min) * 5;
       
                var Movimiento_criatura = Migo.Movimiento;
       
               }
               
        else if (Codigo_criatura === 19) {

                var Nombre_criatura = Perros_de_tindalos.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Perros_de_tindalos.FUE_max - Perros_de_tindalos.FUE_min + 1 ) + Perros_de_tindalos.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Perros_de_tindalos.CON_max - Perros_de_tindalos.CON_min + 1 ) + Perros_de_tindalos.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Perros_de_tindalos.TAM_max - Perros_de_tindalos.TAM_min + 1 ) + Perros_de_tindalos.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Perros_de_tindalos.DES_max - Perros_de_tindalos.DES_min + 1 ) + Perros_de_tindalos.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Perros_de_tindalos.INT_max - Perros_de_tindalos.INT_min + 1 ) + Perros_de_tindalos.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Perros_de_tindalos.POD_max - Perros_de_tindalos.POD_min + 1 ) + Perros_de_tindalos.POD_min) * 5;
       
                var Movimiento_criatura = Perros_de_tindalos.Movimiento;
       
               }
               
        else if (Codigo_criatura === 20) {

                var Nombre_criatura = Polipo_volante.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Polipo_volante.FUE_max - Polipo_volante.FUE_min + 1 ) + Polipo_volante.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Polipo_volante.CON_max - Polipo_volante.CON_min + 1 ) + Polipo_volante.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Polipo_volante.TAM_max - Polipo_volante.TAM_min + 1 ) + Polipo_volante.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Polipo_volante.DES_max - Polipo_volante.DES_min + 1 ) + Polipo_volante.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Polipo_volante.INT_max - Polipo_volante.INT_min + 1 ) + Polipo_volante.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Polipo_volante.POD_max - Polipo_volante.POD_min + 1 ) + Polipo_volante.POD_min) * 5;
       
                var Movimiento_criatura = Polipo_volante.Movimiento;
       
               }
               
        else if (Codigo_criatura === 21) {

                var Nombre_criatura = Profundo.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Profundo.FUE_max - Profundo.FUE_min + 1 ) + Profundo.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Profundo.CON_max - Profundo.CON_min + 1 ) + Profundo.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Profundo.TAM_max - Profundo.TAM_min + 1 ) + Profundo.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Profundo.DES_max - Profundo.DES_min + 1 ) + Profundo.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Profundo.INT_max - Profundo.INT_min + 1 ) + Profundo.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Profundo.POD_max - Profundo.POD_min + 1 ) + Profundo.POD_min) * 5;
       
                var Movimiento_criatura = Profundo.Movimiento;
       
               }
               
        else if (Codigo_criatura === 22) {

                var Nombre_criatura = Reptante.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Reptante.FUE_max - Reptante.FUE_min + 1 ) + Reptante.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Reptante.CON_max - Reptante.CON_min + 1 ) + Reptante.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Reptante.TAM_max - Reptante.TAM_min + 1 ) + Reptante.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Reptante.DES_max - Reptante.DES_min + 1 ) + Reptante.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Reptante.INT_max - Reptante.INT_min + 1 ) + Reptante.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Reptante.POD_max - Reptante.POD_min + 1 ) + Reptante.POD_min) * 5;
       
                var Movimiento_criatura = Reptante.Movimiento;
       
               }
               
        else if (Codigo_criatura === 23) {

                var Nombre_criatura = Retoño_oscuro.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Retoño_oscuro.FUE_max - Retoño_oscuro.FUE_min + 1 ) + Retoño_oscuro.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Retoño_oscuro.CON_max - Retoño_oscuro.CON_min + 1 ) + Retoño_oscuro.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Retoño_oscuro.TAM_max - Retoño_oscuro.TAM_min + 1 ) + Retoño_oscuro.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Retoño_oscuro.DES_max - Retoño_oscuro.DES_min + 1 ) + Retoño_oscuro.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Retoño_oscuro.INT_max - Retoño_oscuro.INT_min + 1 ) + Retoño_oscuro.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Retoño_oscuro.POD_max - Retoño_oscuro.POD_min + 1 ) + Retoño_oscuro.POD_min) * 5;
       
                var Movimiento_criatura = Retoño_oscuro.Movimiento;
       
               }
               
        else if (Codigo_criatura === 24) {

                var Nombre_criatura = Semilla_estelar.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Semilla_estelar.FUE_max - Semilla_estelar.FUE_min + 1 ) + Semilla_estelar.FUE_min) * 50;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Semilla_estelar.CON_max - Semilla_estelar.CON_min + 1 ) + Semilla_estelar.CON_min) * 25;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Semilla_estelar.TAM_max - Semilla_estelar.TAM_min + 1 ) + Semilla_estelar.TAM_min) * 50;
       
                var Destresa_criatura = Math.floor(Math.random() * (Semilla_estelar.DES_max - Semilla_estelar.DES_min + 1 ) + Semilla_estelar.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Semilla_estelar.INT_max - Semilla_estelar.INT_min + 1 ) + Semilla_estelar.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Semilla_estelar.POD_max - Semilla_estelar.POD_min + 1 ) + Semilla_estelar.POD_min) * 5;
       
                var Movimiento_criatura = Semilla_estelar.Movimiento;
       
               }
               
        else if (Codigo_criatura === 25) {

                var Nombre_criatura = Semilla_informe.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Semilla_informe.FUE_max - Semilla_informe.FUE_min + 1 ) + Semilla_informe.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Semilla_informe.CON_max - Semilla_informe.CON_min + 1 ) + Semilla_informe.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Semilla_informe.TAM_max - Semilla_informe.TAM_min + 1 ) + Semilla_informe.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Semilla_informe.DES_max - Semilla_informe.DES_min + 1 ) + Semilla_informe.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Semilla_informe.INT_max - Semilla_informe.INT_min + 1 ) + Semilla_informe.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Semilla_informe.POD_max - Semilla_informe.POD_min + 1 ) + Semilla_informe.POD_min) * 5;
       
                var Movimiento_criatura = Semilla_informe.Movimiento;
       
               }
               
        else if (Codigo_criatura === 26) {

                //forma humana

                var Nombre_humano = Math.floor(Math.random() * Firstname_Man.length);
       
                var Fuerza_humano = Math.floor(Math.random() * (Señor_de_los_shoggoths_humano.FUE_max - Señor_de_los_shoggoths_humano.FUE_min + 1 ) + Señor_de_los_shoggoths_humano.FUE_min) * 5;
       
                var Constitucion_humano = Math.floor(Math.random() * (Señor_de_los_shoggoths_humano.CON_max - Señor_de_los_shoggoths_humano.CON_min + 1 ) + Señor_de_los_shoggoths_humano.CON_min) * 5;
       
                var Tamaño_humano = Math.floor(Math.random() * (Señor_de_los_shoggoths_humano.TAM_max - Señor_de_los_shoggoths_humano.TAM_min + 1 ) + Señor_de_los_shoggoths_humano.TAM_min) * 5;
       
                var Destresa_humano = Math.floor(Math.random() * (Señor_de_los_shoggoths_humano.DES_max - Señor_de_los_shoggoths_humano.DES_min + 1 ) + Señor_de_los_shoggoths_humano.DES_min) * 5;
       
                var Inteligencia_humano = Math.floor(Math.random() * (Señor_de_los_shoggoths_humano.INT_max - Señor_de_los_shoggoths_humano.INT_min + 1 ) + Señor_de_los_shoggoths_humano.INT_min) * 5;
       
                var Poder_humano = Math.floor(Math.random() * (Señor_de_los_shoggoths_humano.POD_max - Señor_de_los_shoggoths_humano.POD_min + 1 ) + Señor_de_los_shoggoths_humano.POD_min) * 5;
       
                var Apariencia_humano = Math.floor(Math.random() * (Señor_de_los_shoggoths_humano.APA_max - Señor_de_los_shoggoths_humano.APA_min + 1 ) + Señor_de_los_shoggoths_humano.APA_min) * 5;
       
                var Educacion_humano = Math.floor(Math.random() * (Señor_de_los_shoggoths_humano.EDU_max - Señor_de_los_shoggoths_humano.EDU_min + 1 ) + Señor_de_los_shoggoths_humano.EDU_min) * 5;

                var  Vida_humano  = Math.floor((Tamaño_humano+Constitucion_humano)/10);
        
                var Magia_humano = (Poder_humano/5);
       
                var Movimiento_humano = Señor_de_los_shoggoths_humano.Movimiento;

                var Corpulencia = Fuerza_humano + Tamaño_humano;

                if (Corpulencia < 85){

                        var Corpulencia_humano = -1
                        var Daño_extra_humano = -1
                }

                else if (Corpulencia < 125){

                        var Corpulencia_humano = 0
                        var Daño_extra_humano = 0
                }

                else if (Corpulencia < 165){

                        var Corpulencia_humano = 1
                        var Daño_extra_humano = "1D4"
                }

                else if (Corpulencia < 205){

                        var Corpulencia_humano = 2
                        var Daño_extra_humano = "1D6"
                }

                else {

                        var Corpulencia_humano = 3
                        var Daño_extra_humano = "2D6"
                }


                // forma real

                var Nombre_criatura = Señor_de_los_shoggoths.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Señor_de_los_shoggoths.FUE_max - Señor_de_los_shoggoths.FUE_min + 1 ) + Señor_de_los_shoggoths.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Señor_de_los_shoggoths.CON_max - Señor_de_los_shoggoths.CON_min + 1 ) + Señor_de_los_shoggoths.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Señor_de_los_shoggoths.TAM_max - Señor_de_los_shoggoths.TAM_min + 1 ) + Señor_de_los_shoggoths.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Señor_de_los_shoggoths.DES_max - Señor_de_los_shoggoths.DES_min + 1 ) + Señor_de_los_shoggoths.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Señor_de_los_shoggoths.INT_max - Señor_de_los_shoggoths.INT_min + 1 ) + Señor_de_los_shoggoths.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Señor_de_los_shoggoths.POD_max - Señor_de_los_shoggoths.POD_min + 1 ) + Señor_de_los_shoggoths.POD_min) * 5;
       
                var Movimiento_criatura = Señor_de_los_shoggoths.Movimiento;
       
               }
               
        
        else if (Codigo_criatura === 27) {

                var Nombre_criatura = Ser_rata.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Ser_rata.FUE_max - Ser_rata.FUE_min + 1 ) + Ser_rata.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Ser_rata.CON_max - Ser_rata.CON_min + 1 ) + Ser_rata.CON_min) * 5;
       
                var Tamaño_criatura = Ser_rata.TAM;
       
                var Destresa_criatura = Math.floor(Math.random() * (Ser_rata.DES_max - Ser_rata.DES_min + 1 ) + Ser_rata.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Ser_rata.INT_max - Ser_rata.INT_min + 1 ) + Ser_rata.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Ser_rata.POD_max - Ser_rata.POD_min + 1 ) + Ser_rata.POD_min) * 5;
       
                var Movimiento_criatura = Ser_rata.Movimiento;
       
               }
               
        else if (Codigo_criatura === 28) {

                var Nombre_criatura = Servidor_de_los_otros_dioses.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Servidor_de_los_otros_dioses.FUE_max - Servidor_de_los_otros_dioses.FUE_min + 1 ) + Servidor_de_los_otros_dioses.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Servidor_de_los_otros_dioses.CON_max - Servidor_de_los_otros_dioses.CON_min + 1 ) + Servidor_de_los_otros_dioses.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Servidor_de_los_otros_dioses.TAM_max - Servidor_de_los_otros_dioses.TAM_min + 1 ) + Servidor_de_los_otros_dioses.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Servidor_de_los_otros_dioses.DES_max - Servidor_de_los_otros_dioses.DES_min + 1 ) + Servidor_de_los_otros_dioses.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Servidor_de_los_otros_dioses.INT_max - Servidor_de_los_otros_dioses.INT_min + 1 ) + Servidor_de_los_otros_dioses.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Servidor_de_los_otros_dioses.POD_max - Servidor_de_los_otros_dioses.POD_min + 1 ) + Servidor_de_los_otros_dioses.POD_min) * 5;
       
                var Movimiento_criatura = Servidor_de_los_otros_dioses.Movimiento;
       
               }
               
        else if (Codigo_criatura === 29) {

                var Nombre_criatura = Shantak.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Shantak.FUE_max - Shantak.FUE_min + 1 ) + Shantak.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Shantak.CON_max - Shantak.CON_min + 1 ) + Shantak.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Shantak.TAM_max - Shantak.TAM_min + 1 ) + Shantak.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Shantak.DES_max - Shantak.DES_min + 1 ) + Shantak.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Shantak.INT_max - Shantak.INT_min + 1 ) + Shantak.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Shantak.POD_max - Shantak.POD_min + 1 ) + Shantak.POD_min) * 5;
       
                var Movimiento_criatura = Shantak.Movimiento;
       
               }
               
        else if (Codigo_criatura === 30) {

                var Nombre_criatura = Shoggoth.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Shoggoth.FUE_max - Shoggoth.FUE_min + 1 ) + Shoggoth.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Shoggoth.CON_max - Shoggoth.CON_min + 1 ) + Shoggoth.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Shoggoth.TAM_max - Shoggoth.TAM_min + 1 ) + Shoggoth.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Shoggoth.DES_max - Shoggoth.DES_min + 1 ) + Shoggoth.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Shoggoth.INT_max - Shoggoth.INT_min + 1 ) + Shoggoth.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Shoggoth.POD_max - Shoggoth.POD_min + 1 ) + Shoggoth.POD_min) * 5;
       
                var Movimiento_criatura = Shoggoth.Movimiento;
       
               }
               
        else if (Codigo_criatura === 31) {

                var Nombre_criatura = Sirviente_Glaaki.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Sirviente_Glaaki.FUE_max - Sirviente_Glaaki.FUE_min + 1 ) + Sirviente_Glaaki.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Sirviente_Glaaki.CON_max - Sirviente_Glaaki.CON_min + 1 ) + Sirviente_Glaaki.CON_min) * 10;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Sirviente_Glaaki.TAM_max - Sirviente_Glaaki.TAM_min + 1 ) + Sirviente_Glaaki.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Sirviente_Glaaki.DES_max - Sirviente_Glaaki.DES_min + 1 ) + Sirviente_Glaaki.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Sirviente_Glaaki.INT_max - Sirviente_Glaaki.INT_min + 1 ) + Sirviente_Glaaki.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Sirviente_Glaaki.POD_max - Sirviente_Glaaki.POD_min + 1 ) + Sirviente_Glaaki.POD_min) * 5;
       
                var Movimiento_criatura = Sirviente_Glaaki.Movimiento;
       
               }
               
        else if (Codigo_criatura === 32) {

                var Nombre_criatura = Tcho_tcho.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Tcho_tcho.FUE_max - Tcho_tcho.FUE_min + 1 ) + Tcho_tcho.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Tcho_tcho.CON_max - Tcho_tcho.CON_min + 1 ) + Tcho_tcho.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Tcho_tcho.TAM_max - Tcho_tcho.TAM_min + 1 ) + Tcho_tcho.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Tcho_tcho.DES_max - Tcho_tcho.DES_min + 1 ) + Tcho_tcho.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Tcho_tcho.INT_max - Tcho_tcho.INT_min + 1 ) + Tcho_tcho.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Tcho_tcho.POD_max - Tcho_tcho.POD_min + 1 ) + Tcho_tcho.POD_min) * 5;
       
                var Movimiento_criatura = Tcho_tcho.Movimiento;
       
               }
               
        else if (Codigo_criatura === 33) {

                var Nombre_criatura = Vampiro_de_fuego.Nombre;
       
                var Fuerza_criatura = 0;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Vampiro_de_fuego.CON_max - Vampiro_de_fuego.CON_min + 1 ) + Vampiro_de_fuego.CON_min) * 5;
       
                var Tamaño_criatura = Vampiro_de_fuego.TAM;
       
                var Destresa_criatura = Math.floor(Math.random() * (Vampiro_de_fuego.DES_max - Vampiro_de_fuego.DES_min + 1 ) + Vampiro_de_fuego.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Vampiro_de_fuego.INT_max - Vampiro_de_fuego.INT_min + 1 ) + Vampiro_de_fuego.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Vampiro_de_fuego.POD_max - Vampiro_de_fuego.POD_min + 1 ) + Vampiro_de_fuego.POD_min) * 5;
       
                var Movimiento_criatura = Vampiro_de_fuego.Movimiento;
       
               }
               
        else if (Codigo_criatura === 34) {

                var Nombre_criatura = Vampiro_estelar.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Vampiro_estelar.FUE_max - Vampiro_estelar.FUE_min + 1 ) + Vampiro_estelar.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Vampiro_estelar.CON_max - Vampiro_estelar.CON_min + 1 ) + Vampiro_estelar.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Vampiro_estelar.TAM_max - Vampiro_estelar.TAM_min + 1 ) + Vampiro_estelar.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Vampiro_estelar.DES_max - Vampiro_estelar.DES_min + 1 ) + Vampiro_estelar.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Vampiro_estelar.INT_max - Vampiro_estelar.INT_min + 1 ) + Vampiro_estelar.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Vampiro_estelar.POD_max - Vampiro_estelar.POD_min + 1 ) + Vampiro_estelar.POD_min) * 5;
       
                var Movimiento_criatura = Vampiro_estelar.Movimiento;
       
               }
               
        else if (Codigo_criatura === 35) {

                var Nombre_criatura = Yithiano.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Yithiano.FUE_max - Yithiano.FUE_min + 1 ) + Yithiano.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Yithiano.CON_max - Yithiano.CON_min + 1 ) + Yithiano.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Yithiano.TAM_max - Yithiano.TAM_min + 1 ) + Yithiano.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Yithiano.DES_max - Yithiano.DES_min + 1 ) + Yithiano.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Yithiano.INT_max - Yithiano.INT_min + 1 ) + Yithiano.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Yithiano.POD_max - Yithiano.POD_min + 1 ) + Yithiano.POD_min) * 5;
       
                var Movimiento_criatura = Yithiano.Movimiento;
       
               }
                
         

        // if de Corpulencia 

        var Corpulencia = Fuerza_criatura + Tamaño_criatura;
        
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

        var Magia_criatura = (Poder_criatura/5);






        // Se Genera en el html lo que se pida
        
        if ( Codigo_criatura === 26 ) {

                document.getElementById("result").innerHTML =
                "<br><h3> Nombre : "+Firstname_Man[Nombre_humano]+"</h3>"+
                "<h3><br>Stats</h3>"+
                "<ul><li> Fue : "+Fuerza_humano+
                "<br><li> Con : "+Constitucion_humano+
                "<br><li> Pod : "+Poder_humano+
                "<br><li> Des : "+Destresa_humano+
                "<br><li> Tam : "+Tamaño_humano+
                "<br><li> Int : "+Inteligencia_humano+
                "<br><li> PV  : "+Vida_humano+
                "<br><li> APA  : "+Apariencia_humano+
                "<br><li> EDU  : "+Educacion_humano+
                "<br><li>"+"Corpulencia media: "+Corpulencia_humano+
                "<br><li>"+"Bonificación al daño media: "+Daño_extra_humano+
                "<br><li>"+"Media de puntos de magia: "+Magia_humano+
                "<br><li>"+"Movimiento: "+Movimiento_humano+
                "<br><li>"+"Poder Especial: "+Poder_especial_humano+"</ul><br><br>"+

                "<br><h3> Nombre : "+Nombre_criatura+"</h3>"+
                "<h3><br>Stats</h3>"+
                "<ul><li> Fue : "+Fuerza_criatura+
                "<br><li> Con : "+Constitucion_criatura+
                "<br><li> Pod : "+Poder_criatura+
                "<br><li> Des : "+Destresa_criatura+
                "<br><li> Tam : "+Tamaño_criatura+
                "<br><li> Int : "+Inteligencia_criatura+
                "<br><li> PV  : "+Vida_criatura+
                "<br><li> APA  : "+Apariencia_criatura+
                "<br><li> EDU  : "+Educacion_criatura+
                "<br><li>"+"Corpulencia media: "+Corpulencia_criatura+
                "<br><li>"+"Bonificación al daño media: "+Daño_extra_criatura+
                "<br><li>"+"Media de puntos de magia: "+Magia_criatura+
                "<br><li>"+"Movimiento: "+Movimiento_criatura+
                "<br><li>"+"Poder Especial: "+Poder_especial_criatura
        }

        else if (Codigo_criatura === 12) {

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
                "<br><li> APA  : "+Apariencia_criatura+
                "<br><li>"+"Corpulencia media: "+Corpulencia_criatura+
                "<br><li>"+"Bonificación al daño media: "+Daño_extra_criatura+
                "<br><li>"+"Media de puntos de magia: "+Magia_criatura+
                "<br><li>"+"Movimiento: "+Movimiento_criatura+
                "<br><li>"+"Poder Especial: "+Poder_especial_criatura
        } 

        else {
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
        

}