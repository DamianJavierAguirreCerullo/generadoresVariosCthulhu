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

var Grimorio_Cthulhu = ["Ajar un miembro","Aliento de las profundidades","Atormentar","Bendecir hoja","Cancion de Hastur","Cántico de Thoth","Crear barrera de Naach-Tith","Crear niebla de R'lyeh","Crear zombie","Cruz ansada de Prinn","Descomposición verde","Destierro de Yde Etad","Dividir el ka","Dominar","Encantar cuchillo","Encantar daga sacrificial","Encantar libro","Explosion mental","Fabrica de hidromiel espacial","Fundir carne","Garra de Nyogtha","Hechizo mortal","Imitar apariencia","Inducir el pánico","Inmoviliar a una victima","Intercambio de mentes","Mal de ojo","Maldición de Azathoth","Maldición del pellejo pútrido","Nublar la memoria","Ola de olvido","Palabras poderosas","Polvo de Ibn-Ghazi","Polvo de Suleimán","Crear portal","Caja Portal","Encontrar portal","Portal temporal","Proteccion","Protección corporal","Provocar/Curar la ceguera","Puño de Yog-Sothoth","Resurrección","Signo rojo de Shudde M'ell","Signo de Voorish","Simbolo arcano","Sugestión mental","Trasformación corporal de Gorgoroth","Trasferencia de mente",];

var Grimorio_Aquelarre_blanca_1 = ["Alivio del Esclavo","Aliento de Salamandra","Amuleto contra la Ponzoña","Amuleto del Fullero","Amuleto del Fullero","Arma Inquebrantable","Bebedizo de Sueños","Bendición de San Nuño","Brazalete Solar","Dolores de Parto","Leche de Sapiencia","Saber de Partera","Vitriolo Salvaje",]

var Grimorio_Aquelarre_negra_1 = ["Amor","Atadura del Deseo","Cerradura Maldita","Discordia","Lámpara de Búsqueda","Lujuria","Polvos de Seducción",]

var Grimorio_Aquelarre_infernal_1 = ["Maldición"]

var Grimorio_Aquelarre_blanca_2 = ["Bálsamo de Curación","Bendición de Pepin","Don de Tritón","Expulsar Enfermedades","Filtro de Inteligencia","Guarda contra Embrujos","Infusión de Serenidad","Intuir la Magia","Licor Sedante","Mal de Ojo","Mal del Tullido","Maldición de Caín","Manto de Salamandra","Medalla de Virilidad","Ojos de Lobo","Polvos de Hechicería","Polvos del Mentiroso","Revocar Maldición","Sueño Reparador","Tinta Prodigiosa","Virtud de Doncella"]

var Grimorio_Aquelarre_negra_2 = ["Atadura de Eunuco","Dominación","Estupidez","Morada Maldita","Sangre Negra","Subyugación",]

var Grimorio_Aquelarre_infernal_2 = ["Don de Surgat","Maldición de Ashavero"]

var Grimorio_Aquelarre_blanca_3 = ["Aceite de Grandeza","Aceite de Hechicerías","Alivio del Rabioso","Amansar Fieras","Arma Invicta","Bardas Encantadas","Clarividencia","Cuerda de Cridavents","Destilación de Quintaesencias","Don de Cipriano","Falsas Visiones","Guerra","Incienso de Cópula","Inquisición","Lengua de Babel","Mensaje Onírico","Piedra de Sanación","Polvos Elementales","Prodigio de Amenón","Varita de Búsqueda","Velo de la Muerte","Visión de Futuro","",""]

var Grimorio_Aquelarre_negra_3 = ["Deseo Carnal","Filtro de Olvido","Furia","Rostro de Ladrón","Vela de Temor","Veneno de Escorpión"]

var Grimorio_Aquelarre_infernal_3 = ["Cadena de Silcharde","Filtro Amoroso","Oración Oscura"]

var Grimorio_Aquelarre_blanca_4 = ["Amuleto","Asesino de Fantasmas","Bendición de Hada","Bendición de Jonás","Bolsa de Duendes","Corazón de León","Cruz de Caravaca","Danza","Encanto del Viajero","Esencias de Éter","Hechizo Rojo","Invocación de Ánimas","Invocar al Fenicio","Manto de Sombras","Piel de Lobo","Purificar Ponzoñas","Rama de los Deseos","Ritual del Clavo","Sangre de Dragón","Sombras Fantasmales","Talismán de Protección","Transmutación de Metales","Ungüento de Bruja","Vela de Difuntos","Vino de la Verdad"]

var Grimorio_Aquelarre_negra_4 = ["Alas del Maligno","Anillo de Nigromancia","Arrancar la Esencia","Belleza","Calor Sofocante","Dibbuk","Esencia de Hostilidad","Filo Maldito","Herrumbre de Saturno","Maldición de la Vela","Mano de Gloria","Nigromancia","Regalo Envenenado"]

var Grimorio_Aquelarre_infernal_4 = ["Alimento de Guland","Beso de Thamur","Maldición del Lobisome","Sangre de Upiro","Tormento",]

var Grimorio_Aquelarre_blanca_5 = ["Alma de Estatua","Círculo de Protección","Dominio del Fuego","Don de Palabra","Entereza del Mártir","Expulsión","Filo Constelado","Guarda contra Maleficios","Hermosura","Homúnculo","Presteza","Refugio del Hechicero","Sabiduría","Susurro de los Secretos","Velo de Hada"]

var Grimorio_Aquelarre_negra_5 = ["Demencia","Maldición del Gul","Maldición de la Herida","Maldición del Hierro","Maldición de Strigiles","Pellejo de Bestia","Saco de Quebradura","Trampa Goética",]

var Grimorio_Aquelarre_infernal_5 = ["Aliento del Diablo","Incubar Diablillo","Infortunio"]

var Grimorio_Aquelarre_blanca_6 = ["Caldero Mágico","Espejo de Salomón","Fuerza de Gigante","Latón de Nuevas","","","","",]

var Grimorio_Aquelarre_negra_6 = ["Aceite de Usurpación ","Condenación","Consultar a los Muertos","Golpe de la Parca","Hambruna","Maldición del Clavo","Maldición de la Bestia",]

var Grimorio_Aquelarre_infernal_6 = ["Maldición de la Bruja","Misa Negra"]

var Grimorio_Aquelarre_blanca_7 = ["","","","","","","","",]

var Grimorio_Aquelarre_negra_7 = ["","","","","","","","",]

var Grimorio_Aquelarre_infernal_7 = ["","","","","","","","",]

