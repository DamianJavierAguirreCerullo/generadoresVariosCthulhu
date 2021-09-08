function NHombre(){

	var firstname = ["Aaron", "Abraham", "Addison", "Amos", "Anderson", "Archibald", "August", "Barnabas", "",
     "Blair", "Caleb", "Cecil", "Chester", "Clifford", "Clinton", "Cornelius", "Curtis", "Baxter",
     "Dayton", "Delbert", "Douglas", "Dudley", "Ernest", "Eldridge", "Elijah", "Emanuel", "Emmet", "Enoch", "Ephraim",
     "Everett", "Ezekiel", "Forest", "Gilbert", "Granville", "Gustaf", "Hampton", "Harmon", "Henderson",
     "Herman", "Hilliard", "Howard", "Hudson", "Irvin", "Ian", "Iker", "Isaac", "Jacob", "Jackson",
     "Jayden", "Jeremy", "Jeremiah", "Jonah", "Josiah", "Kirk", "Larkin", "Leland", "Leopold",
     "Lloyd", "Luther", "Manford", "Marcellus", "Martin", "Mason", "Maurice",
     "Maynard", "Melvin", "Miles", "Josué", "Milton", "Morgan", "Mortimer",
     "Napoleon", "Nelson", "Newton", "Oliver", "Orson", "Oswald",
     "Pablo", "Percival", "Porter", "Quincy", "Liam", "Lian", "Randall", "Reginald", "Richmond", "Rodney",
     "Roscoe", "Rowland", "Rupert", "Sanford", "Sebastian", "Martín", "Shelby",
     "Sidney", "Solomon", "Maykel", "Squire", "Sterling", "Sidney", "Noah", "Oscar", "Thaddeus", "Pedro",
     "Walter", "Wilbur", "Wilfred", "Zadok", "Zebedee", "David", "Ethan", "Samuel", "Michael",
     "James", "Charlie", "Jacob", "Harry", "Thiago", "Robert", "Tomás", "Valentino",
     "Vicente", "Callum", "", "Reece", "Joe", "Kyle", "Daniel","Abijah", "Alson", "Alton", "Amasa",
     "", "", "Comfort", "Ebenezer", "Elam", "Elijah", "Enoch", "Ephraim", "Ezra",
     "Fithian", "Freeman", "Hiram", "Holcomb", "Hosea", "Hubbard", "Jarvis", "Jasper", "John",
     "Lemuel", "Mamre", "Nahum", "Nathan", "Obadiah", "Oren", "Orris", "Ozias",
     "Reuben", "Salmon", "Stukely", "Sylvanus", "Willard","Duncan","Gordon","Henry","Hughes","Jack","Scott","Shawn",
     "Stuart","Sharman","Simon","Steven","Tailor","Todd","Travis","Vincent","William","Pierce","Mathew","Dexter"]
                  
	var lastname = ["Abraham", "Adler", "Ankins", "Avery", "Barnham", "Bentz", "Bessler", "Blakely", "Bleeker",
     "Bouche", "Bretz", "Brock", "Buchman", "Butts", "Caffey", "Click", "Cordova", "Crabtree", "Crankovitch", "Cuthburt",
     "Cuttling", "Dorman", "Eakley", "Eddie", "Elsner", "Fandrick", "Farwell", "Feigel", "Felten", "Fenske", "Fillman",
     "Finley", "Firske", "Flanagan", "Franklin", "Freeman", "Frisbe", "Gore", "Greenwald", "Hahn", "Hammermeister", "Heminger",
     "Hogue", "Hollister", "Kasper", "Kisro", "Kleeman", "Lake", "Cano", "Levard", "Lockhart", "Luckstrim", "Lynch",
     "Madison", "Mantei", "Marsh", "McBurney", "McCarney", "Moses", "Nickels", "O'Neil", "Olson", "Ozanich", "Patterson",
     "Patzer", "Peppin", "Porter", "Posch", "Raslo", "Razner", "Rifenberg", "Riley", "Ripley", "Rossini",
     "Schiltgan", "Schmidt", "Schroeder", "Schwartz", "Shane", "Shattuck", "Shea", "Slaughter", "Smith", "Speltzer",
     "Stimac", "Strenburg", "Strong", "Swanson", "Tillinghast", "Traver", "Urton", "Vallier", "Wagner", "Walsted", "Wang",
     "Warner", "Webber", "Welch", "Winters", "Yarbrough", "Yeske", "Johnson", "Williams", "Jones", "Brown",
     "Baker", "Page", "Gardener", "Thatcher", "Murphy", "Thomas", "Evans", "Roberts", "O'Sullivan", "Walsh", "O'Brien",
     "Byrne", "Li", "Gelbero", "White", "Morton", "Singh", "Silva", "Martin", "Forest", "Bridge", "Hill",
     "Atwater", "Barbour", "Beman", "Beckwith", "Bliss", "Bristol", "Cadwell", "Case", "Chittenden", "Corey",
     "Dill", "Green", "Griffith", "Higley", "Merrill", "Mills", "Northway", "Oakes", "Pettibone", "Phelps", "Pike",
     "Prentice", "Proctor", "Sephard", "Scudder", "Sedgwick", "Sidrach", "Smith", "Temple", "Tuller", "Wadsworth",
     "Ward", "Westcott", "Wickes", "Wilcox", "Willard", "Witherell", "Wolcott", "Woodford",

     "Acheson","Aitken","Allan","Allaway","Allen","Angus","Atchison","Baird","Barber","Beattie","Beatty","Begbie",
     "Blackwood","Blair","Boyd","Breckenridge","Breckinridge","Brody","Bruce","Buchanan","Burns","Calhoun","Cameron",
     "Campbell","Kerr","Carson","Clacher","Coburn","Cockburn","Colquhoun","Coutts","Craig","Cruickshank","Cummins",
     "Cunningham","Darrow","Davies","Davis","Donne","Drummond","Dubhghlas","Dunbar","Dunn","Fairbairn","Falconer",
     "Faulkner","Ferguson","Findlay","Finley","Fraser","Frazier","Gibbs","Gibson","Glen","Graeme","Graham","Grant","Greer",
     "Grier","Grieve","Haig","Hardie","Henderson","Hendry","Hepburn","Houston","Hume","Hunter","Johnston","Keir",
     "Kendrick","Kinley","Kinnaird","Lenmox","Lester","Lindsay","Lister","Lithgow","Lusk","Mac Alastair","MacBeth",
     "MacCallum","MacConnell","MacDaniel","MacDougall","MacGrory","MacKay","MacNeil","Maxwell","Mathieson","McAfee","Milne",
     "Mitchell","Moffett","Monroe","Montgomery","Moray","Morris","Munro","Murdoch","Murray","Neil","Ness","Nevin","Norris",
     "Paterson","Patton","Pollock","Rae","Ralston","Ramsey","Rattray","Reid","Ross","Ruskin","Rutherford","Sangster",
     "Saunders","Sheach","Starrett","Sterling","Stewart","Stirling","Taggart","Thorburn","Urquhart","Wallace","Wallis",
     "Woods","Wolf","Woodham","Woodrow","Wootton","Wragge","Wray","Wynne","Yap","Yates","Yoxall","Seaver","Sempers",
     "Sharman","Sharrow","Shelton","Shine","Siddall","Simen","Simmons","Simpkin","Sinclair","Skeates","Slater","Snell",
     "Snider","Solomon","Sommer","Southgate","Spalding","Spear","Speight","Spencer","Stacy","Stanley","Stanton","Statham",
     "Stern","Stevenson","Stidolph","Stoddard","Stone","Strickland","Stroud","Taft","Tanner","Tash","Tate","Tatham",
     "Tatum","Tennison","Terrell","Thacker","Thompkins","Thorn","Tifft","Tindall","Tipton","Tirrel","Tobin","Trask","Toft",
     "Toller","Tolbert","Trent","Triggs","Truman","Tucker","Turner","Twist","Underhill","Upton","Vance","Varley","Varnham",
     "Verity","Vernon","Vipond","Wade","Walker","Whitney","Whittemore","Wickham","Wiley","Winslow","Winter","Winthrop",
     "Midgley","Mondy","Myers","Nash","Neville","Nielson","Norwood","Oakley","Overton","Padmore","Palmer","Parks","Payne",
     "Peak","Pearce","Pemberton","Peterson","Pickle","Pilgrim","Poindexter","Powers","Pryor","Putnam","Purcell","Rains",
     "Rake","Reed","Reeve","Remington","Reynolds","Richardson","Rigby","Rimmer","Roach","Roscoe","Rowland","Russell",
     "Rye","Sadler","Sampson","Sanderson","Sanford","Sangster","Sappington","Harland","Hartell","Hathway","Hayden",
     "Haywood","Hedley","Heath","Henson","Herbert","Herriot","Hobbs","Holland","Hooper","Hopson","Huff","Hurst","Huxley",
     "Hyland","Ikin","Ilbert","Jarrett","Jerome","Jernigan","Jinks","Jewell","Keen","Kimball","Kingsley","Knight","Lamb",
     "Langley","Lawrence","Leach","Levitt","Marchand","Marston","Mathers","Mercer","Coleman","Collingwood","Colton",
     "Crawford","Crouch","Dabney","Dixon","Dodge","Durant","Ellsworth","Emerson","Eustis","Evered","Farnham","Farran",
     "Frost","Fuller","Gadsby","Garland","Garnet","Gilliam","Gladwyn","Glass","Godfrey","Goodwin","Groves","Hackett","Haig",
     "Hambleton","Harding","Hardwick","Appleton","Armistead","Ashworth","Atkin","Audley","Averill","Bain","Bannister",
     "Barlow","Bardsley","Barret","Bartram","Batts","Belanger","Belmont","Bennett","Benson","Bernard","Bishop","Blackburn",
     "Bloodworth","Boothman","Bowman","Bradford","Bradley","Braxton","Brent","Brett","Brice","Brinley","Bronson","Burnham",
     "Caldwell","Cantrell","Carter","Carver","Causer","Chambers","Chapman","Cheshire","Clement","Colbert"];
     
     var Profession = ["Acrobata", "Actor", "Agente Federal", "Alienista", "Alpinista", "Anticuario", "Arqueologo", "Arquitecto", "Artesano",
     "Artista", "Atleta", "Medico", "Ayudante de Laboratorio", "Barman", "Bibliotecario", "Bombero", "Boxeador/Luchador","Buzo", "Camillero",
     "Cazador", "Cazador de Recompensas", "Chofer", "Cientifico", "Cirujano Forense", "Clerigo", "Conductor", "Conservador",
     "Contador", "Corresponsal en el Extranjero", "Detective de Agencia", "Arquitecto","Pintor/Escultor","Escenista",
     "Diletante", "Diseñador", "Editor", "Entrenador de Animales", "Escritor", "Especialista", "Espia","Musico de Jass",
     "Estudiante/Interno", "Explorador", "Fanatico", "Farmaceutico","Abogado","Oficial Militar","Aviador","Buzo",
     "Forastero", "Fotografo", "Funcionario Electo", "Funerario", "Granjero","Buscador de Tesoro","Patron de Yate",
     "Guardian de Zoo", "Ingeniero", "Interprete", "Investigador Academico","Piloto de Carreras","Diacono", "Vendedor",
     "Investigador Privado", "Jugador","Juez","Lider de una Secta","Lider religioso","Ministro Protestante", "Soldado",
     "Jurista", "Leñador", "Libero", "Loquero", "Marinero", "Mayordomo", "Mecanico", "Minero", "Misionero", "Montañero", "Musico",
     "Ocultista", "Oficinista", "Parapsicologo", "Peon", "Perista", "Profesor de Universidad", "Prospector", "Psicologo/Psicoanalista",
     "Agente del oeste", "Agente Uniformado", "Inspecto de Policia", "Psiquiatra", "Reportero", "Soldado",
     "Reportero Geografico", "Secretaria", "Sindicalista", "Taxista", "Tendero", "Tratante de Antiguedades", "Vagabundo",
     "Vaquero","Sacristan","Portero","Sastre","Gerente","Constructor","Director de Obra","Ganchero","Maderero",
     "leñador","Barbero","Herrero","Stewar","Marinero","Marine","Montacargas","Supervisor","Capataz","Cristalero",
     "carretero","Camionero","Empleado","transporte ferroviario","Carpintero","Molinero","fabricantes de herramientas",
     "Maquinistas","criadores de ganado","trabajador de ganado",
     "Profesor de secundaria", "Trabajador industrial", "Encargado del registro", "Trabajador Gubernamental",
     "Guarda Expedientes", "mecanógrafo", "jardineros","Productor de Fruta","Trabajador de vivero","Trabajador textil",
     "Obrero","Repartidor","colportores","Recolectores de Basura","Colportor","Viajeros comerciales",
     "operarios semicalificados/calificados","Fabrica de comida","Operador Telefonico","Fabrica de Zapatos",
     "fontanero","Electricista","Peluquero","Fabrica de ropa","Fabrica de muebles","Lavanderia",
     "Fabrica de Caucho","Fabrica de Escobas","Fabrica de Botones","Taquígrafo","Fabrica de Metal","Cajero",
     "Fabrica de telas","Distribuidor minorista","Granja lechera"]
	
     var Pueblo = [ "Dakari","Dustin","Lenno","Gaetano","Hamilton","Leben","Loring","Scoville","Tabor","Wellington",
     "Bodie","Kolmanskop","Iultin","Plymouth","Varosha","Brattleboro","Townshend","Finch","Fawn","Rosebud","Maple",
     "Paradise","Ferret","Daffodil","Grizzly","Primrose","Elk","Falcon Point","Beach Bluff","Martin's beach",
     "Manchester","Annisquam","Essex falls","Essex","Topsfield","Innsmouth","Rowley","Bolton","Gloucoster","Rockport",
     "Marblehead","Kingsport","Beverly","Arkham","Ipwitch","Danvers","Newbury Port","Amesbury","Salem"]

     var Estados = ["Alabama","Arizona","Arkansas","California","Carolina del Norte","Carolina del Sur",
     "Colorado","Connecticut","Dakota del Norte","Dakota del Sur","Delaware","Florida","Georgia","Hawai","Idaho",
     "Illinois","Indiana","Iowa","Kansas","Kentucky","Luisiana","Maine","Maryland","Michigan","Minenesota",
     "Missisipi","Misuri","Montana","Nebraska","Nevada","Nueva Jersey","Nueva York","Nuevo Hampshire",
     "Nuevo Mexico","Ohio","Oklahoma","Oregon","Pensilvania","Rhode Island","Tennessee","Texas","Utah","Vermont",
     "Virginia","Virginia Occidental","Washington","Wisconsin","Wyoming"]

     var Continentes = ["Africa","Europa","America","Asia","Oceania"]

     var Africa = ["Etiopia","Liberia","Egipto","Sudafrica","Libia","Marruecos","Sudan","Tunez"]

     var Europa = ["Francia","Dinamarca","Portugal","San Marino","Andorra","España","Suecia","Rusia","Liechtenstein","Reino Unido",
     "Paises Bajos","Suiza","Belgica","Grecia","Italia","Monaco","Alemania","Rumania","Serbia","Luxemburgo","Noruega","Bulgaria","Albania",
     "Austria","Finlandia","Hungria","Polonia"]

     var America = ["Estados Unidos","Haiti","Colombia","Paraguay","Venezuela","Argentina","Chile","Mexico","Peru","Brasil","Bolivia","Uruguay",
     "Ecuador","Costa Rica","Honduras","Nicaragua","Guatemala","El Salvador","Republica Dominicana","Canada","Cuba"]

     var Asia = ["Japón","Irán","Rusia","Omán","Afganistan","Tailandia","Nepal","China","Butan","Mongolia"]

     var Oceania = ["Australia","Nueva Zelanda"]



     var rand_first = Math.floor(Math.random() * firstname.length);
	var rand_last = Math.floor(Math.random() * lastname.length); 
     var rand_prof = Math.floor(Math.random() * Profession.length);
     var rand_Pueblo = Math.floor(Math.random() * Pueblo.length);
     var  Fue = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5
     var  Con = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5
     var  Pod = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5
     var  Des = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5
     var  Apa = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5
     var  Tam = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5
     var  Int = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5
     var  Edu = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5
     var  Ideocreen = Math.floor(Math.random() * (10 - 1 + 1) + 1)
     var  Lugarsigni = Math.floor(Math.random() * (10 - 1 + 1) + 1)
     var  Objetosigni = Math.floor(Math.random() * (10 - 1 + 1) + 1)
     var  Rasgoperso = Math.floor(Math.random() * (10 - 1 + 1) + 1)
     var  Allega = Math.floor(Math.random() * (10 - 1 + 1) + 1)
     var  RazonAllega = Math.floor(Math.random() * (10 - 1 + 1) + 1)

     var Lugarnacimiento = Math.floor(Math.random() * (100 - 1 + 1) + 1)
     var Extranjero = Math.floor(Math.random() * (100 - 1 + 1 ) +1 )

     // var  Sue = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5
     var  Pv  = Math.floor((Tam+Con)/10)
     var Edad = Math.floor(Math.random() * (89 - 15 +1)) + 15;


     
     
     if(Lugarnacimiento <= 60){
          var Lugardenacimiento = Pueblo[rand_Pueblo]
     }

     //  else if (Lugardenacimiento <= 74)
     //  var ran_Continente = Math.floor(Math.random() * (5 - 1 + 1) + 1)

     //   if (ran_Continente === 1){
      
     //  }
     //     else if (ran_Continente === 2){
         
     //     }
     //     else if (ran_Continente === 3){

     //     }
     //     else if (ran_Continente === 4){

     //     }
     //     else {
           
     //     }

     //  var Pais = Pais[ran_Pais]
     // var Lugardenacimiento = "Nacio en "+ Pais}
     // console.log(Pais,Lugardenacimiento)
     // }
     else {
          var ran_Estado = Math.floor(Math.random() * (Estados.length ))
          var Estado = Estados[ran_Estado]
          var Lugardenacimiento = "Nacio en "+ Estado}
          console.log(Estado,Lugardenacimiento)



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
                   var IdeoCreencia  = "El dinero es poder, y voy a amasar tanto como pueda (avaro, emprendedor, implacable, etc.)."
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
               

     document.getElementById('resultCarac').innerHTML =
     "<br><h3> Nombre : "+firstname[rand_first]+" "+lastname[rand_last]+"</h3>"+
     "<br> Profesion : "+Profession[rand_prof]+"<br>"+
     "<br> Ciudad/Pueblo : "+Pueblo[rand_Pueblo]+
     "<h3>Stats</h3>"+
     "Fue : "+Fue+
     "<br> Con : "+Con+
     "<br> Pod : "+Pod+
     "<br> Des : "+Des+
     "<br> Apa : "+Apa+
     "<br> Tam : "+Tam+
     "<br> Int : "+Int+
     "<br> Edu : "+Edu+
     "<br> PV  : "+Pv+
     "<br> Edad: "+Edad+"<br>"+
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
     "<br>"+RazonAllegado

     

     // +"<br> Sue : "+Sue;

     
     

	
}


     // if(154 === 1 ) {
     //      var 184 = ""
     //      }
     //       else if(154 === 2){
     //       var 184 = ""
     //        }
     //        else if(154 === 3){
     //        var 184 = ""
     //         }
     //        else if(154 === 4){
     //           var 184 = ""
     //          }
     //          else if(154 === 5){
     //               var 184 = ""
     //          }
     //          else if(154 === 6){
     //               var 184 = ""
     //          }
     //          else if(154 === 7){
     //               var 184 = ""
     //          }
     //          else if(154 === 8){
     //               var 184 = ""
     //          }
     //          else if(154 === 9){
     //               var 184 = ""
     //          }
     //          else{
     //               var 184 = ""
     //          }