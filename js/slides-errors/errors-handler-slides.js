// Diapositives sobre gestors d'errors
const errorsHandlerSlides = [
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
      
      <h4 class="mt-4">📋 Paràmetres de la funció d'error:</h4>
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
        <h5>📝 Notes importants:</h5>
        <ul class="concept-list">
        <li> El gestor d'errors personalitzat NO pot gestionar errors fatals (E_ERROR, E_PARSE, etc.)</p>
        <li> Si la funció retorna FALSE, l'error es passarà al gestor d'errors per defecte de PHP</p>
        <li> <code>restore_error_handler()</code> torna al gestor d'errors anterior</p>
        </ul>
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
    title: "4.1 Exemple Sistema de Log",
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
  }
];