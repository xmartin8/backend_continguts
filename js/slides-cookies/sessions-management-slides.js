const sessionsManagementSlides = [
  {
    title: "Sessions PHP - Com funcionen",
    content: `
      <h2 class="slide-title">Sessions PHP - Com funcionen</h2>
      <div class="text-large">
        <h4>⚙️ Com es crea una sessió a PHP?</h4>
        <ol class="concept-list">
          <li>PHP crea un <strong>ID únic per a cada sessió</strong> de 32 caràcters en hexadecimal<br>
          <small>Exemple: 3c7foj34c3jj973hjkop2fc937e34a3</small></li>
          <li>La cookie <code>PHPSESSID</code> s'envia al client automàticament i així aquest queda associat a la sessió</li>
          <li>Al servidor es crea un fitxer automàticament a la carpeta corresponent i rep el prefix <code>sess_</code><br>
          <small>Exemple: sess_3c7foj34c3jj973hjkop2fc937e34a3</small></li>
        </ol>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>📁 Ubicació dels fitxers de sessió</h4>
              <p>Per defecte a: <code>session.save_path</code><br>
              Normalment: <code>/tmp</code> (Linux) o <code>C:\\Windows\\Temp</code> (Windows)</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>⚡ Inici de sessió</h4>
              <p>Sempre s'ha de cridar <code>session_start()</code> abans de qualsevol sortida al navegador.</p>
            </div>
          </div>
        </div>
        
        <div class="important-note mt-3">
          <strong>🔍 Exemples a revisar:</strong><br>
          • <code>..\\exemple_cookies\\cookies\\index.php</code><br>
          • <code>..\\exemple_cookies\\cookies\\text.php</code><br>
          • <code>..\\exemple_sessions\\</code>
        </div>
      </div>
    `
  },
  {
    title: "Gestió de Sessions amb PHP",
    content: `
      <h2 class="slide-title">Gestió de Sessions amb PHP</h2>
      <div class="text-large">
        <h4>Iniciar sessió i emmagatzemar dades:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('session-start', this)">Copiar</button>
          </div>
          <pre><code id="session-start">&lt;?php
session_start();

// Emmagatzemem dades en una sessió
$_SESSION['usuari'] = "nom_usuari";
$_SESSION['email'] = "usuari@sapalomera.cat";
$_SESSION['ultima_connexio'] = time();

// Podem emmagatzemar arrays també
$_SESSION['preferencies'] = [
    'idioma' => 'ca',
    'tema' => 'fosc',
    'notificacions' => true
];</code></pre>
        </div>
        
        <h4>Accedir a les dades de la sessió:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('session-access', this)">Copiar</button>
          </div>
          <pre><code id="session-access">&lt;?php
session_start();

// Accedir a les dades de la sessió
if (isset($_SESSION['usuari'])) {
    echo "Usuari: " . $_SESSION['usuari'] . "&lt;br&gt;";
    echo "Correu: " . $_SESSION['email'] . "&lt;br&gt;";
    echo "Última connexió: " . 
         date('d/m/Y H:i', $_SESSION['ultima_connexio']) . "&lt;br&gt;";
    
    // Accedir a valors d'array
    echo "Idioma preferit: " . $_SESSION['preferencies']['idioma'];
} else {
    echo "Sessió no iniciada.";
}</code></pre>
        </div>
        
        <h4>Destruir la sessió:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('session-destroy', this)">Copiar</button>
          </div>
          <pre><code id="session-destroy">&lt;?php
session_start();

// Netejar dades específiques de la sessió
unset($_SESSION['usuari']);
unset($_SESSION['email']);

// Netejar TOTES les dades de la sessió
$_SESSION = array();

// Destruir la cookie de sessió
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params["path"],
        $params["domain"],
        $params["secure"],
        $params["httponly"]
    );
}

// Finalment, destruir la sessió
session_destroy();

echo "Sessió destruïda correctament.";</code></pre>
        </div>
      </div>
    `
  }
];