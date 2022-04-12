const Criatura = document.getElementById("Criaturas");

const crear = document.getElementById("creador");
crear.addEventListener ("click",Crear_criatura);

// grimorio

const Grimorio_Cthulhu = ["Ajar un miembro","Aliento de las profundidades","Atormentar","Bendecir hoja","Cancion de Hastur","Cántico de Thoth","Crear barrera de Naach-Tith",
"Crear niebla de R'lyeh","Crear zombie","Cruz ansada de Prinn","Descomposición verde","Destierro de Yde Etad","Dividir el ka","Dominar","Encantar cuchillo",
"Encantar daga sacrificial","Encantar libro","Explosion mental","Fabrica de hidromiel espacial","Fundir carne","Garra de Nyogtha","Hechizo mortal","Imitar apariencia",
"Inducir el pánico","Inmoviliar a una victima","Intercambio de mentes","Mal de ojo","Maldición de Azathoth","Maldición del pellejo pútrido","Nublar la memoria","Ola de olvido",
"Palabras poderosas","Polvo de Ibn-Ghazi","Polvo de Suleimán","Crear portal","Caja Portal","Encontrar portal","Portal temporal","Proteccion","Protección corporal","Provocar/Curar la ceguera",
"Puño de Yog-Sothoth","Resurrección","Signo rojo de Shudde M'ell","Signo de Voorish","Simbolo arcano","Sugestión mental","Trasformación corporal de Gorgoroth","Trasferencia de mente",];

const Grimorio_ambientales = ["Aliento de la muerte","Alteracion meteorologica","Arenas de la separacion","Crear niebla de R´lyeh","Desafiar la gravedad","Hambre de Kazan","Levantar niebla nocturna",
"Llamar al rayo","Maldición de Apofis","Mirada solar","Mitigar la luz","Ola del olvido","Traer el Haboob"]

const Gromorio_daño_nocombat = ["Abismo al infierno","Abrazo de Yog-Sothoth","Absorber la juventud","Absorber la vida","Activacion","Arbusto humano","Atar un alma","Bacanal","Barrera de dolor",
"Cimoticismo","Corrupcion de lo sagrado","Decadencia insidiosa","Descomposicion verde","Desgarrar velo","Despertar a la Gran Tortuga","Destierro por nombre","Detener corazón","Ensalmo de la sexta sathlatta",
"Enviar a los muertos","Enviar serpiente sagrada","Flautas de locura","Fundir carne","Iluminacion instantánea","Larvas","Llamar a la Negrura","Llamar al rayo","Mal de ojo","Maldición de Chaugnar Faugn",
"Maldición del pellejo pútrido","La maldición marchitante","Maleficio de las runas","Mirada envenenada","Necrosis","Ojo maldito","Pesadilla","Pesadillas","Petrificar","Provocar la enfermedad",
"Provocar/Curar la ceguera","Retirar velo","Signo amarillo","Sombra de Nyarlathotep","Traer la peste"]

const Grimorio_combate= ["Absorcion de poder","Acelerar","Ahogar la mente","Ajar un miembro","Aliento de las profundidades","Aliento de Pazuzu","Anudar carne","Atormentar","Atormentar",
"Canción de Hastur","Canto fúnebre de Nyhargo","Conceder atosbo de verdad","Cuchilla espectral","Danza de fuego","Declamación de la bilis","Desgarro temporal","Destello de Ra","Desvanecimiento",
"Desviar el daño","Dominar","Explosión mental","Garra de Cthulhu","Garra de Nyogtha","Golpe cegador","Gusanos","Hechizo mortal","Incinerar","Inducir el pánico","Ira de Pazuzu","Ira del tiempo","Liquidez",
"Maldición de Azathoth","Maldición de la piedra","Manos de colubra","Manto de fuego","Muerte liquida","Nube mental","Numantina","Ojos de un extraño","Petrificar las extremidades inferiores",
"Polvo dañino de Hermes trimegisto","Polvo de Ibn-Ghazi","Polvo de Suleimán","Puño de Yog-Sothoth","Roce de la decadencia","El signo rojo","Sugestión mental","Tormento inflamatorio","Trance","Vacío de sombras",
"Yugo de la lengua sangrienta"]

const Grimorio_comunicacion = ["Comprensión de lo inefable","Comunicación por vela","Enviar sueño","Espejo de Tarkhun Atep","Ojo maldito","Palabras poderosas","Telepatía","Vocalizar el pensamiento"]

const Grimorio_crear_monstruos = ["Abosrber la sangre de la vida","Acelerar una larva de la niebla","Animar criatura de carne","Animar momia","Atadura gris","Beso del cementerio",
"Convertirse en un cazador espectral","Crar gólem","Crear hijo de la esfinge","Crear muerto viviente","Crear zombi","Despertar/Expulsar al dios interior","Efigie del odio","Fabricar elixir de la vida eterna",
"Maldicion de los seres rata","Obligar a la carne","Ojos de zombi","Piel que camina","Reanimación","Regreso del ser amado","Resurrección","Sombra de Nyarlathotep"]

const Grimorio_destierro_control = ["Ahurentar a un shan","Anzuelo para seres humanos","Atar a un ángel descarnado de la noche","Atar a un Byakhee","Atar a un Cambiaforma","Atar a un Hijo de la esfinge",
"Atar a un Horrendo cazador","Atar a un Profundo","Atar a un Retorño oscuro de Shub-Niggurath","Atar a un Servidor de los dioses exteriores","Atar a un Shoggoth","Atar a un Vagabundo Dimensional",
"Atar a un Vampiro de fuego","Atar a un Vampiro Estelar","Atrapar un alma","Canto fúnebre de Nyhargo","Cruz ansada de Prinn","Desenmascarar a un demonio","Destello de Ra","Desterrar a Apep","Desterrar a Byatis",
"Destierro de Yde Etad","Encarcelar mente","Encerrar a Eihort","Engañar a un soñador","Expulsar a un dios","Expulsar a un espíritu","Exuplsar a un shan","Expulsar al demonio","Extensión oscilante","Gracia elísea",
"Identificar a un espíritu","Inmovilizar a una victima","Llama purificadora de Vorvadoss","Maldición de la oscuridad","Mortificación","Pérdida de favor","Pesquisa de los no muertos","Polvo de Ibn-Ghazi",
"Polvo de Suleiman","Retornar servidor","Sellar pozo","Signo Voorish","Subyugar a las plantas","Subyugar a un shoggoth"]

const Grimorio_encantamiento = ["Armonizar cristal","Bendecir hoja","Collar de persuasión","Crear amuleto","Crear cayado mágico","Crear flauta maldita","Crear signo de Barzai","Crear tablilla maldita",
"Encantamiento de la mala suerte","Encantar amuleto de los primigenios","Encantar anillo","Encantar antorcha","Encantar atributos de poder","Encantar azagaya","Encantar bastón","Encantar brasero",
"Encantar campanas del horror","Encantar carne","Encantar cuadro","Encantar cuchillo","Encantar daga de Nyarlathotep","Encantar efigie animal","Encantar flauta","Encantar grabación","Encantar gris-gris",
"Encantar libro","Encantar muñeca","Encantar palo","Encantar palo","Encantar proyectil","Encantar silbato","Encantar suero","Encantar tablilla de piedra","Encantar vela","Imposición del Signo de Koth",
"Inutilizar objeto","Petrificar","Polvo encantado de Anubis","Vigilia ensoñadora"]

const Grimorio_influencia = ["Activación","Anzuelo para seres humanos","atar a un enemigo","Bacanal","Cimoticismo","Collar de persuasión","Conceder atisbo de verdad","Contactar con un humano",
"Crear signo de Barzai","Decadencia insidiosa","Dominar","Exalación","Exaltación del Ser sin Piel","Fabricar brebaje de Phan","Festín final, El","Hibernar","Inducir el pánico","Jaula dorada del deseo",
"Nube mental","Nublar la memoria","Obligar a la carne","Ojos de un extraño","Palabras poderosas","Pesadilla","Pesadillas","Reunir y canalizar el miedo","Signo de amarillo","Sugestión mental","Trance",
"Vocalizar el pensamiento","Voz de Ra"]

const Grimorio_otros = ["Absorción de poder","Alma errante","Atraer a un barco de peces","Beber del espíritu","Bendición de Bast","Buscar lo perdido","Cántico de poder","Cántico de Thoth","Colmillo de Yig",
"Consumir recuerdos","Danza mental","Descubrir encantamiento","Despertar la luz interior","Encontrar a un hombre serpiente","Encontrar a un soñador","Encontrar Portal","Localizar resonancia vital",
"Exaltación","Fabricar paut","Fórmula Dho","Gran rito del sacrificio","Hilo de Ariadna","Intuir la presencia del otro","Luz de luna","Luz de Seker","Mal de ojo","Mortificación","Percibir texto","Percibir vida",
"Perfección","Perspicacia de las almas gemelas","Poder de Nyambe","Preparar cadáver","Promesa innombrable","Reencarnación","Reunir y canalizar el miedo","Ritual de purificacion","Ritual del momoy",
"Serenidad terrenal","Singo de Voorish","Sofocar la sospecha","Transición espectral","Ver portal"]

const Grimorio_prolongar_vida = ["Absorber la sangre de la vida","Absorber la vida","Alimento de la vida","Crear Protección personal","Dividir el ka","Inmortalidad","Muda sagrada de la serpiente",
"Muerte de Koschéi, La","Pacto de Quachil Uttaus","Posesión","Prolongar vida","Resurrección","Transferencia de mente","Transferir alma","Transferir órgano","Transferir parte corporal"]

const Grimorio_proteccion = ["Calidez mental","Campana de Tezchaptl","Cántico de proteccion","Círculo de náusea","Circulo de proteccion","Crear barrera de Naach-Tith","Crear polvo contra zombis",
"Crear protección personal","Desviar el daño","Devorar filo","Dicha","Dividir el ka","Extensión oscilante","Extracción del alma","Formula de Einstein","Impetu del corazón","Imposición del Pentágono pnakótico",
"Imposición del Signo de Koth","Ojo de luz de oscuridad","Pegar carne","Protección","Protección contra el Mal de ojo","Protección de Anubis","Ritaul Saaamaaa","Rueda de niebla de Eibon","Sello de Isis",
"Sello de Nephren-Ka","Serenidad terrenal","Signo protector","Símbolo arcano","Trazar círculo","Vaciar la mente"]

const Grimorio_temporales = ["Adivinación","Conjurar cristal de Mortlan","Crear ventana de obsevación","Desgarro temporal","Fabricar droga de Liao","Fabricar parakete","Mirar al futuro","Mostrar el fin del camino",
"Portal temporal","Roce de la decadencia","Trampa temporal","Visión premonitoria"]

const Grimorio_tierra_del_sueño = ["Alzar a los fantasmas de Ib","Anatema","Anillos concéntricos del gusano","Barrera oblonga","Caja negra","Canción de Glissande","Cascada de Florin","Convocar a la plaga",
"Cortnas de encaje de Hish","Creación de venerabilidad","Dardos esmeralda de Ptath","Deflexión","Destripador","Disolver esqueleto","Encontrar a un soñador","Escudo flamígero","Esfera lavada de Ptath",
"Espiral de Suth","estabilidad","Explosión cardíaca","Explosión conmocionante","Expulsión onírica","Fabricar hidromiel espacial","Fauces del pandemónium","Fuerza irresistible","Gloria del serafín",
"Hechizo perdido de Ib, El","Hinchar","Horno de Bolonath","Invisibilidad","Involución","Ladrón de almas","Lasitud de Phein","Levantar a los muertos","Llama macilenta","La locura furiosa","Maldición de Cerrit",
"Mandrágora","Mente de hierro","Minimizar","Mundo de cristal","Niebla plateada, La","Ola de calor de Katarien","Pantalla equilátera","Paralización de Eanora","Pared opaca","Potencia de Throth",
"Rayo de Malenkamon","Red blanca de Soren","Ropas vivientes","Serpiente de Mnomquah","Sirviente","Torbellino","Traer la peste","Tremendo picor","Viento viridiano","Vórtice de viajes lejanos","X viviente"]

