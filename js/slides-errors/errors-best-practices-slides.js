// Diapositives sobre millors pràctiques
const errorsBestPracticesSlides = [
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