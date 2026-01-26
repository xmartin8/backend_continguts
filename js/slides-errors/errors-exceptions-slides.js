// Diapositives sobre excepcions i comparatives
const errorsExceptionsSlides = [
  {
    title: "5. Die() vs Try...Catch",
    content: `
      <h2 class="slide-title">5. Die() vs Try...Catch</h2>
      
      <div class="important-note mb-4">
        <p>PHP ofereix dues maneres principals de gestionar errors: la funció <code>die()</code>/<code>exit()</code> i les excepcions amb <code>try...catch</code>.</p>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <h4>⚠️ Die() i Exit():</h4>
          <div class="code-block">
            <div class="code-header">
              <span>us_die.php</span>
            </div>
            <pre><code class="php">&lt;?php
// Exemple amb die() - NO RECOMANAT per a aplicacions complexes

// Connexió a base de dades (forma senzilla)
$conn = mysqli_connect('localhost', 'usuari', 'password', 'bd');
if (!$conn) {
    die("Error de connexió: " . mysqli_connect_error());
}

// Obertura de fitxer
$file = fopen("dades.txt", "r");
if (!$file) {
    die("No s'ha pogut obrir el fitxer");
}

// Consulta SQL
$result = mysqli_query($conn, "SELECT * FROM usuaris");
if (!$result) {
    die("Error en la consulta: " . mysqli_error($conn));
}

// Processar resultats
while ($row = mysqli_fetch_assoc($result)) {
    echo $row['nom'] . "&lt;br&gt;";
}

// Avantatges:
// 1. Simple i directe
// 2. Fàcil d'entendre
// 3. Control immediat de l'execució

// Desavantatges:
// 1. L'aplicació s'atura completament
// 2. Difícil de gestionar en aplicacions grans
// 3. No permet neteja adequada de recursos
// 4. Poca flexibilitat
?&gt;</code></pre>
          </div>
        </div>
        
        <div class="col-md-6">
          <h4>✅ Try...Catch:</h4>
          <div class="code-block">
            <div class="code-header">
              <span>us_try_catch.php</span>
            </div>
            <pre><code class="php">&lt;?php
// Exemple amb try...catch - RECOMANAT

try {
    // Connexió a base de dades
    $conn = new PDO('mysql:host=localhost;dbname=bd', 'usuari', 'password');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Obertura de fitxer
    $file = fopen("dades.txt", "r");
    if (!$file) {
        throw new Exception("No s'ha pogut obrir el fitxer");
    }
    
    // Consulta SQL
    $stmt = $conn->prepare("SELECT * FROM usuaris WHERE id = :id");
    $stmt->execute([':id' => $userId]);
    $usuaris = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Processar resultats
    foreach ($usuaris as $usuari) {
        echo $usuari['nom'] . "&lt;br&gt;";
    }
    
    // Tancar recursos
    fclose($file);
    
} catch (PDOException $e) {
    echo "Error de base de dades: " . $e->getMessage();
    // Registrar l'error
    error_log("Error PDO: " . $e->getMessage());
    
} catch (Exception $e) {
    echo "Error general: " . $e->getMessage();
    // Registrar l'error
    error_log("Error general: " . $e->getMessage());
    
} finally {
    // Aquest codi s'executa sempre (hagi o no hagut error)
    if (isset($conn)) {
        $conn = null; // Tancar connexió
    }
    echo "Procés finalitzat";
}

// Avantatges:
// 1. Control estructurat d'errors
// 2. Neteja adequada de recursos (finally)
// 3. Diferents tipus d'excepcions
// 4. L'aplicació pot continuar
// 5. Millor per a aplicacions complexes

// Desavantatges:
// 1. Més codi
// 2. Més complex d'entendre
// 3. Overhead de rendiment
?&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <div class="important-note mt-4">
        <h5>📊 Comparativa:</h5>
        <table class="errors-table">
          <tr>
            <th>Característica</th>
            <th>Die()/Exit()</th>
            <th>Try...Catch</th>
          </tr>
          <tr>
            <td>Control d'execució</td>
            <td>S'atura completament</td>
            <td>Pot continuar després de l'error</td>
          </tr>
          <tr>
            <td>Neteja de recursos</td>
            <td>Difícil</td>
            <td>Fàcil amb finally</td>
          </tr>
          <tr>
            <td>Tipus d'errors</td>
            <td>Un sol tipus</td>
            <td>Múltiples tipus d'excepcions</td>
          </tr>
          <tr>
            <td>Complexitat</td>
            <td>Baixa</td>
            <td>Alta</td>
          </tr>
          <tr>
            <td>Recomanat per</td>
            <td>Scripts simples</td>
            <td>Aplicacions complexes</td>
          </tr>
        </table>
      </div>
    `
  },
  {
    title: "6. Classe Error i Excepcions",
    content: `
      <h2 class="slide-title">6. Classe Error i Excepcions</h2>
      
      <div class="important-note mb-4">
        <p>A partir de PHP 7, la majoria d'errors es llançen com a excepcions de la classe <code>Error</code>, que permet un maneig més consistent dels errors.</p>
      </div>
      
      <h4>🌳 Jerarquia de classes:</h4>
      <ul class="concept-list">
        <li><code>Throwable</code> (interface) - Interfície base</li>
        <li><code>Exception</code> - Excepcions tradicionals</li>
        <li><code>Error</code> - Errors interns de PHP</li>
        <li><code>ParseError</code> - Errors d'anàlisi</li>
        <li><code>TypeError</code> - Errors de tipus</li>
        <li><code>ArgumentCountError</code> - Errors en arguments</li>
        <li><code>DivisionByZeroError</code> - Divisió per zero</li>
      </ul>
      
      <div class="code-block mt-4">
        <div class="code-header">
          <span>classe_error.php</span>
          <div>
            <span class="code-language">PHP</span>
            <button class="copy-btn ms-2" onclick="copyCode('php-error-class', this)">Copiar</button>
          </div>
        </div>
        <pre><code class="php" id="php-error-class">&lt;?php
// Exemple de la classe Error (PHP 7+)

try {
    // Això llançarà un Error en PHP 7+
    $result = 10 / 0;
    
} catch (DivisionByZeroError $e) {
    echo "Error de divisió per zero: " . $e->getMessage() . "\\n";
    echo "Fitxer: " . $e->getFile() . "\\n";
    echo "Línia: " . $e->getLine() . "\\n";
    echo "Traça: " . $e->getTraceAsString() . "\\n";
    
} catch (Error $e) {
    echo "Error de PHP: " . $e->getMessage();
    
} catch (Exception $e) {
    echo "Excepció: " . $e->getMessage();
}

// Mètodes de la classe Error (heretats de Throwable)
try {
    // Codi que pot generar errors
    include_once 'fitxer_inexistent.php';
    
} catch (Error $e) {
    echo "Mètodes disponibles:\\n";
    echo "getMessage(): " . $e->getMessage() . "\\n";
    echo "getCode(): " . $e->getCode() . "\\n";
    echo "getFile(): " . $e->getFile() . "\\n";
    echo "getLine(): " . $e->getLine() . "\\n";
    echo "getTrace(): " . print_r($e->getTrace(), true) . "\\n";
    echo "getTraceAsString(): " . $e->getTraceAsString() . "\\n";
    echo "getPrevious(): " . $e->getPrevious() . "\\n";
    echo "__toString(): " . $e->__toString() . "\\n";
}

// Exemple de Throwable (PHP 7+)
try {
    // Qualsevol error o excepció
    strpos();
    
} catch (Throwable $t) {
    // Captura tant errors com excepcions
    echo "Throwable capturat: " . $t->getMessage();
}
?&gt;</code></pre>
      </div>
      
      <h4 class="mt-4">🔍 Exemples d'Errors com a Excepcions (PHP 7+):</h4>
      <div class="code-block">
        <div class="code-header">
          <span>errors_com_excepcions.php</span>
        </div>
        <pre><code class="php">&lt;?php
// 1. ParseError (sintaxi incorrecta)
try {
    eval("echo 'Hola"); // Falta tancar cometa
} catch (ParseError $e) {
    echo "Error de sintaxi: " . $e->getMessage();
}

// 2. TypeError (tipus incorrectes)
declare(strict_types=1); // Mode estricte

function suma(int $a, int $b): int {
    return $a + $b;
}

try {
    suma("no_es_un_enter", 5);
} catch (TypeError $e) {
    echo "Error de tipus: " . $e->getMessage();
}

// 3. ArgumentCountError (arguments incorrectes)
try {
    strlen("text", "argument_extra");
} catch (ArgumentCountError $e) {
    echo "Error en arguments: " . $e->getMessage();
}

// 4. Error personalitzat que hereda de Error
class DatabaseError extends Error {
    public function __construct($message, $code = 0, Throwable $previous = null) {
        parent::__construct($message, $code, $previous);
    }
    
    public function __toString() {
        return __CLASS__ . ": [{$this->code}]: {$this->message}\\n";
    }
}

try {
    throw new DatabaseError("Error de connexió a la base de dades");
} catch (DatabaseError $e) {
    echo "Error personalitzat: " . $e->getMessage();
}
?&gt;</code></pre>
      </div>
    `
  }
];