const Grimorio_tradicional = ["Agua del buen ladrón","Arruinar/bendecir cultivo","Atar a un animal","Atraer karma","Augurio","Bendición","Buscar lo perdido","Cantar al alma","Canto de sirena",
"Convocar a un fantasma","Crear amuleto de buena suerte","Crear bulla","Crear tormenta","Curación","Despertar a la bestia","Encantar ju-ju","Encatar paviut","Envenenamiento sanguíneo",
"Fabricar filtro de amor","Festín de la lechuza","Formar de murciélago","Furia","Hechizar a un animal","Lanzamiento impecable","Lisiar/Curar a un animal","Maldición","MEditación restauradora",
"Patas de oso","Piel de oso","Polvo de coyote","Prosperidad","Radiestesia","Revés de la fortuna","Sello amarillo de salto espiritual","Serenidad terrenal","Subyugar a un animal","Vaciar la mente",
"Ven a verme","Vientos de la desolación"]

const Grimorio_traer_monstruos_o_dioses1 = ["Abismo al infierno","Ángulos inversos de Tagh-Clatur","Canalización divina","Conjuración del turua","Construir Carcosa","Contactar con Abhoth",
"Contactar con Aku-shin Kage","Contactar con Azathoth","Contactar Bokrug","Contactar Byatis","Contactar Chaugnar Faugn","Contactar Cthulhu","Contactar Eihort","Contactar con la Lama Esmeralda",
"Contactar con Ghroth","Contactar Gla´aki","Contactar con Iod","Contactar Koth","Contactar con los Maestros","Contactar con los espíritus de los muertos","Contactar con Nodens",
"Contactar con Nyarlathotep","Contactar Nyarlatophis","Contactar con Othuyeg","Contactar con Pazuzu","Contactar con Shub-Niggurath","Contactar con Tsathoggua","Contactar con un antiguo",
"Contactar con un chtonian","Contactar con un gnoph-keh","Contactar con un gul","Contactar con un habitante de la arena","Contactar con un humano","Contactar con un lloigor","Contactar mi-go",
"Contactar con un perro de Tíndalos","Contactar con un pólipo volante","Contactar con un profundo","Contactar con un ser rata","Contactar con un servidor de los dioses exteriores",
"Contactar con un yithiano","Contactar con una bestia lunar","Contactar con una manada espulcral","Contactar con una semilla estelar de Cthulhu","Contactar con una semilla informe",
"Contactar con Y´golonac","Contactar con Yig","Contactar con Yog-Sothoth","Contactar con Zhar y Lloigor","Contactar con Zhar y Lloigor","Contactar Zoth-Ommog","Convocacion espiritual",
"Convocar a un ángel descarnado de la noche","Convocar a un baka","Convocar a un byakhee","Convocar a un desh mayor","Convocar a un dhole","Convocar a un hermano de Chaugnar Faugn ",
"Convocar ","Convocar ","Convocar a un horrendo cazador","Convocar a un profundo","Convocar a un reto{p oscuro de Shub-Niggurat","Convocar a un servidor de los dioses exteriores",
"Convocar a un Shoggoth","Convocar a un vagabundo dimensional","Convocar a un vampiro de fuego","Convocar a un vampiro estelar","Despertar a Abhoth","Despertar a Chuma","Ensalmo de la sexta sathlatta",
"Hablar con la Oscuridad que Espera","Hechizos de convocación","Invocar al Gusano","Liberar a Hastur","Llamada del cristal","Llamar a Ahtu","Llamar a Aku-shin Kage","Llamar a Arwassa",
"Llamar a Azathoth","Llamar a Bugg-Shash","Llamar Cthugha","Llamar Cyaegha","Llamar a Daoloth","Llamar a El Negro","Llamar a Ghatanothoa","Llamar a Gla´aki","Llamar a Gol-Goroth","Llamar a Hastur",
"Llamar a Iod","Llamar a Ithaqua","Llamar a la bestia","Llamar a La llorona"]

const Grimorio_traer_monstruos_o_dioses2 = ["Lamar a la Negrura","Llamar a los zombis","Llamar a Mappo no Ryuujin","Llamar a M´nagalah","Llamar a Nyogtha","Llamar a Ossadogowah","Llamar a Rlim Shaikorth",
"Llamar a Saaitii","Llamar a Shub-Niggurath","Llamar a un avatar del Ser sin Piel","Llamar a Yibb-Tstll","Llamar a Yig","Llamar a Yog-Sothoth","Llamar a Zu-Che-Quon",
"Llamar al Guardián de la Lente Lunar","Llamar al Hombre Astado","Llamar al Ser sin Piel","Luz de la verdad sagrada","Molestar a las crias","Promesa innombrable","Suplicar a Caronte"]

const Grimorio_transformacion = ["Acelerar","Acelerar la voz de las profundidades","Alcanzar","Aliento del kappa","Apariencia humana","Arbusto humano","Cántico de residencia","Controlar piel",
"Corrupción de lo sagrado","Cortar lazos cordiales","Destrasferencia","Don de Innanna","Fabricar droga de Liao","Imitar apariencia","Incorpóreo de la red","Infuencia benévola","Intercambio de mente",
"Máscara de muerte","Mirada interior","Ojos de zombi","Poseer cadáver","Posesión","Sentidos demoníacos","Sofocar sopecha","Trasferencia de mente","Transferir alma","Transferir órgano",
"Transferir parte corporal","Transformación","Transformación corporal de Gorgoroth","Volver incorpóreo","Yugo de la lengua sangriente"]

const Grimorio_viajes_y_trasportacion = ["Alma errante","Ascender la escalera de la inmortalidad","Ayudar a un soñador","Cajas-portal","Crear ventana","Desgarrar velo","Desvanecimiento",
"Fabricar droga de Liao","Fabricar hidromiel espacial","Fabricar parakete","Levitar","Portal","Portal al limbo","Portal de los sueños","Portal temporal","Preparar droga onírica","Puerta onirológica",
"Ritual del momoy","Trasladar portal","Ver portal","Viaje al otro lado","Volar"]

const Grimorio_Aquelarre_blanca_1 = ["Alivio del Esclavo","Aliento de Salamandra","Amuleto contra la Ponzoña","Amuleto del Fullero","Amuleto del Fullero","Arma Inquebrantable","Bebedizo de Sueños",
"Bendición de San Nuño","Brazalete Solar","Dolores de Parto","Leche de Sapiencia","Saber de Partera","Vitriolo Salvaje",]

const Grimorio_Aquelarre_negra_1 = ["Amor","Atadura del Deseo","Cerradura Maldita","Discordia","Lámpara de Búsqueda","Lujuria","Polvos de Seducción",]

const Grimorio_Aquelarre_infernal_1 = ["Maldición"]

const Grimorio_Aquelarre_blanca_2 = ["Bálsamo de Curación","Bendición de Pepin","Don de Tritón","Expulsar Enfermedades","Filtro de Inteligencia","Guarda contra Embrujos","Infusión de Serenidad",
"Intuir la Magia","Licor Sedante","Mal de Ojo","Mal del Tullido","Maldición de Caín","Manto de Salamandra","Medalla de Virilidad","Ojos de Lobo","Polvos de Hechicería","Polvos del Mentiroso",
"Revocar Maldición","Sueño Reparador","Tinta Prodigiosa","Virtud de Doncella"]

const Grimorio_Aquelarre_negra_2 = ["Atadura de Eunuco","Dominación","Estupidez","Morada Maldita","Sangre Negra","Subyugación",]

const Grimorio_Aquelarre_infernal_2 = ["Don de Surgat","Maldición de Ashavero"]

const Grimorio_Aquelarre_blanca_3 = ["Aceite de Grandeza","Aceite de Hechicerías","Alivio del Rabioso","Amansar Fieras","Arma Invicta","Bardas Encantadas","Clarividencia","Cuerda de Cridavents",
"Destilación de Quintaesencias","Don de Cipriano","Falsas Visiones","Guerra","Incienso de Cópula","Inquisición","Lengua de Babel","Mensaje Onírico","Piedra de Sanación","Polvos Elementales",
"Prodigio de Amenón","varita de Búsqueda","Velo de la Muerte","Visión de Futuro","",""]

const Grimorio_Aquelarre_negra_3 = ["Deseo Carnal","Filtro de Olvido","Furia","Rostro de Ladrón","Vela de Temor","Veneno de Escorpión"]

const Grimorio_Aquelarre_infernal_3 = ["Cadena de Silcharde","Filtro Amoroso","Oración Oscura"]

const Grimorio_Aquelarre_blanca_4 = ["Amuleto","Asesino de Fantasmas","Bendición de Hada","Bendición de Jonás","Bolsa de Duendes","Corazón de León","Cruz de Caravaca","Danza","Encanto del Viajero",
"Esencias de Éter","Hechizo Rojo","Invocación de Ánimas","Invocar al Fenicio","Manto de Sombras","Piel de Lobo","Purificar Ponzoñas","Rama de los Deseos","Ritual del Clavo","Sangre de Dragón",
"Sombras Fantasmales","Talismán de Protección","Transmutación de Metales","Ungüento de Bruja","Vela de Difuntos","Vino de la Verdad"]

const Grimorio_Aquelarre_negra_4 = ["Alas del Maligno","Anillo de Nigromancia","Arrancar la Esencia","Belleza","Calor Sofocante","Dibbuk","Esencia de Hostilidad","Filo Maldito","Herrumbre de Saturno",
"Maldición de la Vela","Mano de Gloria","Nigromancia","Regalo Envenenado"]

const Grimorio_Aquelarre_infernal_4 = ["Alimento de Guland","Beso de Thamur","Maldición del Lobisome","Sangre de Upiro","Tormento",]

const Grimorio_Aquelarre_blanca_5 = ["Alma de Estatua","Círculo de Protección","Dominio del Fuego","Don de Palabra","Entereza del Mártir","Expulsión","Filo Constelado","Guarda contra Maleficios",
"Hermosura","Homúnculo","Presteza","Refugio del Hechicero","Sabiduría","Susurro de los Secretos","Velo de Hada"]

const Grimorio_Aquelarre_negra_5 = ["Demencia","Maldición del Gul","Maldición de la Herida","Maldición del Hierro","Maldición de Strigiles","Pellejo de Bestia","Saco de Quebradura","Trampa Goética",]

const Grimorio_Aquelarre_infernal_5 = ["Aliento del Diablo","Incubar Diablillo","Infortunio"]

const Grimorio_Aquelarre_blanca_6 = ["Caldero Mágico","Espejo de Salomón","Fuerza de Gigante","Latón de Nuevas"]

const Grimorio_Aquelarre_negra_6 = ["Aceite de Usurpación ","Condenación","Consultar a los Muertos","Golpe de la Parca","Hambruna","Maldición del Clavo","Maldición de la Bestia",]

const Grimorio_Aquelarre_infernal_6 = ["Maldición de la Bruja","Misa Negra"]

const Grimorio_Aquelarre_blanca_7 = ["","","","","","","","",]

const Grimorio_Aquelarre_negra_7 = ["","","","","","","","",]

const Grimorio_Aquelarre_infernal_7 = ["","","","","","","","",]

function Generarpdf(){
        const Criatura_pdf = document.getElementById("result");

        html2pdf().from(Criatura_pdf).save();
}



// registro de criaturas

