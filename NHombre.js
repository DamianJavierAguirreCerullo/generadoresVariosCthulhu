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

     var rand_first = Math.floor(Math.random()*firstname.length);
	var rand_last = Math.floor(Math.random()*lastname.length); 
	document.getElementById('resultN').innerHTML =
     "<h1>Nombre:</h1><div class='alert alert-success'><h2>"+firstname[rand_first]+" "+lastname[rand_last]+"</h2></div>";
     
     var rand_prof = Math.floor(Math.random()*Profession.length);
     document.getElementById('resultP').innerHTML =
     "<h1>Profesion :</h1><div class='alert alert-success'><h2>"+Profession[rand_prof]+"</h2></div>";

     var rand_Pueblo = Math.floor(Math.random()*Pueblo.length);
     document.getElementById('resultC').innerHTML =
     "<h1>Ciudad/Pueblo :</h1><div class='alert alert-success'><h2>"+Pueblo[rand_Pueblo]+"</h2></div>";

     var Edad = Math.floor(Math.random() * (89 - 15 +1)) + 15;
     var  Fue = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5
     var  Con = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5
     var  Pod = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5
     var  Des = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5
     var  Apa = Math.floor(Math.random() * (18 - 3 + 1) + 3)*5
     var  Tam = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5
     var  Int = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5
     var  Edu = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5
     var  Sue = Math.floor(Math.random() * (18 - 8 + 1) + 8)*5
     var  PV  = Math.floor((Tam+Con)/10)
     // var EdadContra = if(Edad );
     document.getElementById('resultCarac').innerHTML =
     "<h3>Stats</h3>"+
     "Edad: "+Edad+
     "<br> Fue : "+Fue+
     "<br> Cons : "+Con+
     "<br> Pod : "+Pod+
     "<br> Des : "+Des+
     "<br> Apa : "+Apa+
     "<br> Tam : "+Tam+
     "<br> Int : "+Int+
     "<br> Edu : "+Edu+
     "<br> PV : "+PV;
     // +"<br> Sue : "+Sue;
     

	
}