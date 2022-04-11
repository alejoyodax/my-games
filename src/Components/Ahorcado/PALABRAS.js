
//LISTAS DE PALABRAS Y SU TAMAÑO
// 284 --> animales
const animales = ["ABADEJO",
    "ABALONE",
    "ABEJARÓN",
    "ABEJARUCO",
    "ABEJA",
    "ABEJORRO",
    "ÁCARO",
    "ACEDÍA",
    "ACENTOR",
    "AGAMIDO",
    "ÁGUILA",
    "ALACRÁN",
    "ALBATROS",
    "ALCE",
    "ALMEJA",
    "ALONDRA",
    "ÁNADE REAL",
    "ANCHOA",
    "ANÉMONA DE MAR",
    "ANFIOXO",
    "ANGELOTE",
    "ANGUILA",
    "ANTÍLOPE",
    "ARAÑA",
    "ARENQUE",
    "ARMADILLO",
    "ARMIÑO",
    "ASNO",
    "ATÚN",
    "AVEFRÍA",
    "AVESTRUZ",
    "AVETORO",
    "AVISPA",
    "BABOSA",
    "BABUINO",
    "BACALAO",
    "BALLENA",
    "BANTENG",
    "BARASINGA",
    "BARRACUDA",
    "BECADA",
    "BEIRA",
    "BELUGA",
    "BENGALÍ",
    "BERMEJUELA",
    "BERRENDO",
    "BESUGO",
    "BISBITA",
    "BISONTE",
    "BLANQUILLO",
    "BOA",
    "BOGAVANTE",
    "BONGO",
    "BONITO",
    "BONOBO",
    "BOTO",
    "BUEY",
    "BÚFALO",
    "BÚHO",
    "BUITRE",
    "BURRO",
    "CABALLO",
    "CABALLITO DE MAR",
    "CACATÚA",
    "CACHALOTE",
    "CALAMÓN",
    "CAMALEÓN",
    "CAMELLO",
    "CANGURO",
    "CANARIO",
    "CANGREJO",
    "CARACOL",
    "CASTOR",
    "CEBRA",
    "CENTOLLO",
    "CERDO",
    "CHACAL",
    "CHIMPANCÉ",
    "CHINCHILLA",
    "CIEMPIÉS",
    "CIERVO",
    "CIGALA",
    "CISNE",
    "COBAYA",
    "COCHINILLA",
    "COCODRILO",
    "COENDÚ",
    "COIPÚ",
    "COLIBRÍ",
    "COMADREJA",
    "CONEJO",
    "CORAL",
    "CORIDORA",
    "CORMORÁN",
    "CÓNDOR",
    "COTORRA",
    "COYOTE",
    "DAMÁN",
    "DELFÍN",
    "DIABLO DE TASMANIA",
    "DIK-DIK",
    "DINGO",
    "DRAGÓN DE KOMODO",
    "DROMEDARIO",
    "ELEFANTE",
    "EMÚ",
    "EQUIDNA",
    "ERIZO",
    "ESCARABAJO",
    "ESCORPIÓN",
    "ESCUERZO",
    "ESPÁTULA COMÚN",
    "ESTRELLA DE MAR",
    "FAISÁN",
    "FLAMINGO",
    "FLAMENCO",
    "FOCA",
    "GACELA",
    "GALÁPAGO",
    "GALLINA",
    "GALLIPATO",
    "GALLO",
    "GAMBA",
    "GANSO",
    "GARCILLA",
    "GARRAPATA",
    "GARZA",
    "GATO",
    "GAVILÁN",
    "GLOTÓN",
    "GOLONDRINA",
    "GORILA",
    "GORGOJO",
    "GORRIÓN",
    "GRILLO",
    "GRULLA",
    "GUEPARDO",
    "HALCÓN",
    "HAMSTER",
    "HIENA",
    "HIPOCAMPO",
    "HIPOPÓTAMO",
    "HOLOTURIA",
    "HORMIGA",
    "HURÓN",
    "HUPÓN",
    "IBICE",
    "ICOTEA",
    "IGUANA",
    "INSECTO PALO",
    "INTENDIO",
    "IMPALA",
    "JABALÍ",
    "JABIRÚ",
    "JERBO",
    "JIRAFA",
    "JAGUAR",
    "KAGUANG",
    "KIWI",
    "KRILL",
    "KOALA",
    "LABRO",
    "LAGARTO",
    "LANGOSTA",
    "LANGOSTINO",
    "LECHUZA",
    "LÉMUR",
    "LEÓN",
    "LEÓN MARINO",
    "LEOPARDO",
    "LIBÉLULA",
    "LIEBRE",
    "LINCE",
    "LLAMA",
    "LOBO",
    "LOBO MARINO",
    "LOMBRIZ",
    "LORO",
    "LUCIÉRNAGA",
    "MAMUT",
    "MANDRIL",
    "MANTIS RELIGIOSA",
    "MAPACHE",
    "MARABÚ",
    "MARABUNTA",
    "MARIPOSA",
    "MARMOTA",
    "MEDUSA",
    "MEJILLÓN",
    "MILPIÉS",
    "MOFETA",
    "MONO",
    "MOSCA",
    "MOSQUITO",
    "MORSA",
    "MURCIÉLAGO",
    "NARVAL",
    "NÉCORA",
    "NUTRIA",
    "ÑANDÚ",
    "ÑU",
    "OCELOTE",
    "OKAPI",
    "OSO",
    "OSO DE AGUA",
    "OSO HORMIGUERO",
    "OSO PANDA",
    "OSO PARDO",
    "ORNITORRINCO",
    "OVEJA",
    "PÁJARO",
    "PALOMA",
    "PANTERA",
    "PAPAGAYO",
    "PELICANO",
    "PERCA",
    "PERDIZ",
    "PEREZOSO",
    "PERICO",
    "PERIPATO",
    "PERIQUITO",
    "PERRO",
    "PETIRROJO",
    "PEZ",
    "PINGÜINO",
    "PINZÓN",
    "PIOJO",
    "PIQUITUERTO",
    "POLILLA",
    "PUERCOESPÍN",
    "PULGA",
    "PULPO",
    "PUMA",
    "QUEBRANTAHUESOS",
    "QUETZAL",
    "QUITÓN",
    "RATA",
    "RATÓN",
    "RAYA",
    "REBECO",
    "RÉMORA",
    "RENO",
    "RINOCERONTE",
    "RUBIA GALLEGA",
    "RUISEÑOR",
    "SALAMANDRA",
    "SALMÓN",
    "SALTAMONTES",
    "SANGUIJUELA",
    "SAPO",
    "SEPIA",
    "SERPIENTE",
    "TÁBANO",
    "TEJÓN",
    "TENIA",
    "TERMITA",
    "TIBURÓN",
    "TIGRE",
    "TIJERETA",
    "TOPO",
    "TORO",
    "TORTUGA",
    "TRITÓN",
    "TRUCHA",
    "TUCÁN",
    "UROGALLO",
    "URRACA",
    "VACA",
    "VARANO",
    "VENADO",
    "VICUÑA",
    "WAPITÍ",
    "WALABI",
    "WALARÓ",
    "WETA",
    "WOMBAT",
    "XENOPUS",
    "XOLOESCUINTLE",
    "YAK",
    "YACARE",
    "YEGUA",
    "ZARIGÜEYA",
    "ZORRO",
    "ZEBRA"];



// FUNCION  ME RETORNA UNA FUNCIÓN GENERADORA QUE RETORNA UNA PALABRA AL AZAR
export default function getGeneradoraPalabraAzar() {
    let listPalabras = [...animales];
    let listPalabrasJugadas = [];
    // FUNCION QUE RETORNA UNA PALABRA AL AZAR. LA PALABRA RETORNADA SIEMPRE SERÁ DIFERENTE
    return function getPalabraAlAzar() {
        const n = Math.floor(Math.random() * (listPalabras.length));    // NUMERO AL AZAR DENTRO DE LA LONGITUD DEL ARRAY DE LA LISTA PALABRAS
        const palabra = listPalabras[n];
        const auxPalabraJugada = listPalabras[n];
        listPalabras.splice(n, 1);
        listPalabrasJugadas.push(auxPalabraJugada);
        return palabra
    }
}