const Angel_descarnado = {
        Nombre : "Angel Descarnado de la Noche" ,
        FUE : [18 , 3],
        CON : [18 , 3],
        TAM : [24 , 4],
        DES : [18 , 8],
        INT : [ 6 , 1],
        POD : [18 , 3],
        Movimiento : "6/12 Volando" ,
        Descripcion_breve: "Seres sin rostro" ,
        Armadura :  "2 puntos de piel." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Atacan con sus zarpas, cola, cuernos o extremidades. <br><strong>Capturar (mnbr):</strong> Los Ángeles descarnados de la noche prefieren capturar a sus adversarios para después hacerles cosquillas con su cola espinosa. Suelen atacar en masa e intentan acechar en silencio a sus víctimas , arrebatarles sus armas y someterlas. Dos Ángeles descarnados de la noche o más pueden combinar sus ataques para retener a una víctima más poderosa (lo que puede llegar adarles un dado de bonificación por superarla en número).<br><strong>Cosquilleo:</strong> Los Ángeles descarnados de la noche solo pueden cosquillear a criaturas a las que hayan capturado. Un ataque de cosquilleo con éxito resulta extremadamente perturbador, ya que la lengüeta de su cola es afilada como una cuchilla y peligrosa a pesar de que su contacto no causa daño. La víctima queda perpleja, humillada y desorientada, y sufre un dado de penalización en todas sus tiradas durante 1D4 asaltos o hasta que cesa el cosquilleo. La cola de un Ángel descarnado de la noche puede pasar a través de agujeros y aberturas, atravesar ropas gruesas e incluso, encontrar los intersticios de una armadura metálica." ,
        Habilidades : "<strong>Combatir</strong> 45 % (22/9), daño 1D4 + Bonificación al daño.<br> <br><strong>Capturar</strong> (mnbr) la víctima queda apresada y lista para el cosquilleo o cualquier ataque posterior.<br><strong>Cosquilleo</strong> 35% (17/7), inmovilizado 1D6+1 asaltos (el objetivo debe haber sido capturado previamente).<br><strong>Esquivar </strong>35% (17/7).<br><strong>Sigilo </strong>90%." ,
        Cordura : "Ver a un Ángel descarnado de la noche produce una pérdida de 0/1D6 Puntos de Cordura."
}

const Antiguo = {
        Nombre : "Antiguo" ,
        FUE : [48 , 28],
        CON : [24 , 9 ],
        TAM : [48 , 8 ],
        DES : [24 , 9 ],
        INT : [18 , 13],
        POD : [18 , 3 ],
        Movimiento : "8/10 Volando",
        Descripcion_breve: "Misteriosos científicos de los albores del tiempo" ,
        Armadura : "7 puntos de piel." ,
        Ataques_por_asalto : "5" ,
        Ataques_de_combate : "Un antiguo puede utilizar sus tentáculosy su masa corporal para golpear a sus adversarios.<br><strong>Capturar (mnbr):</strong> Cuando un tentáculo acierta a su objetivo, seadhiere a la víctima, que cada asalto perderá una cantidadde Puntos de Vida igual a la mitad de la Bonificación al daño del Antiguo a causa de la constricción y el aplastamiento.Los Antiguos poseen cinco tentáculos, por lo que no podrán apresar a más de cinco víctimas de este modo." ,
        Habilidades : "<strong>Combatir</strong> 40% (20/8), Bonificación al daño.<br><strong>Capturar (mnbr)</strong> atrapa al objetivo, que a partir de entoncessufre 1/2 de Bonificación al daño de constricción por asalto.<br><strong>Esquivar</strong> 40% (20/8)." ,
        Cordura : "Ver a un Antiguo produce una pérdida de 0/1D6 Puntos de Cordura."
}

const Byakhee = {
        Nombre : "Byakhee" ,
        FUE : [30 , 5],
        CON : [18 , 3 ],
        TAM : [30 , 5],
        DES : [21 , 6],
        INT : [18 , 3 ],
        POD : [18 , 3 ],
        Movimiento : "5/16 Volando",
        Descripcion_breve: "Monturas Estelares" , 
        Armadura : "2 puntos de pelaje y piel endurecida.",
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Un byakhee puede atacar con sus garras o embestir a su víctima, causándole graves heridas. <br><strong>Morder Y retener (mnbr):</strong> Si el mordisco impacta a su objetivo, el byakhee quedará adherido a la víctima y le empezará a chupar la sangre. Cada asalto que el byakhee permanezca ad he rido, incluyendo el primero , el drenaje de sangre hará que la víctima pierda 3D10 puntos de FUE hasta que muera (cuando su FUE quede reducida a O). Los byakhee suelen utilizar este ataque para permanecer adheridos hasta drenar toda la sangre de la víctima, a no ser que esta tenga éxito en una tirada enfrentada de FUE. Si sobrevive, la víctima podrá guardar reposo y regenerar su sangre (también se puede hacer mediante una transfusión) a un ritmo de 1D10 + 5 FUE por día. Un byakhee solo puede retener a una víctima al mismo tiempo." ,
        Habilidades : "<strong>Combatir</strong> 55% (27/11), daño 1D6 + Bonificación al daño. <br><strong>Morder y retener (mnbr)</strong> daño 1D6 + 3D10 FUE (sangre) drenaje (solo una víctima). <br><strong>Esquivar</strong> 33% (16/6).<br><strong>Descubrir</strong> 50%,<br> <strong>Escuchar</strong> 50%." ,
        Cordura : "Ver a un byakhee produce una pérdida de 1/1D6 Puntos de Cordura."
}

const Chthonian = {
        Nombre : "Cthonian" ,
        FUE : [90 , 15],
        CON : [48 , 33],
        TAM : [90 , 15],
        DES : [12 , 2],
        INT : [30 , 5],
        POD : [30 , 5],
        Movimiento : "6/1 Cavando",
        Descripcion_breve: "Excavadores Tentaculares" ,
        Armadura : "5 puntos de piel y musculatura; tras recibir una herida regenera 5 Puntos de Vida por asalto, pero la regeneración dejará de funcionar cuando sus Puntos de Vida se reduzcan por debajo de 1." ,
        Ataques_por_asalto : "1D8. Solo puede utilizar su ataque de aplastamiento una vez por asalto." ,
        Ataques_de_combate : "Es peligroso acercarse a estas criaturas. Su enorme mole y sus agitados tentáculos pueden golpear en cualquier momento.<br><strong>Retener y drenar:</strong>puede atacar con 1D8 tentáculos cada asalto, y cada uno de ellos causa un daño igual a la mitad de la Bonificación al daño de la criatura. Si un tentáculo consigue alcanzar a su objetivo, se adhiere a él, horada el cuerpo de la víctima en dirección a sus órganos vitales y comienza a drenar sangre y fluidos, provocando una pérdida de 3D10 CON por asalto. Cuando la CON queda reducida a O, la víctima muere. La CON perdida por el ataque de un chthonian se pierde para siempre. Mientras un tentáculo esté drenando a una víctima, no se podrá utilizar para drenar a otros objetivos, pero se podrá seguir utilizando para contraatacar, zara ndeando a la pobre víctima apresada como si fuera una bola al final de una cadena. Los tentáculos que estén drenando a una víct ima seguirán absorbiendo CON todos los asaltos. Cada tentáculo podrá atacar a un objetivo distinto, o podrán atacar todos al mismo.<br><strong>Aplastar:</strong>puede utilizar su enorme masa para aplastar a un enemigo. Cuando vaya a aplastar a alguien, podrá seguir reteniendo y drenando víctimas que ya tuviera apresadas.Se abalanza sobre un grupo y cae sobre ellos: el área de aplastamiento es circular y golpea a todos por igual. El área de aplastamiento tiene un diámetro en metros igual al TAM del chthonian dividido por cincuenta. Dentro del área de aplastamiento, los investigadores deberán superar una tirada de DES, Esquivar o Saltar o perderán una cantidad de Puntos de Vida igual a la Bonificac ión al daño completa de la criatura." ,
        Habilidades : "<strong>Combatir</strong>75%, daño 2D6 (paliza tentacular).<br><strong>Retener y drenar</strong> daño 2D6 + drenaje de sangre (tentáculos adheridos). <br><strong>Aplastamiento</strong> 80%, daño: Bonificación al daño(mole, grupo).<strong>Esquivar</strong> 17% (8/3)." ,
        Cordura : "1D3/1D20 Puntos de Cordura por ver a un adulto; 1/1D10 Puntos de Cordura por ver estadios inferiores; ver a una cría no produce ninguna pérdida de Puntos de Cordura."
}

const Color_surgido_del_espacio = {
        Nombre : "Color Surgido del espacio" ,
        FUE : [6 , 1],
        CON : [0.00001, 0.00001],
        TAM : [12 , 6],
        DES : [24 , 14],
        INT : [24 , 4],
        POD : [12 , 6],
        Movimiento : "12 Fluyendo / 20 Volando ",
        Descripcion_breve: "Drenadores de fuerza Vital" ,
        Armadura : "Ninguna. Son invulnerables a todos los ataques físicos, a excepción de los camp os magnéticos, que son capaces de aprisionados. Son vulnerables a la magia." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate :"Como los colores son atacantes tan eficientes, puede que el Guardián quiera dejar que los investigadores vean cómo se aproximan y permitirles hacer tiradas de Descubrir para detectar su tenue resplandor o para advertir una súbita presencia de ozono. Los colores carecen de una habilidad de Combatir reconocible y no pueden sufrir daño por medios normales. <br><strong>Drenaje de características:</strong> Cuando un color se alimenta debe hacer una tirada enfrentada de POD contra su víctima. Si gana el color, drenará 1D1O puntos de FUE, CON, POD, DES y APA de la víctima de forma permanente, además de causarle 1D6 puntos de daño. Cada punto de POD drenado aumentará en un punto el POD del color. La víctima notará una sensación ardiente y consumidora, y se irá marchitando y tornándose gris. La cara de la víctima se consumirá, y su piel envejecerá con arrugas y grietas horrendas. Una vez consumida, la víctima morirá. <br><strong>Ataque mental:</strong> Un color puede debilitar la mente de otros seres inteligentes que se encuentren en las inmediaciones. Cada día que una persona pase en las inmediaciones de un color, deberá tener éxito en una tirada enfrentada de INT o perderá 1D6 Puntos de Magia y 1D6 Puntos de Cordura . Los Puntos de Magia perdidos de esta forma no se podrán recuperar si no se abandona la zona. Esta influencia también obliga a las víctimas a permanecer en sus hogares, y se vuelve más irresistible a medida que se debilita la voluntad de los afectados . Para decidirse a abandonar el área, la víctima deberá superar una tirada Difícil o Extrema de POD (Difícil si sus Puntos de Magia se han reducido en un 5O% o Extrema si han quedado reducidos a O o menos), o se sentirá inexplicablemente obligada a quedarse. <br><strong>Tirada enfrentada de drenaje:</strong> POD de la víctima vs. POD del color, daño 1D6 de pérdida de características. Tirada enfrentada de ataque mental: INT de la víctima vs INT del color, daño 1D6 Puntos de Magia+1D6 Puntos de Cordura." ,
        Habilidades : "Esquivar 47% (23/9)." ,
        Cordura : "Ver a un color produce una pérdida de 1/1D4 Puntos de Cordura; ver a la víctima de un color produce una pérdida de 1/1D8 Puntos de Cordura."
}

const Dagon_e_hidra = {
        Nombre : "Dagón e Hidra" ,
        FUE : [260 , 260],
        CON : [250 , 250],
        TAM : [300 , 300],
        DES : [100 , 100],
        INT : [100 , 100],
        POD : [150 , 150],
        Movimiento : "10/15 Nadando",
        Descripcion_breve: "Gobernantes de los profundos",
        Armadura : "6 puntos de piel." ,
        Ataques_por_asalto : "2",
        Ataques_de_combate : "Estos monstruos descomunales pueden golpear a los investigadores de varias formas distintas: pateando, desgarrando, pisoteando, aporreando, etc." ,
        Habilidades : "<strong>Combatir</strong> 80% (40/18), daño 1D6 + Bonificación al daño.<strong>Esquivar</strong> 50%",
        Cordura : "Ver a Dagón o a Hidra produce una pérdida de 1/1D10 Puntos de Cordura."
}