function Generarpdf(){
        var Criatura_pdf = document.getElementById("result");

        html2pdf().from(Criatura_pdf).save();
}



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
        Movimiento : "6/12 Volando" ,
        Descripcion_breve: "Seres sin rostro" ,
        Armadura :  "2 puntos de piel." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Atacan con sus zarpas, cola, cuernos o extremidades. <br><strong>Capturar (mnbr):</strong> Los Ángeles descarnados de la noche prefieren capturar a sus adversarios para después hacerles cosquillas con su cola espinosa. Suelen atacar en masa e intentan acechar en silencio a sus víctimas , arrebatarles sus armas y someterlas. Dos Ángeles descarnados de la noche o más pueden combinar sus ataques para retener a una víctima más poderosa (lo que puede llegar adarles un dado de bonificación por superarla en número).<br><strong>Cosquilleo:</strong> Los Ángeles descarnados de la noche solo pueden cosquillear a criaturas a las que hayan capturado. Un ataque de cosquilleo con éxito resulta extremadamente perturbador, ya que la lengüeta de su cola es afilada como una cuchilla y peligrosa a pesar de que su contacto no causa daño. La víctima queda perpleja, humillada y desorientada, y sufre un dado de penalización en todas sus tiradas durante 1D4 asaltos o hasta que cesa el cosquilleo. La cola de un Ángel descarnado de la noche puede pasar a través de agujeros y aberturas, atravesar ropas gruesas e incluso, encontrar los intersticios de una armadura metálica." ,
        Habilidades : "<strong>Combatir</strong> 45 % (22/9), daño 1D4 + Bonificación al daño.<br> <br><strong>Capturar</strong> (mnbr) la víctima queda apresada y lista para el cosquilleo o cualquier ataque posterior.<br><strong>Cosquilleo</strong> 35% (17/7), inmovilizado 1D6+1 asaltos (el objetivo debe haber sido capturado previamente).<br><strong>Esquivar </strong>35% (17/7).<br><strong>Sigilo </strong>90%." ,
        Cordura : "Ver a un Ángel descarnado de la noche produce una pérdida de 0/1D6 Puntos de Cordura."
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
        Movimiento : "8/10 Volando",
        Descripcion_breve: "Misteriosos científicos de los albores del tiempo" ,
        Armadura : "7 puntos de piel." ,
        Ataques_por_asalto : "5" ,
        Ataques_de_combate : "Un antiguo puede utilizar sus tentáculosy su masa corporal para golpear a sus adversarios.<br><strong>Capturar (mnbr):</strong> Cuando un tentáculo acierta a su objetivo, seadhiere a la víctima, que cada asalto perderá una cantidadde Puntos de Vida igual a la mitad de la Bonificación al daño del Antiguo a causa de la constricción y el aplastamiento.Los Antiguos poseen cinco tentáculos, por lo que no podrán apresar a más de cinco víctimas de este modo." ,
        Habilidades : "<strong>Combatir</strong> 40% (20/8), Bonificación al daño.<br><strong>Capturar (mnbr)</strong> atrapa al objetivo, que a partir de entoncessufre 1/2 de Bonificación al daño de constricción por asalto.<br><strong>Esquivar</strong> 40% (20/8)." ,
        Cordura : "Ver a un Antiguo produce una pérdida de 0/1D6 Puntos de Cordura."
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
        Movimiento : "5/16 Volando",
        Descripcion_breve: "Monturas Estelares" , 
        Armadura : "2 puntos de pelaje y piel endurecida.",
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Un byakhee puede atacar con sus garras o embestir a su víctima, causándole graves heridas. <br><strong>Morder Y retener (mnbr):</strong> Si el mordisco impacta a su objetivo, el byakhee quedará adherido a la víctima y le empezará a chupar la sangre. Cada asalto que el byakhee permanezca ad he rido, incluyendo el primero , el drenaje de sangre hará que la víctima pierda 3D10 puntos de FUE hasta que muera (cuando su FUE quede reducida a O). Los byakhee suelen utilizar este ataque para permanecer adheridos hasta drenar toda la sangre de la víctima, a no ser que esta tenga éxito en una tirada enfrentada de FUE. Si sobrevive, la víctima podrá guardar reposo y regenerar su sangre (también se puede hacer mediante una transfusión) a un ritmo de 1D10 + 5 FUE por día. Un byakhee solo puede retener a una víctima al mismo tiempo." ,
        Habilidades : "<strong>Combatir</strong> 55% (27/11), daño 1D6 + Bonificación al daño. <br><strong>Morder y retener (mnbr)</strong> daño 1D6 + 3D10 FUE (sangre) drenaje (solo una víctima). <br><strong>Esquivar</strong> 33% (16/6).<br><strong>Descubrir</strong> 50%,<br> <strong>Escuchar</strong> 50%." ,
        Cordura : "Ver a un byakhee produce una pérdida de 1/1D6 Puntos de Cordura."
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
        Movimiento : "6/1 Cavando",
        Descripcion_breve: "Excavadores Tentaculares" ,
        Armadura : "5 puntos de piel y musculatura; tras recibir una herida regenera 5 Puntos de Vida por asalto, pero la regeneración dejará de funcionar cuando sus Puntos de Vida se reduzcan por debajo de 1." ,
        Ataques_por_asalto : "1D8. Solo puede utilizar su ataque de aplastamiento una vez por asalto." ,
        Ataques_de_combate : "Es peligroso acercarse a estas criaturas. Su enorme mole y sus agitados tentáculos pueden golpear en cualquier momento.<br><strong>Retener y drenar:</strong>puede atacar con 1D8 tentáculos cada asalto, y cada uno de ellos causa un daño igual a la mitad de la Bonificación al daño de la criatura. Si un tentáculo consigue alcanzar a su objetivo, se adhiere a él, horada el cuerpo de la víctima en dirección a sus órganos vitales y comienza a drenar sangre y fluidos, provocando una pérdida de 3D10 CON por asalto. Cuando la CON queda reducida a O, la víctima muere. La CON perdida por el ataque de un chthonian se pierde para siempre. Mientras un tentáculo esté drenando a una víctima, no se podrá utilizar para drenar a otros objetivos, pero se podrá seguir utilizando para contraatacar, zara ndeando a la pobre víctima apresada como si fuera una bola al final de una cadena. Los tentáculos que estén drenando a una víct ima seguirán absorbiendo CON todos los asaltos. Cada tentáculo podrá atacar a un objetivo distinto, o podrán atacar todos al mismo.<br><strong>Aplastar:</strong>puede utilizar su enorme masa para aplastar a un enemigo. Cuando vaya a aplastar a alguien, podrá seguir reteniendo y drenando víctimas que ya tuviera apresadas.Se abalanza sobre un grupo y cae sobre ellos: el área de aplastamiento es circular y golpea a todos por igual. El área de aplastamiento tiene un diámetro en metros igual al TAM del chthonian dividido por cincuenta. Dentro del área de aplastamiento, los investigadores deberán superar una tirada de DES, Esquivar o Saltar o perderán una cantidad de Puntos de Vida igual a la Bonificac ión al daño completa de la criatura." ,
        Habilidades : "<strong>Combatir</strong>75%, daño 2D6 (paliza tentacular).<br><strong>Retener y drenar</strong> daño 2D6 + drenaje de sangre (tentáculos adheridos). <br><strong>Aplastamiento</strong> 80%, daño: Bonificación al daño(mole, grupo).<strong>Esquivar</strong> 17% (8/3)." ,
        Cordura : "1D3/1D20 Puntos de Cordura por ver a un adulto; 1/1D10 Puntos de Cordura por ver estadios inferiores; ver a una cría no produce ninguna pérdida de Puntos de Cordura."
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
        Movimiento : "12 Fluyendo / 20 Volando ",
        Descripcion_breve: "Drenadores de fuerza Vital" ,
        Armadura : "Ninguna. Son invulnerables a todos los ataques físicos, a excepción de los camp os magnéticos, que son capaces de aprisionados. Son vulnerables a la magia." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate :"Como los colores son atacantes tan eficientes, puede que el Guardián quiera dejar que los investigadores vean cómo se aproximan y permitirles hacer tiradas de Descubrir para detectar su tenue resplandor o para advertir una súbita presencia de ozono. Los colores carecen de una habilidad de Combatir reconocible y no pueden sufrir daño por medios normales. <br><strong>Drenaje de características:</strong> Cuando un color se alimenta debe hacer una tirada enfrentada de POD contra su víctima. Si gana el color, drenará 1D1O puntos de FUE, CON, POD, DES y APA de la víctima de forma permanente, además de causarle 1D6 puntos de daño. Cada punto de POD drenado aumentará en un punto el POD del color. La víctima notará una sensación ardiente y consumidora, y se irá marchitando y tornándose gris. La cara de la víctima se consumirá, y su piel envejecerá con arrugas y grietas horrendas. Una vez consumida, la víctima morirá. <br><strong>Ataque mental:</strong> Un color puede debilitar la mente de otros seres inteligentes que se encuentren en las inmediaciones. Cada día que una persona pase en las inmediaciones de un color, deberá tener éxito en una tirada enfrentada de INT o perderá 1D6 Puntos de Magia y 1D6 Puntos de Cordura . Los Puntos de Magia perdidos de esta forma no se podrán recuperar si no se abandona la zona. Esta influencia también obliga a las víctimas a permanecer en sus hogares, y se vuelve más irresistible a medida que se debilita la voluntad de los afectados . Para decidirse a abandonar el área, la víctima deberá superar una tirada Difícil o Extrema de POD (Difícil si sus Puntos de Magia se han reducido en un SO% o Extrema si han quedado reducidos a O o menos), o se sentirá inexplicablemente obligada a quedarse. <br><strong>Tirada enfrentada de drenaje:</strong> POD de la víctima vs. POD del color, daño 1D6 de pérdida de características. Tirada enfrentada de ataque mental: INT de la víctima vs INT del color, daño 1D6 Puntos de Magia+1D6 Puntos de Cordura." ,
        Habilidades : "Esquivar 47% (23/9)." ,
        Cordura : "Ver a un color produce una pérdida de 1/1D4 Puntos de Cordura; ver a la víctima de un color produce una pérdida de 1/1D8 Puntos de Cordura."
}

var Dagon_e_hidra = {
        Nombre : "Dagón e Hidra" ,
        FUE_max : 260 ,
        CON_max : 250 ,
        TAM_max : 300 ,
        DES_max : 100 ,
        INT_max : 100 ,
        POD_max : 150 ,
        Movimiento : "10/15 Nadando",
        Descripcion_breve: "Gobernantes de los profundos",
        Armadura : "6 puntos de piel." ,
        Ataques_por_asalto : "2",
        Ataques_de_combate : "Estos monstruos descomunales pueden golpear a los investigadores de varias formas distintas: pateando, desgarrando, pisoteando, aporreando, etc." ,
        Habilidades : "<strong>Combatir</strong> 80% (40/18), daño 1D6 + Bonificación al daño.<strong>Esquivar</strong> 50%",
        Cordura : "Ver a Oagón o a Hidra produce una pérdida de 1/1010 Puntos de Cordura."
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
        Movimiento : "15 Reptando / 10 Excavando",
        Descripcion_breve: "Horrores Excavadores" ,
        Armadura : "Igual a una quinta parte del POO del dhole." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Acercarse a la inmensa y veloz masa de estas criaturas es peligroso para los mortales. Recibir uno de sus golpes es como ser arrollado por un tren . Si un dhole aplasta a un investigador la muerte se producirá de forma automática. Si supera una tirada de Suerte, se podrá recuperar lo suficiente como para poder celebrar un entierro. <br><strong>Ataque de baba:</strong> En lugar de tragar o aplastar a un oponente, un dhole puede escupir una flema de baba legamosa desde su boca hasta una distancia de entre 3 y 5 km. La baba cubre un área circular con un diámetro igual a un 1% del TAM del monstruo en pies (0,3 m): por lo tanto, un dhole de TAM 2750 escupe una flema de 27 pies de diámetro (8,25 m), lo suficiente como para derribar un avión. Cualquier ser vivo alcanzado por la flema quedará aturdido y sumergido. Para sa lir de la masa de baba habrá que superar una tirada Extrema de FUE; se puede ll evar a cabo un intento por asalto. Mientras esté sepu ltado bajo esta espantosa mucosidad, e l investigador no podrá respirar y comenzará a ahogarse. Además, la baba cáustica causará al invest igador 1 punto de daño por asalto que pase atrapado en ella. La victima dejará de sufrir este daño abrasador en cuanto consiga escapar. <br><strong>Engullir:</strong> Cuando un dhole se traga a alguien (lo engulle) abarca una zona del mismo tamaño que el de su ataque de baba." ,
        Habilidades : "<strong>Combatir</strong> 30%, daño muerte . <br><strong>Escupir baba</strong> 50 %, daño especial. <br><strong>Engullir</strong> 80%, daño engullido. <br><strong>Esquivar</strong> 6%." ,
        Cordura : "Ver a un dhole produce una pérdida de 1D4/1D20 Puntos de Cordura."
}

var El_horror_en_la_tinta = {
        Nombre : "Ursus Miles (El horror de la tinta)" ,
        FUE_max : 110 ,
        CON_max : 300 ,
        TAM_max : 130 ,
        DES_max : 80 ,
        INT_max : 20 ,
        POD_max : 150 ,
        Movimiento : "10",
        Descripcion_breve: "" ,
        Armadura : "" ,
        Ataques_por_asalto : "" ,
        Ataques_de_combate : "" ,
        Habilidades : "" ,
        Cordura : ""
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
        Movimiento : "10",
        Descripcion_breve: "Bestias Dañinas y Escabrosas" ,
        Armadura : "Ninguna" ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "los ghasts cuentan con el repertorio habitual de ataques sin armas disponible para cualquier humanoide." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño 1D6 + Bonificación al daño.<br><strong>Esquivar</strong> 35% (17/7). <br> Sigilo 70%." ,
        Cordura : "Ver a un ghast produce una pérdida de 0/1D8 Puntos de Cordura."
}

