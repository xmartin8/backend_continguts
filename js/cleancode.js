const slides = [
  {
    title: "Clean Code",
    content: `
      <div class="cleanc-image-container">
        <img src="../img/clean-code.png"
             alt="Clean Code"
             class="cleanc-image" />
      </div>

      <div class="generic-info">
        <h3 class="slide-title">Clean Code</h3>

        <div class="generic-topics">

          <div class="generic-topic">
            <h4>📚 Què és Clean Code?</h4>
            <p>Codi net, llegible, mantenible i fàcil d'entendre per altres desenvolupadors.</p>
          </div>

          <div class="generic-topic">
            <h4>🎯 Objectius principals</h4>
            <p>Reduir complexitat, millorar mantenibilitat i facilitar la col·laboració en equip.</p>
          </div>

          <div class="generic-topic">
            <h4>🔧 Beneficis</h4>
            <p>Menys errors, més ràpid desenvolupament i millor escalabilitat del projecte.</p>
          </div>

          <div class="generic-topic">
            <h4>📖 Llibre de referència</h4>
            <p>"Clean Code: A Handbook of Agile Software Craftsmanship" per Robert C. Martin.</p>
          </div>

        </div>
      </div>
    `
  },
  {
    title: "1. Regles generals",
    content: `
      <h2 class="slide-title">1. Regles generals de Clean Code</h2>
      
      <div class="text-large">
        <p>Principis fonamentals per escriure codi net:</p>
        
        <div class="clean-code-principles">
          <div class="principle">
            <h4>🔹 <u>Seguir convencions estàndard</u></h4>
            <p>Utilitza les convencions acceptades per la comunitat (PSR per PHP, camelCase, etc.).</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Keep it Simple Stupid (KISS)</u></h4>
            <p>Més simple és sempre millor. Redueix la complexitat tant com sigui possible.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Complex
function calcularTotal($preu, $iva, $descompte, $envio) {
    return (($preu * (1 - $descompte/100)) * (1 + $iva/100)) + $envio;
}

// ✅ Simple
function calcularTotal($preu, $iva, $descompte, $envio) {
    $preuDescomptat = $preu * (1 - $descompte/100);
    $preuAmbIVA = $preuDescomptat * (1 + $iva/100);
    return $preuAmbIVA + $envio;
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Boy Scout Rule</u></h4>
            <p>Deixa el campament més net del que el vas trobar. Millora el codi que toques.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Trobar la causa arrel</u></h4>
            <p>Sempre busca la causa fonamental d'un problema, no només en parxis els símptomes.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Parxar símptomes
if ($error == "Database connection failed") {
    echo "Reintentar connexió...";
}

// ✅ Buscar causa arrel
if ($error == "Database connection failed") {
    logError("Connexió BD fallida: " . $e->getMessage());
    verificarCredencialsBD();
    verificarServidorBD();
    notificarAdministrador();
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "2. Regles de disseny",
    content: `
      <h2 class="slide-title">2. Regles de disseny</h2>
      
      <div class="text-large">
        <p>Principis per a un bon disseny de codi:</p>
        
        <div class="clean-code-principles">
          <div class="principle">
            <h4>🔹 <u>Dades configurables a nivells alts</u></h4>
            <p>Mantén les dades configurables (constants, configuracions) en nivells alts del codi.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// config.php (nivell alt)
define('DB_HOST', 'localhost');
define('DB_NAME', 'meu_projecte');
define('DB_USER', 'root');
define('DB_PASS', 'password');

// ❌ Dades hardcodejades a nivell baix
function connectToDatabase() {
    $host = 'localhost'; // <-- Aïllat, difícil de canviar
    $dbname = 'meu_projecte';
    // ...
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Polimorfisme sobre if/else o switch/case</u></h4>
            <p>Prefereix el polimorfisme per a comportaments diferents segons tipus.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Switch case
function calcularPreu($tipusProducte, $preuBase) {
    switch($tipusProducte) {
        case 'electronic':
            return $preuBase * 1.21;
        case 'roba':
            return $preuBase * 1.10;
        case 'aliment':
            return $preuBase * 1.04;
    }
}

// ✅ Polimorfisme
interface Producte {
    public function calcularPreu($preuBase);
}

class Electronic implements Producte {
    public function calcularPreu($preuBase) {
        return $preuBase * 1.21;
    }
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Separar codi multi-threading</u></h4>
            <p>Aïlla el codi de múltiples fils per evitar complexitat accidental.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Prevenir sobreconfiguració</u></h4>
            <p>No afegeix opcions de configuració que no són necessàries.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Ús de Dependency Injection</u></h4>
            <p>Injecció de dependències per a codi més testejable i mantenible.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Dependència hardcodejada
class UsuariController {
    private $database;
    
    public function __construct() {
        $this->database = new Database(); // <-- Acoblat
    }
}

// ✅ Dependency Injection
class UsuariController {
    private $database;
    
    public function __construct(Database $database) {
        $this->database = $database; // <-- Injectat
    }
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Llei de Demeter</u></h4>
            <p>Una classe només ha de conèixer les seves dependències directes.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Viola la Llei de Demeter
$usuari->getCompte()->getSaldo()->getMoneda()->getSimbol();

// ✅ Respecta la Llei de Demeter
$simbol = $usuari->getSimbolMoneda(); // Mètode encapsulat</code></pre>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "3. Comprensió del codi",
    content: `
      <h2 class="slide-title">3. Consells per a codi comprensible</h2>
      
      <div class="text-large">
        <p>Tècniques per fer el codi més fàcil d'entendre:</p>
        
        <div class="clean-code-principles">
          <div class="principle">
            <h4>🔹 <u>Ser consistent</u></h4>
            <p>Si fas alguna cosa d'una manera, fes totes les coses similars de la mateixa manera.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Inconsistent
get_user();
fetchProduct();
retrieveOrder();

// ✅ Consistent
getUser();
getProduct();
getOrder();</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Utilitzar variables explicatives</u></h4>
            <p>Variables amb noms que expliquen el seu propòsit.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Poca explicació
if ($x > 60) {
    // ...
}

// ✅ Variable explicativa
$tempsMaximPermesEnSegons = 60;
if ($tempsTranscorregut > $tempsMaximPermesEnSegons) {
    // Tancar sessió per inactivitat
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Encapsular condicions límit</u></h4>
            <p>Les condicions límit són difícils de seguir. Posar-les en un sol lloc.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Condicions límit escampades
if ($index >= 0 && $index < count($array)) {
    // ...
}

if ($usuari && $usuari->esActiu()) {
    // ...
}

// ✅ Encapsulades
if (esIndexValid($index, $array)) {
    // ...
}

if (esUsuariValit($usuari)) {
    // ...
}

function esIndexValid($index, $array) {
    return $index >= 0 && $index < count($array);
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Preferir objectes de valor dedicats</u></h4>
            <p>En lloc de tipus primitius, usa objectes que representen conceptes del domini.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Tipus primitius
$email = "usuari@example.com";
$preu = 19.99;

// ✅ Objectes de valor
$email = new Email("usuari@example.com");
$preu = new Preu(19.99, 'EUR');</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Evitar dependències lògiques</u></h4>
            <p>No escriure mètodes que funcionen correctament depenent d'alguna altra cosa en la mateixa classe.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Evitar condicionals negatius</u></h4>
            <p>Els condicionals negatius són més difícils d'entendre.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Condicional negatiu
if (!$usuari->noEsActiu()) {
    // Difícil de llegir
}

// ✅ Condicional positiu
if ($usuari->esActiu()) {
    // Fàcil de llegir
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "4. Regles de noms",
    content: `
      <h2 class="slide-title">4. Regles per a noms</h2>
      
      <div class="text-large">
        <p>Com triar bons noms per a variables, funcions i classes:</p>
        
        <div class="clean-code-principles">
          <div class="principle">
            <h4>🔹 <u>Noms descriptius i sense ambigüitat</u></h4>
            <p>El nom ha de revelar la intenció.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Mala
$d; // Què és d?
function proc(); // Què processa?

// ✅ Boa
$diesDesdeCreacio;
function procesarUsuari();</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Fer distincions significatives</u></h4>
            <p>No usar noms que es diferenciïn només per petites variacions.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Distinció no significativa
$usuariInfo;
$usuariData;

// ✅ Distinció significativa
$usuariPerfil;
$usuariEstadistiques;</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Noms pronunciables</u></h4>
            <p>Poder parlar sobre el codi amb altres desenvolupadors.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ No pronunciable
$ymdhms; // "i em de hache em ese"
$genymdhms; // "gué en i em de hache em ese"

// ✅ Pronunciable
$dataHoraCreacio;
$dataHoraGeneracio;</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Noms cercables</u></h4>
            <p>Facilitar la cerca en el codi.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Difícil de cercar
for ($i = 0; $i < 34; $i++) {
    // On es fa servir el 34?
}

// ✅ Fàcil de cercar
define('DIAS_EN_UN_MES', 34);
for ($i = 0; $i < DIAS_EN_UN_MES; $i++) {
    // Fàcil de trobar tots els usos
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Reemplaçar números màgics</u></h4>
            <p>Usar constants amb nom en lloc de números literals.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Números màgics
if ($estat == 1) {
    // Què significa 1?
}

// ✅ Constants
define('ESTAT_ACTIU', 1);
define('ESTAT_INACTIU', 0);

if ($estat == ESTAT_ACTIU) {
    // Clar!
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Evitar codificacions</u></h4>
            <p>No afegir prefixes o informació de tipus.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Codificacions
$strNom; // Prefix "str"
$arrUsuaris; // Prefix "arr"
$iContador; // Prefix "i"

// ✅ Sense codificacions
$nom;
$usuaris;
$contador;</code></pre>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "5. Regles de funcions",
    content: `
      <h2 class="slide-title">5. Regles per a funcions</h2>
      
      <div class="text-large">
        <p>Com escriure funcions netes i efectives:</p>
        
        <div class="clean-code-principles">
          <div class="principle">
            <h4>🔹 <u>Petites</u></h4>
            <p>Les funcions han de ser curtes, idealment menys de 20 línies.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Fer una sola cosa</u></h4>
            <p>Cada funció ha de tenir una sola responsabilitat.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Fa múltiples coses
function procesarUsuari($usuari) {
    // Valida usuari
    if (!$usuari->esValid()) {
        return false;
    }
    
    // Guarda a base de dades
    $this->db->insert($usuari);
    
    // Envia email
    $this->mailer->sendWelcomeEmail($usuari);
    
    // Genera log
    $this->logger->log("Usuari creat");
    
    return true;
}

// ✅ Funcions petites amb una responsabilitat
function procesarUsuari($usuari) {
    if (!validarUsuari($usuari)) {
        return false;
    }
    
    guardarUsuari($usuari);
    enviarEmailBenvinguda($usuari);
    registrarCreacioUsuari($usuari);
    
    return true;
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Noms descriptius</u></h4>
            <p>El nom de la funció ha de descriure exactament què fa.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Preferir menys arguments</u></h4>
            <p>Mínim 0, òptim 1-2, màxim 3 arguments.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Massa arguments
function crearUsuari($nom, $cognom, $email, $password, $dataNaixement, $adreça, $telefon) {
    // ...
}

// ✅ Objecte com a argument
function crearUsuari(UsuariDTO $dadesUsuari) {
    // ...
}

// ✅ Encara millor: Builder Pattern
$usuari = (new UsuariBuilder())
    ->ambNom($nom)
    ->ambCognom($cognom)
    ->ambEmail($email)
    ->crear();</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Sense efectes secundaris</u></h4>
            <p>Una funció no hauria de modificar cap estat extern.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Efecte secundari
function calcularTotal($preu, $iva) {
    $this->totalVendes++; // ⚠️ Modifica estat global
    return $preu * (1 + $iva/100);
}

// ✅ Sense efectes secundaris
function calcularTotal($preu, $iva) {
    return $preu * (1 + $iva/100);
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>No usar arguments flag</u></h4>
            <p>Dividir el mètode en diversos mètodes independents.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Argument flag
function render($tipus, $esAdministrador = false) {
    if ($esAdministrador) {
        // Codi per administrador
    } else {
        // Codi per usuari normal
    }
}

// ✅ Múltiples mètodes
function renderPerUsuari() {
    // Codi per usuari normal
}

function renderPerAdministrador() {
    // Codi per administrador
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "6. Regles de comentaris",
    content: `
      <h2 class="slide-title">6. Regles per a comentaris</h2>
      
      <div class="text-large">
        <p>Com i quan fer servir comentaris:</p>
        
        <div class="clean-code-principles">
          <div class="principle">
            <h4>🔹 <u>Explicar-te amb codi</u></h4>
            <p>Intenta sempre explicar la teva intenció amb el propi codi, no amb comentaris.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Comentari explicant codi mal nombrat
// Comprova si l'usuari és major d'edat
if ($u->e > 17) {
    // ...
}

// ✅ Codi autodocumentat
if ($usuari->esMajorEdat()) {
    // ...
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>No ser redundant</u></h4>
            <p>No repeteixi en comentaris el que ja diu el codi.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Redundant
// Incrementa el comptador en 1
$comptador++;

// ✅ Sense comentari redundant
$comptador++;</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>No afegir soroll obvi</u></h4>
            <p>Evita comentaris que no aporten informació útil.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Soroll obvi
/**
 * Classe Usuari
 * Aquesta classe representa un usuari
 */
class Usuari {
    // ...
}

// ✅ Comentari útil només si és necessari
/**
 * Classe Usuari amb autenticació i permisos
 * Implementa patró Observer per notificacions
 */
class Usuari {
    // ...
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>No usar comentaris de tancament</u></h4>
            <p>Evita comentaris com <code>// end if</code> o <code>// end foreach</code>.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Comentaris de tancament
if ($condicio) {
    // ... codi ...
} // end if

// ✅ Sense comentaris de tancament
if ($condicio) {
    // ... codi ...
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Quan SÍ fer servir comentaris</u></h4>
            <ul class="concept-list">
              <li><strong>Comentaris legals</strong>: Copyright, llicències</li>
              <li><strong>Comentaris informatius</strong>: Explicar decisions complexes</li>
              <li><strong>Comentaris d'advertència</strong>: Alertar sobre conseqüències</li>
              <li><strong>TODO comentaris</strong>: Tasques pendents</li>
              <li><strong>Amplificació</strong>: Emfatitzar importància</li>
              <li><strong>Javadocs en APIs públiques</strong>: Documentació</li>
            </ul>
            
            <div class="code-block mt-2">
              <pre><code class="php">// ✅ Comentaris útils

// TODO: Implementar cache per millorar rendiment
// ADVERTIMENT: No canviar aquest ordre, causa deadlock
// RAÓ: Utilitzem bubble sort perquè la llista és gairebé ordenada

/**
 * @api Pública
 * @param Usuario $usuari Usuari a autenticar
 * @return bool True si autenticació exitosa
 */
function autenticar(Usuario $usuari) {
    // ...
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "7. Estructura del codi font",
    content: `
      <h2 class="slide-title">7. Estructura del codi font</h2>
      
      <div class="text-large">
        <p>Com organitzar el codi per a millor llegibilitat:</p>
        
        <div class="clean-code-principles">
          <div class="principle">
            <h4>🔹 <u>Separar conceptes verticalment</u></h4>
            <p>Conceptes diferents han d'estar separats per espais en blanc.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ✅ Ben estructurat
class UsuariController {
    // Propietats
    private $database;
    private $logger;
    
    // Constructor
    public function __construct(Database $database, Logger $logger) {
        $this->database = $database;
        $this->logger = $logger;
    }
    
    // Mètodes públics
    public function crearUsuari($dades) {
        $this->validarDades($dades);
        $usuari = $this->crearEntitatUsuari($dades);
        return $this->guardarUsuari($usuari);
    }
    
    // Mètodes privats
    private function validarDades($dades) {
        // ...
    }
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Codi relacionat dens verticalment</u></h4>
            <p>El codi relacionat ha d'aparèixer junt verticalment.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Declarar variables a prop del seu ús</u></h4>
            <p>Declara variables tan a prop com sigui possible del lloc on s'utilitzen.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Variables declarades lluny
$usuari = obtenirUsuari($id); // Línia 10
$producte = obtenirProducte($producteId); // Línia 11
// ... 20 línies de codi ...
echo $usuari->getNom(); // Línia 32
echo $producte->getNom(); // Línia 33

// ✅ Variables a prop del seu ús
$usuari = obtenirUsuari($id);
echo $usuari->getNom();
// ... altre codi ...
$producte = obtenirProducte($producteId);
echo $producte->getNom();</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Funcions dependents a prop</u></h4>
            <p>Les funcions que depenen unes d'altres han d'estar a prop.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Funcions similars a prop</u></h4>
            <p>Les funcions que fan coses similars han d'estar agrupades.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Posar funcions en direcció descendent</u></h4>
            <p>Les funcions d'alt nivell al principi, les de baix nivell després.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Línies curtes</u></h4>
            <p>Mantén les línies curtes, idealment menys de 80-120 caràcters.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>No usar alineació horitzontal</u></h4>
            <p>No alineïs codi amb espais per fer-ho "bonico".</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Alineació horitzontal
$nom         = "Joan";
$cognom      = "Pérez";
$email       = "joan@example.com";
$edat        = 30;

// ✅ Sense alineació
$nom = "Joan";
$cognom = "Pérez";
$email = "joan@example.com";
$edat = 30;</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Usar espais en blanc</u></h4>
            <p>Utilitza espais en blanc per associar coses relacionades i desassociar feblement relacionades.</p>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>No trencar indentació</u></h4>
            <p>Mantén una indentació consistent.</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: "9. Objectes i estructures de dades",
    content: `
      <h2 class="slide-title">9. Objectes i estructures de dades</h2>
      
      <div class="text-large">
        <p>Principis per a disseny d'objectes i estructures:</p>
        
        <div class="clean-code-principles">
          <div class="principle">
            <h4>🔹 <u>Amagar estructura interna</u></h4>
            <p>Les classes han d'amagar la seva implementació interna.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Estructura interna exposada
class Usuari {
    public $nom;
    public $cognom;
    public $email;
    
    public function __construct($nom, $cognom, $email) {
        $this->nom = $nom;
        $this->cognom = $cognom;
        $this->email = $email;
    }
}

// Qualsevol pot fer:
$usuari->nom = "Nom incorrecte";

// ✅ Estructura interna amagada
class Usuari {
    private $nom;
    private $cognom;
    private $email;
    
    public function __construct($nom, $cognom, $email) {
        $this->nom = $nom;
        $this->cognom = $cognom;
        $this->email = $email;
    }
    
    public function getNomComplet() {
        return $this->nom . ' ' . $this->cognom;
    }
    
    public function setEmail($email) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $this->email = $email;
        }
    }
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Preferir estructures de dades</u></h4>
            <p>En lloc de getters/setters per a tot, considera estructures de dades.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Objecte amb massa getters/setters
class Punt {
    private $x;
    private $y;
    
    public function getX() { return $this->x; }
    public function setX($x) { $this->x = $x; }
    public function getY() { return $this->y; }
    public function setY($y) { $this->y = $y; }
}

// ✅ Estructura de dades simple
class Punt {
    public $x;
    public $y;
    
    public function __construct($x, $y) {
        $this->x = $x;
        $this->y = $y;
    }
}

// Fàcil d'usar
$punt = new Punt(10, 20);
echo $punt->x; // Directe</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Evitar estructures híbrides</u></h4>
            <p>No barregis objectes amb comportament i estructures de dades.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Híbrid (mig objecte, mig estructura)
class Rectangle {
    public $amplada;
    public $altura;
    
    public function calcularArea() {
        return $this->amplada * $this->altura;
    }
    
    public function esQuadrat() {
        return $this->amplada == $this->altura;
    }
    
    // I també getters/setters per a tot...
}

// ✅ Objecte amb comportament
class Rectangle {
    private $amplada;
    private $altura;
    
    public function __construct($amplada, $altura) {
        $this->amplada = $amplada;
        $this->altura = $altura;
    }
    
    public function calcularArea() { /* ... */ }
    public function esQuadrat() { /* ... */ }
}

// ✅ Estructura de dades pura
class DadesRectangle {
    public $amplada;
    public $altura;
}</code></pre>
            </div>
          </div>
          
          <div class="principle">
            <h4>🔹 <u>Classes minimalistes</u></h4>
            <p>Les classes haurien de ser petites, amb una sola responsabilitat.</p>
            <div class="code-block mt-2">
              <pre><code class="php">// ❌ Classe massa gran
class UsuariManager {
    public function crearUsuari() { /* ... */ }
    public function actualitzarUsuari() { /* ... */ }
    public function eliminarUsuari() { /* ... */ }
    public function validarEmail() { /* ... */ }
    public function generarPassword() { /* ... */ }
    public function enviarEmailConfirmacio() { /* ... */ }
    public function crearTokenSessio() { /* ... */ }
    // ... 20 mètodes més
}

// ✅ Classes petites i enfocades
class UsuariRepository {
    public function guardar() { /* ... */ }
    public function obtenir() { /* ... */ }
    public function eliminar() { /* ... */ }
}

class UsuariValidacio {
    public function validarEmail() { /* ... */ }
    public function validarPassword() { /* ... */ }
}

class UsuariNotificacio {
    public function enviarEmailConfirmacio() { /* ... */ }
    public function enviarEmailBenvinguda() { /* ... */ }
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "10. Olor de codi (Code Smells)",
    content: `
      <h2 class="slide-title">10. Olor de codi (Code Smells)</h2>
      
      <div class="text-large">
        <p>Senyals que el teu codi necessita neteja:</p>
        
        <div class="problem-solution">
          <h4>🔹 <u>Rigidesa</u></h4>
          <p>El programari és difícil de canviar. Un petit canvi provoca una cascada de canvis posteriors.</p>
          
          <div class="code-block mt-2">
            <div class="code-header">
              <span>Símptomes de rigidesa</span>
            </div>
            <pre><code class="php">// ❌ Codi rígid - Canviar el tipus de DB requereix molts canvis
class ProducteService {
    private $mysqlConnection;
    
    public function __construct() {
        $this->mysqlConnection = new MySQLConnection();
    }
    
    public function obtenirProductes() {
        return $this->mysqlConnection->query("SELECT * FROM productes");
    }
}

// Per canviar a PostgreSQL:
// 1. Canviar la classe MySQLConnection
// 2. Canviar la query (potser sintaxi diferent)
// 3. Canviar tots els usos...

// ✅ Codi flexible
class ProducteService {
    private $dbConnection;
    
    public function __construct(DatabaseConnection $dbConnection) {
        $this->dbConnection = $dbConnection;
    }
    
    public function obtenirProductes() {
        return $this->dbConnection->query("SELECT * FROM productes");
    }
}

// Ara podem injectar MySQLConnection, PostgreSQLConnection, etc.</code></pre>
          </div>
        </div>
        
        <div class="problem-solution mt-4">
          <h4>🔹 <u>Fragilitat</u></h4>
          <p>El programari es trenca en molts llocs a causa d'un sol canvi.</p>
          
          <div class="code-block mt-2">
            <pre><code class="php">// ❌ Fràgil - Canviar una constant afecta múltiples llocs
define('TAXA_IVA', 0.21);

// En 15 fitxers diferents:
$preuAmbIVA = $preu * (1 + TAXA_IVA);

// Si canviem la constant a 0.10 (per a un producte específic)
// Tots els productes reben el nou IVA!

// ✅ Menys fràgil
class Producte {
    private $preu;
    private $iva;
    
    public function __construct($preu, $iva = 0.21) {
        $this->preu = $preu;
        $this->iva = $iva;
    }
    
    public function getPreuAmbIVA() {
        return $this->preu * (1 + $this->iva);
    }
}

// Cada producte pot tenir el seu propi IVA</code></pre>
          </div>
        </div>
        
        <div class="problem-solution mt-4">
          <h4>🔹 <u>Immobilitat</u></h4>
          <p>No pots reutilitzar parts del codi en altres projectes per riscos i gran esforç.</p>
          
          <div class="code-block mt-2">
            <pre><code class="php">// ❌ Immòbil - Codi fortament acoblat
class ReportGenerator {
    public function generarReportUsuaris() {
        $db = new Database('localhost', 'projecte_a', 'usuari', 'pass');
        $usuaris = $db->query("SELECT * FROM usuaris");
        
        // Codi específic del projecte A
        foreach ($usuaris as $usuari) {
            // Formateig específic...
        }
        
        return $resultat;
    }
}

// No es pot reutilitzar al projecte B!

// ✅ Reutilitzable
class ReportGenerator {
    private $dataSource;
    private $formatter;
    
    public function __construct(DataSource $dataSource, Formatter $formatter) {
        $this->dataSource = $dataSource;
        $this->formatter = $formatter;
    }
    
    public function generarReport($consulta) {
        $dades = $this->dataSource->executarConsulta($consulta);
        return $this->formatter->formatar($dades);
    }
}

// Reutilitzable en qualsevol projecte!</code></pre>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "11. Olors de codi addicionals",
    content: `
      <h2 class="slide-title">11. Olors de codi addicionals</h2>
      
      <div class="text-large">
        <div class="problem-solution">
          <h4>🔹 <u>Complexitat innecessària</u></h4>
          <p>Solucions complicades per a problemes simples.</p>
          
          <div class="code-block mt-2">
            <pre><code class="php">// ❌ Complexitat innecessària
class FabricaAbstractaDeGeneradorDePatronsSingleton {
    private static $instancia;
    
    private function __construct() {}
    
    public static function obtenirInstancia() {
        if (self::$instancia === null) {
            self::$instancia = new self();
        }
        return self::$instancia;
    }
    
    public function crearProducte() {
        // Patró complicat per a alguna cosa simple
    }
}

// ✅ Simple
class Configuracio {
    private $valors = [];
    
    public function __construct(array $valors) {
        $this->valors = $valors;
    }
    
    public function obtenir($clau) {
        return $this->valors[$clau] ?? null;
    }
}

// Ús simple:
$config = new Configuracio(['host' => 'localhost']);
echo $config->obtenir('host');</code></pre>
          </div>
        </div>
        
        <div class="problem-solution mt-4">
          <h4>🔹 <u>Repetició innecessària</u></h4>
          <p>Codi duplicat o gairebé duplicat.</p>
          
          <div class="code-block mt-2">
            <pre><code class="php">// ❌ Repetició
function validarUsuariRegistre($dades) {
    if (empty($dades['nom'])) {
        throw new Exception('El nom és obligatori');
    }
    if (strlen($dades['nom']) < 3) {
        throw new Exception('El nom ha de tenir mínim 3 caràcters');
    }
    if (empty($dades['email'])) {
        throw new Exception('L\'email és obligatori');
    }
    // ... més validacions
}

function validarUsuariActualitzacio($dades) {
    if (empty($dades['nom'])) {
        throw new Exception('El nom és obligatori');
    }
    if (strlen($dades['nom']) < 3) {
        throw new Exception('El nom ha de tenir mínim 3 caràcters');
    }
    if (empty($dades['email'])) {
        throw new Exception('L\'email és obligatori');
    }
    // ... les mateixes validacions!
}

// ✅ Sense repetició
class ValidadorUsuari {
    public function validarNom($nom) {
        if (empty($nom)) {
            throw new Exception('El nom és obligatori');
        }
        if (strlen($nom) < 3) {
            throw new Exception('El nom ha de tenir mínim 3 caràcters');
        }
        return true;
    }
    
    public function validarEmail($email) {
        // ...
    }
}

// Reutilitzat a tot arreu</code></pre>
          </div>
        </div>
        
        <div class="problem-solution mt-4">
          <h4>🔹 <u>Opacitat</u></h4>
          <p>El codi és difícil d'entendre.</p>
          
          <div class="code-block mt-2">
            <pre><code class="php">// ❌ Opac - Què fa aquest codi?
function p($a, $b, $c) {
    $r = 0;
    for ($i = 0; $i < count($a); $i++) {
        if ($a[$i] > $b && $a[$i] < $c) {
            $r++;
        }
    }
    return $r;
}

// ✅ Clar
function comptarElementsEntreLimits($array, $limitInferior, $limitSuperior) {
    $comptador = 0;
    
    foreach ($array as $element) {
        if ($element > $limitInferior && $element < $limitSuperior) {
            $comptador++;
        }
    }
    
    return $comptador;
}</code></pre>
          </div>
        </div>
        
        <div class="important-note mt-4">
          <h5>🔹 <u>Com detectar i arreglar olors de codi:</u></h5>
          <ul class="concept-list">
            <li><strong>Revisió de codi</strong>: Demana a altres desenvolupadors que revisin el teu codi</li>
            <li><strong>Refactorització contínua</strong>: Millora el codi petit a poc</li>
            <li><strong>Tests automatitzats</strong>: Assegura que els canvis no trenquin funcionalitat</li>
            <li><strong>Herències excessives</strong>: Evita herencies massa profundes (> 2 nivells)</li>
            <li><strong>Classes massa llargues</strong>: Divideix classes amb més de 300 línies</li>
            <li><strong>Mètodes massa llargs</strong>: Divideix mètodes amb més de 20 línies</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "12. Resum i recursos",
    content: `
      <h2 class="slide-title">12. Resum i recursos</h2>
      
      <div class="text-large">
        <div class="resources-grid">
          <div class="resource-card">
            <h4>🔹 <u>Llibres recomanats</u></h4>
            <ul class="concept-list">
              <li><strong>"Clean Code"</strong> - Robert C. Martin</li>
              <li><strong>"The Clean Coder"</strong> - Robert C. Martin</li>
              <li><strong>"Refactoring"</strong> - Martin Fowler</li>
              <li><strong>"The Pragmatic Programmer"</strong> - Andrew Hunt</li>
            </ul>
          </div>
          
          <div class="resource-card">
            <h4>🔹 <u>Eines per a PHP</u></h4>
            <ul class="concept-list">
              <li><strong>PHP_CodeSniffer</strong>: Verifica estàndards de codi</li>
              <li><strong>PHPStan / Psalm</strong>: Anàlisi estàtic</li>
              <li><strong>PHP-CS-Fixer</strong>: Formateja automàticament</li>
              <li><strong>PHPMD</strong>: Detector de problemes</li>
            </ul>
          </div>
          
          <div class="resource-card">
            <h4>🔹 <u>Principis clau</u></h4>
            <ul class="concept-list">
              <li><strong>KISS</strong>: Keep It Simple, Stupid</li>
              <li><strong>DRY</strong>: Don't Repeat Yourself</li>
              <li><strong>YAGNI</strong>: You Aren't Gonna Need It</li>
              <li><strong>SOLID</strong>: Principis de disseny OOP</li>
              <li><strong>Boy Scout Rule</strong>: Millora el codi que toques</li>
            </ul>
          </div>
        </div>
        
        <div class="important-note mt-4">
          <h5>🔹 <u>Consells pràctics:</u></h5>
          <ul class="concept-list">
            <li><strong>Comença petit</strong>: Millora una cosa cada dia</li>
            <li><strong>Fes revisions de codi</strong>: Aprèn dels altres</li>
            <li><strong>Escriu tests</strong>: Et donen confiança per refactoritzar</li>
            <li><strong>Usa eines automàtiques</strong>: PHP_CodeSniffer, PHP-CS-Fixer</li>
            <li><strong>Pensa en el proper desenvolupador</strong>: Escriu codi per a altres, no només per a tu</li>
            <li><strong>Refactoritza contínuament</strong>: No deixis que el codi es degradi</li>
          </ul>
        </div>
        
        <div class="text-center mt-4 p-3 bg-light rounded border">
          <h5>🔹 <u>Recorda:</u></h5>
          <p>"Qualitat del codi no és un luxe, és una necessitat. Codi net és més fàcil de mantenir, té menys errors i permet canviar més ràpidament."</p>
          <p class="mt-2"><em>- Resum basat en "Clean Code" de Robert C. Martin</em></p>
        </div>
      </div>
    `
  }
];

// Assegurar-nos que el totalSlides està definit al HTML
document.getElementById('totalSlides').textContent = slides.length;