const Dhole = {
        Nombre : "Dhole" ,
        FUE : [1000 , 10],
        CON : [200 , 101],
        TAM : [100 , 1],
        DES : [4 , 1],
        INT : [12 , 2],
        POD : [60 , 10],
        Movimiento : "15 Reptando / 10 Excavando",
        Descripcion_breve: "Horrores Excavadores" ,
        Armadura : "Igual a una quinta parte del POO del dhole." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Acercarse a la inmensa y veloz masa de estas criaturas es peligroso para los mortales. Recibir uno de sus golpes es como ser arrollado por un tren . Si un dhole aplasta a un investigador la muerte se producirá de forma automática. Si supera una tirada de Suerte, se podrá recuperar lo suficiente como para poder celebrar un entierro. <br><strong>Ataque de baba:</strong> En lugar de tragar o aplastar a un oponente, un dhole puede escupir una flema de baba legamosa desde su boca hasta una distancia de entre 3 y 5 km. La baba cubre un área circular con un diámetro igual a un 1% del TAM del monstruo en pies (0,3 m): por lo tanto, un dhole de TAM 2750 escupe una flema de 27 pies de diámetro (8,25 m), lo suficiente como para derribar un avión. Cualquier ser vivo alcanzado por la flema quedará aturdido y sumergido. Para sa lir de la masa de baba habrá que superar una tirada Extrema de FUE; se puede ll evar a cabo un intento por asalto. Mientras esté sepu ltado bajo esta espantosa mucosidad, e l investigador no podrá respirar y comenzará a ahogarse. Además, la baba cáustica causará al invest igador 1 punto de daño por asalto que pase atrapado en ella. La victima dejará de sufrir este daño abrasador en cuanto consiga escapar. <br><strong>Engullir:</strong> Cuando un dhole se traga a alguien (lo engulle) abarca una zona del mismo tamaño que el de su ataque de baba." ,
        Habilidades : "<strong>Combatir</strong> 30%, daño muerte .<br><strong>Escupir baba</strong> 50 %, daño especial. <br><strong>Engullir</strong> 80%, daño engullido.<br><strong>Esquivar</strong> 6%." ,
        Cordura : "Ver a un dhole produce una pérdida de 1D4/1D20 Puntos de Cordura."
}

const El_horror_en_la_tinta = {
        Nombre : "Ursus Miles (El horror de la tinta)" ,
        FUE : [110 , 110],
        CON : [300 , 300],
        TAM : [130 , 130],
        DES : [ 80 , 80 ],
        INT : [ 20 , 20 ],
        POD : [150 , 150],
        Movimiento : "10",
        Descripcion_breve: "Tinta maligna" ,
        Armadura : "5 puntos de piel bullente como una alfombra de gusanos. Mientras se encuentra en estado inmaterial no puede ser dañado por ataques físicos." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Cuando se manifieste plenamente, intentará atrapar y envolvera su objetivo utilizando una maniobra de combate (habilidadCombatir), para después mirar a los ojos de la víctima yutilizar Consunción del alma.<br><strong>Ataques de combate (cuando se manifiesta):</strong> Su contacto causa 1D4 puntos de daño y absorbe la vida del objetivoa razón de 1D10CON y FUE por ataque (los supervivientesrecuperarán esta pérdida a razón de 1D10 puntos al día).<br><strong>Consunción del alma:</strong> Ya se encuentre en estado inmaterialo plenamente manifestado, el Horror podrá mirar al almade un objetivo. Al contemplar directamente sus hileras de ojos oscuros como el vacío, el objetivo deberá superar una tirada Extrema de POD o será incapaz de apartar la mirada y sufrirá un terror inimaginable mientras el Horror consumesu alma; tirada de Cordura (pérdida de 106/1D10 COR).No hay un límite a la pérdida de Cordura acumulada quese puede producir a causa de varios ataques sucesivos. Elempleo continuado de este ataque fue lo que mató a Leiter.<br><strong>Inmaterial:</strong> Cuando no está plenamente manifestado, el Horror puede atravesar objetos sólidos, por lo que puertas, espadas y balas no supondrán un desafío. Las armas mágicas pueden dañar y afectar al Horror a discreción del Guardián.<br><strong>Posesión:</strong> Es capaz de poseer a cualquiera que haya tocado los Documentos de la Caza de Brujas. La víctima deberá hacer una tirada enfrentada de POD contra el POD del Horror para intentar resistirse. Si el objetivo ya está muerto no será necesario hacer ninguna tirada. Puede utilizarlos ojos de una víctima poseída para atacar a otros conConsunción del alma." ,
        Habilidades : "<strong>Combatir</strong> 60% (30/12), daño 1D4 y drenaje de 1D10 STR y CON.<br><strong>Consunción del alma :</strong> tirada Extrema de PODo sufre una pérdida de 106/1D10 COR <br><strong>Esquivar</strong> 40% (20/8).<br><strong>Descubrir</strong> 40% ,<br><strong>Escuchar</strong> 40%. " , 
        Cordura : "Ver al Horror produce una pérdida de 1D4/1D8 Puntos de Cordura."
}

const Ghast = {
        Nombre : "Ghast" ,
        FUE : [30 , 15],
        CON : [24 , 4],
        TAM : [36 , 16],
        DES : [18 , 8],
        INT : [6 , 1],
        POD : [18 , 3],
        Movimiento : "10",
        Descripcion_breve: "Bestias Dañinas y Escabrosas" ,
        Armadura : "Ninguna" ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "los ghasts cuentan con el repertorio habitual de ataques sin armas disponible para cualquier humanoide." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño 1D6 + Bonificación al daño.<br><strong>Esquivar</strong> 35% (17/7). <br> Sigilo 70%." ,
        Cordura : "Ver a un ghast produce una pérdida de 0/1D8 Puntos de Cordura."
}
const Gnoph_keh = {
        Nombre : "Gnoph-Keh" ,
        FUE : [36 , 26],
        CON : [30 , 15],
        TAM : [36 , 26],
        DES : [24 , 4],
        INT : [18 , 13],
        POD : [36 , 6],
        Movimiento : "9",
        Descripcion_breve: "Demonios de Hielo" ,
        Armadura : "9 puntos de cartílago, pelaje y piel endurecida." ,
        Ataques_por_asalto : "5 (solo 1 cornada por asalto)." ,
        Ataques_de_combate : "Los gnoph-keh pueden atacar sirviéndose de sus atroces garras y su formidable corpulencia." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño 1D6 + Bonificación al daño. <br><strong>Cornada</strong> 65% (32/13), daño 1D10 + Bonificación al daño. <br><strong>Esquivar</strong> 35% (17/7) ." ,
        Cordura : "Ver a un gnoph-keh provoca una pérdida de 0/1D10 Puntos de Cordura."
}

const Gul = {
        Nombre : "Gul" ,
        FUE : [24 , 9],
        CON : [18 , 8],
        TAM : [18 , 8],
        DES : [18 , 8],
        INT : [18 , 8],
        POD : [18 , 8],
        Movimiento : "9",
        Descripcion_breve: "Burlones Devoradores de Carroña" ,
        Armadura : "Las armas de fuego y los proyectiles causan la mitad del daño obtenido en la tirada; redondea cualquier fracción hacia abajo." ,
        Ataques_por_asalto : "3" ,
        Ataques_de_combate : "Los gules cuentan con el repertorio habitual de ataques sin armas disponible para cua lquier humanoide. También poseen unas garras sucias y afilada s como cuchillas; estas protrusiones óseas son capaces de cortar la carne humana en un instante. Si estas heridas no reciben tratamiento se pueden infectar. <br><strong>Morder y retener (mnbr):</strong> Si el gul acierta con su mordisco, renunciará a realizar nuevos ataques con las garras y se limitará a abrazar a la víctima, asiéndola fuertemente con los dientes y causando automáticamente 1D4 puntos de daño por asalto. Para librarse del gul, romper su presa y dejar de sufrir daño por el mordisco, será necesario superar una tirada enfrentada de FUE ." ,
        Habilidades : "<strong>Combatir</strong> 40% (20/8), daño 1 D6 + Bonificación al daño. Morder y retener (mnbr) daño 1 04 por asalto . <br><strong>Esquivar</strong> 40% (20/8)." ,
        Cordura : "Ver a un gul produce una pérdida de 0/1D6 Puntos de Cordura."
}

const Habitante_de_las_arenas = {
        Nombre : "Habitante de las Arenas" ,
        FUE : [18 , 3],
        CON : [18 , 8],
        TAM : [24 , 9],
        DES : [18 , 8],
        INT : [18 , 3],
        POD : [18 , 3],
        Movimiento : "8",
        Descripcion_breve: "Acechadores de los Yermos" ,
        Armadura : "3 puntos de piel gruesa." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Durante el combate, los habitantes de la arena cuentan con el repertorio habitual de ataques sin armas disponible para cualquier humanoide, además de sus garras." ,
        Habilidades : "<strong>Combatir</strong> 30% (15/6), daño 1D6 + Bonificación al daño.<br><strong>Esquivar</strong> 30% (15/6).<br><strong>Descubrir</strong> 50%, <br><strong>Escuchar</strong> 60%, <br><strong>Sigilo</strong> 55%." ,
        Cordura : "Ver a un habitante de la arena produce una pérdida de 0/1D6 Puntos de Cordura."
}

const Hombre_serpiente = {
        Nombre : "Hombre Serpiente" ,
        FUE : [18 , 3],
        CON : [18 , 3],
        TAM : [18 , 3],
        DES : [18 , 8],
        INT : [24 , 9],
        POD : [18 , 8],
        Movimiento : "8" ,
        Descripcion_breve: "Miembro Atávico de la Raza" ,
        Armadura : "1 punto de escamas." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los hombres serpiente cuentan con el repertorio habitual de ataques sin armas disponible para cualquier humanoide. Pueden utilizar las armas conocidas por el hombre, pudiendo asirlas eficazmente con sus garras. <br><strong>Mordisco:</strong> La mordedura de un hombre serpiente es extremadamente venenosa. La víctima deberá superar una tirada Extrema de CON; si fracasa, sufrirá 1D8 puntos de daño." ,
        Habilidades : "<strong>Combatir</strong> 50% (25/10), daño 1D3 + Bonificación al daño. <br><strong>Mordisco</strong> 35% (17/7), daño 1D8 + veneno (como se indicaba anteriormente). <br><strong>Esquivar</strong> 32% (16/6)." ,
        Cordura : "Ver a un hombre serpiente produce una pérdida de 0/1D6 Puntos de Cordura."
}

const Horrendo_cazador = {
        Nombre : "Horrendo Cazador" ,
        FUE : [42 , 17],
        CON : [18 , 3],
        TAM : [54 , 29],
        DES : [21 , 6],
        INT : [18 , 13],
        POD : [36 , 6],
        Movimiento : "7/11" ,
        Descripcion_breve: "Viperinos Seres Voladores" ,
        Armadura : "9 puntos de piel." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Un horrendo cazador puede atacar sirviéndose de su mordisco, su corpulencia demoledora o su cola tentacular. <br><strong>Apresar (mnbr):</strong> Puede utilizar la cola para rodear a la víctima y prevenir cualquier movimiento. Después, el horrendo cazador podrá alzar el vuelo con su víctima o continuar luchando. La víctima solo se podrá liberar venciendo en una tirada enfrentada de FUE. Cuando una víctima se encuentra apresada por la cola, el horrendo cazador solo puede atacar con su mordisco, dando bocados a la víctima indefensa con un dado de bonificación en su tirada de ataque debido a que los brazos de su objetivo suelenn estar inmovilizados." ,
        Habilidades : "<strong>Combatir</strong> 65% (32/13), daño 1D6 + Bonificación al daño. <br><strong>Apresar (mnbr)</strong> objetivo inmovilizado, deberá vencer en una tirada enfrentada de FUE para poder escapar. <br><strong>Esquivar</strong> 35% (17/7)." ,
        Cordura : "Ver a un horrendo cazador produce un a pérdida d e 0/1D10 Puntos de Cordura."
}

