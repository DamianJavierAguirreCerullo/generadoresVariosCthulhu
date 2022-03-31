function NMujer(){


          //Area de variables random
     
     
     
     
          //Area de Nombres y Profesiones

          const Firstname_Woman = [ "Agatha", "Agnes","Alborz","Albrecht","Alden","Alejandra","Alexei", "Adelyn","Amelia", "Adriana", "Agatha", "Aileen", "Augusta","Ava","Abby","Abril","Alessa", "Alice","Amanda", "Anemone",
          "Barbara", "Bernadette", "Beatriz","Beryl", "Beulah","Berenice","Bella", "Bellona","Bernadett", "Bettye","Blanca", "Blossom","Brandie", "Brenda","Briana", "Bridgette","Brittney", "Brie","Benedicta", "Bisera",
          "Camilla", "Carmen", "Carmilla", "Caroline", "Chloe", "Christine", "Charity", "Cindy","Clarissa","Claudia", "Constance", "Cordelia", "Cynthia","Clarette","Clarisse", "Coline","Candace", "Cassidy","Charity", "Chelsey",
          "Daisy", "Daphné", "Doris","Dahlia","Daina","Deliverance", "Dakota","Dalma","Damla","Darlene","Dinah","Dollie","Dominica","Dora","Dorine","Dorothee",
          "Edith", "Edna","Eloise", "Elsie", "Estella", "Eleonora", "Esther", "Eugenie", "Eunice", "Elyzabeth","Emily","Emma","Evangeline", "Emogene","Eva","Erika","Eloise","Emilia","Erin","Estelle",
          "Florencia", "Frieda","Flora","Fanny","Felicity","Fiona","Fiorella","Fortuna","Francesca","Freya","Faustina","Fatima","Fayza","Feige",
          "Gertrude", "Gladys", "Gretchen","Gabby","Galya","Gertrude","Giorgia","Gisella","Grace","Gretchen","Gwen","Gypsy","Gorgina",
          "Hannah", "Hilda", "Hilary","Hope","Hellen", "Helena","Heidi","Hayley","Harriet","Harmony","Harley","Honora",
          "Ingrid", "Irene","Ivy","Isla","Isabel","Innes","Irvine","Iara","India","Isidora","Ivana","Ivett","Isidora",
          "Jeanette", "Jezebel", "Josephine", "Joyce", "Juanita","Jessica","Jennifer","Judit","Jacklyn","Janett","Janine","Jasmine","Joanna","Jull","Jody","Joyce","Judie","Julia",
          "Keziah","Kate","Kezia","Keith","Kelly","Kyle","Karina","Kaylyn","Kassandra","Kathina","Keira","Kelly","Kiara","Kim","Kimberly",
          "Leila", "Leonora", "Letitia", "Loretta", "Lucretia","Lally","Lindsey","Lowry","Lyne", "Lily","Lauren","Linda","Lara","Luisa", "Lillian","Lynette","Lisa","Lucie",
          "Mabel", "Madeleine", "Maia","Margaret", "Marjorie", "Marcella", "Melinda","Melissa", "Marissa", "Mildred","Mary","Mikaela", "Muriel", "Mia","","Michell","Megan","Magali","Magdalena",
          "Naomi", "Nora","Nadia","Nancy","Nessa","Natalie","Nicole","Nisa","Noelia","Nuria",
          "Octavia", "Ophelia","Olivia","Odette","Olga","Otilia",
          "Pansy", "Patience", "Pearle","Phoebe", "Phyllis","Pluma","Phebe","Paola","Patricia","Patty","Peace","Penelope","Petronella","Piper","Priscilla",
          "Quinn","Quiana","Quirina",
          "Rosemary", "Ruby","Rebecca","Rhoda","Rouse","Raine","Rachel","Raquel","Rhonda","Rita","Roberta","Rose","Rosalia","Rosario","Roxie","Ruth",
          "Sadie", "Selina", "Selma", "Sibyl","Sylvia","Stefanie", "Sarah","Sophia", "Stacy","Stella", "Shirley","Stacey","Sophie","Shelly",
          "Tabitha","Terry","Tanya","Tracy","Tatiana","Tempest","Theresa","Thelma","Tierra","Tiffany","Tori","Tracy",
          "Ursula","Urve","Usha",
          "Veronica", "Violet", "Virginia","Valeria","Valentina","Venus","Vesela","Victoria","Virna","Vivianne",
          "Wanda", "Whitney", "Winifreda","Winona","Winter",
          "Yachna","Yamila","Yasmine","Yesenia","Yoseline",
          "Zilpah","Zahira","Zaria","Zilpah","Zoe"];

          const Profession_Woman = ["Acrobata", "Actor", "Alienista", "Alpinista", "Anticuario", "Arqueologa", "Artesano",
          "Artista", "Atleta", "Ayudante de Laboratorio", "Bibliotecario", "Bombero", "Luchadora", "Camarera",
          "Cazador de Recompensas", "Cientifico", "Clerigo",
          "Detective de Agencia","Asesino", "Contrabandista",
          "Diletante", "Diseñador", "Escritor","Doncella",
          "Estudiante/Interno", "Explorador", "Fanatica", "Farmaceutico","Criminal; independiente","Estafador",
          "Forastero", "Fotografo", "Funerario", "Granjera","Falsificadora",
          "Interprete", "Investigador Academico","Pareja de Gangster", "perista; criminal ",
          "Investigador Privado", "Ama de Casa", "Miembro de una Tribu",
          "Libero", "Misionero", "Montañero", "Musico",
          "Ocultista", "Oficinista", "Prospector", "Psicologo/Psicoanalista", "Psiquiatra", "Reportera",
          "Agente Uniformado", "Vendedora", "Soldado",
          "Reportero Geografico", "Secretaria", "Tendero", "Tratante de Antiguedades", "Vagabundo", "Vaquero","Maestra",
          "Manicurista","Modista",
          "Profesor de secundaria", "Trabajador industrial", "Encargado del registro", "Trabajador Gubernamental",
          "Guarda Expedientes", "mecanógrafo", "jardineros","Productor de Fruta","Trabajador de vivero","Trabajador textil",
          "Obrero","Repartidor","colportores","Recolectores de Basura","Colportor","Viajeros comerciales",
          "operarios semicalificados/calificados","Fabrica de comida","Operador Telefonico","Fabrica de Zapatos",
          "fontanero","Electricista","Peluquero","Fabrica de ropa","Fabrica de muebles","Lavanderia",
          "Fabrica de Caucho","Fabrica de Escobas","Fabrica de Botones","Taquígrafo","Fabrica de Metal","Cajera",
          "Fabrica de telas","Distribuidor minorista","Granja lechera","Fabrica de Algodon","Fabrica de Guantes",
          "Fabrica de Neumaticos","Limpiadoras","Trabajadora Social","Fabrica de Caramelos","Sastre","Barbera",
          "Fabrica de Estabre/Lana","Fabrica de Sombreros","Fabrica de zapatos","Fabrica de Tabaco/Cigarrillos",
          "Partera","Empleada de tienda","Cocinera"];

          const Lastname = ["Abraham", "Adler", "Ankins", "Avery","Acheson","Aitken","Allan","Allaway","Allen","Angus","Atchison","Atwater","Appleton","Armistead","Ashworth","Atkin","Audley","Averill",
          "Barnham", "Bentz", "Bessler", "Bleeker", "Bretz", "Brock", "Buchman", "Brown","Baker","Byrne",,"Barlow","Bardsley","Barret","Bartram","Batts","Belanger","Bennett","Benson","Bernard","Bishop","Blackburn","Bloodworth","Boothman","Bowman","Bradford","Bradley","Braxton","Brent","Brett","Brinley","Bronson","Burnham","Baird","Barber","Beattie","Beatty","Begbie","Blackwood","Blair","Boyd","Breckenridge","Breckinridge","Brody","Bruce","Burns","Bridge","Barbour", "Beman", "Beckwith", "Bliss", "Bristol","Bain","Bannister",
          "Click", "Cordova", "Crabtree", "Crankovitch", "Cuthburt","Cuttling","Caldwell","Cantrell","Carter","Carver","Causer","Chambers","Chapman","Cheshire","Clement","Colbert","Cadwell", "Case", "Chittenden", "Corey","Calhoun","Campbell","Carson","Clacher","Coburn","Cockburn","Coutts","Craig","Cunningham","Coleman","Collingwood","Colton","Crawford","Crouch",
          "Dorman","Darrow","Davies","Davis","Donne","Drummond","Dubhghlas","Dunbar","Dunn","Dabney","Dixon","Dodge","Durant","Dill",
          "Eakley", "Eddie", "Elsner","Ellsworth","Emerson","Eustis","Evered","Evans", 
          "Fandrick", "Farwell", "Felten", "Fenske", "Fillman","Finley", "Firske", "Flanagan", "Franklin", "Freeman", "Frisbe","Fairbairn","Falconer","Faulkner","Ferguson","Findlay","Fraser","Farnham","Farran","Frost","Fuller","Forest",
          "Gore", "Greenwald","Gibbs","Gibson","Glen","Graeme","Graham","Grant","Grier","Grieve","Gadsby","Garland","Garnet","Gilliam","Gladwyn","Glass","Godfrey","Goodwin","Groves","Gardener","Green", "Griffith",
          "Hahn", "Heminger","Hogue","Hollister","Harland","Hartell","Hathway","Hayden","Haywood","Hedley","Heath","Henson","Herbert","Herriot","Hobbs","Holland","Hooper","Hopson","Huff","Hurst","Huxley","Hyland","Haig","Hardie","Henderson","Hendry","Hepburn","Houston","Hume","Hunter","Hackett","Haig","Hambleton","Harding","Hardwick","Hill","Higley",
          //i
          "Johnson","Jones","Jarrett","Jerome","Jernigan","Jinks","Jewell","Johnston",
          "Kasper", "Kisro", "Kleeman","Keir","Kendrick","Kinley","Kinnaird","Kerr","Keen","Kimball","Kingsley","Knight",
          "Lake","Levard", "Lockhart", "Luckstrim", "Lynch","Lenmox","Lester","Lindsay","Lister","Lithgow","Lusk","Lamb","Langley","Lawrence","Leach","Levitt","Li",
          "Madison", "Mantei", "Marsh", "McBurney", "McCarney", "Moses","Mac Alastair","MacBeth", "MacCallum","MacConnell","MacDaniel","MacDougall","MacGrory","MacKay","MacNeil","Maxwell","Mathieson","McAfee","Milne","Mitchell","Moffett","Monroe","Moray","Morris","Munro","Murdoch","Murray","Midgley","Mondy","Myers","Marchand","Marston","Mathers","Mercer","Morton",  "Martin", "Murphy","Merrill", "Mills",
          "Nickels", "O'Neil","Neil","Ness","Nevin","Norris","Nash","Neville","Nielson","Norwood","Northway",
          "Olson", "Ozanich","Oakley","Overton","O'Sullivan",  "O'Brien","Oakes",
          "Patterson","Patzer", "Peppin", "Porter","Posch","Pettibone", "Phelps", "Pike","Prentice", "Proctor","Padmore","Palmer","Parks","Payne","Peak","Pearce","Pemberton","Peterson","Pickle","Pilgrim","Poindexter","Powers","Pryor","Putnam","Purcell","Paterson","Patton","Pollock","Page",
          //q
          "Raslo", "Razner", "Rifenberg", "Riley", "Ripley", "Rossini","Rains","Rake","Reed","Reeve","Remington","Reynolds","Richardson","Rigby","Rimmer","Roach","Roscoe","Rowland","Russell","Rae","Ralston","Ramsey","Rattray","Reid","Ross","Ruskin","Rutherford","Rye","Roberts", 
          "Schiltgan", "Schmidt", "Schroeder", "Schwartz", "Shane", "Shattuck", "Shea", "Slaughter", "Smith", "Speltzer","Stimac", "Strenburg", "Strong", "Swanson","Sangster","Saunders","Sheach","Starrett","Sterling","Stewart","Stirling","Seaver","Sempers","Sharman","Sharrow","Shelton","Shine","Siddall","Simen","Simmons","Simpkin","Sinclair","Skeates","Slater","Snell", "Snider","Solomon","Sommer","Southgate","Spalding","Spear","Speight","Spencer","Stacy","Stanley","Stanton","Statham","Stern","Stevenson","Stidolph","Stoddard","Stone","Strickland","Stroud","Sadler","Sampson","Sanderson","Sanford","Sangster","Sappington","Sephard", "Scudder","Singh", "Silva", "Sedgwick", "Sidrach", "Smith",
          "Tillinghast", "Traver","Taft","Tanner","Tash","Tate","Tatham","Temple", "Tuller","Tatum","Tennison","Terrell","Thacker","Thompkins","Thorn","Tifft","Tindall","Tipton","Tirrel","Tobin","Trask","Toft","Toller","Tolbert","Trent","Triggs","Truman","Tucker","Turner","Twist","Taggart","Thorburn","Thatcher","Thomas",
          "Urton","Urquhart","Underhill","Upton",
          "Vallier","Vance","Varley","Varnham","Verity","Vernon","Vipond",
          "Wagner", "Walsted", "Wang",
          "Warner", "Webber", "Welch", "Winters",  "Williams","Walsh", "Wadsworth","Ward", "Westcott", "Wickes", "Wilcox", "Willard", "Witherell", "Wolcott", "Woodford","Wallace","Wallis","Woods","Wolf","Woodham","Woodrow","Wootton","Wragge","Wray","Wynne","Wade","Walker","Whitney","Whittemore","Wickham","Wiley","Winslow","Winter","Winthrop","White",
          "Yarbrough", "Yeske","Yap","Yates","Yoxall",
          "zanquell"];
     
          var rand_first_man = Math.floor(Math.random() * Firstname_Woman.length);
          var Firstname = Firstname_Woman[rand_first_man];
          var rand_prof_man = Math.floor(Math.random() * Profession_Woman.length);
          var Profession = Profession_Woman [rand_prof_man];
          var rand_prof_man = Math.floor(Math.random() * Profession_Woman.length);
          // var rand_first_man = Math.floor(Math.random() * Firstname_Man.length);
          var rand_first_woman = Math.floor(Math.random() * Firstname_Woman.length);
          var rand_last = Math.floor(Math.random() * Lastname.length);
          // var Gender = Math.floor(Math.random() * Genero.length); 
          // var rand_first = Math.floor(Math.random() * Firstname_Man.length) 
          // var rand_prof_man = Math.floor(Math.random() * Profession_Man.length);
          // var rand_prof_woman = Math.floor(Math.random() * Profession_Woman.length);
     
     
     
          //Area de Caracteristicas
     
          var Fue = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5;
          var Con = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5;
          var Pod = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5;
          var Des = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5;
          var Apa = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5;
          var Tam = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5;
          var Int = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5;
          var Edu = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5;
          var  Pv  = Math.floor((Tam+Con)/10);
          var Edad = Math.floor(Math.random() * (89 - 15 + 1) + 15);
          // var  Sue = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5
     
     
     
          //Area de Fobias y Manias
          
          var rand_Manias = Math.floor(Math.random() *(100 - 1 + 1) +1 )
          var rand_Fobias = Math.floor(Math.random() *(100 - 1 + 1) +1 )
          var Fobias_1 = Math.floor(Math.random() * Fobias.length);
          var Fobias_2 = Math.floor(Math.random() * Fobias.length);
          var Fobias_3 = Math.floor(Math.random() * Fobias.length);
          var Manias_1 = Math.floor(Math.random() * Manias.length);
          var Manias_2 = Math.floor(Math.random() * Manias.length);
          var Manias_3 = Math.floor(Math.random() * Manias.length);
     
     
     
          //Area de Trasfondo
     
          var Ideocreen = Math.floor(Math.random() * (10 - 1 + 1) + 1);
          var Lugarsigni = Math.floor(Math.random() * (10 - 1 + 1) + 1);
          var Objetosigni = Math.floor(Math.random() * (10 - 1 + 1) + 1);
          var Rasgoperso = Math.floor(Math.random() * (10 - 1 + 1) + 1);
          var Allega = Math.floor(Math.random() * (10 - 1 + 1) + 1);
          var RazonAllega = Math.floor(Math.random() * (10 - 1 + 1) + 1);
     
     
     
     
          //Area de Lugar de Nacimiento
     
          var Lugarnacimiento = Math.floor(Math.random() * (100 - 1 + 1) + 1);
          var rand_Pueblo = Math.floor(Math.random() * Pueblo.length);
          var rand_Ciudad = Math.floor(Math.random() * Ciudad.length);
          var rand_Europa = Math.floor(Math.random() * Europa.length);
          var rand_Africa = Math.floor(Math.random() * Africa.length);
          var rand_Asia = Math.floor(Math.random() * Asia.length);
          var rand_America = Math.floor(Math.random() * America.length);
          var rand_Oceania = Math.floor(Math.random() * Oceania.length);
          var rand_Continentes = Math.floor(Math.random() * Continentes.length);
          var Extranjero = Math.floor(Math.random() * (100 - 1 + 1 ) +1 );
     
     
     
     
     
          //Finaliza el Area de Variables random
     
     
     
          
     
          //Empiezan los if
     
     
     
     
          //Area de Fobias y Manias
     
     
          
     
          if (rand_Manias < 11){
               Mania = "No tiene Manias"
          }
               else if(rand_Manias < 61){
                    Mania = Manias[Manias_1]
               }
               else if(rand_Manias < 91){
                    Mania = Manias[Manias_1] + "<br>" + " " + Manias[Manias_2]
               }
               else {
                    Mania = Manias[Manias_1] + "<br>" + " " + Manias[Manias_2] + "<br>" + " " + Manias[Manias_3]
               }
     
     
     
          if (rand_Fobias < 86){
               Fobia = "No tiene Fobias"
          }
               else if(rand_Fobias < 96){
                    Fobia = Fobias[Fobias_1]
               }
               else if(rand_Fobias < 100){
                    Fobia = Fobias[Fobias_1] + "<br>" + " " + Fobias[Fobias_2]
               }
               else {
                    Fobia = Fobias[Fobias_1] + "<br>" + " " + Fobias[Fobias_2] + "<br>" + " " + Fobias[Fobias_3]
               }
     
     
     
     
          //Comienza el Area de Lugar de Nacimiento
     
          if (rand_Continentes === 0){
          var Pais = Europa[rand_Europa]
          }
               else if(rand_Continentes === 1){
               var Pais = Africa[rand_Africa]
               }
               else if(rand_Continentes === 2){
               var Pais = Asia[rand_Asia]
               }
               else if(rand_Continentes === 3){
               var Pais = America[rand_America]
               }
               else {
               var Pais = Oceania[rand_Oceania]
               }
     
     
     
          
          if (Extranjero < 19){
               var Pais = Inmigrante[0]
          }
               else if (Extranjero < 31){
                    var Pais = Inmigrante[1]
               }
               else if (Extranjero < 43){
                    var Pais = Inmigrante[2]
               }
               else if (Extranjero < 53){
                    var Pais = Inmigrante[3]
               }
               else if (Extranjero < 62){
                    var Pais = Inmigrante[4]
               }
               else if (Extranjero < 71){
                    var Pais = Inmigrante[5]
               }
               else if (Extranjero < 81){
                    var Pais = Inmigrante[6]
               }
               else if (Extranjero < 90){
                    var Pais = Inmigrante[7]
               }
               else if (Extranjero < 96){
                    var Pais = Inmigrante[8]
               }
               else if (Extranjero < 98){
                    var Pais = Inmigrante[9]
               }
               else if (Extranjero < 100){
                    var Pais = Inmigrante[10]
               }
               else {
                    var Pais = Pais
               } 
     
     
     
     
               
          if(Lugarnacimiento < 51){
               var Lugardenacimiento = "Nacio en la ciudad de " + Ciudad[rand_Ciudad]
          }

               else if(Lugarnacimiento < 61){
               var Lugardenacimiento = "Nacio en el Pueblo de " + Pueblo[rand_Pueblo]
          }
     
               else if (Lugarnacimiento < 75){
               var Lugardenacimiento = "Nacio en el pais de " + Pais
          }
     
               else {
               var ran_Estado = Math.floor(Math.random() * Estados.length )
               var Estado = Estados[ran_Estado]
               var Lugardenacimiento = "Nacio en el estado de "+ Estado
          }
          
          
          //Finaliza el area de lugar de Nacimiento
     
     
     
          //Comienza el Area de Edad y Trasfondo
     
     
     
     
          if(Edad < 20 ) {
                    var Cosas_edad = "Resta 5 puntos entre FUE y TAM, y también de EDU. Tira dos veces para determinar la Suerte y  elige el resultado mayor"
               }
               else if(Edad < 40){
                    var Cosas_edad = "Haz una tirada de mejora de EDU"
               }
               else if(Edad < 50){
                    var Cosas_edad = "Resta 5 puntos entre FUE, CON y DES (de una  sola o repartidos entre dos o tres), y reduce 5 puntos la APA. Haz 2 tiradas de mejora de EDU."
               }
               else if(Edad < 60){
                    var Cosas_edad = "Resta 10 puntos entre FUE, CON y DES (de una sola o repartidos entre dos o tres), y reduce 1O puntos la APA. Haz 3 tiradas de mejora de EDU."
               }
               else if(Edad < 70){
                    var Cosas_edad = "Resta 20 puntos entre FUE, CON y DES (de una sola o repartidos entre dos o tres), y reduce 15 puntos la APA. Haz 4 tiradas de mejora de EDU."
               }
               else if(Edad < 80){
                    var Cosas_edad = "Resta 40 puntos entre FUE, CON y DES (de una sola o repartidos entre dos o tres), y reduce 20 puntos la APA. Haz 4 tiradas de mejora de EDU."
               }
               else{
                    var Cosas_edad = "Resta 80 puntos entre FUE, CON y DES (de una sola o repartidos entre dos o tres), y reduce 25 puntos la APA. Haz 4 tiradas de mejora de EDU."
               }
     
     
     
     
          if(Ideocreen === 1 ) {
                    var IdeoCreencia  = "Hay un poder superior al que veneras y rezas (Vishnu,Jesucristo, Haile Selassie 1, etc.)."
               }
               else if(Ideocreen === 2){
                    var IdeoCreencia  = "La humanidad se las puede apañar sin religiones (ateo acérrimo, humanista, secularista, etc.)."
               }
               else if(Ideocreen === 3){
                    var IdeoCreencia  = "La ciencia tiene todas las respuestas. Elige un área de tu interés (evolución, criogenia, exploración espacial,etc.)."
               }
               else if(Ideocreen === 4){
                    var IdeoCreencia  = "Crees en el destino (el karma, el sistema de castas,supersticiones, etc.)."
               }
               else if(Ideocreen === 5){
                    var IdeoCreencia  = "Miembro de un club o sociedad secreta (Francmasones,el Instituto Femenino, Anonymous, etc.)."
               }
               else if(Ideocreen === 6){
                    var IdeoCreencia  = "En la sociedad hay un mal que debe ser erradicado.¿Cuál es este mal? (drogas, violencia, racismo, etc.)."
               }
               else if(Ideocreen === 7){
                    var IdeoCreencia  = "Lo oculto (astrología, espiritualismo, tarot, etc.)."
               }
               else if(Ideocreen === 8){
                    var IdeoCreencia  = "Política (conservador, soc ialista, liberal, etc .)."
               }
               else if(Ideocreen === 9){
                    var IdeoCreencia  = "El dinero es poder, y voy a amasar tanto como pueda (a     varo, emprendedor, implacable, etc.)."
               }
               else{
                    var IdeoCreencia  = "Abanderado/ Activista (feminismo, igualdad de derechos, sindicalismo, etc.)."
               }
     
     
     
     
          if(Lugarsigni === 1 ) {
                    var LugarSignificativo = "Donde cursaste tus estudios (colegio, universidad ,etc.)."
               }
               else if(Lugarsigni === 2){
                    var LugarSignificativo = "Tu ciudad natal (aldea rural, centro de comercio,ciudad ajetreada, etc.)."
               }
               else if(Lugarsigni === 3){
                    var LugarSignificativo = "El lugar donde conociste a tu primer amor (un concierto, de vacaciones, un refugio antiaéreo, etc.) ."
               }
               else if(Lugarsigni === 4){
                    var LugarSignificativo = "Un lugar de tranquilidad y contemplación (la biblioteca,paseos por sus campos, pesca, etc.)."
               }
               else if(Lugarsigni === 5){
                    var LugarSignificativo = "Un lugar para socializar (club de caballeros, bar local,la casa de tu tío, etc.)."
               }
               else if(Lugarsigni === 6){
                    var LugarSignificativo = "Un lugar vincu lado a tu ideología / creencias ( la parroquia, la Meca, Stonehenge , etc. )"
               }
               else if(Lugarsigni === 7){
                    var LugarSignificativo = "La tumba de un ser querido. ¿Quién? (tu padre, un hijo, un amante, etc.)."
               }
               else if(Lugarsigni === 8){
                    var LugarSignificativo = "La residencia familiar (una casa de campo, un apartamento alquilado, el orfanato en el que creciste, etc.)."
               }
               else if(Lugarsigni === 9){
                    var LugarSignificativo = "El lugar en el que fuiste más feliz en toda tu vida (el banco del parque en el que diste el primer beso, tu universidad, etc.) ."
               }
               else{
                    var LugarSignificativo = "Tu lugar de trabajo (la oficina, la biblioteca, el banco,etc.)."
               }
     
     
     
               
          if(Objetosigni === 1 ) {
          var ObjetoSignificativo = "Un objeto vinculado a tu habilidad más alta (un traje caro, una identificación falsa, un puüo americano,etc.)."
          }
               else if(Objetosigni === 2){
                    var ObjetoSignificativo = "Un objeto fundamental para tu ocupación (el maletín de un médico, un coche, unas ganzúas, etc.)."
               }
               else if(Objetosigni === 3){
                    var ObjetoSignificativo = "Un recuerdo de tu niñez (cómics, una navaja de bolsillo, una moneda de la suerte, etc.)."
               }
               else if(Objetosigni === 4){
                    var ObjetoSignificativo = "Un recuerdo de una persona fallecida (una joya, una fotografía que llevas en la cartera, una carta, etc.)."
               }
               else if(Objetosigni === 5){
                    var ObjetoSignificativo = "Algo que te dio un allegado (un anillo, un diario, un mapa, etc.)."
               }
               else if(Objetosigni === 6){
                    var ObjetoSignificativo = "Tu colección. ¿De qué es? (billetes de autobús,animales de peluche, discos, etc.)."
               }
               else if(Objetosigni === 7){
                    var ObjetoSignificativo = "Algo que encontraste pero que no sabes qué es: buscas respuestas (una carta escrita en un idioma desconocido que encontraste en una alacena, una extraüa flauta de origen desconocido que encontraste entre los efectos personales de tu difunto padre, una curiosa esfera de plata que desenterraste en tu jardín, etc.)."
               }
               else if(Objetosigni === 8){
                    var ObjetoSignificativo = "Un artículo deportivo (un bate de críquet, una pelota de béisbol firmada, una caña de pescar, etc.)."
               }
               else if(Objetosigni === 9){
                    var ObjetoSignificativo = "Un arma (un revólver reglamentario, tu viejo rifle de caza, el cuchillo que llevas escondido en la bota, etc.)."
               }
               else{
                    var ObjetoSignificativo = "Una mascota (un perro, un gato, una tortuga, etc.)."
               }   
     
     
     
               
          if(Rasgoperso === 1 ) {
               var Rasgopersonalidad = "Generoso (propinas generosas, siempre ayuda a personas necesitadas, filántropo, etc.)."
               }
               else if(Rasgoperso === 2){
                    var Rasgopersonalidad = "Bueno con los animales (amante de los gatos, creció en una granja, mano para los caballos, etc.)."
                    }
               else if(Rasgoperso === 3){
                    var Rasgopersonalidad = "Soñador (tiende a estar con la cabeza en las nubes, visionario, muy creativo, etc.)."
                    }
               else if(Rasgoperso === 4){
                    var Rasgopersonalidad = "Hedonista (el alma de la fiesta, borracho divertido, vive deprisa y muere joven, etc.)."
                    }
               else if(Rasgoperso === 5){
                    var Rasgopersonalidad = "Jugador y amante del riesgo (cara de póquer, lo ha probado todo al menos una vez, vive al límite, etc.)."
                    }
               else if(Rasgoperso === 6){
                    var Rasgopersonalidad = "Buen cocinero (hace unas tartas maravillosas, puede elaborar un plato con casi cualquier cosa, paladar refinado, etc.)."
                    }
               else if(Rasgoperso === 7){
                    var Rasgopersonalidad = "Seductor/Seductora (cortés, voz cautivadora, mirada arrebatadora, etc.)"
                    }
               else if(Rasgoperso === 8){
                    var Rasgopersonalidad = "Leal (apoya a sus amigos, nunca rompe una promesa, moriría por sus creencias, etc.)."
                    }
               else if(Rasgoperso === 9){
                    var Rasgopersonalidad = "Buena reputación (el mejor conversador de sobremesa del país, el más pío de los hombres, impávido ante el peligro, etc .)."
                    }
               else{
                    var Rasgopersonalidad = "Ambicioso (alcanzar una meta, convertirse en el jefe, hacerse con todo, etc.)."
                    }
     
     
     
     
          if(Allega === 1 ) {
               var Allegados = "Padre (madre, padre, madrastra, etc.)."
               }
               else if(Allega === 2){
                    var Allegados = "Abuelo (abuela materna, abuelo paterno, etc.)."
                    }
               else if(Allega === 3){
                    var Allegados = "Hermano (hermano, hermanastro, hermanastra, etc.)."
                    }
               else if(Allega === 4){
                    var Allegados = "Hijo (hijo, hija, hijastro, hijastra, etc.)."
                    }
               else if(Allega === 5){
                    var Allegados = "Pareja (esposa, prometida , amante , etc.)."
                    }
               else if(Allega === 6){
                    var Allegados = "La persona que te enseñó tu habilidad de ocupación que tenga la mayor puntuación. Identifica la habilidad y plantéate quién te la enseñó ( un profesor d el colegio, la persona de la que fuiste aprendiz, tu padre, etc.) ."
                    }
               else if(Allega === 7){
                    var Allegados = "Amigo de la infancia (compañero de clase, vecino, amigo imaginario, etc.) ."
                    }
               else if(Allega === 8){
                    var Allegados = "Una persona famosa. Tu ídolo o t u héroe. Puede que nunca os hayáis conocido (estrella de cine, político,músico, etc.)."
                    }
               else if(Allega === 9){
                    var Allegados = "Otro investigador de tu grupo de juego. Elige uno o deterrninalo al azar."
                    }
               else{
                    var Allegados = "Un personaje no jugador (PNJ) del juego. Pide al Guardián que te elija uno."
                    }
     
     
                    
     
          if(RazonAllega === 1 ) {
               var RazonAllegado = "Estás en deuda con esa persona. ¿De qué forma te ayudó? (económicamente, te protegió en los malos tiempos, te consiguió tu primer trabajo, etc.)."
               }
               else if(RazonAllega === 2){
                    var RazonAllegado = "Te enseñó algo. ¿Qué? (una habilidad, a amar, a ser un hombre, etc.) ."
                    }
               else if(RazonAllega === 3){
                    var RazonAllegado = "Dio sentido a tu vida. ¿Cómo? (aspirar a ser como esa persona, quieres estar con ella, quieres hace rl a feliz,etc.) ."
                    }
               else if(RazonAllega === 4){
                    var RazonAllegado = "Hiciste algo que perjudicó a esa persona y buscas la reconciliación. ¿Qué hiciste? (le robas te dinero, informaste ala policía sobre ella, te negas te a ayudarla cuando estaba deses perada, etc.)."
                    }
               else if(RazonAllega === 5){
                    var RazonAllegado = "Una experiencia compartida. ¿Qué? (pasaste is juntos una mala racha, crecisteis juntos, servisteis juntos en una guerra, etc.)."
                    }
               else if(RazonAllega === 6){
                    var RazonAllegado = "Pretendes demostrarle tu valía. ¿Cómo? (consiguiendo un buen trabajo, encontrando una buena esposa ,consiguiendo una educación, etc.) ."
                    }
               else if(RazonAllega === 7){
                    var RazonAllegado = "Le idolatras (por su fama, por su belleza , por su trabajo, etc.)."
                    }
               else if(RazonAllega === 8){
                    var RazonAllegado = "Remordimiento (deberías haber muerto en su lugar, discutisteis por algo que diji ste, no te ofreciste a ayudarle cuando tuviste la oportunidad, etc.)."
                    }
               else if(RazonAllega === 9){
                    var RazonAllegado = "Quieres demostrar que eres mejor que esa persona. ¿Cuál era su defecto? (pereza, a lcoholismo, incapaz de amar, etc.)."
                    }
               else{
                    var RazonAllegado = "Te hizo daño y ahora buscas venganza. ¿De qué le culpas? (la muerte de un ser querido, tu ruina finan ciera,la ruptura de tu matrimonio, etc.)."
                    }
     
     
          
     
          //Comienza el Area de Edad y Trasfondo
     
     
     
          //Terminan los if
     
     
     
     
          //Zona de muestra de resultados
     
     
          
          document.getElementById("result").innerHTML =
          // "<br><h3> Genero : "+Genero[Gender]+"</h3>"+
          "<br><h3> Genero : Mujer </h3>"+
          "<br><h3> Nombre : "+Firstname+" "+Lastname[rand_last]+"</h3>"+
          "<br> Profesion : "+Profession+"<br>"+
          "<br> Ciudad/Pueblo : "+Pueblo[rand_Pueblo]+
          "<h3><br>Stats</h3>"+
          "<ul><li> Fue : "+Fue+
          "<br><li> Con : "+Con+
          "<br><li> Pod : "+Pod+
          "<br><li> Des : "+Des+
          "<br><li> Apa : "+Apa+
          "<br><li> Tam : "+Tam+
          "<br><li> Int : "+Int+
          "<br><li> Edu : "+Edu+
          "<br><li> PV  : "+Pv+
          "<br><li> Edad: "+Edad+"<br>"+"</ul>"+
          "<br>"+Cosas_edad+"<br>"+
          "<br>"+"Ideologia/Creencia"+
          "<br>"+IdeoCreencia+"<br>"+
          "<br>"+"Lugares Significativos"+
          "<br>"+LugarSignificativo+"<br>"+
          "<br>"+"Posesion Preciada"+
          "<br>"+ObjetoSignificativo+"<br>"+
          "<br>"+"Lugar De Nacimiento"+
          "<br>"+Lugardenacimiento+"<br>"+
          "<br>"+"Rasgo De Personalidad"+
          "<br>"+Rasgopersonalidad+"<br>"+
          "<br>"+"Allegado"+
          "<br>"+Allegados+"<br>"+
          "<br>"+"Porque Es Tu Allegado"+
          "<br>"+RazonAllegado+"<br>"+
          "<br>"+Mania+"<br>"+
          "<br>"+Fobia
          
          // +"<br> Sue : "+Sue;
     
          //Fin Zona de muestra de resultados
}