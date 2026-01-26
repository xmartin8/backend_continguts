// Diapositives sobre configuració per entorns
const errorsConfigSlides = [
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
  }
];