const Lloigor = {
        Nombre : "Lloigor" ,
        FUE : [48 , 33],
        CON : [48 , 8],
        TAM : [8 , 2],
        DES : [18 , 3],
        INT : [30 , 10],
        POD : [24 , 4],
        Movimiento : "7 (Material)/3 (Inmaterial)",
        Descripcion_breve: "Maestros de la Telequinesis" ,
        Armadura : "8 puntos de piel de reptil. En su estado inmaterial son inmunes a todas las armas físicas, sean mágicas o no." ,
        Ataques_por_asalto : "1 (2 mientras se encuentra en forma de reptil)." ,
        Ataques_de_combate : "Los lloigor pueden atacar de varias formas posibles, lo que incluye golpes, zarpazos y mordiscos que pueden lle var a cabo en su forma de reptil. Si no, pueden utilizar uno de sus poderes especia les o un ataque de vórtice .<br><Strong>Ataque de vórtice:</Strong> El arma más temib le de los lloigor es una especie de implosión sónica, parecida a la resonancia de un trueno lejano, que destroza todo lo que hay a su alcance y deja la tierra resquebrajada. Se necesitan al menos 100 Puntos de Magia para afectar a un área de 10m de diámetro. Todo lo que se encuentre dentro del área afectada perderá 1D100 Puntos de Vida. Un investigador que esté atento podrá advertir los efectos que delatan el ataque, como unas líneas giratorias que aparecen en el aire o una vibración casi inaudible que penetra en su cuerpo." ,
        Habilidades : "<strong>Combatir</strong> 30%(15/6), daño 1D6 + Bonificación al daño. <br><strong>Esquivar</strong> 26%(13/5) . <br><strong>Armadura:</strong> 8 puntos de piel de reptil. En su estado inmaterial son inmunes a todas las armas físicas, sean mágicas o no." ,
        Cordura : "0/1D8 en su forma de reptil; su forma invisible no provoca ninguna pérdida de Cordura; el contacto mental produce una pérdida de 1/1D4 Puntos de Cordura."
}

const Migo = {
        Nombre : "Mi-Go" ,
        FUE : [18 , 3],
        CON : [18 , 3],
        TAM : [18 , 3],
        DES : [18 , 4],
        INT : [18 , 8],
        POD : [18 , 8],
        Movimiento : "7/13 Volando" ,
        Descripcion_breve: "Enigmáticos Científicos de Yuggoth" ,
        Armadura : "Ninguna, pero su cuerpo de resonancia extraterrestre hace que todas las armas perforantes (incluidas las balas) les causen el menor daño posible." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Los hongos de Yuggoth pueden atacar  en combate cuerpo a cuerpo con sus dos garras parecidas  a pinzas.<br><strong>Capturar (mnbr):</strong> También pueden intentar apresar a su víctima  (de una corpulencia igual o menor a la suya) para luego  alzar el vuelo y dejarla caer desde gran altura, o llevarla a la  altitud suficiente para que sus pulmones co lapsen.  <br><strong>Combatir</strong> 45% (22/9), 106 + Bonificación al daño.  <br><strong>Capturar (mnbr)</strong> puede capturar seres que tengan una Corpulencia  1gual o menor a la suya (pinzas, apresar, volar)." ,
        Habilidades : "Combatir</strong> 45% (22/9), 106 + Bonificación al daño. <br><strong>Capturar (mnbr)</strong> puede capturar seres que tengan una Corpulencia 1gual o menor a la suya (pinzas, apresar, volar). <br><strong>Esquivar</strong> 35% (17 /7)." ,
        Cordura : "Ver a un mi-go produce una pérdida de 0/1D6 Puntos de Cordura."
}

const Perros_de_tindalos = {
        Nombre : "Perros de Tíndalos" ,
        FUE : [24 , 9],
        CON : [38 , 23],
        TAM : [24 , 9],
        DES : [18 , 3],
        INT : [30 , 5],
        POD : [42 , 7],
        Movimiento : "6/20 Volando",
        Descripcion_breve: "Carroñeros del Tiempo" ,
        Armadura : "2 puntos de piel. Además, regeneran 4 Puntos de Vida por asalto a no ser que hayan sido reducidos a O Puntos de Vida . Las armas mundanas no tienen efecto alguno sobre un perro de Tíndalos, aunque las armas encantadas y los hechizos les caus an el daño completo." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Un perro de Tínda los puede utilizar sus zarpas o sus fauces para atacar. Estas criaturas están recubiertas por una especie de pus o icor azulado. Cuando un ataque de Combatir alcanza a una víctima, una gota de esta sustancia mucosa impregnará la herida. Esta especie de pus está vivo y activo, y causa 2D6 puntos de daño al objetivo. Además, la víctima sufrirá otros 2D6 puntos de daño cada asalto que su cuerpo permanezca en contacto con la sustancia. El pus se puede limpiar con un jirón de ropa o una toalla y superando una tirada de DES . También se puede enjuagar con agua u otro agente limpiador. El fuego puede matar el icor, pero también causará 1D6 puntos de daño a la víctima como consecuencia de las quemaduras." ,
        Habilidades : "<strong>Combatir</strong> 90% (45/18), daño 1D6 + Bonificación al daño + icor (2D6 daño por asalto, de forma continuada hasta retirarlo).<br><strong>Lengua</strong> 90% (45/18), daño 3D6 POD drenado por asalto. <br><strong>Esquivar</strong> 26 % (13/5)." ,
        Cordura : "Ver a un perro de Tíndalos produce una pérdida de 1D3/1D20 Puntos de Cordura."
}

const Polipo_volante = {
        Nombre : "Pólipos Volantes" ,
        FUE : [60 , 40],
        CON : [30 , 20],
        TAM : [60 , 40],
        DES : [18 , 8],
        INT : [24 , 4],
        POD : [24 , 9],
        Movimiento : "8/12 Volando",
        Descripcion_breve: "Terrores de las Oscuras Profundidades" ,
        Armadura : "4 puntos e invisibilidad . Los ultraterrenos pólipos volantes sufren solo el daño mínimo ca usado por cualquier a rma física, que además quedará reduci do en otros 4 puntos a causa de la a rmadura cutánea de l monstruo. Las armas encantadas ca usan el daño normal, así como otras fuerzas como el calor o la electricidad." ,
        Ataques_por_asalto : "2D6 (cada asalto, tira 2D6 para determinar cuántos tentáculos se forman); solo puede utilizar un ataque eólico por asalto.<br>Los cuerpos de los pólipos no paran de formar y hacer desaparecer tentáculos. El daño causado por un tentáculo siempre es de 1D1O. Debido a la naturaleza parcialmente inmaterial de estas criaturas, el daño de los tentáculos se aplica directamente a los Puntos de Vida del objetivo, ignorando cualquier armadura corporal. La herida adopta la forma de una dermatitis o una deshidratación de los tejidos provocada por el viento.<br>Nota:Cada una de las habilidades eólicas cuesta al pólipo 1 Punto de Magia por asalto." ,
        Ataques_de_combate : "<br><strong>Ráfaga de viento:</strong> La ráfaga de viento tiene un alcance básico de 20m y un área de efecto cilíndrica de 1Om de diámetro que emana del pólipo, y causa un daño igual a su Bonificación al daño. La ráfaga cilíndrica puede llegar más allá de 20m, pero pierde 106 puntos de daño por cada incremento de 20m; así, un objetivo que se encuentre a 39m de distancia sufrirá 4D6 puntos de daño (Bonificación al daño menos 1D6), y un objetivo que se encuentre a 41m sufrirá 3D6. El chorro arrancará literalmente la carne de los huesos de las víctimas, causándoles deshidratación y abrasión en la piel y, además, las empujará hacia atrás tantos metros como los Puntos de Vida que hayan perdido.<br> <strong>Ataque paralizante:</strong> Se trata de un misterioso método para capturar a las presas. Este tipo de ataque eólico tiene un alcance de 1.000m y puede soplar girando esquinas y ascendiendo por pasillos tortuosos sin ver disminuida su potencia. A pesar de que el viento emana del pólipo, tiene un peculiar efecto de succión en la víctima, que verá frenado su avance y deberá hacer una tirada enfrentada de FUE contra el POD del pólipo. El ataque pierde efectividad más allá de 200m, por lo que el objetivo recibirá un dado debonificación. Si gana el pólipo, la víctima no podrá avanzar ese asalto. Si gana la víctima, se podrá mover de forma normal. Los pólipos volantes se pueden desplazar a toda velocidad mientras utilizan esta habilidad, por lo que podrán perseguir a una presa de su interés mientras la ralentizan. Esta técnica se puede utilizar sobre varios objetivos que estén separados entre sí a una distancia máxima de 30 m. Todos los objetivos obtienen un dado de bonificación en su tirada de FUE para enfrentarse al pólipo. El pólipo puede elegir a sus objetivos.<br><strong>Huracán:</strong> Varios pólipos pueden unir fuerzas para generar vientos huracanados. El viento tendrá una velocidad de 800 km/h por cada punto de POD invertido por los pó lipos participantes. Este huracán tiene un efecto local y pierde 8 km/h de fuerza por cada 200 m que avance. Así, un g rupo de pólipos volantes podrá generar vie ntos huracanados que afecten a un área de varios kilómetros cuadrados. Los obje t ivos sufren 1D4 puntos de daño por cada 30 km/h por e n cima de 100 km/ h de velocidad del viento; aquellos que tengan éxito en una tirada de Suerte sufrirán solo la mitad del daño." ,
        Habilidades : "<strong>Combatir</strong> 85 % (42/17), daño 1D10.<br> Ráfaga de viento 70% (35/14), Bonificación al daño (se reduce en 1 D6 por cada 20 m de distancia).<br> <br><strong>Esquivar</strong> 30% (15/6)." ,
        Cordura : "Ver a un pólipo volante produce una pérdida de 1D3/1D20 Puntos de Cordura."
}

const Profundo = {
        Nombre : "Profundo" ,
        FUE : [24 , 4],
        CON : [18 , 3],
        TAM : [24 , 9],
        DES : [18 , 3],
        INT : [18 , 8],
        POD : [18 , 3],
        Movimiento : "8/10 Nadando",
        Descripcion_breve: "Señores Branquiados de las Profundidades" ,
        Armadura : "1 punto de piel y escamas." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los profundos pueden utilizar armas igual que lo hacen los humanos. Tienen gran pericia con sus lanzas y tridentes." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño 1D6 + Bonificación al daño o según el tipo de arma (por ejemplo : lanza, daño 1D8 + Bonificación al daño). <br><strong>Esquivar</strong> 25% (12/5)." ,
        Cordura : "Ver a un profundo produce una pérdida de 0/1D6 Puntos de Cordura."
}

const Hibrido_profundo = {
        Nombre : "Híbrido Profundo" ,
        FUE : [18 , 8],
        CON : [18 , 8],
        TAM : [18 , 3],
        DES : [18 , 8],
        INT : [18 , 8],
        POD : [18 , 3],
        APA : [12 , 2],
        Movimiento : "8/8 Nadando",
        Descripcion_breve: "La Progenie Degenerada de Innsmouth" ,
        Armadura : "Ninguna" ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los híbridos pueden utilizar armas igual que lo hacen los humanos" ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño según el tipo de arma, o desarmado (1D3) + Bonificación al daño. <br><strong>Esquivar</strong> 30% (15/6)<br><strong>Escuchar</strong> 50%<br><strong>Nadar</strong> 60%<br><strong>Saltar</strong> 45%<br><strong>Sigilo</strong> 46%." ,
        Cordura : "Ver a un híbrido produce una pérdida de 0/1D4 Puntos de Cordura, aunque esta puede aumentar a 1/1D6 o más en el caso de especímenes particularmente monstruosos."
}