var Gnoph_keh = {
        Nombre : "Gnoph-Keh" ,
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
        Movimiento : "9",
        Descripcion_breve: "Demonios de Hielo" ,
        Armadura : "9 puntos de cartílago, pelaje y piel endurecida." ,
        Ataques_por_asalto : "5 (solo 1 cornada por asalto)." ,
        Ataques_de_combate : "Los gnoph-keh pueden atacar sirviéndose de sus atroces garras y su formidable corpulencia." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño 1D6 + Bonificación al daño. <br><strong>Cornada</strong> 65% (32/13), daño 1D10 + Bonificación al daño. <br><strong>Esquivar</strong> 35% (17/7) ." ,
        Cordura : "Ver a un gnoph-keh provoca una pérdida de 0/1D10 Puntos de Cordura."
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
        Movimiento : "9",
        Descripcion_breve: "Burlones Devoradores de Carroña" ,
        Armadura : "Las armas de fuego y los proyectiles causan la mitad del daño obtenido en la tirada; redondea cualquier fracción hacia abajo." ,
        Ataques_por_asalto : "3" ,
        Ataques_de_combate : "Los gules cuentan con el repertorio habitual de ataques sin armas disponible para cua lquier humanoide. También poseen unas garras sucias y afilada s como cuchillas; estas protrusiones óseas son capaces de cortar la carne humana en un instante. Si estas heridas no reciben tratamiento se pueden infectar. <br><strong>Morder y retener (mnbr):</strong> Si el gul acierta con su mordisco, renunciará a realizar nuevos ataques con las garras y se limitará a abrazar a la víctima, asiéndola fuertemente con los dientes y causando automáticamente 1D4 puntos de daño por asalto. Para librarse del gul, romper su presa y dejar de sufrir daño por el mordisco, será necesario superar una tirada enfrentada de FUE ." ,
        Habilidades : "<strong>Combatir</strong> 40% (20/8), daño 1 D6 + Bonificación al daño. Morder y retener (mnbr) daño 1 04 por asalto . <br><strong>Esquivar</strong> 40% (20/8)." ,
        Cordura : "Ver a un gul produce una pérdida de 0/1D6 Puntos de Cordura."
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
        Movimiento : "8",
        Descripcion_breve: "Acechadores de los Yermos" ,
        Armadura : "3 puntos de piel gruesa." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Durante el combate, los habitantes de la arena cuentan con el repertorio habitual de ataques sin armas disponible para cualquier humanoide, además de sus garras." ,
        Habilidades : "<strong>Combatir</strong> 30% (15/6), daño 1D6 + Bonificación al daño.<br><strong>Esquivar</strong> 30% (15/6).<br><strong>Descubrir</strong> 50%, <br><strong>Escuchar</strong> 60%, <br><strong>Sigilo</strong> 55%." ,
        Cordura : "Ver a un habitante de la arena produce una pérdida de 0/1D6 Puntos de Cordura."
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
        Movimiento : "8" ,
        Descripcion_breve: "Miembro Atávico de la Raza" ,
        Armadura : "1 punto de escamas." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los hombres serpiente cuentan con el repertorio habitual de ataques sin armas disponible para cualquier humanoide. Pueden utilizar las armas conocidas por el hombre, pudiendo asirlas eficazmente con sus garras. <br><strong>Mordisco:</strong> La mordedura de un hombre serpiente es extremadamente venenosa. La víctima deberá superar una tirada Extrema de CON; si fracasa, sufrirá 1D8 puntos de daño." ,
        Habilidades : "<strong>Combatir</strong> 50% (25/10), daño 1D3 + Bonificación al daño. <br><strong>Mordisco</strong> 35% (17/7), daño 1D8 + veneno (como se indicaba anteriormente). <br><strong>Esquivar</strong> 32% (16/6)." ,
        Cordura : "Ver a un hombre serpiente produce una pérdida de 0/1D6 Puntos de Cordura."
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
        Movimiento : "7/11" ,
        Descripcion_breve: "Viperinos Seres Voladores" ,
        Armadura : "9 puntos de piel." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Un horrendo cazador puede atacar sirviéndose de su mordisco, su corpulencia demoledora o su cola tentacular. <br><strong>Apresar (mnbr):</strong> Puede utilizar la cola para rodear a la víctima y prevenir cualquier movimiento. Después, el horrendo cazador podrá alzar el vuelo con su víctima o continuar luchando. La víctima solo se podrá liberar venciendo en una tirada enfrentada de FUE. Cuando una víctima se encuentra apresada por la cola, el horrendo cazador solo puede atacar con su mordisco, dando bocados a la víctima indefensa con un dado de bonificación en su tirada de ataque debido a que los brazos de su objetivo suelenn estar inmovilizados." ,
        Habilidades : "<strong>Combatir</strong> 65% (32/13), daño 1D6 + Bonificación al daño. <br><strong>Apresar (mnbr)</strong> objetivo inmovilizado, deberá vencer en una tirada enfrentada de FUE para poder escapar. <br><strong>Esquivar</strong> 35% (17/7)." ,
        Cordura : "Ver a un horrendo cazador produce un a pérdida d e 0/1D10 Puntos de Cordura."
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
        Movimiento : "7 (Material)/3 (Inmaterial)",
        Descripcion_breve: "Maestros de la Telequinesis" ,
        Armadura : "8 puntos de piel de reptil. En su estado inmaterial son inmunes a todas las armas físicas, sean mágicas o no." ,
        Ataques_por_asalto : "1 (2 mientras se encuentra en forma de reptil)." ,
        Ataques_de_combate : "Los lloigor pueden atacar de varias formas posibles, lo que incluye golpes, zarpazos y mordiscos que pueden lle var a cabo en su forma de reptil. Si no, pueden utilizar uno de sus poderes especia les o un ataque de vórtice .<br><Strong>Ataque de vórtice:</Strong> El arma más temib le de los lloigor es una especie de implosión sónica, parecida a la resonancia de un trueno lejano, que destroza todo lo que hay a su alcance y deja la tierra resquebrajada. Se necesitan al menos 100 Puntos de Magia para afectar a un área de 10m de diámetro. Todo lo que se encuentre dentro del área afectada perderá 1D100 Puntos de Vida. Un investigador que esté atento podrá advertir los efectos que delatan el ataque, como unas líneas giratorias que aparecen en el aire o una vibración casi inaudible que penetra en su cuerpo." ,
        Habilidades : "<strong>Combatir</strong> 30%(15/6), daño 1D6 + Bonificación al daño. <br><strong>Esquivar</strong> 26%(13/5) . <br><strong>Armadura:</strong> 8 puntos de piel de reptil. En su estado inmaterial son inmunes a todas las armas físicas, sean mágicas o no." ,
        Cordura : "0/1D8 en su forma de reptil; su forma invisible no provoca ninguna pérdida de Cordura; el contacto mental produce una pérdida de 1/1D4 Puntos de Cordura."
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
        Movimiento : "7/13 Volando" ,
        Descripcion_breve: "Enigmáticos Científicos de Yuggoth" ,
        Armadura : "Ninguna, pero su cuerpo de resonancia extraterrestre hace que todas las armas perforantes (incluidas las balas) les causen el menor daño posible." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Los hongos de Yuggoth pueden atacar  en combate cuerpo a cuerpo con sus dos garras parecidas  a pinzas.<br><strong>Capturar (mnbr):</strong> También pueden intentar apresar a su víctima  (de una corpulencia igual o menor a la suya) para luego  alzar el vuelo y dejarla caer desde gran altura, o llevarla a la  altitud suficiente para que sus pulmones co lapsen.  <br><strong>Combatir</strong> 45% (22/9), 106 + Bonificación al daño.  <br><strong>Capturar (mnbr)</strong> puede capturar seres que tengan una Corpulencia  1gual o menor a la suya (pinzas, apresar, volar)." ,
        Habilidades : "Combatir</strong> 45% (22/9), 106 + Bonificación al daño. <br><strong>Capturar (mnbr)</strong> puede capturar seres que tengan una Corpulencia 1gual o menor a la suya (pinzas, apresar, volar). <br><strong>Esquivar</strong> 35% (17 /7)." ,
        Cordura : "Ver a un mi-go produce una pérdida de 0/1D6 Puntos de Cordura."
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
        Movimiento : "6/20 Volando",
        Descripcion_breve: "Carroñeros del Tiempo" ,
        Armadura : "2 puntos de piel. Además, regeneran 4 Puntos de Vida por asalto a no ser que hayan sido reducidos a O Puntos de Vida . Las armas mundanas no tienen efecto alguno sobre un perro de Tíndalos, aunque las armas encantadas y los hechizos les caus an el daño completo." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Un perro de Tínda los puede utilizar sus zarpas o sus fauces para atacar. Estas criaturas están recubiertas por una especie de pus o icor azulado. Cuando un ataque de Combatir alcanza a una víctima, una gota de esta sustancia mucosa impregnará la herida. Esta especie de pus está vivo y activo, y causa 2D6 puntos de daño al objetivo. Además, la víctima sufrirá otros 2D6 puntos de daño cada asalto que su cuerpo permanezca en contacto con la sustancia. El pus se puede limpiar con un jirón de ropa o una toalla y superando una tirada de DES . También se puede enjuagar con agua u otro agente limpiador. El fuego puede matar el icor, pero también causará 1D6 puntos de daño a la víctima como consecuencia de las quemaduras." ,
        Habilidades : "<strong>Combatir</strong> 90% (45/18), daño 1D6 + Bonificación al daño + icor (2D6 daño por asalto, de forma continuada hasta retirarlo).<br><strong>Lengua</strong> 90% (45/18), daño 3D6 POD drenado por asalto. <br><strong>Esquivar</strong> 26 % (13/5)." ,
        Cordura : "Ver a un perro de Tíndalos produce una pérdida de 1D3/1D20 Puntos de Cordura."
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
        Movimiento : "8/12 Volando",
        Descripcion_breve: "Terrores de las Oscuras Profundidades" ,
        Armadura : "4 puntos e invisibilidad . Los ultraterrenos pólipos volantes sufren solo el daño mínimo ca usado por cualquier a rma física, que además quedará reduci do en otros 4 puntos a causa de la a rmadura cutánea de l monstruo. Las armas encantadas ca usan el daño normal, así como otras fuerzas como el calor o la electricidad." ,
        Ataques_por_asalto : "2D6 (cada asalto, tira 2D6 para determinar cuántos tentáculos se forman); solo puede utilizar un ataque eólico por asalto.<br>Los cuerpos de los pólipos no paran de formar y hacer desaparecer tentáculos. El daño causado por un tentáculo siempre es de 1D1O. Debido a la naturaleza parcialmente inmaterial de estas criaturas, el daño de los tentáculos se aplica directamente a los Puntos de Vida del objetivo, ignorando cualquier armadura corporal. La herida adopta la forma de una dermatitis o una deshidratación de los tejidos provocada por el viento.<br>Nota:Cada una de las habilidades eólicas cuesta al pólipo 1 Punto de Magia por asalto." ,
        Ataques_de_combate : "<br><strong>Ráfaga de viento:</strong> La ráfaga de viento tiene un alcance básico de 20m y un área de efecto cilíndrica de 1Om de diámetro que emana del pólipo, y causa un daño igual a su Bonificación al daño. La ráfaga cilíndrica puede llegar más allá de 20m, pero pierde 106 puntos de daño por cada incremento de 20m; así, un objetivo que se encuentre a 39m de distancia sufrirá 406 puntos de daño(Bonificación al daño menos 1D6), y un objetivo que se encuentre a 41 m sufrirá 306. El chorro arrancará literalmente la carne de los huesos de las víctimas, causándoles deshidratación y abrasión en la piel y, además, las empujará hacia atrás tantos metros como los Puntos de Vida que hayan perdido.<br> <strong>Ataque paralizante:</strong> Se trata de un misterioso método para capturar a las presas. Este tipo de ataque eólico tiene un alcance de 1.000m y puede soplar girando esquinas y ascendiendo por pasillos tortuosos sin ver disminuida su potencia. A pesar de que el viento emana del pólipo, tiene un peculiar efecto de succión en la víctima, que verá frenado su avance y deberá hacer una tirada enfrentada de FUE contra el POD del pólipo. El ataque pierde efectividad más allá de 200m, por lo que el objetivo recibirá un dado debonificación. Si gana el pólipo, la víctima no podrá avanzar ese asalto. Si gana la víctima, se podrá mover de forma normal. Los pólipos volantes se pueden desplazar a toda velocidad mientras utilizan esta habilidad, por lo que podrán perseguir a una presa de su interés mientras la ralentizan. Esta técnica se puede utilizar sobre varios objetivos que estén separados entre sí a una distancia máxima de 30 m. Todos los objetivos obtienen un dado de bonificación en su tirada de FUE para enfrentarse al pólipo. El pólipo puede elegir a sus objetivos.<br><strong>Huracán:</strong> Varios pólipos pueden unir fuerzas para generar vientos huracanados. El viento tendrá una velocidad de 800 km/h por cada punto de POD invertido por los pó lipos participantes. Este huracán tiene un efecto local y pierde 8 km/h de fuerza por cada 200 m que avance. Así, un g rupo de pólipos volantes podrá generar vie ntos huracanados que afecten a un área de varios kilómetros cuadrados. Los obje t ivos sufren 1D4 puntos de daño por cada 30 km/h por e n cima de 100 km/ h de velocidad del viento; aquellos que tengan éxito en una tirada de Suerte sufrirán solo la mitad del daño." ,
        Habilidades : "<strong>Combatir</strong> 85 % (42/17), daño 1D10.<br> Ráfaga de viento 70% (35/14), Bonificación al daño (se reduce en 1 D6 por cada 20 m de distancia).<br> <br><strong>Esquivar</strong> 30% (15/6)." ,
        Cordura : "Ver a un pólipo volante produce una pérdida de 1D3/1D20 Puntos de Cordura."
 }

 var Profundo = {
        Nombre : "Profundo" ,
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
        Movimiento : "8/10 Nadando",
        Descripcion_breve: "Señores Branquiados de las Profundidades" ,
        Armadura : "1 punto de piel y escamas." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los profundos pueden utilizar armas igual que lo hacen los humanos. Tienen gran pericia con sus lanzas y tridentes." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño 1D6 + Bonificación al daño o según el tipo de arma (por ejemplo : lanza, daño 1D8 + Bonificación al daño). <br><strong>Esquivar</strong> 25% (12/5)." ,
        Cordura : "Ver a un profundo produce una pérdida de 0/1D6 Puntos de Cordura."
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
        Movimiento : "8/8 Nadando",
        Descripcion_breve: "La Progenie Degenerada de Innsmouth" ,
        Armadura : "Ninguna" ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los híbridos pueden utilizar armas igual que lo hacen los humanos" ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño según el tipo de arma, o desarmado (1D3) + Bonificación al daño. <br><strong>Esquivar</strong> 30% (15/6)<br><strong>Escuchar</strong> 50%<br><strong>Nadar</strong> 60%<br><strong>Saltar</strong> 45%<br><strong>Sigilo</strong> 46%." ,
        Cordura : "Ver a un híbrido produce una pérdida de 0/1D4 Puntos de Cordura, aunque esta puede aumentar a 1/1D6 o más en el caso de especímenes particularmente monstruosos."
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
        Movimiento : "8",
        Descripcion_breve: "Agusanados Maestros de la Brujería" ,
        Armadura : "Ninguna; sin embargo, debido a la blanda y resistente cualidad de los cuerpos de los reptantes, las armas normales les causan el mínimo daño posible. Las balas solo les causan 1 punto de daño, excepto los perdigones de una escopeta, que causan el daño mínimo de ese tipo de arma de fuego." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los reptantes pueden utilizar armas como hacen lo s humanos, sin embargo, prefieren utilizar hechizos o a sus esbirros para que lleven a cabo sus labores físicas ." ,
        Habilidades : "<strong>Combatir</strong> 35 % (17/7), daño 1D3 (desarmado) o según el tipo de arma.<br><strong>Esquivar</strong> 20% (10/4)." ,
        Cordura : "Ver a un reptante produce una pérdida de 1 D3/2D6 Puntos de Cordura."
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
        Movimiento : "8",
        Descripcion_breve: "de Shub-Niggurath" ,
        Armadura : "Los retoños oscuros no están formados por materia terrenal, de modo que cualquier ataque con éx ito de un arma de fuego les causa solamente 1 punto de daño por cada bala (2 puntos en caso de empalamiento). Las armas cuerpo a cuerpo normales causan el daño normal. Los ataques basados en el calor, los e xplosivos, la corrosión, la electricidad o el envenenamiento no causan efecto alguno ." ,
        Ataques_por_asalto : "5. Los retoños oscuros solo pueden utilizar su ataque de pisoteo una vez por asalto." ,
        Ataques_de_combate : "Entre su masa de tentáculos, los retoños oscuros tienen cuatro más gruesos y sinuosos con los que atacan. Pueden extender cada uno de estos gruesos tentáculos para golpear con ellos. También pueden patear con sus pezuñas, y aplastar o arrollar con su enorme masa.<br><strong>Apresar (mnbr):</strong> Los retoños oscuros pueden utilizar sus tentáculos para apresar y capturar hasta cuatro victimas. Si agarra a una víctima, la arrastrará hasta una de sus horrendas bocas succionado ras y le drenará 1 D1 0+ 5 FUE por asalto. La FUE perdida no se podrá recuperar. Mientras esté siendo drenada, la víctima solo será capaz de gritar y retorcerse inútilmente.<br><strong>Pisotear:</strong> Los retoños oscuros también pueden pisotear con sus enormes pezuñas, rugiendo y bramando mientras se encabritan e intentan pisotear a tantos oponentes como sea posible (hasta 1D4 humanos si se encuentran lo bastante cerca)." ,
        Habilidades : "<strong>Combatir</strong> 80% (40/16), Bonificación al daño . <br><strong>Apresar (mnbr)</strong> apresado y retenido, drena 1D10 + 5 FUE por asalto. <br><strong>Pisotear</strong> 40% (20/8), daño 206 + Bonificación al daño . <br><strong>Esquivar 40% (20/8)." ,
        Cordura : "Ver a un retoño oscuro produce una pérdida de 1D3/1D10 Puntos de Cordura."
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
        Movimiento : "15/15 Nadando",
        Descripcion_breve: "Sátrapas del Durmiente" ,
        Armadura : "1O puntos de piel y grasa; regeneran 3 Puntos de vida por asalto." ,
        Ataques_por_asalto : "4" ,
        Ataques_de_combate : "Las semillas estelares pueden atacar con sus tentáculos o con sus garras para infligir daño o capturar a sus víctimas." ,
        Habilidades : "<strong>Combatir</strong> 80% (40/16), el daño es igual a la Bonificación al daño.<br><strong>Esquivar</strong> 26% (13/5)." ,
        Cordura : "Ver a una semilla estelar produce una pérdida de 1D6/1D20 Puntos de Cordura."
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
        Movimiento : "12",
        Descripcion_breve: "Horrores Metamórficos" ,
        Armadura : "Inmune a todas las armas físicas, incluso a las en cantadas; las heridas simplemente se cierran tras haber sido abiertas. Pueden verse afectadas por hechizos, así como por el fuego, productos químicos y otras fuerzas." ,
        Ataques_por_asalto : "2 (limitado a 1 mordisco por asalto)" ,
        Ataques_de_combate : "Gracias a su extrema fluidez son capaces de atacar de muchas formas posibles, formando látigos, tentáculos y otros apéndices con los que aporrear y golpear a sus adversarios. <br><strong>Mordisco:</strong> La víctima es engullida en el acto. Cada asalto posterior, la víctima sufre 1 punto de daño a causa de la constricción; el daño por asalto se incrementa en 1 de forma progresiva (es decir, que en el segundo asalto causa 2 puntos de daño, 3 en el tercero, etcétera). Una víctima engullida no puede llevar a cabo ninguna acción, aunque sus amigos pueden intentar matar a la criatura para liberarla. Una semilla informe puede realizar un ataque de mordisco por asalto , y puede seguir engullendo presas hasta haber tragado tantos puntos de TAM como los suyos propios. La semilla puede continuar luchando mientras digiere a una víctima, pero será in capaz de desplazarse a otro lugar sin regurgitar antes lo que se haya tragado. <br><strong>Apresar (mnbr):</strong> Apresa a un adversario utilizando uno de sus apéndices parecidos a látigos; el alcance es siempre de una quinta parte del TAM del monstruo en metros." ,
        Habilidades : "<strong>Combatir</strong> 60% (30/12), daño 2D6 + Bonificación al daño. <br><strong>Apresar (mnbr)</strong> daño 1D6 + Bonificación al daño. <br><strong>Mordisco</strong> 30% (15/6), daño engullido. <br><strong>Esquivar</strong> 47% (23/9)." ,
        Cordura : "Ver a una semilla informe produce una pérdida de 1/1D1O Puntos de Cordura."
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
        Movimiento : "9",
        Descripcion_breve: "Espías Escurridizos, Malévolos y Burlones" ,
        Armadura : "Ninguna , pero los ataques contra un ser rata a la Carrera se hacen con un dado de penalización." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los seres rata atacan trepando por las piernas o entre la ropa de sus adversarios humanos, o dejándose caer desde el techo. Cuando el ataque de un ser rata tiene éxito, se adhiere y comienza a morder. Arrancarse un ser rata causa 1D3 puntos de daño adicionales a la desafortunada víctima." ,
        Habilidades : "<strong>Combatir</strong> 35% (17 /7), daño 104 + Bonificación al daño. <br><strong>Esquivar</strong> 45 % (22/9), <br><strong>Escuchar</strong> 50 %, <br><strong>Sigilo</strong> 75%." ,
        Cordura : "Ver a un ser rata produce una pérdida de 0/1D6 Puntos de Cordura; sin embargo, si la persona que lo ve llegó a conocer al ser rata en vida, la pérdida será de 1/1D8 Puntos de Cordura."
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
        Movimiento : "7",
        Descripcion_breve: "de los Dioses Exteriores" ,
        Armadura : "Ninguna, aunque las armas físicas no pueden causarles daño; los hechizos y la s armas mágicas sí le s hacen el daño normal ; regeneran 3 Puntos de Vida por asalto hasta que mueren." ,
        Ataques_por_asalto : "4" ,
        Ataques_de_combate : "Una masa de tentáculos retorcidos que golpean y se enroscan al objetivo. Tras un ataque exitoso, tira 1D3 para determinar cuántos tentáculos infligen daño. Pueden utilizar sus tentáculos para captura r a un adversario con una maniobra exitosa. El alcance de sus tentáculos es igua la una quinta parte del TAM del monstruo en metros." ,
        Habilidades : "<strong>Combatir</strong> 45 % (22/9), daño 1D6 + Bonificación al daño por tentáculo. <br><strong>Esquivar</strong> 41% (20/8)." ,
        Cordura : "Ver a un servidor produce un a pérdida de 1/1D1O Puntos de Cordura."
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
        Movimiento : "4/20 Volando",
        Descripcion_breve: "Parásitos Mentales" ,
        Armadura : "Ninguna" ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Un insecto de shaggai recurre siempre a su látigo neural o a su capacidad de poseer a su objetivo (fusionarse), y carece de cualquier habilidad de Combatir innata. <br><strong>Látigo neural:</strong> El látigo neural es un pequeño dispositivo tecnológico que proyecta un chirriante haz de luz desva hída. Cuando la luz alcanza a un objetivo, haz una tirada enfrentada de POO . Si gana el shan, el objetivo sufrirá una agonía sobrecogedora y no podrá hacer otra cosa que retorcerse en el suelo hasta que se desactive el arma. Si el ataque falla, el objetivo seguirá sintiendo un gran dolor y todas sus tiradas recibirán un dado de penalización durante un número de horas igual a 24 menos la quinta parte de la CON de la víctima. Se puede renovar el ataque cada asalto y las penalizaciones son acumulativas . <br><strong>Fusionarse:</strong> Esto representa la probabilidad de que un shan se adentre volando en la cabeza de un ser humano para permanecer allí." ,
        Habilidades : "<strong>Látigo neural</strong> 50 % (25/10), daño especial. <br><strong>Fusionarse</strong> 60% (30/12), no causa daño, sin embargo, una vez ha penetrado en el cerebro del objetivo, el insecto irá ganando cada vez más control. <br><strong>Esquivar</strong> 77% (38/15)." ,
        Cordura : "Ver a un shan produce una pérdida de 0/1D6 Puntos de Cordura."
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
        Movimiento : "6/18 Volando",
        Descripcion_breve: "Colosales Monturas Aladas" ,
        Armadura : "9 puntos de piel gruesa." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Estos monstruos enormes pueden golpear con sus extremidades o morder a un adversario . <br><strong>Morder y retener (mnbr):</strong> Utiliza un ataque de mordisco para apresar y retener a su presa." ,
        Habilidades : "<strong>Combatir</strong> 45 % (22/9), daño 1D6 + Bonificación al daño.<br><strong>Morder y retener (mnbr)</strong> daño 2D6+2 + 1D6 daño por asalto mientras siga apresado . <br><strong>Esquivar</strong> 25% (12/5)" ,
        Cordura : "Ver a un shantak produce una pérdida de 0/1D6 Puntos de Cordura."
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
        Movimiento : "6/18 Volando",
        Descripcion_breve: "Fétidas Iridiscencias" ,
        Armadura : "Ninguna, pero (1) los ataques de fuego o electricidad causan solo la mitad del daño; (2) armas físicas co mo las armas de fuego y los cuchillos causan solo 1 punto de daño por impacto; (3) un shoggoth regenera 2 Puntos de Vida por asalto." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Durante el combate, un shoggoth cubre un área de 5 m<sup>2</sup>. y es capaz de generar a voluntad tentácu los, zarpas o cu alquier otro t ipo de apéndices con lo s que llevar a cabo un ataque apla st ante. Aquellos desafortunados que sean alcanzados por el ataque de un shoggoth también podrán ser engullidos. <br><strong>Engullir:</strong> Cada persona eng ullida en el interior del shoggoth es atacada por separado, y deberá vencer en una tirada enfrentada de FUE o será asimilada. Si el shoggot h ataca a más de un objetivo deberá dividir su FUE entre todos ellos. Las víctimas atrapadas en e l interior de la oscura ma sa de l shoggoth solo podrán contraatacar en aqu e ll os asa ltos en lo s que superen una tirada de FUE. Cada asa lto que una víctima continúe atrapada en el in terior d e un shoggoth perderá una cantidad de Puntos de Vida igual a la Boni ficación a l daño del shoggoth; ese daño es pro ducto de la s fractura s, el aplastamiento y la succión. Un shoggoth es capaz de eng ullir cualquier cantid ad de enemigos; sin embargo, el TAM combinado de estos no podrá exceder el TAM del shoggoth." ,
        Habilidades : "<strong>Combatir<strong> 70% (35/14), daño igual a la Bonificación al daño o puede engullir al objetivo (como se indicaba anteriormente) . <br><strong>Esquivar</strong> 8% (4/1)." ,
        Cordura : "Ver a un shoggoth produce un a pérdida de 1D6/ 1D20 Puntos de Cordura."
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
        Movimiento : "8 Caminando",
        Descripcion_breve: "A la vista un Humano Cualquiera" ,
        Armadura : "Ninguna, pero (1) los ataques de fuego o electricidad causan solo la mitad del daño; (2) las armas físicas como las armas de fuego y los cuchillos causan solo 1 punto de daño por impacto; (3) un shoggoth regenera 2 Puntos de Vida por asalto." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los Shoggots en forma humana pueden utilizar armas igual que lo hacen los humanos." ,
        Habilidades : "<strong>Combatir</strong> 90% (45/18), daño 1D6+2 + Bonificación al daño de su forma actual;<br><strong>Esquivar</strong> 26% (13/5). <br><strong>Encanto</strong> 70%, <br><strong>Intimidar</strong> 60%, <br><strong>Persuasión</strong> 60%, <br><strong>Sigilo</strong> 65%, y todas aquellas que el Guardián estime oportunas." ,
        Cordura : "Ver la auténtica forma de un Señor de los shoggoths produce una pérdida de 1D6/1D20 Puntos de Cordura. El Guardián podrá añadir una pérdida de 1/1D3 Puntos de Cordura para aquellos que sean testigos de la transformación de un Señor de los shoggoths entre su forma humana y su forma monstruosa."
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
        Movimiento : "8 Caminando/10 Rodando",
        Descripcion_breve: "Monstruosidades Corpulentas" ,
        Armadura : "Ninguna, pero (1) los ataques de fuego o electricidad causan solo la mitad del daño; (2) las armas físicas como las armas de fuego y los cuchillos causan solo 1 punto de daño por impacto; (3) un shoggoth regenera 2 Puntos de Vida por asalto." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Un Señor de los shoggoths intentará engullir a su presa viva dentro de su cuerpo gelatinoso y burbujeante. Cuando atrapa a una presa , la captura y la retiene mientras intenta absorberla al interior de su masa corporal, donde podr·á digerirla. Mientras esté siendo digerida , la víctima sufrirá 1D6 puntos de danio por asalto producidos por los jugos gástricos y fluidos digestivos que envuelven el cuerpo del desafortunado. Aquellos que sean capturados de esta forma podrán intentar liberarse una vez por asalto mediante una tirada enfrentada de FUE. A diferencia de sus parientes más grandes, los Señores de los shoggoth solo pueden alimentarse de una víctima al mismo tiempo. Mientras se esté alimentando, el Señor de los shoggoths no podrá utilizar su ataque aplastante, aunque seguirá pudiendo usar sus poderosos puños pseudópodos." ,
        Habilidades : "<strong>Combatir</strong> 90% (45/18), daño 1D6+2 + Bonificación al daño de su forma actual; o engullir al objetivo, daño 1D6 por asalto (daño de ácido) hasta que la víctima muere. <br><strong>Esquivar</strong> 26% (13/5). <br><strong>Sigilo</strong> 65%, y todas aquellas que el Guardián estime oportunas." ,
        Cordura : "Ver la auténtica forma de un Señor de los shoggoths produce una pérdida de 1D6/1D20 Puntos de Cordura. El Guardián podrá añadir una pérdida de 1/1D3 Puntos de Cordura para aquellos que sean testigos de la transformación de un Señor de los shoggoths entre su forma humana y su forma monstruosa."
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
        Movimiento : "5",
        Descripcion_breve: "Esclavos en Descomposición" ,
        Armadura : "Ninguna." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los sirviente de Gla'aki cuentan con el repertorio habitual de ataques sin armas disponible para cualquier humanoide, o también pueden ir armados, normalmente con una hoz." ,
        Habilidades : "<strong>Combatir</strong> 40% (20/8), daño 1D3 + Bonificación al daño o según el arma (normalmente una hoz, daño 1D6 + 1 + Bonificación al daño). <br><strong>Esquivar</strong> 10% (5/2)." ,
        Cordura : "Si su aspecto es humano no producen una pérdida de Puntos de Cordura; 1/1D8 Puntos de Cordura si es el de un cadáver viviente; 1/1D1O Puntos de Cordura si está afectado por la descomposición verde."
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
        Movimiento : "8",
        Descripcion_breve: "Crueles y Salvajes Adoradores de los Dioses Oscuros" ,
        Armadura : "Ninguna." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los Tcho -Tcho cuentan con el repertorio habitual de ataques sin armas disponible para cualquier humanoide, y pueden utilizar cualquier arma humana." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño 1D3 + Bonificación al daño o según el tipo de arma . <br><strong>Esquivar</strong> 26% (13/5). <br><strong>Intimidar</strong> 40%, <br><strong>Nadar</strong> 45%, <br><strong>Seguir rastros</strong> 50%, <br><strong>Sigilo</strong> 60%." ,
        Cordura : "Ver a estas criaturas degeneradas produce una pérdida d e 0/1D3 Puntos de Cordura."
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
        Movimiento : "7",
        Descripcion_breve: "Viajeros que se Desplazan Entre Dimensiones" ,
        Armadura : "3 puntos de piel gruesa" ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Los vagabundos dimensionales pueden atacar con ambas garras, pueden intentar apresar a un adversario y desplazarse con él hasta otra dimensión utilizando un ataque sin armas." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), 1D8 + Bonificación al daño. <br><strong>Apresar (mnbr)</strong> apresado y retenido durante 1 asalto antes de desaparecer rumbo a ... ¿quién sabe dónde7 <br><strong>Esquivar</strong> 30% (15/6)." ,
        Cordura : "Ver a un vagabundo dimensional produce una pérdida de Cordura de 0/1D10."
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
        Movimiento : "6/9 Volando",
        Descripcion_breve: "Rapaces Invisibles" ,
        Armadura : "4 puntos de piel gruesa. Las balas solo causan la mitad de daño al integumento extraterrestre de los vampiros estelares." ,
        Ataques_por_asalto : "3" ,
        Ataques_de_combate : "Pueden utilizar sus garras para atacar. <br><strong>Capturar con las garras (mnbr):</strong> Una vez atrape a su víctima, en el asalto siguiente el vampiro este lar utilizará su ataque de mordisco para absorberle la sangre. <br><strong>Mordisco:</strong> Solo se puede utilizar contra una víctima apresada, ya sea viva o muerta; una víctima viva perderá 3D10 puntos de FUE por asalto debido a la pérd ida de sangre. Si no muere, la víctima recuperará esta pérdida rápidamente, en tres días o menos." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño 1D6 + Bonificación al daño. <br><strong>Capturar (mnbr)</strong> no causa daño, captura al objetivo . Se puede morder a un objetivo capturado en el asalto siguiente. <br><strong>Mordisco</strong> éxito automático contra un objetivo capturado, daño 3D1O FUE por asalto por la pérdida de sangre.<br><strong>Esquivar</strong> 23% (11/4)." ,
        Cordura : "Ver a un vampiro estelar o ser testigo de uno de sus ataques produce una pérdida de 1/1D10 Puntos de Cordura."
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
        Movimiento : "11 Volando",
        Descripcion_breve: "Los que Alimentan la Llama" ,
        Armadura : "Las armas materiales normales (cuchillas, balas, etc.) no les hacen daño . El agua les causa 1 punto de daño por cada 2 litros que se les vierta encima; un extintor de mano les causa 1D6 puntos de daño; y un cubo de agua , 1D3 puntos de daño." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los vampiros de fuego atacan tocando a sus víctimas, y pueden prender objetos inflamables con solo tocarlos. Causan daño a los humanos por el golpe de calor. Para determinar la gravedad de este golpe de calor, tira 2D6 puntos de daño correspondientes al ataque del vampiro. Si el investigador supera una tirada de CON, solo sufrirá la mitad de est e daño; si fracasa, sufrirá todo el daño. En ese mismo ataque, el vampiro intentará absorber Puntos de Magia de su objetivo: plantea una tirada enfrentada de POD; si gana el vampiro, robará 1D1O Puntos de Magia de su víctima; si gana el objetivo, el vampiro de fuego perderá uno de sus propios Puntos de Magia. Así, por cada ataque de un vampiro de fuego tendrás que tirar dos veces: una para determinar el daño producido por el calor y otra para determinar la pérdida de Puntos de Magia ." ,
        Habilidades : "<strong>Combatir</strong> 85% (42/17), daño 2D6 por la quemadura + drenaje de Puntos de Magia. <br><strong>Esquivar</strong> 40% (20/8)." ,
        Cordura : "Ver a un vampiro de fuego provoca una pérdida de 0/1D6 Puntos de Cordura."
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
        Movimiento : "7",
        Descripcion_breve: "Viajeros Menta les del Tiempo" ,
        Armadura : "8 puntos de piel." ,
        Ataques_por_asalto : "2 (solo se puede disparar elarma lanzarrayos una vez por asalto)." ,
        Ataques_de_combate : "Durante el combate, un yithiano puede atacar con sus pinzas. También posee un gran tamaño que podrá aprovechar para aplastar o golpear a un investigador. Sin embargo, esta especie civilizada evita el combate cuerpo a cuerpo, y prefieren usar armas que escupen intensas descargas eléctricas, armas que se crearon originalmente para destruir a los pólipos volantes. <br><strong>Arma lanzarrayos:</strong> Existen muchos tipos de Armas lanzarrayos (véase la página 278). Una de las más comunes contiene una batería con 32 cargas, y se tarda 1 asalto en recargarla . Se pueden disparar varias cargas a la vez, aunque cada carga que se dispara por encima de cuatro hará que aumenten las probabilidades de que el arma se queme en un 5% acumulativo. Así, si se disparan 7 cargas a la vez, el arma quedará destruida si se obtiene un resultado de 15 o menos en una tirada de 1D1OO. Cada carga causa 1D1O puntos de daño al objetivo, por lo que 3 cargas causarán 3D1O puntos de daño . El arma tiene un alcance básico de 100m. Por cada 100m adicionales, añade un dado de penalización a la tirada de ataque." ,
        Habilidades : "<strong>Combatir</strong> 40% (20/8), daño 1 D6 + Bonificación al daño. <br><strong>Arma lanzarrayos</strong> 30% (15/6), daño 1D1O por cada carga.<br><strong>Esquivar</strong> 25% (12/5)." ,
        Cordura : "Ver a un miembro de la Gran Raza produce una pérdida de 0/1D6 Puntos de Cordura."
 }




