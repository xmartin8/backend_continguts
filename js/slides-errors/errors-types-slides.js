// Diapositives sobre tipus i nivells d'error
const errorsTypesSlides = [
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
    title: "2.1. Configuració de Nivells",
    content: `
    <h2 class="slide-title">2.1 Configuració de Nivells</h2>
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
  }
];