const Reptante = {
        Nombre : "Reptantes" ,
        FUE : [12 , 7],
        CON : [24 , 4],
        TAM : [18 , 8],
        DES : [12 , 2],
        INT : [24 , 4],
        POD : [30 , 10] ,
        Movimiento : "8",
        Descripcion_breve: "Agusanados Maestros de la Brujería" ,
        Armadura : "Ninguna; sin embargo, debido a la blanda y resistente cualidad de los cuerpos de los reptantes, las armas normales les causan el mínimo daño posible. Las balas solo les causan 1 punto de daño, excepto los perdigones de una escopeta, que causan el daño mínimo de ese tipo de arma de fuego." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los reptantes pueden utilizar armas como hacen lo s humanos, sin embargo, prefieren utilizar hechizos o a sus esbirros para que lleven a cabo sus labores físicas ." ,
        Habilidades : "<strong>Combatir</strong> 35 % (17/7), daño 1D3 (desarmado) o según el tipo de arma.<br><strong>Esquivar</strong> 20% (10/4)." ,
        Cordura : "Ver a un reptante produce una pérdida de 1D3/2D6 Puntos de Cordura."
}

const Retoño_oscuro = {
        Nombre : "Retoños oscuros" ,
        FUE : [54 , 34],
        CON : [24 , 9],
        TAM : [54 , 34],
        DES : [24 , 9],
        INT : [24 , 4],
        POD : [30 , 5],
        Movimiento : "8",
        Descripcion_breve: "de Shub-Niggurath" ,
        Armadura : "Los retoños oscuros no están formados por materia terrenal, de modo que cualquier ataque con éx ito de un arma de fuego les causa solamente 1 punto de daño por cada bala (2 puntos en caso de empalamiento). Las armas cuerpo a cuerpo normales causan el daño normal. Los ataques basados en el calor, los e xplosivos, la corrosión, la electricidad o el envenenamiento no causan efecto alguno ." ,
        Ataques_por_asalto : "5. Los retoños oscuros solo pueden utilizar su ataque de pisoteo una vez por asalto." ,
        Ataques_de_combate : "Entre su masa de tentáculos, los retoños oscuros tienen cuatro más gruesos y sinuosos con los que atacan. Pueden extender cada uno de estos gruesos tentáculos para golpear con ellos. También pueden patear con sus pezuñas, y aplastar o arrollar con su enorme masa.<br><strong>Apresar (mnbr):</strong> Los retoños oscuros pueden utilizar sus tentáculos para apresar y capturar hasta cuatro victimas. Si agarra a una víctima, la arrastrará hasta una de sus horrendas bocas succionado ras y le drenará 1D10 + 5 FUE por asalto. La FUE perdida no se podrá recuperar. Mientras esté siendo drenada, la víctima solo será capaz de gritar y retorcerse inútilmente.<br><strong>Pisotear:</strong> Los retoños oscuros también pueden pisotear con sus enormes pezuñas, rugiendo y bramando mientras se encabritan e intentan pisotear a tantos oponentes como sea posible (hasta 1D4 humanos si se encuentran lo bastante cerca)." ,
        Habilidades : "<strong>Combatir</strong> 80% (40/16), Bonificación al daño . <br><strong>Apresar (mnbr)</strong> apresado y retenido, drena 1D10 + 5 FUE por asalto. <br><strong>Pisotear</strong> 40% (20/8), daño 206 + Bonificación al daño . <br><strong>Esquivar 40% (20/8)." ,
        Cordura : "Ver a un retoño oscuro produce una pérdida de 1D3/1D10 Puntos de Cordura."
}

const Semilla_estelar = {
        Nombre : "Semillas estelares de Cthulhu" ,
        FUE : [120 , 20],
        CON : [90 , 15],
        TAM : [18 , 3],
        DES : [18 , 3],
        INT : [36 , 6],
        POD : [36 , 6],
        Movimiento : "15/15 Nadando",
        Descripcion_breve: "Sátrapas del Durmiente" ,
        Armadura : "1O puntos de piel y grasa; regeneran 3 Puntos de vida por asalto." ,
        Ataques_por_asalto : "4" ,
        Ataques_de_combate : "Las semillas estelares pueden atacar con sus tentáculos o con sus garras para infligir daño o capturar a sus víctimas." ,
        Habilidades : "<strong>Combatir</strong> 80% (40/16), el daño es igual a la Bonificación al daño.<br><strong>Esquivar</strong> 26% (13/5)." ,
        Cordura : "Ver a una semilla estelar produce una pérdida de 1D6/1D20 Puntos de Cordura."
}

const Semilla_informe = {
        Nombre : "Semillas informe" ,
        FUE : [42 , 7],
        CON : [18 , 3],
        TAM : [48 , 13],
        DES : [24 , 14],
        INT : [18 , 8],
        POD : [18 , 3],
        Movimiento : "12",
        Descripcion_breve: "Horrores Metamórficos" ,
        Armadura : "Inmune a todas las armas físicas, incluso a las en cantadas; las heridas simplemente se cierran tras haber sido abiertas. Pueden verse afectadas por hechizos, así como por el fuego, productos químicos y otras fuerzas." ,
        Ataques_por_asalto : "2 (limitado a 1 mordisco por asalto)" ,
        Ataques_de_combate : "Gracias a su extrema fluidez son capaces de atacar de muchas formas posibles, formando látigos, tentáculos y otros apéndices con los que aporrear y golpear a sus adversarios. <br><strong>Mordisco:</strong> La víctima es engullida en el acto. Cada asalto posterior, la víctima sufre 1 punto de daño a causa de la constricción; el daño por asalto se incrementa en 1 de forma progresiva (es decir, que en el segundo asalto causa 2 puntos de daño, 3 en el tercero, etcétera). Una víctima engullida no puede llevar a cabo ninguna acción, aunque sus amigos pueden intentar matar a la criatura para liberarla. Una semilla informe puede realizar un ataque de mordisco por asalto , y puede seguir engullendo presas hasta haber tragado tantos puntos de TAM como los suyos propios. La semilla puede continuar luchando mientras digiere a una víctima, pero será in capaz de desplazarse a otro lugar sin regurgitar antes lo que se haya tragado. <br><strong>Apresar (mnbr):</strong> Apresa a un adversario utilizando uno de sus apéndices parecidos a látigos; el alcance es siempre de una quinta parte del TAM del monstruo en metros." ,
        Habilidades : "<strong>Combatir</strong> 60% (30/12), daño 2D6 + Bonificación al daño. <br><strong>Apresar (mnbr)</strong> daño 1D6 + Bonificación al daño. <br><strong>Mordisco</strong> 30% (15/6), daño engullido. <br><strong>Esquivar</strong> 47% (23/9)." ,
        Cordura : "Ver a una semilla informe produce una pérdida de 1/1D1O Puntos de Cordura."
}

const Ser_rata = {
        Nombre : "Seres Rata" ,
        FUE : [3 , 1],
        CON : [12 , 2],
        TAM : [5 , 5],
        DES : [28 , 8],
        INT : [18 , 3],
        POD : [12 , 2],
        Movimiento : "9",
        Descripcion_breve: "Espías Escurridizos, Malévolos y Burlones" ,
        Armadura : "Ninguna , pero los ataques contra un ser rata a la Carrera se hacen con un dado de penalización." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los seres rata atacan trepando por las piernas o entre la ropa de sus adversarios humanos, o dejándose caer desde el techo. Cuando el ataque de un ser rata tiene éxito, se adhiere y comienza a morder. Arrancarse un ser rata causa 1D3 puntos de daño adicionales a la desafortunada víctima." ,
        Habilidades : "<strong>Combatir</strong> 35% (17 /7), daño 104 + Bonificación al daño. <br><strong>Esquivar</strong> 45 % (22/9), <br><strong>Escuchar</strong> 50 %, <br><strong>Sigilo</strong> 75%." ,
        Cordura : "Ver a un ser rata produce una pérdida de 0/1D6 Puntos de Cordura; sin embargo, si la persona que lo ve llegó a conocer al ser rata en vida, la pérdida será de 1/1D8 Puntos de Cordura."
}

const Servidor_de_los_otros_dioses = {
        Nombre : "Servidor de los Otros Dioses" ,
        FUE : [24 , 4],
        CON : [24 , 9],
        TAM : [30 , 10],
        DES : [24 , 9],
        INT : [30 , 5],
        POD : [24 , 14],
        Movimiento : "7",
        Descripcion_breve: "de los Dioses Exteriores" ,
        Armadura : "Ninguna, aunque las armas físicas no pueden causarles daño; los hechizos y la s armas mágicas sí le s hacen el daño normal ; regeneran 3 Puntos de Vida por asalto hasta que mueren." ,
        Ataques_por_asalto : "4" ,
        Ataques_de_combate : "Una masa de tentáculos retorcidos que golpean y se enroscan al objetivo. Tras un ataque exitoso, tira 1D3 para determinar cuántos tentáculos infligen daño. Pueden utilizar sus tentáculos para captura r a un adversario con una maniobra exitosa. El alcance de sus tentáculos es igua la una quinta parte del TAM del monstruo en metros." ,
        Habilidades : "<strong>Combatir</strong> 45 % (22/9), daño 1D6 + Bonificación al daño por tentáculo. <br><strong>Esquivar</strong> 41% (20/8)." ,
        Cordura : "Ver a un servidor produce un a pérdida de 1/1D1O Puntos de Cordura."
}

const Insectos_de_shaggai = {
        Nombre : "Insectos de Shaggai" ,
        FUE : [3 , 1],
        CON : [3 , 1],
        TAM : [0.00001, 0.00001],
        DES : [36 , 26],
        INT : [24 , 9],
        POD : [30 , 5],
        Movimiento : "4/20 Volando",
        Descripcion_breve: "Parásitos Mentales" ,
        Armadura : "Ninguna" ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Un insecto de shaggai recurre siempre a su látigo neural o a su capacidad de poseer a su objetivo (fusionarse), y carece de cualquier habilidad de Combatir innata. <br><strong>Látigo neural:</strong> El látigo neural es un pequeño dispositivo tecnológico que proyecta un chirriante haz de luz desva hída. Cuando la luz alcanza a un objetivo, haz una tirada enfrentada de POO . Si gana el shan, el objetivo sufrirá una agonía sobrecogedora y no podrá hacer otra cosa que retorcerse en el suelo hasta que se desactive el arma. Si el ataque falla, el objetivo seguirá sintiendo un gran dolor y todas sus tiradas recibirán un dado de penalización durante un número de horas igual a 24 menos la quinta parte de la CON de la víctima. Se puede renovar el ataque cada asalto y las penalizaciones son acumulativas . <br><strong>Fusionarse:</strong> Esto representa la probabilidad de que un shan se adentre volando en la cabeza de un ser humano para permanecer allí." ,
        Habilidades : "<strong>Látigo neural</strong> 50 % (25/10), daño especial. <br><strong>Fusionarse</strong> 60% (30/12), no causa daño, sin embargo, una vez ha penetrado en el cerebro del objetivo, el insecto irá ganando cada vez más control. <br><strong>Esquivar</strong> 77% (38/15)." ,
        Cordura : "Ver a un shan produce una pérdida de 0/1D6 Puntos de Cordura."
}

const Shantak = {
        Nombre : "Shantak" ,
        FUE : [44 , 24],
        CON : [18 , 8],
        TAM : [60 , 40],
        DES : [15 , 5],
        INT : [6 , 1],
        POD : [18 , 3],
        Movimiento : "6/18 Volando",
        Descripcion_breve: "Colosales Monturas Aladas" ,
        Armadura : "9 puntos de piel gruesa." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Estos monstruos enormes pueden golpear con sus extremidades o morder a un adversario . <br><strong>Morder y retener (mnbr):</strong> Utiliza un ataque de mordisco para apresar y retener a su presa." ,
        Habilidades : "<strong>Combatir</strong> 45 % (22/9), daño 1D6 + Bonificación al daño.<br><strong>Morder y retener (mnbr)</strong> daño 2D6+2 + 1D6 daño por asalto mientras siga apresado . <br><strong>Esquivar</strong> 25% (12/5)" ,
        Cordura : "Ver a un shantak produce una pérdida de 0/1D6 Puntos de Cordura."
}

