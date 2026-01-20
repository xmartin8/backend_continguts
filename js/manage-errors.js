const slides = [
  {
    title: "Gestió d'Errors en PHP",
    content: `
            <div class="errors-content">
                <div class="errors-image-container">
                    <img src="../img/homer_404.png" alt="Gestió d'Errors en PHP" class="errors-image" />
                </div>

                <div class="errors-info">
                    <h3 class="slide-title">Gestió d'Errors en PHP</h3>
                    <div class="errors-topics">
                        <div class="errors-topic">
                            <h4>⚠️ Tipus d'Errors</h4>
                            <p>PHP classifica els errors en: E_ERROR, E_WARNING, E_NOTICE, E_PARSE, E_DEPRECATED, etc.</p>
                        </div>

                        <div class="errors-topic">
                            <h4> Nivells d'Error</h4>
                            <p>Es poden configurar els nivells d'error que es mostren i registren mitjançant error_reporting().</p>
                        </div>

                        <div class="errors-topic">
                            <h4>🔧 Gestió d'Errors</h4>
                            <p>Funció set_error_handler() per definir un gestor d'errors personalitzat.</p>
                        </div>

                        <div class="errors-topic">
                            <h4> Excepcions</h4>
                            <p>Les excepcions permeten un control estructurat dels errors mitjançant try...catch.</p>
                        </div>

                        <div class="errors-topic">
                            <h4>📝 Registre d'Errors</h4>
                            <p>PHP pot registrar errors en fitxers de log, útils per a depuració i monitorització.</p>
                        </div>

                        <div class="errors-topic">
                            <h4>🛡️ Die() vs Excepcions</h4>
                            <p>Comparativa entre l'ús de die()/exit() i el maneig d'excepcions amb try...catch.</p>
                        </div>

                        <div class="errors-topic">
                            <h4>Error Logging</h4>
                            <p>Configuració de log d'errors per a producció vs desenvolupament.</p>
                        </div>

                        <div class="errors-topic">
                            <h4>🎨 Errors Personalitzats</h4>
                            <p>Creació de pàgines d'error personalitzades per a usuaris finals.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
  },
  {
    title: "2. Tipus i Nivells d'Error",
    content: `
            <h2 class="slide-title">2. Tipus i Nivells d'Error</h2>
            
            <div class="important-note mb-4">
                <p>PHP té diversos tipus d'errors que es classifiquen en diferents nivells de severitat.</p>
            </div>
            
            <h4>Taula de Nivells d'Error:</h4>
            <table class="errors-table">
                <tr>
                    <th>Constant</th>
                    <th>Valor</th>
                    <th>Descripció</th>
                </tr>
                <tr>
                    <td>E_ERROR</td>
                    <td>1</td>
                    <td>Errors fatals d'execució. L'script s'atura.</td>
                </tr>
                <tr>
                    <td>E_WARNING</td>
                    <td>2</td>
                    <td>Errors d'execució no fatals. L'script continua.</td>
                </tr>
                <tr>
                    <td>E_PARSE</td>
                    <td>4</td>
                    <td>Errors d'anàlisi sintàctica en temps de compilació.</td>
                </tr>
                <tr>
                    <td>E_NOTICE</td>
                    <td>8</td>
                    <td>Notificacions d'execució. Errors menors.</td>
                </tr>
                <tr>
                    <td>E_CORE_ERROR</td>
                    <td>16</td>
                    <td>Errors fatals en l'inici del nucli de PHP.</td>
                </tr>
                <tr>
                    <td>E_CORE_WARNING</td>
                    <td>32</td>
                    <td>Errors no fatals en l'inici del nucli de PHP.</td>
                </tr>
                <tr>
                    <td>E_COMPILE_ERROR</td>
                    <td>64</td>
                    <td>Errors fatals en temps de compilació.</td>
                </tr>
                <tr>
                    <td>E_COMPILE_WARNING</td>
                    <td>128</td>
                    <td>Errors no fatals en temps de compilació.</td>
                </tr>
                <tr>
                    <td>E_USER_ERROR</td>
                    <td>256</td>
                    <td>Error fatal generat per l'usuari.</td>
                </tr>
                <tr>
                    <td>E_USER_WARNING</td>
                    <td>512</td>
                    <td>Error no fatal generat per l'usuari.</td>
                </tr>
                <tr>
                    <td>E_USER_NOTICE</td>
                    <td>1024</td>
                    <td>Notificació generada per l'usuari.</td>
                </tr>
                <tr>
                    <td>E_STRICT</td>
                    <td>2048</td>
                    <td>Suggeriments de compatibilitat.</td>
                </tr>
                <tr>
                    <td>E_RECOVERABLE_ERROR</td>
                    <td>4096</td>
                    <td>Errors recuperables.</td>
                </tr>
                <tr>
                    <td>E_DEPRECATED</td>
                    <td>8192</td>
                    <td>Funcionalitats obsoletes.</td>
                </tr>
                <tr>
                    <td>E_USER_DEPRECATED</td>
                    <td>16384</td>
                    <td>Funcionalitats obsoletes generades per l'usuari.</td>
                </tr>
                <tr>
                    <td>E_ALL</td>
                    <td>32767</td>
                    <td>Tots els errors i advertències.</td>
                </tr>
            </table>
        `
  },
    {
    title: "2.1. TTTTTTTTTTTTT",
    content: `
            
            <div class="code-block mt-4">
                <div class="code-header">
                    <span>configuracio_nivells.php</span>
                    <div>
                        <span class="code-language">PHP</span>
                        <button class="copy-btn ms-2" onclick="copyCode('php-error-levels', this)">Copiar</button>
                    </div>
                </div>
                    <pre><code class="php" id="php-error-levels">&lt;?php
                        // Configurar nivell d'error
                        error_reporting(E_ALL);                     // Mostra tots els errors
                        error_reporting(E_ALL & ~E_NOTICE);         // Mostra tots excepte notices
                        error_reporting(0);                         // Desactivar tots els errors

                        // Configuració recomanada per a desenvolupament
                        ini_set('display_errors', 1);
                        ini_set('display_startup_errors', 1);
                        error_reporting(E_ALL);

                        // Configuració recomanada per a producció
                        ini_set('display_errors', 0);
                        ini_set('display_startup_errors', 0);
                        error_reporting(E_ALL);
                        ini_set('log_errors', 1);
                        ini_set('error_log', '/tmp/php-errors.log');

                        // Combinar nivells d'error
                        error_reporting(E_ERROR | E_WARNING | E_PARSE);
                        error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
                        ?&gt;</code></pre>
            </div>
        `
  },
  {
    title: "3. Funció set_error_handler()",
    content: `
            <h2 class="slide-title">3. Funció set_error_handler()</h2>
            
            <div class="important-note mb-4">
                <p>La funció <code>set_error_handler()</code> permet definir una funció personalitzada per gestionar errors en lloc del gestor per defecte de PHP.</p>
            </div>
            
            <h4>📝 Sintaxi:</h4>
            <div class="code-block">
                <pre><code class="php">set_error_handler(callable $error_handler, int $error_types = E_ALL | E_STRICT): mixed</code></pre>
            </div>
            
            <h4 class="mt-4"> Paràmetres de la funció d'error:</h4>
            <ul class="concept-list">
                <li><code>$errno</code> - Nivell de l'error</li>
                <li><code>$errstr</code> - Missatge d'error</li>
                <li><code>$errfile</code> - Fitxer on ocorre l'error</li>
                <li><code>$errline</code> - Línia on ocorre l'error</li>
                <li><code>$errcontext</code> - Array amb variables en l'àmbit on ocorre l'error</li>
            </ul>
            
            <div class="code-block mt-4">
                <div class="code-header">
                    <span>gestor_errors_personalitzat.php</span>
                    <div>
                        <span class="code-language">PHP</span>
                        <button class="copy-btn ms-2" onclick="copyCode('php-custom-handler', this)">Copiar</button>
                    </div>
                </div>
                <pre><code class="php" id="php-custom-handler">&lt;?php
// Funció gestora d'errors personalitzada
function gestorErrorsPersonalitzat($errno, $errstr, $errfile, $errline) {
    switch ($errno) {
        case E_USER_ERROR:
            echo "&lt;b&gt;ERROR FATAL&lt;/b&gt; [$errno] $errstr&lt;br /&gt;\n";
            echo "Error a la línia $errline del fitxer $errfile&lt;br /&gt;\n";
            echo "PHP " . PHP_VERSION . " (" . PHP_OS . ")&lt;br /&gt;\n";
            exit(1);
            break;
            
        case E_USER_WARNING:
            echo "&lt;b&gt;ADVERTIMENT&lt;/b&gt; [$errno] $errstr&lt;br /&gt;\n";
            break;
            
        case E_USER_NOTICE:
            echo "&lt;b&gt;NOTIFICACIÓ&lt;/b&gt; [$errno] $errstr&lt;br /&gt;\n";
            break;
            
        default:
            echo "Tipus d'error desconegut: [$errno] $errstr&lt;br /&gt;\n";
            break;
    }
    
    // No executar el gestor d'errors intern de PHP
    return true;
}

// Establir gestor d'errors personalitzat
$old_error_handler = set_error_handler("gestorErrorsPersonalitzat");

// Provar errors
echo $variable_no_definida; // Genera E_NOTICE

// Generar errors personalitzats
trigger_error("Això és un error d'usuari", E_USER_ERROR);
trigger_error("Això és una advertència", E_USER_WARNING);
trigger_error("Això és una notificació", E_USER_NOTICE);

// Restaurar gestor d'errors anterior
restore_error_handler();
?&gt;</code></pre>
            </div>
            
            <div class="important-note mt-4">
                <h5>⚠️ Importants:</h5>
                <p>1. El gestor d'errors personalitzat NO pot gestionar errors fatals (E_ERROR, E_PARSE, etc.)</p>
                <p>2. Si la funció retorna FALSE, l'error es passarà al gestor d'errors per defecte de PHP</p>
                <p>3. <code>restore_error_handler()</code> torna al gestor d'errors anterior</p>
            </div>
        `
  },
  {
    title: "4. Funcions de Gestió d'Errors",
    content: `
            <h2 class="slide-title">4. Funcions de Gestió d'Errors</h2>
            
            <div class="row">
                <div class="col-md-6">
                    <h4>📋 Funcions principals:</h4>
                    <ul class="concept-list">
                        <li><code>error_reporting()</code> - Configura nivells d'error</li>
                        <li><code>set_error_handler()</code> - Defineix gestor personalitzat</li>
                        <li><code>restore_error_handler()</code> - Restaura gestor anterior</li>
                        <li><code>trigger_error()</code> - Genera error/notificació d'usuari</li>
                        <li><code>error_log()</code> - Envia missatge d'error al registre</li>
                        <li><code>ini_set()</code> - Configura opcions de PHP</li>
                        <li><code>get_last_error()</code> - Obtenir últim error</li>
                        <li><code>clear_last_error()</code> - Esborrar últim error</li>
                    </ul>
                </div>
                
                <div class="col-md-6">
                    <h4>⚙️ Configuració php.ini:</h4>
                    <ul class="concept-list">
                        <li><code>display_errors</code> - Mostrar errors a la pantalla</li>
                        <li><code>display_startup_errors</code> - Errors durant l'inici</li>
                        <li><code>log_errors</code> - Registrar errors en fitxer</li>
                        <li><code>error_log</code> - Ruta del fitxer de log</li>
                        <li><code>error_reporting</code> - Nivells d'error per defecte</li>
                        <li><code>track_errors</code> - Guardar últim error en $php_errormsg</li>
                    </ul>
                </div>
            </div>
            
            <div class="code-block mt-4">
                <div class="code-header">
                    <span>exemples_funcions.php</span>
                    <div>
                        <span class="code-language">PHP</span>
                        <button class="copy-btn ms-2" onclick="copyCode('php-error-functions', this)">Copiar</button>
                    </div>
                </div>
                <pre><code class="php" id="php-error-functions">&lt;?php
// Exemples de funcions de gestió d'errors

// 1. error_log() - Diversos usos
error_log("Error de connexió a la base de dades"); // Log per defecte
error_log("Usuari no autenticat", 1, "admin@example.com"); // Per email
error_log("Error del sistema", 3, "/var/log/php_errors.log"); // A fitxer específic

// 2. trigger_error() - Generar errors personalitzats
function dividir($a, $b) {
    if ($b == 0) {
        trigger_error("Divisió per zero!", E_USER_WARNING);
        return INF;
    }
    return $a / $b;
}

// 3. get_last_error() i clear_last_error()
$file = fopen("fitxer_inexistent.txt", "r");
if ($file === false) {
    $error = error_get_last();
    echo "Error: " . $error['message'] . "\\n";
    error_clear_last();
}

// 4. Configuració dinàmica
ini_set('log_errors', 1);
ini_set('error_log', '/tmp/php_errors.log');
ini_set('display_errors', 0);

// 5. $php_errormsg (necessita track_errors = On)
ini_set('track_errors', 1);
@file_get_contents('fitxer_inexistent.txt');
echo "Últim error: $php_errormsg";

// 6. Gestió d'errors amb error_reporting()
$old_level = error_reporting(E_ALL); // Guardar nivell anterior
// Codi que pot generar errors
error_reporting($old_level); // Restaurar nivell anterior
?&gt;</code></pre>
            </div>
            

        `
  },
  {
title: "4.1 TTTTTTTTTTTTT",
content: ` 
            <div class="example-block mt-4">
                <div class="example-title">💡 Exemple pràctic: Sistema de log</div>
                <pre><code class="php">&lt;?php
class ErrorLogger {
    private $logFile;
    
    public function __construct($logFile) {
        $this->logFile = $logFile;
        set_error_handler([$this, 'handleError']);
    }
    
    public function handleError($errno, $errstr, $errfile, $errline) {
        $timestamp = date('Y-m-d H:i:s');
        $level = $this->getErrorLevel($errno);
        $message = "[$timestamp] [$level] $errstr a $errfile:$errline\\n";
        error_log($message, 3, $this->logFile);
        
        // Per a desenvolupament, mostrar també a la pantalla
        if (ini_get('display_errors')) {
            echo "&lt;div style='color:red; padding:10px; border:1px solid red;'&gt;$message&lt;/div&gt;";
        }
        
        // Errors fatals de l'usuari
        if ($errno === E_USER_ERROR) {
            die("Error fatal: $errstr");
        }
        
        return true; // Prevenir gestor per defecte
    }
    
    private function getErrorLevel($errno) {
        $levels = [
            E_ERROR => 'ERROR',
            E_WARNING => 'WARNING',
            E_PARSE => 'PARSE',
            E_NOTICE => 'NOTICE',
            E_USER_ERROR => 'USER_ERROR',
            E_USER_WARNING => 'USER_WARNING',
            E_USER_NOTICE => 'USER_NOTICE'
        ];
        return $levels[$errno] ?? 'UNKNOWN';
    }
}

// Ús
$logger = new ErrorLogger('/var/log/myapp_errors.log');
?&gt;</code></pre>
            </div>
`

  },
  {
    title: "5. Die() vs Try...Catch",
    content: `
            <h2 class="slide-title">5. Die() vs Try...Catch</h2>
            
            <div class="important-note mb-4">
                <p>PHP ofereix dues maneres principals de gestionar errors: la funció <code>die()</code>/<code>exit()</code> i les excepcions amb <code>try...catch</code>.</p>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <h4> Die() i Exit():</h4>
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
                    <h4> Try...Catch:</h4>
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
                <h5>Comparativa:</h5>
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
                <p>A partir de PHP 7, la majoria d'errors es llançuen com a excepcions de la classe <code>Error</code>, que permet un maneig més consistent dels errors.</p>
            </div>
            
            <h4> Jerarquia de classes:</h4>
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
            
            <h4 class="mt-4"> Exemples d'Errors com a Excepcions (PHP 7+):</h4>
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
  },
  {
    title: "7. Configuració per Desenvolupament vs Producció",
    content: `
            <h2 class="slide-title">7. Configuració per Desenvolupament vs Producció</h2>
            
            <div class="important-note mb-4">
                <p>La configuració de gestió d'errors ha de ser diferent per a entorns de desenvolupament i producció.</p>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <h4>💻 Desenvolupament:</h4>
                    <ul class="concept-list">
                        <li><strong>Mostrar errors</strong> - Sí, per a depuració</li>
                        <li><strong>Log d'errors</strong> - Sí, per a referència</li>
                        <li><strong>Nivell d'errors</strong> - E_ALL (tots)</li>
                        <li><strong>Informació detallada</strong> - Sí</li>
                        <li><strong>Backtrace</strong> - Sí, per a depuració</li>
                        <li><strong>Recuperació d'errors</strong> - Mostra errors i continua</li>
                    </ul>
                    
                    <div class="code-block mt-3">
                        <div class="code-header">
                            <span>config_desenvolupament.php</span>
                        </div>
                        <pre><code class="php">&lt;?php
// Configuració per a DESENVOLUPAMENT
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Mostrar errors en format llegible
ini_set('html_errors', 1);

// Registrar errors per a referència futura
ini_set('log_errors', 1);
ini_set('error_log', '/tmp/php_errors_dev.log');

// Per a PHP 7+, mostrar errors com a excepcions
ini_set('assert.exception', 1);

// Configuració per a depuració
function handleDevError($errno, $errstr, $errfile, $errline) {
    echo "&lt;div style='background:#ffe6e6;border:2px solid red;padding:15px;margin:10px;'&gt;";
    echo "&lt;strong&gt;ERROR&lt;/strong&gt; [$errno] $errstr&lt;br&gt;";
    echo "Fitxer: $errfile (línia $errline)&lt;br&gt;";
    
    // Mostrar backtrace
    echo "&lt;strong&gt;Backtrace:&lt;/strong&gt;&lt;br&gt;";
    echo "&lt;pre style='background:#f0f0f0;padding:10px;'&gt;";
    debug_print_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
    echo "&lt;/pre&gt;";
    echo "&lt;/div&gt;";
    
    return true; // Prevenir gestor per defecte
}

set_error_handler('handleDevError');
?&gt;</code></pre>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <h4>🚀 Producció:</h4>
                    <ul class="concept-list">
                        <li><strong>Mostrar errors</strong> - No, per a seguretat</li>
                        <li><strong>Log d'errors</strong> - Sí, per a monitorització</li>
                        <li><strong>Nivell d'errors</strong> - Errors crítics només</li>
                        <li><strong>Informació detallada</strong> - No (pot ser informació sensible)</li>
                        <li><strong>Backtrace</strong> - No (pot ser informació sensible)</li>
                        <li><strong>Recuperació d'errors</strong> - Pàgina d'error amigable</li>
                    </ul>
                    
                    <div class="code-block mt-3">
                        <div class="code-header">
                            <span>config_produccio.php</span>
                        </div>
                        <pre><code class="php">&lt;?php
// Configuració per a PRODUCCIÓ
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT);

// Registrar errors per a monitorització
ini_set('log_errors', 1);
ini_set('error_log', '/var/log/php_errors.log');

// Gestor d'errors per a producció
function handleProdError($errno, $errstr, $errfile, $errline) {
    // Registrar l'error
    $timestamp = date('Y-m-d H:i:s');
    $message = "[$timestamp] [$errno] $errstr a $errfile:$errline";
    error_log($message, 3, '/var/log/php_errors.log');
    
    // Enviar alerta si és un error crític
    if ($errno === E_USER_ERROR || $errno === E_ERROR) {
        // Enviar email d'alert (opcional)
        // mail('admin@example.com', 'Error crític', $message);
    }
    
    // Mostrar pàgina d'error amigable per a l'usuari
    if (!headers_sent()) {
        header('HTTP/1.1 500 Internal Server Error');
        readfile('/var/www/errors/500.html');
    } else {
        echo "S'ha produït un error. L'equip tècnic ha estat notificat.";
    }
    
    return true; // Prevenir gestor per defecte
}

set_error_handler('handleProdError');

// Gestor d'excepcions per a producció
function handleProdException($exception) {
    // Registrar l'excepció
    error_log("EXCEPCIÓ: " . $exception->getMessage() . 
              " a " . $exception->getFile() . 
              ":" . $exception->getLine());
    
    // Mostrar pàgina d'error amigable
    if (!headers_sent()) {
        header('HTTP/1.1 500 Internal Server Error');
        readfile('/var/www/errors/500.html');
    } else {
        echo "S'ha produït un error. Si us plau, torna-ho a provar més tard.";
    }
}

set_exception_handler('handleProdException');
?&gt;</code></pre>
                    </div>
                </div>
            </div>
            
            <div class="important-note mt-4">
                <h5>🔧 Configuració recomanada en php.ini:</h5>
                <div class="code-block">
                    <pre><code class="ini">; Per a DESENVOLUPAMENT
display_errors = On
display_startup_errors = On
error_reporting = E_ALL
html_errors = On
log_errors = On
error_log = /tmp/php_errors.log

; Per a PRODUCCIÓ
display_errors = Off
display_startup_errors = Off
error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT
html_errors = Off
log_errors = On
error_log = /var/log/php_errors.log</code></pre>
                </div>
            </div>
        `
  },
  {
    title: "8. Millores Pràctiques",
    content: `
            <h2 class="slide-title">8. Millores Pràctiques i Recomanacions</h2>
            
            <div class="important-note mb-4">
                <p>Seguir bones pràctiques en la gestió d'errors pot millorar significativament la robustesa i mantenibilitat de les aplicacions PHP.</p>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <h4>✅ Bones pràctiques:</h4>
                    <ul class="concept-list">
                        <li><strong>Ús de try...catch</strong> - En lloc de die() per a aplicacions complexes</li>
                        <li><strong>Logging adequat</strong> - Registrar errors per a diagnòstic</li>
                        <li><strong>Errors personalitzats</strong> - Pàgines d'error amigables per a usuaris</li>
                        <li><strong>Configuració per entorn</strong> - Diferent per dev/prod</li>
                        <li><strong>Validació d'entrada</strong> - Prevenir errors abans que ocorrin</li>
                        <li><strong>Tipus estrictes</strong> - declare(strict_types=1)</li>
                        <li><strong>Monitoreig</strong> - Supervisar logs d'errors</li>
                        <li><strong>Testing</strong> - Provar casos d'error</li>
                    </ul>
                </div>
                
                <div class="col-md-6">
                    <h4>❌ Pràctiques a evitar:</h4>
                    <ul class="concept-list">
                        <li><strong>@ per suprimir errors</strong> - Amaga problemes reals</li>
                        <li><strong>die() en aplicacions complexes</strong> - Poca flexibilitat</li>
                        <li><strong>Mostrar errors en prod</strong> - Problema de seguretat</li>
                        <li><strong>No registrar errors</strong> - Difícil de depurar</li>
                        <li><strong>Ignorar warnings</strong> - Poden ser indicatius de problemes</li>
                        <li><strong>Error_reporting(0)</strong> - Amaga tots els problemes</li>
                        <li><strong>Errors genèrics</strong> - Poca informació per a diagnòstic</li>
                    </ul>
                </div>
            </div>
            
            <div class="code-block mt-4">
                <div class="code-header">
                    <span>sistema_complet.php</span>
                    <div>
                        <span class="code-language">PHP</span>
                        <button class="copy-btn ms-2" onclick="copyCode('php-complete-system', this)">Copiar</button>
                    </div>
                </div>
                <pre><code class="php" id="php-complete-system">&lt;?php
// Sistema complet de gestió d'errors

class ErrorManager {
    private static $instance;
    private $environment;
    private $logFile;
    
    private function __construct($env = 'production') {
        $this->environment = $env;
        $this->configureEnvironment();
        $this->setupHandlers();
    }
    
    public static function getInstance($env = 'production') {
        if (!self::$instance) {
            self::$instance = new self($env);
        }
        return self::$instance;
    }
    
    private function configureEnvironment() {
        if ($this->environment === 'development') {
            ini_set('display_errors', 1);
            ini_set('display_startup_errors', 1);
            error_reporting(E_ALL);
            $this->logFile = '/tmp/php_dev_errors.log';
        } else {
            ini_set('display_errors', 0);
            ini_set('display_startup_errors', 0);
            error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT);
            $this->logFile = '/var/log/php_errors.log';
        }
        
        ini_set('log_errors', 1);
        ini_set('error_log', $this->logFile);
    }
    
    private function setupHandlers() {
        set_error_handler([$this, 'handleError']);
        set_exception_handler([$this, 'handleException']);
        register_shutdown_function([$this, 'handleShutdown']);
    }
    
    public function handleError($errno, $errstr, $errfile, $errline) {
        $this->logError($errno, $errstr, $errfile, $errline);
        
        if ($this->environment === 'development') {
            $this->displayDevError($errno, $errstr, $errfile, $errline);
        } else {
            $this->handleProdError($errno);
        }
        
        // Errors fatals de l'usuari
        if ($errno === E_USER_ERROR) {
            exit(1);
        }
        
        return true;
    }
    
    public function handleException($exception) {
        $this->logException($exception);
        
        if ($this->environment === 'development') {
            $this->displayDevException($exception);
        } else {
            $this->showUserFriendlyError();
        }
        
        exit(1);
    }
    
    public function handleShutdown() {
        $error = error_get_last();
        if ($error && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
            $this->logError($error['type'], $error['message'], $error['file'], $error['line']);
            $this->showUserFriendlyError();
        }
    }
    
    private function logError($errno, $errstr, $errfile, $errline) {
        $timestamp = date('Y-m-d H:i:s');
        $level = $this->getErrorLevelName($errno);
        $message = "[$timestamp] [$level] $errstr a $errfile:$errline\\n";
        error_log($message, 3, $this->logFile);
    }
    
    private function logException($exception) {
        $timestamp = date('Y-m-d H:i:s');
        $message = "[$timestamp] EXCEPTION: " . $exception->getMessage() . 
                  " a " . $exception->getFile() . ":" . $exception->getLine() . 
                  "\\nTrace:\\n" . $exception->getTraceAsString() . "\\n";
        error_log($message, 3, $this->logFile);
    }
    
    private function displayDevError($errno, $errstr, $errfile, $errline) {
        echo "&lt;div style='background:#ffe6e6;border:2px solid red;padding:15px;margin:10px;'&gt;";
        echo "&lt;strong&gt;" . $this->getErrorLevelName($errno) . "&lt;/strong&gt; [$errno] $errstr&lt;br&gt;";
        echo "Fitxer: $errfile (línia $errline)&lt;br&gt;";
        echo "&lt;/div&gt;";
    }
    
    private function displayDevException($exception) {
        echo "&lt;div style='background:#ffe6e6;border:2px solid red;padding:15px;margin:10px;'&gt;";
        echo "&lt;strong&gt;EXCEPTION&lt;/strong&gt;: " . $exception->getMessage() . "&lt;br&gt;";
        echo "Fitxer: " . $exception->getFile() . " (línia " . $exception->getLine() . ")&lt;br&gt;";
        echo "&lt;pre&gt;" . $exception->getTraceAsString() . "&lt;/pre&gt;";
        echo "&lt;/div&gt;";
    }
    
    private function handleProdError($errno) {
        if (in_array($errno, [E_ERROR, E_USER_ERROR])) {
            $this->showUserFriendlyError();
        }
    }
    
    private function showUserFriendlyError() {
        if (!headers_sent()) {
            header('HTTP/1.1 500 Internal Server Error');
            readfile(__DIR__ . '/errors/500.html');
        } else {
            echo "&lt;h1&gt;S'ha produït un error&lt;/h1&gt;";
            echo "&lt;p&gt;Disculpeu les molèsties. L'equip tècnic ha estat notificat.&lt;/p&gt;";
        }
    }
    
    private function getErrorLevelName($errno) {
        $levels = [
            E_ERROR => 'ERROR',
            E_WARNING => 'WARNING',
            E_PARSE => 'PARSE',
            E_NOTICE => 'NOTICE',
            E_USER_ERROR => 'USER_ERROR',
            E_USER_WARNING => 'USER_WARNING',
            E_USER_NOTICE => 'USER_NOTICE',
            E_DEPRECATED => 'DEPRECATED'
        ];
        return $levels[$errno] ?? 'UNKNOWN';
    }
}

// Inicialitzar el gestor d'errors
$env = getenv('APP_ENV') ?: 'production';
ErrorManager::getInstance($env);

// Ara totes les errors i excepcions es gestionaran automàticament
?&gt;</code></pre>
            </div>
        `
  }
];