function Crear_criatura(){

        var Hechizo_1 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_2 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_3 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_4 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_5 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_6 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_7 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_8 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_9 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_10 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_11 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_12 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_13 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_14 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_15 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_16 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_17 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_18 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_19 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];
        var Hechizo_20 = Grimorio_Cthulhu[Math.floor(Math.random() * Grimorio_Cthulhu.length)];

        var Poder_especial_criatura = "No";

        var Apariencia_criatura = 0;

        var Educacion_criatura = 0;

        var Codigo_criatura = parseInt(Criatura.value);

        var Poder_especial_humano = "No";

        var Habilidades = "No" ;

        //

        //if de calculos para hechizos

        var Probabilidad_hechizo_criatura = D100;


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

         var Descripcion = Angel_descarnado.Descripcion_breve;

         var Armadura = Angel_descarnado.Armadura;

         var Cantidad_ataques = Angel_descarnado.Ataques_por_asalto;

         var Ataques = Angel_descarnado.Ataques_de_combate;

         var Habilidades = Angel_descarnado.Habilidades;

         var Perdida_de_Cordura = Angel_descarnado.Cordura;

        //  var Poder_especial_criatura = Angel_descarnado

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

                        let Cantidad = Math.floor((Math.random() * (4 - 1 + 1 ) + 1))

                        var Hechizo_criatura = ""
                }

         var Poder_especial_criatura = Hechizo_criatura;

         var Descripcion = Antiguo.Descripcion_breve;

         var Armadura = Antiguo.Armadura;

         var Cantidad_ataques = Antiguo.Ataques_por_asalto;

         var Ataques = Antiguo.Ataques_de_combate;

         var Habilidades = Antiguo.Habilidades;

         var Perdida_de_Cordura = Antiguo.Cordura;

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

         var Descripcion = Byakhee.Descripcion_breve;

         var Armadura = Byakhee.Armadura;

         var Cantidad_ataques = Byakhee.Ataques_por_asalto;

         var Ataques = Byakhee.Ataques_de_combate;

         var Habilidades = Byakhee.Habilidades;

         var Perdida_de_Cordura = Byakhee.Cordura;

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

         var Descripcion = Cthonian.Descripcion_breve;

         var Armadura = Cthonian.Armadura;

         var Cantidad_ataques = Cthonian.Ataques_por_asalto;

         var Ataques = Cthonian.Ataques_de_combate;

         var Habilidades = Cthonian.Habilidades;

         var Perdida_de_Cordura = Cthonian.Cordura;

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

         var Descripcion = Color_surgido_del_espacio.Descripcion_breve;

         var Armadura = Color_surgido_del_espacio.Armadura;

         var Cantidad_ataques = Color_surgido_del_espacio.Ataques_por_asalto;

         var Ataques = Color_surgido_del_espacio.Ataques_de_combate;

         var Habilidades = Color_surgido_del_espacio.Habilidades;

         var Perdida_de_Cordura = Color_surgido_del_espacio.Cordura;

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

                var Descripcion = Dagon_e_hidra.Descripcion_breve;

                var Armadura = Dagon_e_hidra.Armadura;
       
                var Cantidad_ataques = Dagon_e_hidra.Ataques_por_asalto;
       
                var Ataques = Dagon_e_hidra.Ataques_de_combate;
       
                var Habilidades = Dagon_e_hidra.Habilidades;
       
                var Perdida_de_Cordura = Dagon_e_hidra.Cordura;
       
       
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

                var Descripcion = Dhole.Descripcion_breve;

                var Armadura = Dhole.Armadura;
       
                var Cantidad_ataques = Dhole.Ataques_por_asalto;
       
                var Ataques = Dhole.Ataques_de_combate;
       
                var Habilidades = Dhole.Habilidades;
       
                var Perdida_de_Cordura = Dhole.Cordura;
       
       
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

                var Descripcion = Ghast.Descripcion_breve;

                var Armadura = Ghast.Armadura;

                var Cantidad_ataques = Ghast.Ataques_por_asalto;

                var Ataques = Ghast.Ataques_de_combate;

                var Habilidades = Ghast.Habilidades;

                var Perdida_de_Cordura = Ghast.Cordura;

       
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

                var Descripcion = Gnoph_keh.Descripcion_breve;

                var Armadura = Gnoph_keh.Armadura;
       
                var Cantidad_ataques = Gnoph_keh.Ataques_por_asalto;
       
                var Ataques = Gnoph_keh.Ataques_de_combate;
       
                var Habilidades = Gnoph_keh.Habilidades;
       
                var Perdida_de_Cordura = Gnoph_keh.Cordura;
       
       
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

                var Descripcion = Gul.Descripcion_breve;

                var Armadura = Gul.Armadura;
       
                var Cantidad_ataques = Gul.Ataques_por_asalto;
       
                var Ataques = Gul.Ataques_de_combate;
       
                var Habilidades = Gul.Habilidades;
       
                var Perdida_de_Cordura = Gul.Cordura;
       
       
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

                var Descripcion = Habitante_de_las_arenas.Descripcion_breve;

                var Armadura = Habitante_de_las_arenas.Armadura;
       
                var Cantidad_ataques = Habitante_de_las_arenas.Ataques_por_asalto;
       
                var Ataques = Habitante_de_las_arenas.Ataques_de_combate;
       
                var Habilidades = Habitante_de_las_arenas.Habilidades;
       
                var Perdida_de_Cordura = Habitante_de_las_arenas.Cordura;
       
       
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

                var Descripcion = Hibrido_profundo.Descripcion_breve;

                var Armadura = Hibrido_profundo.Armadura;
       
                var Cantidad_ataques = Hibrido_profundo.Ataques_por_asalto;
       
                var Ataques = Hibrido_profundo.Ataques_de_combate;
       
                var Habilidades = Hibrido_profundo.Habilidades;
       
                var Perdida_de_Cordura = Hibrido_profundo.Cordura;
       
       
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

                var Descripcion = Hombre_serpiente.Descripcion_breve;

                var Armadura = Hombre_serpiente.Armadura;
       
                var Cantidad_ataques = Hombre_serpiente.Ataques_por_asalto;
       
                var Ataques = Hombre_serpiente.Ataques_de_combate;
       
                var Habilidades = Hombre_serpiente.Habilidades;
       
                var Perdida_de_Cordura = Hombre_serpiente.Cordura;
       
       
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

                var Descripcion = Horrendo_cazador.Descripcion_breve;

                var Armadura = Horrendo_cazador.Armadura;
       
                var Cantidad_ataques = Horrendo_cazador.Ataques_por_asalto;
       
                var Ataques = Horrendo_cazador.Ataques_de_combate;
       
                var Habilidades = Horrendo_cazador.Habilidades;
       
                var Perdida_de_Cordura = Horrendo_cazador.Cordura;
       
       
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

                var Descripcion = El_horror_en_la_tinta.Descripcion_breve;

                var Armadura = El_horror_en_la_tinta.Armadura;
       
                var Cantidad_ataques = El_horror_en_la_tinta.Ataques_por_asalto;
       
                var Ataques = El_horror_en_la_tinta.Ataques_de_combate;
       
                var Habilidades = El_horror_en_la_tinta.Habilidades;
       
                var Perdida_de_Cordura = El_horror_en_la_tinta.Cordura;
       
       
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

                var Descripcion = Insectos_de_shaggai.Descripcion_breve;

                var Armadura = Insectos_de_shaggai.Armadura;
       
                var Cantidad_ataques = Insectos_de_shaggai.Ataques_por_asalto;
       
                var Ataques = Insectos_de_shaggai.Ataques_de_combate;
       
                var Habilidades = Insectos_de_shaggai.Habilidades;
       
                var Perdida_de_Cordura = Insectos_de_shaggai.Cordura;
       
       
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

                var Descripcion = Lloigor.Descripcion_breve;

                var Armadura = Lloigor.Armadura;
       
                var Cantidad_ataques = Lloigor.Ataques_por_asalto;
       
                var Ataques = Lloigor.Ataques_de_combate;
       
                var Habilidades = Lloigor.Habilidades;
       
                var Perdida_de_Cordura = Lloigor.Cordura;
       
       
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

                var Descripcion = Migo.Descripcion_breve;

                var Armadura = Migo.Armadura;
       
                var Cantidad_ataques = Migo.Ataques_por_asalto;
       
                var Ataques = Migo.Ataques_de_combate;
       
                var Habilidades = Migo.Habilidades;
       
                var Perdida_de_Cordura = Migo.Cordura;
       
       
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

                var Descripcion = Perros_de_tindalos.Descripcion_breve;

                var Armadura = Perros_de_tindalos.Armadura;
       
                var Cantidad_ataques = Perros_de_tindalos.Ataques_por_asalto;
       
                var Ataques = Perros_de_tindalos.Ataques_de_combate;
       
                var Habilidades = Perros_de_tindalos.Habilidades;
       
                var Perdida_de_Cordura = Perros_de_tindalos.Cordura;
       
       
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

                var Descripcion = Polipo_volante.Descripcion_breve;

                var Armadura = Polipo_volante.Armadura;
       
                var Cantidad_ataques = Polipo_volante.Ataques_por_asalto;
       
                var Ataques = Polipo_volante.Ataques_de_combate;
       
                var Habilidades = Polipo_volante.Habilidades;
       
                var Perdida_de_Cordura = Polipo_volante.Cordura;
       
       
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

                var Descripcion = Profundo.Descripcion_breve;

                var Armadura = Profundo.Armadura;
       
                var Cantidad_ataques = Profundo.Ataques_por_asalto;
       
                var Ataques = Profundo.Ataques_de_combate;
       
                var Habilidades = Profundo.Habilidades;
       
                var Perdida_de_Cordura = Profundo.Cordura;
       
       
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

                var Descripcion = Reptante.Descripcion_breve;

                var Armadura = Reptante.Armadura;
       
                var Cantidad_ataques = Reptante.Ataques_por_asalto;
       
                var Ataques = Reptante.Ataques_de_combate;
       
                var Habilidades = Reptante.Habilidades;
       
                var Perdida_de_Cordura = Reptante.Cordura;
       
       
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

                var Descripcion = Retoño_oscuro.Descripcion_breve;

                var Armadura = Retoño_oscuro.Armadura;
       
                var Cantidad_ataques = Retoño_oscuro.Ataques_por_asalto;
       
                var Ataques = Retoño_oscuro.Ataques_de_combate;
       
                var Habilidades = Retoño_oscuro.Habilidades;
       
                var Perdida_de_Cordura = Retoño_oscuro.Cordura;
       
       
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

                var Descripcion = Semilla_estelar.Descripcion_breve;

                var Armadura = Semilla_estelar.Armadura;
       
                var Cantidad_ataques = Semilla_estelar.Ataques_por_asalto;
       
                var Ataques = Semilla_estelar.Ataques_de_combate;
       
                var Habilidades = Semilla_estelar.Habilidades;
       
                var Perdida_de_Cordura = Semilla_estelar.Cordura;
       
       
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

                var Descripcion = Semilla_informe.Descripcion_breve;

                var Armadura = Semilla_informe.Armadura;
       
                var Cantidad_ataques = Semilla_informe.Ataques_por_asalto;
       
                var Ataques = Semilla_informe.Ataques_de_combate;
       
                var Habilidades = Semilla_informe.Habilidades;
       
                var Perdida_de_Cordura = Semilla_informe.Cordura;
       
       
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

                var Descripcion_humano = Señor_de_los_shoggoths_humano.Descripcion_breve;

                var Armadura_humano = Señor_de_los_shoggoths_humano.Armadura;
       
                var Cantidad_ataques_humano = Señor_de_los_shoggoths_humano.Ataques_por_asalto;
       
                var Ataques_humano = Señor_de_los_shoggoths_humano.Ataques_de_combate;
       
                var Habilidades_humano = Señor_de_los_shoggoths_humano.Habilidades;
       
                var Perdida_de_Cordura_humano = Señor_de_los_shoggoths_humano.Cordura;
       
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

                var Descripcion = Señor_de_los_shoggoths.Descripcion_breve;

                var Armadura = Señor_de_los_shoggoths.Armadura;
       
                var Cantidad_ataques = Señor_de_los_shoggoths.Ataques_por_asalto;
       
                var Ataques = Señor_de_los_shoggoths.Ataques_de_combate;
       
                var Habilidades = Señor_de_los_shoggoths.Habilidades;
       
                var Perdida_de_Cordura = Señor_de_los_shoggoths.Cordura;
       
       
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

                var Descripcion = Ser_rata.Descripcion_breve;

                var Armadura = Ser_rata.Armadura;
       
                var Cantidad_ataques = Ser_rata.Ataques_por_asalto;
       
                var Ataques = Ser_rata.Ataques_de_combate;
       
                var Habilidades = Ser_rata.Habilidades;
       
                var Perdida_de_Cordura = Ser_rata.Cordura;
       
       
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

                var Descripcion = Servidor_de_los_otros_dioses.Descripcion_breve;

                var Armadura = Servidor_de_los_otros_dioses.Armadura;
       
                var Cantidad_ataques = Servidor_de_los_otros_dioses.Ataques_por_asalto;
       
                var Ataques = Servidor_de_los_otros_dioses.Ataques_de_combate;
       
                var Habilidades = Servidor_de_los_otros_dioses.Habilidades;
       
                var Perdida_de_Cordura = Servidor_de_los_otros_dioses.Cordura;
       
       
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

                var Descripcion = Shantak.Descripcion_breve;

                var Armadura = Shantak.Armadura;
       
                var Cantidad_ataques = Shantak.Ataques_por_asalto;
       
                var Ataques = Shantak.Ataques_de_combate;
       
                var Habilidades = Shantak.Habilidades;
       
                var Perdida_de_Cordura = Shantak.Cordura;
       
       
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

                var Descripcion = Shoggoth.Descripcion_breve;

                var Armadura = Shoggoth.Armadura;
       
                var Cantidad_ataques = Shoggoth.Ataques_por_asalto;
       
                var Ataques = Shoggoth.Ataques_de_combate;
       
                var Habilidades = Shoggoth.Habilidades;
       
                var Perdida_de_Cordura = Shoggoth.Cordura;
       
       
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

                var Descripcion = Sirviente_Glaaki.Descripcion_breve;

                var Armadura = Sirviente_Glaaki.Armadura;
       
                var Cantidad_ataques = Sirviente_Glaaki.Ataques_por_asalto;
       
                var Ataques = Sirviente_Glaaki.Ataques_de_combate;
       
                var Habilidades = Sirviente_Glaaki.Habilidades;
       
                var Perdida_de_Cordura = Sirviente_Glaaki.Cordura;
       
       
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

                var Descripcion = Tcho_tcho.Descripcion_breve;

                var Armadura = Tcho_tcho.Armadura;
       
                var Cantidad_ataques = Tcho_tcho.Ataques_por_asalto;
       
                var Ataques = Tcho_tcho.Ataques_de_combate;
       
                var Habilidades = Tcho_tcho.Habilidades;
       
                var Perdida_de_Cordura = Tcho_tcho.Cordura;
       
       
               }
               
        else if (Codigo_criatura === 33) {

                var Nombre_criatura = Vagabundo_dimensiona.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Vagabundo_dimensiona.FUE_max - Vagabundo_dimensiona.FUE_min + 1 ) + Vagabundo_dimensiona.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Vagabundo_dimensiona.CON_max - Vagabundo_dimensiona.CON_min + 1 ) + Vagabundo_dimensiona.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Vagabundo_dimensiona.TAM_max - Vagabundo_dimensiona.TAM_min + 1 ) + Vagabundo_dimensiona.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Vagabundo_dimensiona.DES_max - Vagabundo_dimensiona.DES_min + 1 ) + Vagabundo_dimensiona.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Vagabundo_dimensiona.INT_max - Vagabundo_dimensiona.INT_min + 1 ) + Vagabundo_dimensiona.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Vagabundo_dimensiona.POD_max - Vagabundo_dimensiona.POD_min + 1 ) + Vagabundo_dimensiona.POD_min) * 5;
       
                var Movimiento_criatura = Vagabundo_dimensiona.Movimiento;

                var Descripcion = Vagabundo_dimensiona.Descripcion_breve;

                var Armadura = Vagabundo_dimensiona.Armadura;
       
                var Cantidad_ataques = Vagabundo_dimensiona.Ataques_por_asalto;
       
                var Ataques = Vagabundo_dimensiona.Ataques_de_combate;
       
                var Habilidades = Vagabundo_dimensiona.Habilidades;
       
                var Perdida_de_Cordura = Vagabundo_dimensiona.Cordura;
       
       
               }
               
        else if (Codigo_criatura === 34) {

                var Nombre_criatura = Vampiro_de_fuego.Nombre;
       
                var Fuerza_criatura = 0;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Vampiro_de_fuego.CON_max - Vampiro_de_fuego.CON_min + 1 ) + Vampiro_de_fuego.CON_min) * 5;
       
                var Tamaño_criatura = Vampiro_de_fuego.TAM;
       
                var Destresa_criatura = Math.floor(Math.random() * (Vampiro_de_fuego.DES_max - Vampiro_de_fuego.DES_min + 1 ) + Vampiro_de_fuego.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Vampiro_de_fuego.INT_max - Vampiro_de_fuego.INT_min + 1 ) + Vampiro_de_fuego.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Vampiro_de_fuego.POD_max - Vampiro_de_fuego.POD_min + 1 ) + Vampiro_de_fuego.POD_min) * 5;
       
                var Movimiento_criatura = Vampiro_de_fuego.Movimiento;

                var Descripcion = Vampiro_de_fuego.Descripcion_breve;

                var Armadura = Vampiro_de_fuego.Armadura;
       
                var Cantidad_ataques = Vampiro_de_fuego.Ataques_por_asalto;
       
                var Ataques = Vampiro_de_fuego.Ataques_de_combate;
       
                var Habilidades = Vampiro_de_fuego.Habilidades;
       
                var Perdida_de_Cordura = Vampiro_de_fuego.Cordura;
       
       
               }
               
        else if (Codigo_criatura === 35) {

                var Nombre_criatura = Vampiro_estelar.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Vampiro_estelar.FUE_max - Vampiro_estelar.FUE_min + 1 ) + Vampiro_estelar.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Vampiro_estelar.CON_max - Vampiro_estelar.CON_min + 1 ) + Vampiro_estelar.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Vampiro_estelar.TAM_max - Vampiro_estelar.TAM_min + 1 ) + Vampiro_estelar.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Vampiro_estelar.DES_max - Vampiro_estelar.DES_min + 1 ) + Vampiro_estelar.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Vampiro_estelar.INT_max - Vampiro_estelar.INT_min + 1 ) + Vampiro_estelar.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Vampiro_estelar.POD_max - Vampiro_estelar.POD_min + 1 ) + Vampiro_estelar.POD_min) * 5;
       
                var Movimiento_criatura = Vampiro_estelar.Movimiento;

                var Descripcion = Vampiro_estelar.Descripcion_breve;

                var Armadura = Vampiro_estelar.Armadura;
       
                var Cantidad_ataques = Vampiro_estelar.Ataques_por_asalto;
       
                var Ataques = Vampiro_estelar.Ataques_de_combate;
       
                var Habilidades = Vampiro_estelar.Habilidades;
       
                var Perdida_de_Cordura = Vampiro_estelar.Cordura;
       
       
               }
               
        else if (Codigo_criatura === 36) {

                var Nombre_criatura = Yithiano.Nombre;
       
                var Fuerza_criatura = Math.floor(Math.random() * (Yithiano.FUE_max - Yithiano.FUE_min + 1 ) + Yithiano.FUE_min) * 5;
       
                var Constitucion_criatura = Math.floor(Math.random() * (Yithiano.CON_max - Yithiano.CON_min + 1 ) + Yithiano.CON_min) * 5;
       
                var Tamaño_criatura = Math.floor(Math.random() * (Yithiano.TAM_max - Yithiano.TAM_min + 1 ) + Yithiano.TAM_min) * 5;
       
                var Destresa_criatura = Math.floor(Math.random() * (Yithiano.DES_max - Yithiano.DES_min + 1 ) + Yithiano.DES_min) * 5;
       
                var Inteligencia_criatura = Math.floor(Math.random() * (Yithiano.INT_max - Yithiano.INT_min + 1 ) + Yithiano.INT_min) * 5;
       
                var Poder_criatura = Math.floor(Math.random() * (Yithiano.POD_max - Yithiano.POD_min + 1 ) + Yithiano.POD_min) * 5;
       
                var Movimiento_criatura = Yithiano.Movimiento;

                var Descripcion = Yithiano.Descripcion_breve;

                var Armadura = Yithiano.Armadura;
       
                var Cantidad_ataques = Yithiano.Ataques_por_asalto;
       
                var Ataques = Yithiano.Ataques_de_combate;
       
                var Habilidades = Yithiano.Habilidades;
       
                var Perdida_de_Cordura = Yithiano.Cordura;
       
       
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






        // Se Genera en el html la criatura que se pide
        
        if ( Codigo_criatura === 26 ) {

                document.getElementById("result").innerHTML =
                "<br><h3> Nombre : "+Firstname_Man[Nombre_humano]+"</h3>"+
                "<br><h4> Descripcion breve : "+Descripcion_humano+"</h4>"+
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
                "<br><strong>Armadura : </strong>"+Armadura_humano+
                "<br><strong>Cantidad de Ataques: </strong>"+Cantidad_ataques_humano+
                "<br><br><strong>Ataques durante el combate: </strong>"+Ataques_humano+
                "<br><br><strong>Habilidades : </strong>"+Habilidades_humano+
                "<br><strong>Perdida de cordura : </strong>"+Perdida_de_Cordura_humano+
                "<br><li>Poder Especial: "+Poder_especial_humano+"</ul><br><br>"+

                "<br><h3> Nombre : "+Nombre_criatura+"</h3>"+
                "<br><h4> Descripcion breve : "+Descripcion+"</h4>"+
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
                "</ul><br><strong>Armadura : </strong>"+Armadura+
                "<br><strong>Cantidad de Ataques: </strong>"+Cantidad_ataques+
                "<br><br><strong>Ataques durante el combate: </strong>"+Ataques+
                "<br><br><strong>Habilidades : </strong>"+Habilidades+
                "<br><strong>Perdida de cordura : </strong>"+Perdida_de_Cordura+ 
                "<br><li>"+"Poder Especial: "+Poder_especial_criatura
        }

        else if (Codigo_criatura === 12) {

                document.getElementById("result").innerHTML =
                "<br><h3> Nombre : "+Nombre_criatura+"</h3>"+
                "<br><h4> Descripcion breve : "+Descripcion+"</h4>"+
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
                "</ul><br><strong>Armadura : </strong>"+Armadura+
                "<br><strong>Cantidad de Ataques: </strong>"+Cantidad_ataques+
                "<br><br><strong>Ataques durante el combate: </strong>"+Ataques+
                "<br><br><strong>Habilidades : </strong>"+Habilidades+
                "<br><strong>Perdida de cordura : </strong>"+Perdida_de_Cordura+ 
                "<br><br><h3>Poderes Especial : </h3>"+Poder_especial_criatura
        } 

        else {
                document.getElementById("result").innerHTML =
                "<br><h3> Nombre : "+Nombre_criatura+"</h3>"+
                "<br><h4> Descripcion breve : "+Descripcion+"</h4>"+
                "<h3><br>Stats</h3>"+
                "<ul><li> Fue : "+Fuerza_criatura+
                "<br><li> Con : "+Constitucion_criatura+
                "<br><li> Pod : "+Poder_criatura+
                "<br><li> Des : "+Destresa_criatura+
                "<br><li> Tam : "+Tamaño_criatura+
                "<br><li> Int : "+Inteligencia_criatura+"</ul>"+
                "</ul><br><h3>Combate, habilidades y poderes especiales</h3>"+
                "<br><strong>PV : </strong>"+Vida_criatura+
                "<br><strong>Corpulencia media: </strong>"+Corpulencia_criatura+"</ul>"+
                "<br><strong>Bonificación al daño media: </strong>"+Daño_extra_criatura+
                "<br><strong>Media de puntos de magia: </strong>"+Magia_criatura+
                "<br><strong>Movimiento: </strong>"+Movimiento_criatura+
                "<br><strong>Armadura : </strong>"+Armadura+
                "<br><strong>Cantidad de Ataques: </strong>"+Cantidad_ataques+
                "<br><br><strong>Ataques durante el combate: </strong>"+Ataques+
                "<br><br><strong>Habilidades : </strong>"+Habilidades+
                "<br><strong>Perdida de cordura : </strong>"+Perdida_de_Cordura+ 
                "<br><br><h3>Poderes Especial : </h3>"+Poder_especial_criatura
        }
        

}

// Descripcion_breve: "" ,
// Armadura : "" ,
// Ataques_por_asalto : "" ,
// Ataques_de_combate : "" ,
// Habilidades : "" ,
// Cordura : ""