const Shoggoth = {
        Nombre : "Shoggoth" ,
        FUE : [108 , 18],
        CON : [72 , 12],
        TAM : [144 , 24],
        DES : [6 , 1],
        INT : [12 , 2],
        POD : [18 , 3],
        Movimiento : "6/18 Volando",
        Descripcion_breve: "Fétidas Iridiscencias" ,
        Armadura : "Ninguna, pero (1) los ataques de fuego o electricidad causan solo la mitad del daño; (2) armas físicas co mo las armas de fuego y los cuchillos causan solo 1 punto de daño por impacto; (3) un shoggoth regenera 2 Puntos de Vida por asalto." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Durante el combate, un shoggoth cubre un área de 5 m<sup>2</sup>. y es capaz de generar a voluntad tentáculos, zarpas o cualquier otro tipo de apéndices con los que llevar a cabo un ataque aplastante. Aquellos desafortunados que sean alcanzados por el ataque de un shoggoth también podrán ser engullidos. <br><strong>Engullir:</strong> Cada persona engullida en el interior del shoggoth es atacada por separado, y deberá vencer en una tirada enfrentada de FUE o será asimilada. Si el shoggoth ataca a más de un objetivo deberá dividir su FUE entre todos ellos. Las víctimas atrapadas en el interior de la oscura masa del shoggoth solo podrán contraatacar en aquellos asaltos en los que superen una tirada de FUE. Cada asalto que una víctima continúe atrapada en el interior de un shoggoth perderá una cantidad de Puntos de Vida igual a la Bonificación al daño del shoggoth; ese daño es producto de las fracturas, el aplastamiento y la succión. Un shoggoth es capaz de engullir cualquier cantidad de enemigos; sin embargo, el TAM combinado de estos no podrá exceder el TAM del shoggoth." ,
        Habilidades : "<strong>Combatir</strong> 70% (35/14), daño igual a la Bonificación al daño o puede engullir al objetivo (como se indicaba anteriormente).<br><strong>Esquivar</strong> 8% (4/1)." ,
        Cordura : "Ver a un shoggoth produce un a pérdida de 1D6/1D20 Puntos de Cordura."
}

const Señor_de_los_shoggoths_humano = {
        Nombre : "Señor de los Shoggoths humano" ,
        FUE : [20 , 10],
        CON : [18 , 8],
        TAM : [21 , 6],
        DES : [18 , 3],
        INT : [18 , 8],
        POD : [21 , 6],
        APA : [9 , 4],
        EDU : [18 , 3],
        Movimiento : "8/10 Caminando",
        Descripcion_breve: "A la vista un Humano Cualquiera" ,
        Armadura : "Ninguna, pero (1) los ataques de fuego o electricidad causan solo la mitad del daño; (2) las armas físicas como las armas de fuego y los cuchillos causan solo 1 punto de daño por impacto; (3) un shoggoth regenera 2 Puntos de Vida por asalto." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Los Shoggots en forma humana pueden utilizar armas igual que lo hacen los humanos." ,
        Habilidades : "<strong>Combatir</strong> 90% (45/18), daño 1D6+2 + Bonificación al daño de su forma actual;<br><strong>Esquivar</strong> 26% (13/5). <br><strong>Encanto</strong> 70%, <br><strong>Intimidar</strong> 60%, <br><strong>Persuasión</strong> 60%, <br><strong>Sigilo</strong> 65%, y todas aquellas que el Guardián estime oportunas." ,
        Cordura : "Ver la auténtica forma de un Señor de los shoggoths produce una pérdida de 1D6/1D20 Puntos de Cordura. El Guardián podrá añadir una pérdida de 1/1D3 Puntos de Cordura para aquellos que sean testigos de la transformación de un Señor de los shoggoths entre su forma humana y su forma monstruosa."
}

const Señor_de_los_shoggoths = {
        Nombre : "Señor de los Shoggoths" ,
        FUE : [34 , 14],
        CON : [46 , 16],
        TAM : [19 , 6],
        DES : [18 , 3],
        INT : [18 , 8],
        POD : [21 , 6],
        Movimiento : "8 Caminando/10 Rodando",
        Descripcion_breve: "Monstruosidades Corpulentas" ,
        Armadura : "Ninguna, pero (1) los ataques de fuego o electricidad causan solo la mitad del daño; (2) las armas físicas como las armas de fuego y los cuchillos causan solo 1 punto de daño por impacto; (3) un shoggoth regenera 2 Puntos de Vida por asalto." ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Un Señor de los shoggoths intentará engullir a su presa viva dentro de su cuerpo gelatinoso y burbujeante. Cuando atrapa a una presa , la captura y la retiene mientras intenta absorberla al interior de su masa corporal, donde podr·á digerirla. Mientras esté siendo digerida , la víctima sufrirá 1D6 puntos de danio por asalto producidos por los jugos gástricos y fluidos digestivos que envuelven el cuerpo del desafortunado. Aquellos que sean capturados de esta forma podrán intentar liberarse una vez por asalto mediante una tirada enfrentada de FUE. A diferencia de sus parientes más grandes, los Señores de los shoggoth solo pueden alimentarse de una víctima al mismo tiempo. Mientras se esté alimentando, el Señor de los shoggoths no podrá utilizar su ataque aplastante, aunque seguirá pudiendo usar sus poderosos puños pseudópodos." ,
        Habilidades : "<strong>Combatir</strong> 90% (45/18), daño 1D6+2 + Bonificación al daño de su forma actual; o engullir al objetivo, daño 1D6 por asalto (daño de ácido) hasta que la víctima muere. <br><strong>Esquivar</strong> 26% (13/5). <br><strong>Sigilo</strong> 65%, y todas aquellas que el Guardián estime oportunas." ,
        Cordura : "Ver la auténtica forma de un Señor de los shoggoths produce una pérdida de 1D6/1D20 Puntos de Cordura. El Guardián podrá añadir una pérdida de 1/1D3 Puntos de Cordura para aquellos que sean testigos de la transformación de un Señor de los shoggoths entre su forma humana y su forma monstruosa."
}

const Sirviente_Glaaki = {
        Nombre : "Sirviente de Gla'aki" ,
        FUE : [18 , 3],
        CON : [36 , 6],
        TAM : [18 , 8],
        DES : [6 , 1],
        INT : [18 , 8],
        POD : [18 , 3],
        Movimiento : "5",
        Descripcion_breve: "Esclavos en Descomposición" ,
        Armadura : "Ninguna." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los sirviente de Gla'aki cuentan con el repertorio habitual de ataques sin armas disponible para cualquier humanoide, o también pueden ir armados, normalmente con una hoz." ,
        Habilidades : "<strong>Combatir</strong> 40% (20/8), daño 1D3 + Bonificación al daño o según el arma (normalmente una hoz, daño 1D6 + 1 + Bonificación al daño). <br><strong>Esquivar</strong> 10% (5/2)." ,
        Cordura : "Si su aspecto es humano no producen una pérdida de Puntos de Cordura; 1/1D8 Puntos de Cordura si es el de un cadáver viviente; 1/1D1O Puntos de Cordura si está afectado por la descomposición verde."
}

const Tcho_tcho = {
        Nombre : "Tcho-Tcho" ,
        FUE : [18 , 3],
        CON : [18 , 3],
        TAM : [14 , 4],
        DES : [18 , 3],
        INT : [18 , 3],
        POD : [18 , 3],
        Movimiento : "8",
        Descripcion_breve: "Crueles y Salvajes Adoradores de los Dioses Oscuros" ,
        Armadura : "Ninguna." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los Tcho -Tcho cuentan con el repertorio habitual de ataques sin armas disponible para cualquier humanoide, y pueden utilizar cualquier arma humana." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño 1D3 + Bonificación al daño o según el tipo de arma . <br><strong>Esquivar</strong> 26% (13/5).<br><strong>Intimidar</strong> 40%, <br><strong>Nadar</strong> 45%, <br><strong>Seguir rastros</strong> 50%, <br><strong>Sigilo</strong> 60%." ,
        Cordura : "Ver a estas criaturas degeneradas produce una pérdida d e 0/1D3 Puntos de Cordura."
}

const Vagabundo_dimensiona = {
        Nombre : "Vagabundo Dimensional" ,
        FUE : [24 , 14],
        CON : [24 , 9],
        TAM : [24 , 14],
        DES : [18 , 3],
        INT : [12 , 2],
        POD : [18 , 3],
        Movimiento : "7",
        Descripcion_breve: "Viajeros que se Desplazan Entre Dimensiones" ,
        Armadura : "3 puntos de piel gruesa" ,
        Ataques_por_asalto : "2" ,
        Ataques_de_combate : "Los vagabundos dimensionales pueden atacar con ambas garras, pueden intentar apresar a un adversario y desplazarse con él hasta otra dimensión utilizando un ataque sin armas." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), 1D8 + Bonificación al daño. <br><strong>Apresar (mnbr)</strong> apresado y retenido durante 1 asalto antes de desaparecer rumbo a ... ¿quién sabe dónde7 <br><strong>Esquivar</strong> 30% (15/6)." ,
        Cordura : "Ver a un vagabundo dimensional produce una pérdida de Cordura de 0/1D10."
}

const Vampiro_estelar = {
        Nombre : "Vampiro Estelar" ,
        FUE : [36 , 16],
        CON : [18 , 8],
        TAM : [36 , 16],
        DES : [12 , 7],
        INT : [18 , 3],
        POD : [18 , 13],
        Movimiento : "6/9 Volando",
        Descripcion_breve: "Rapaces Invisibles" ,
        Armadura : "4 puntos de piel gruesa. Las balas solo causan la mitad de daño al integumento extraterrestre de los vampiros estelares." ,
        Ataques_por_asalto : "3" ,
        Ataques_de_combate : "Pueden utilizar sus garras para atacar. <br><strong>Capturar con las garras (mnbr):</strong> Una vez atrape a su víctima, en el asalto siguiente el vampiro este lar utilizará su ataque de mordisco para absorberle la sangre. <br><strong>Mordisco:</strong> Solo se puede utilizar contra una víctima apresada, ya sea viva o muerta; una víctima viva perderá 3D10 puntos de FUE por asalto debido a la pérdida de sangre. Si no muere, la víctima recuperará esta pérdida rápidamente, en tres días o menos." ,
        Habilidades : "<strong>Combatir</strong> 45% (22/9), daño 1D6 + Bonificación al daño. <br><strong>Capturar (mnbr)</strong> no causa daño, captura al objetivo . Se puede morder a un objetivo capturado en el asalto siguiente. <br><strong>Mordisco</strong> éxito automático contra un objetivo capturado, daño 3D10 FUE por asalto por la pérdida de sangre.<br><strong>Esquivar</strong> 23% (11/4)." ,
        Cordura : "Ver a un vampiro estelar o ser testigo de uno de sus ataques produce una pérdida de 1/1D10 Puntos de Cordura."
}

const Vampiro_de_fuego = {
        Nombre : "Vampiro de Fuego" ,
        FUE : [0.00001, 0.00001],
        CON : [12 , 2],
        TAM : [0.00001, 0.00001],
        DES : [24 , 9],
        INT : [18 , 3],
        POD : [18 , 8],
        Movimiento : "11 Volando",
        Descripcion_breve: "Los que Alimentan la Llama" ,
        Armadura : "Las armas materiales normales (cuchillas, balas, etc.) no les hacen daño . El agua les causa 1 punto de daño por cada 2 litros que se les vierta encima; un extintor de mano les causa 1D6 puntos de daño; y un cubo de agua , 1D3 puntos de daño." ,
        Ataques_por_asalto : "1" ,
        Ataques_de_combate : "Los vampiros de fuego atacan tocando a sus víctimas, y pueden prender objetos inflamables con solo tocarlos. Causan daño a los humanos por el golpe de calor. Para determinar la gravedad de este golpe de calor, tira 2D6 puntos de daño correspondientes al ataque del vampiro. Si el investigador supera una tirada de CON, solo sufrirá la mitad de este daño; si fracasa, sufrirá todo el daño. En ese mismo ataque, el vampiro intentará absorber Puntos de Magia de su objetivo: plantea una tirada enfrentada de POD; si gana el vampiro, robará 1D10 Puntos de Magia de su víctima; si gana el objetivo, el vampiro de fuego perderá uno de sus propios Puntos de Magia. Así, por cada ataque de un vampiro de fuego tendrás que tirar dos veces: una para determinar el daño producido por el calor y otra para determinar la pérdida de Puntos de Magia ." ,
        Habilidades : "<strong>Combatir</strong> 85% (42/17), daño 2D6 por la quemadura + drenaje de Puntos de Magia. <br><strong>Esquivar</strong> 40% (20/8)." ,
        Cordura : "Ver a un vampiro de fuego provoca una pérdida de 0/1D6 Puntos de Cordura."
}

const Yithiano = {
        Nombre : "Yithiano" ,
        FUE : [72 , 12],
        CON : [36 , 16],
        TAM : [66 , 44],
        DES : [15 , 5],
        INT : [30 , 10],
        POD : [18 , 8],
        Movimiento : "7",
        Descripcion_breve: "Viajeros Menta les del Tiempo" ,
        Armadura : "8 puntos de piel." ,
        Ataques_por_asalto : "2 (solo se puede disparar elarma lanzarrayos una vez por asalto)." ,
        Ataques_de_combate : "Durante el combate, un yithiano puede atacar con sus pinzas. También posee un gran tamaño que podrá aprovechar para aplastar o golpear a un investigador. Sin embargo, esta especie civilizada evita el combate cuerpo a cuerpo, y prefieren usar armas que escupen intensas descargas eléctricas, armas que se crearon originalmente para destruir a los pólipos volantes. <br><strong>Arma lanzarrayos:</strong> Existen muchos tipos de Armas lanzarrayos (véase la página 278). Una de las más comunes contiene una batería con 32 cargas, y se tarda 1 asalto en recargarla . Se pueden disparar varias cargas a la vez, aunque cada carga que se dispara por encima de cuatro hará que aumenten las probabilidades de que el arma se queme en un 5% acumulativo. Así, si se disparan 7 cargas a la vez, el arma quedará destruida si se obtiene un resultado de 15 o menos en una tirada de 1D1OO. Cada carga causa 1D1O puntos de daño al objetivo, por lo que 3 cargas causarán 3D1O puntos de daño . El arma tiene un alcance básico de 100m. Por cada 100m adicionales, añade un dado de penalización a la tirada de ataque." ,
        Habilidades : "<strong>Combatir</strong> 40% (20/8), daño 1 D6 + Bonificación al daño. <br><strong>Arma lanzarrayos</strong> 30% (15/6), daño 1D1O por cada carga.<br><strong>Esquivar</strong> 25% (12/5)." ,
        Cordura : "Ver a un miembro de la Gran Raza produce una pérdida de 0/1D6 Puntos de Cordura."
}

const Numero_Criatura = [
        Angel_descarnado,
        Antiguo,
        Byakhee,
        Chthonian,
        Color_surgido_del_espacio,
        Dagon_e_hidra,
        Dhole,
        Ghast,
        Gnoph_keh,
        Gul,
        Habitante_de_las_arenas,
        Hibrido_profundo,
        Hombre_serpiente,
        Horrendo_cazador,
        Insectos_de_shaggai,
        Lloigor,
        Migo,
        Perros_de_tindalos,
        Polipo_volante,
        Profundo,
        Reptante,
        Retoño_oscuro,
        Semilla_estelar,
        Semilla_informe,
        Ser_rata,
        Servidor_de_los_otros_dioses,
        Señor_de_los_shoggoths,
        Shantak,
        Shoggoth,
        Sirviente_Glaaki,
        Tcho_tcho,
        Vagabundo_dimensiona,
        Vampiro_de_fuego,
        Vampiro_estelar,
        Yithiano
]


function Crear_criatura(){

        const Codigo_criatura = parseInt(Criatura.value);

        const Codigo_Creacion = Numero_Criatura[Codigo_criatura]


        function atraparDescripcion (criatura) {

                return criatura
        }


        function atraparEstadisticasDeCriatura (criatura) {

                return (Math.floor(Math.random() * (criatura[0] - criatura[1] + 1 ) + criatura[1])) * 5;
        }

        function calcularCorpulencia (corpulencia) {

                if (corpulencia < 65 ){

                        return (-2)
                        }

                        else if (corpulencia < 85){

                                return (-1)

                                        }

                        else if (corpulencia < 125){

                                return (0)

                                        }

                        else if (corpulencia < 165){

                                return (1)
                                        }

                        else if (corpulencia < 205){

                                return (2)
                                        }

                        else {

                                return (Math.ceil(((corpulencia - 204) / 80))) + 2
                                        }
                        }

        function danoExtra  (corpulencia) {

                if (corpulencia < 1 ){

                        return corpulencia

                }
                        else if (corpulencia < 2) {

                                return corpulencia + "D4"
                        }

                        else {
                                return (corpulencia - 1) + "D6"
                        }
        }





        const Nombre_criatura = atraparDescripcion(Codigo_Creacion.Nombre);
        const Movimiento_criatura = atraparDescripcion(Codigo_Creacion.Movimiento);
        const Descripcion = atraparDescripcion(Codigo_Creacion.Descripcion_breve);
        const Armadura = atraparDescripcion(Codigo_Creacion.Armadura);
        const Cantidad_ataques = atraparDescripcion(Codigo_Creacion.Ataques_por_asalto);
        const Ataques = atraparDescripcion(Codigo_Creacion.Ataques_de_combate);
        const Habilidades = atraparDescripcion(Codigo_Creacion.Habilidades);
        const Perdida_de_Cordura = atraparDescripcion(Codigo_Creacion.Cordura);

        const Fuerza_criatura = atraparEstadisticasDeCriatura(Codigo_Creacion.FUE);
        const Constitucion_criatura = atraparEstadisticasDeCriatura(Codigo_Creacion.CON);
        const Tamaño_criatura = atraparEstadisticasDeCriatura(Codigo_Creacion.TAM);
        const Destreza_criatura = atraparEstadisticasDeCriatura(Codigo_Creacion.DES);
        const Inteligencia_criatura = atraparEstadisticasDeCriatura(Codigo_Creacion.INT);
        const Poder_criatura = atraparEstadisticasDeCriatura(Codigo_Creacion.POD);



        const Vida_criatura  = Math.floor((Tamaño_criatura+Constitucion_criatura)/10);
        const Magia_criatura = (Poder_criatura/5);
        const corpulenciaACalcular = Fuerza_criatura + Tamaño_criatura;
        const Corpulencia_criatura = calcularCorpulencia(corpulenciaACalcular);
        const Daño_extra_criatura = danoExtra(Corpulencia_criatura);


        // Se Genera en el html la criatura que se pide

        if ( Codigo_criatura === 26 ) {

                const Poder_especial_criatura = "No";
                const Poder_especial_humano = "No";
                const humano = Señor_de_los_shoggoths_humano 

                const Firstname_Man = "Joshua"
                const Descripcion_humano = atraparDescripcion(humano.Descripcion_breve);
                const Habilidades_humano = atraparDescripcion(humano.Habilidades);
                const Movimiento_humano = atraparDescripcion(humano.Movimiento);
                const Armadura_humano = atraparDescripcion(humano.Armadura);
                const Cantidad_ataques_humano = atraparDescripcion(humano.Ataques_por_asalto);
                const Ataques_humano = atraparDescripcion(humano.Ataques_de_combate);
                const Perdida_de_Cordura_humano = atraparDescripcion(humano.Cordura);
                const Educacion_humano = atraparEstadisticasDeCriatura(humano.EDU);
                const Apariencia_humano = atraparEstadisticasDeCriatura(humano.APA);
                const Fuerza_humano = atraparEstadisticasDeCriatura(humano.FUE);
                const Constitucion_humano = atraparEstadisticasDeCriatura(humano.CON);
                const Poder_humano = atraparEstadisticasDeCriatura(humano.POD);
                const Destreza_humano = atraparEstadisticasDeCriatura(humano.DES);
                const Tamaño_humano = atraparEstadisticasDeCriatura(humano.TAM);
                const Inteligencia_humano = atraparEstadisticasDeCriatura(humano.INT);
                
                const Magia_humano = (Poder_humano/5);
                const Vida_humano = Math.floor((Tamaño_humano+Constitucion_humano)/10);
                const corpulenciaACalcular = Fuerza_humano + Tamaño_humano;
                const Corpulencia_humano = calcularCorpulencia(corpulenciaACalcular);
                const Daño_extra_humano = danoExtra(Corpulencia_criatura);

                document.getElementById("result").innerHTML =
                "<br><h3> Nombre : "+Firstname_Man+"</h3>"+
                "<br><h4> Descripcion breve : "+Descripcion_humano+"</h4>"+
                "<h3><br>Stats</h3>"+
                "<ul><li> Fue : "+Fuerza_humano+
                "<br><li> Con : "+Constitucion_humano+
                "<br><li> Pod : "+Poder_humano+
                "<br><li> Des : "+Destreza_humano+
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
                "<br><li> Des : "+Destreza_criatura+
                "<br><li> Tam : "+Tamaño_criatura+
                "<br><li> Int : "+Inteligencia_criatura+
                "<br><li> PV  : "+Vida_criatura+
                "<br><li>"+"Corpulencia media: "+Corpulencia_criatura+
                "<br><li>"+"Bonificación al daño media: "+Daño_extra_criatura+
                "<br><li>"+"Media de puntos de magia: "+Magia_criatura+
                "<br><li>"+"Movimiento: "+Movimiento_criatura+
                "</ul><br><strong>Armadura : </strong>"+Armadura+
                "<br><strong>Cantidad de Ataques: </strong>"+Cantidad_ataques+
                "<br><br><strong>Ataques durante el combate: </strong>"+Ataques+
                "<br><br><strong>Habilidades : </strong>"+Habilidades+
                "<br><strong>Perdida de cordura : </strong>"+Perdida_de_Cordura+ 
                "<br>"+"Poder Especial: "+Poder_especial_criatura
        }

        else if (Codigo_criatura === 11 ) {

                const Apariencia_criatura = atraparEstadisticasDeCriatura(Codigo_Creacion.APA);
                const Poder_especial_criatura = "No";

                document.getElementById("result").innerHTML =
                "<br><h3> Nombre : "+Nombre_criatura+"</h3>"+
                "<br><h4> Descripcion breve : "+Descripcion+"</h4>"+
                "<h3><br>Stats</h3>"+
                "<ul><li> Fue : "+Fuerza_criatura+
                "<br><li> Con : "+Constitucion_criatura+
                "<br><li> Pod : "+Poder_criatura+
                "<br><li> Des : "+Destreza_criatura+
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

                const Poder_especial_criatura = "No";

                document.getElementById("result").innerHTML =
                "<br><h3> Nombre : "+Nombre_criatura+"</h3>"+
                "<br><h4> Descripcion breve : "+Descripcion+"</h4>"+
                "<h3><br>Stats</h3>"+
                "<ul><li> Fue : "+Fuerza_criatura+
                "<br><li> Con : "+Constitucion_criatura+
                "<br><li> Pod : "+Poder_criatura+
                "<br><li> Des : "+Destreza_criatura+
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