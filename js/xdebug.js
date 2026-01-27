const slides = [
  {
    title: "XDebug",
    content: `
      <div class="xdebug-image-container">
        <img src="../img/xdebug.png"
             alt="XDebug PHP"
             class="xdebug-image" />
      </div>

      <div class="generic-info">
        <h3 class="slide-title">XDebug</h3>

        <div class="generic-topics">

          <div class="generic-topic">
            <h4>🐞 Què és XDebug?</h4>
            <p>Extensió de PHP que permet depurar codi, analitzar rendiment i traçar l’execució dels scripts.</p>
          </div>

          <div class="generic-topic">
            <h4>📊 Stack traces</h4>
            <p>Mostra l’origen exacte dels errors i la seqüència de crides de funcions.</p>
          </div>

          <div class="generic-topic">
            <h4>⚙️ Integració amb IDE</h4>
            <p>Funciona amb VS Code, PhpStorm, NetBeans i altres entorns de desenvolupament.</p>
          </div>

          <div class="generic-topic">
            <h4>🚀 Millora de qualitat</h4>
            <p>Ajuda a detectar bugs, errors lògics i problemes de rendiment.</p>
          </div>

        </div>
      </div>
    `
  },
  {
    title: "1. Instal·lació de XDebug",
    content: `
      <h2 class="slide-title">1. Instal·lació de XDebug</h2>
      
      <div class="text-large">
        <p>Hi ha diverses maneres d'instal·lar XDebug:</p>
        
        <h4>a) Utilitzant PECL (recomanat)</h4>
        <div class="code-block">
          <div class="code-header">
            <span>Instal·lació amb PECL</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('install-pecl', this)">Copiar</button>
          </div>
          <pre><code class="bash" id="install-pecl"># Assegurar-te que tens PECL instal·lat
sudo apt install php-pear

# Instal·lar XDebug
sudo pecl install xdebug

# Verificar la versió instal·lada
php -m | grep xdebug</code></pre>
        </div>
        
        <h4>b) Manualment per a XAMPP/WAMP</h4>
        <div class="code-block">
          <div class="code-header">
            <span>Descàrrega manual</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('install-manual', this)">Copiar</button>
          </div>
          <pre><code class="bash" id="install-manual"># 1. Visita: https://xdebug.org/download
# 2. Descàrrega la versió compatible amb el teu PHP
# 3. Mou el fitxer .dll (Windows) o .so (Linux) a la carpeta d'extensions
# 4. Afegeix al php.ini:
zend_extension="C:\\xampp\\php\\ext\\php_xdebug.dll"
# o per a Linux:
zend_extension="/usr/lib/php/20210902/xdebug.so"</code></pre>
        </div>
        
        <h4>c) Verificar la instal·lació</h4>
        <div class="code-block">
          <div class="code-header">
            <span>Verificació</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('verify-xdebug', this)">Copiar</button>
          </div>
          <pre><code class="php" id="verify-xdebug">&lt;?php
phpinfo();
?&gt;

// O via terminal:
php -m | grep xdebug
php -i | grep xdebug</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "2. Configuració de XDebug a php.ini",
    content: `
      <h2 class="slide-title">2. Configuració de XDebug a php.ini</h2>
      
      <div class="text-large">
        <p>Configura bàsica de XDebug al fitxer <code>php.ini</code>:</p>
        
        <div class="code-block">
          <div class="code-header">
            <span>php.ini (Configuració bàsica)</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('basic-config', this)">Copiar</button>
          </div>
          <pre><code class="ini" id="basic-config">[xdebug]
zend_extension=xdebug.so  # Linux/Mac
; zend_extension=php_xdebug.dll  # Windows

; Depuració
xdebug.mode=debug
xdebug.start_with_request=yes
xdebug.client_port=9003
xdebug.client_host=127.0.0.1
xdebug.idekey=VSCODE

; Mostra errors detallats
xdebug.show_error_trace=1
xdebug.collect_params=4
xdebug.collect_return=1

; Per a anàlisi de rendiment (opcional)
; xdebug.mode=profile
; xdebug.output_dir="/tmp"</code></pre>
        </div>
        
        <div class="important-note mt-3">
          <h5>📝 Notes importants:</h5>
          <ul class="concept-list">
            <li><strong>Port 9003</strong>: XDebug 3+ usa el port 9003 per defecte (abans era 9000)</li>
            <li><strong>client_host</strong>: Generalment 127.0.0.1 per a desenvolupament local</li>
            <li><strong>mode=debug</strong>: Activa la depuració pas a pas</li>
            <li><strong>Reinicia el servidor</strong> després de canviar php.ini</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "3. Configurar VSCode per a XDebug",
    content: `
      <h2 class="slide-title">3. Configurar VSCode per a XDebug</h2>
      
      <div class="text-large">
        <h4>a) Instal·lar l'extensió PHP Debug</h4>
        <p>A VSCode, busca i instal·la l'extensió <strong>"PHP Debug"</strong> de Felix Becker.</p>
        
        <div class="text-center my-4 p-3 bg-light rounded border">
          <h5 class="text-primary">💡 Com trobar l'extensió:</h5>
          <ol class="text-start">
            <li>Obre VSCode</li>
            <li>Prem <kbd>Ctrl+Shift+X</kbd> (o clica a l'icona d'extensions)</li>
            <li>Cerca "PHP Debug"</li>
            <li>Instal·la l'extensió de <strong>Felix Becker</strong></li>
          </ol>
        </div>
        
        <h4 class="mt-4">b) Crear configuració de depuració</h4>
        <p>Prem <kbd>F5</kbd> o ves a <strong>Run → Add Configuration...</strong> i selecciona <strong>PHP</strong>.</p>
        
        <div class="code-block">
          <div class="code-header">
            <span>📁 .vscode/launch.json (Configuració bàsica)</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('launch-json-basic', this)">Copiar</button>
          </div>
          <pre><code class="json" id="launch-json-basic">{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Listen for Xdebug",
      "type": "php",
      "request": "launch",
      "port": 9003,
      "log": true,
      "pathMappings": {
        "/var/www/html": "/ruta/absoluta/al/teu/projecte"
      }
    }
  ]
}</code></pre>
        </div>
        
        <div class="code-block mt-3">
          <div class="code-header">
            <span>📁 .vscode/launch.json - CONFIGURACIÓ AVANÇADA</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('launch-json-advanced', this)">Copiar</button>
          </div>
          <pre><code class="json" id="launch-json-advanced">{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "XDebug per a XAMPP",
      "type": "php",
      "request": "launch",
      "port": 9003,
      "pathMappings": {
        "C:/xampp/htdocs/meu_projecte": "/ruta/local/meu_projecte",
        "/opt/lampp/htdocs/meu_projecte": "/ruta/local/meu_projecte",
        "/var/www/html/meu_projecte": "/ruta/local/meu_projecte"
      },
      "ignore": [
        "**/vendor/**/*.php"
      ]
    },
    {
      "name": "Executar fitxer actual",
      "type": "php",
      "request": "launch",
      "program": "\\\${file}",
      "cwd": "\\\${fileDirname}",
      "port": 9003
    }
  ]
}</code></pre>
        </div>
        
        <div class="important-note mt-3">
          <h5>⚠️ ATENCIÓ: Variables de VSCode</h5>
          <p>Les variables com <code>\\\${workspaceFolder}</code> o <code>\\\${file}</code> <strong>només funcionen dins de VSCode</strong>.</p>
          
          <h6 class="mt-3">📌 Quan facis servir aquest codi al teu VSCode:</h6>
          <ul class="concept-list">
            <li>Elimina les barres invertides: <code>\\\${file}</code> → <code>\${file}</code></li>
            <li>O millor, substitueix per la ruta absoluta real</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "4. Utilitzar XDebug a VSCode",
    content: `
      <h2 class="slide-title">4. Utilitzar XDebug a VSCode</h2>
      
      <div class="text-large">
        <h4>📋 Pas a pas per depurar:</h4>
        
        <div class="steps-container">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h5>Posar punts d'interrupció (Breakpoints)</h5>
              <p>Fes clic al marge esquerre d'una línia per posar un breakpoint (punt vermell).</p>
              <div class="code-example">
                <code>// Clica al marge esquerre per afegir ●</code>
              </div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h5>Iniciar sessió de depuració</h5>
              <p>Prem <kbd>F5</kbd> o clica el botó verd ▶︎ a la barra de depuració.</p>
              <p>Es mostrarà "Listen for Xdebug" a la barra d'estat inferior.</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h5>Executar el script PHP</h5>
              <p>Obre el navegador i visita la pàgina: <code>http://localhost/tuproyecto</code></p>
              <p>Alternativament, afegir <code>?XDEBUG_SESSION_START=VSCODE</code> a la URL.</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h5>Depurar pas a pas</h5>
              <p>Quan s'activi el breakpoint, utilitza els controls:
                <br>▶︎ Continue (F5) | Step Over (F10) | Step Into (F11) | Step Out (Shift+F11)
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "5. Barra d'eines de depuració",
    content: `
      <h2 class="slide-title">5. Barra d'eines de depuració a VSCode</h2>
      
      <div class="debug-toolbar-visual">
        <span class="debug-button">◼ Stop (⇧F5)</span>
        <span class="debug-button">🔄 Restart (Ctrl+⇧F5)</span>
        <span class="debug-button">▶ Continue (F5)</span>
        <span class="debug-button">⤴ Step Over (F10)</span>
        <span class="debug-button">⤵ Step Into (F11)</span>
        <span class="debug-button">↥ Step Out (⇧F11)</span>
      </div>
      
      <div class="text-large mt-4">
        <div class="row">
          <div class="col-md-6">
            <h4>🔧 Eines principals:</h4>
            <ul class="concept-list">
              <li><strong>Continue (F5)</strong>: Continua l'execució fins al següent breakpoint</li>
              <li><strong>Step Over (F10)</strong>: Executa la línia actual, sense entrar en funcions</li>
              <li><strong>Step Into (F11)</strong>: Entra dins la funció actual</li>
              <li><strong>Step Out (Shift+F11)</strong>: Surt de la funció actual</li>
              <li><strong>Restart (Ctrl+Shift+F5)</strong>: Reinicia la sessió de depuració</li>
              <li><strong>Stop (Shift+F5)</strong>: Atura la depuració</li>
            </ul>
          </div>
          
          <div class="col-md-6">
            <h4>👁️ Panells de depuració:</h4>
            <ul class="concept-list">
              <li><strong>VARIABLES</strong>: Mostra totes les variables locals i globals</li>
              <li><strong>WATCH</strong>: Observa valors específics d'expressions</li>
              <li><strong>CALL STACK</strong>: Mostra la pila de crides de funcions</li>
              <li><strong>BREAKPOINTS</strong>: Llista i gestiona tots els breakpoints</li>
              <li><strong>DEBUG CONSOLE</strong>: Executa codi PHP durant la depuració</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "6. Inspeccionar variables i Watch",
    content: `
      <h2 class="slide-title">6. Inspeccionar variables i Expressions Watch</h2>
      
      <div class="text-large">
        <h4>🔍 Inspeccionar variables:</h4>
        <p>Durant la depuració, al panell VARIABLES pots veure:</p>
        <ul class="concept-list">
          <li><strong>Locals</strong>: Variables locals de la funció actual</li>
          <li><strong>Globals</strong>: Variables globals ($_GET, $_POST, $_SESSION, etc.)</li>
          <li><strong>Superglobals</strong>: Variables superglobals de PHP</li>
        </ul>
        
        <h4 class="mt-4">👀 Expressions Watch:</h4>
        <p>Afegir expressions al panell WATCH per monitoritzar valors específics:</p>
        
        <div class="code-block">
          <div class="code-header">
            <span>Exemple d'expressions útils</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('watch-expressions', this)">Copiar</button>
          </div>
          <pre><code class="php" id="watch-expressions">// Expressions per a afegir al Watch:
count($usuarios)                     // Mida d'un array
$producto->getPrecio()               // Mètode d'un objecte
json_encode($_SESSION)               // Contingut de sessió
$usuario['nombre'] . ' ' . $usuario['apellido']  // Concatenació
isset($variable)                     // Comprovar si existeix
gettype($dato)                       // Tipus de dada</code></pre>
        </div>
        
        <div class="important-note mt-3">
          <h5>💡 Consell:</h5>
          <p>Fes clic amb el botó dret sobre una variable a l'editor i selecciona <strong>"Add to Watch"</strong> per afegir-la ràpidament al panell WATCH.</p>
        </div>
      </div>
    `
  },
  {
    title: "7. Breakpoints condicionals",
    content: `
      <h2 class="slide-title">7. Breakpoints condicionals i de log</h2>
      
      <div class="text-large">
        <h4>⚡ Breakpoints condicionals:</h4>
        <p>Es paren només quan es compleix una condició específica.</p>
        
        <div class="code-block">
          <div class="code-header">
            <span>Exemple pràctic</span>
            
          </div>
          <pre><code class="php">&lt;?php
// Suposem aquest bucle
foreach ($usuarios as $index => $usuario) {
    // Breakpoint condicional: només s'atura quan $index == 5
    if ($usuario['id'] == 123) {
        // O quan l'usuari té ID 123
    }
    // ... codi ...
}
?&gt;</code></pre>
        </div>
        
        <h4 class="mt-4">📝 Com configurar-los:</h4>
        <ol class="concept-list">
          <li>Posar un breakpoint normal</li>
          <li>Clic dret sobre el punt vermell</li>
          <li>Seleccionar "Edit Breakpoint..."</li>
          <li>Afegir condició: <code>$index == 5</code> o <code>$usuario['activo'] == false</code></li>
          <li>O seleccionar "Log Message" per registrar sense aturar</li>
        </ol>
        
        <h4 class="mt-4">🪵 Breakpoints de log (Logpoints):</h4>
        <p>No paren l'execució, només registren un missatge a la consola.</p>
        <p><strong>Missatge de log:</strong> <code>Usuari {usuarios[i].nombre} processat a les {new Date().toLocaleTimeString()}</code></p>
      </div>
    `
  },
  {
    title: "8. Debug Console i expressions",
    content: `
      <h2 class="slide-title">8. Debug Console i avaluar expressions</h2>
      
      <div class="text-large">
        <h4>💻 Debug Console:</h4>
        <p>Durant la depuració, pots executar codi PHP a la DEBUG CONSOLE:</p>
        
        <div class="code-block">
          <div class="code-header">
            <span>Comandes útils a la consola</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('debug-console', this)">Copiar</button>
          </div>
          <pre><code class="php" id="debug-console">// Inspeccionar variables
echo $variable;
print_r($array);
var_dump($object);

// Modificar valors durant l'execució
$variable = 'nou valor';
$array[] = 'nou element';

// Cridar funcions
$result = calcularTotal($preu, $iva);
$usuari = buscarUsuariPerId(123);

// Provar expressions complexes
isset($_SESSION['usuari']) ? 'Sí' : 'No';
count(array_filter($llista, fn($x) => $x['actiu']))</code></pre>
        </div>
        
        <h4 class="mt-4">🎯 Avaluar expressions amb hover:</h4>
        <p>Passa el ratolí sobre una variable durant la depuració per veure el seu valor actual.</p>
        
        <div class="text-center my-4 p-3 bg-light rounded border">
          <h5>💡 Com provar-ho:</h5>
          <p>1. Posar un breakpoint<br>2. Executar depuració<br>3. Passar el ratolí sobre una variable</p>
        </div>
        
        <div class="important-note mt-3">
          <h5>⚠️ Limitacions:</h5>
          <p>No pots modificar certes estructures de control (if, for, while) ni afegir noves funcions durant la depuració.</p>
        </div>
      </div>
    `
  },
  {
    title: "9. Depurar JavaScript i PHP junts",
    content: `
      <h2 class="slide-title">9. Depurar JavaScript i PHP simultàniament</h2>
      
      <div class="text-large">
        <p>Quan tens aplicacions amb frontend (JS) i backend (PHP), pots depurar ambdues parts:</p>
        
        <h4>a) Configuració composta:</h4>
        <div class="code-block">
          <div class="code-header">
            <span>.vscode/launch.json - Configuració composta</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('composite-debug', this)">Copiar</button>
          </div>
          <pre><code class="json" id="composite-debug">{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Depurar PHP",
      "type": "php",
      "request": "launch",
      "port": 9003,
      "pathMappings": {
        "/var/www/html/mi_proyecto": "/ruta/absoluta/al/projecte"
      }
    },
    {
      "name": "Depurar Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost/mi_proyecto",
      "webRoot": "/ruta/absoluta/al/projecte/public"
    }
  ],
  "compounds": [
    {
      "name": "Depurar frontend + backend",
      "configurations": ["Depurar PHP", "Depurar Chrome"]
    }
  ]
}</code></pre>
        </div>
        
        <div class="important-note mt-3">
          <h5>📝 Com obtenir la ruta absoluta del teu projecte:</h5>
          
          <h6>En Windows (CMD):</h6>
          <div class="code-block">
            <pre><code class="cmd">cd C:\\Usuaris\\TuNom\\projectes\\mi_proyecto
echo %cd%</code></pre>
          </div>
          
          <h6>En Linux/Mac (Terminal):</h6>
          <div class="code-block">
            <pre><code class="bash">cd /home/tunom/projectes/mi_proyecto
pwd</code></pre>
          </div>
        </div>
        
        <h4 class="mt-4">b) Depuració per AJAX/API:</h4>
        <p>Per a depurar sol·licituds AJAX:</p>
        <ul class="concept-list">
          <li>Activa XDebug per a totes les peticions (<code>xdebug.start_with_request=yes</code>)</li>
          <li>O activa manualment afegint aquest paràmetre a la URL:
            <div class="code-block mt-2">
              <pre><code class="javascript">// URL per activar XDebug manualment
http://localhost/mi_proyecto?XDEBUG_SESSION_START=VSCODE</code></pre>
            </div>
          </li>
          <li>Instal·la l'extensió de navegador <strong>"XDebug Helper"</strong></li>
        </ul>
      </div>
    `
  },
  {
    title: "10. Troubleshooting i problemes comuns",
    content: `
      <h2 class="slide-title">10. Troubleshooting i problemes comuns</h2>
      
      <div class="text-large">
        <div class="problem-solution">
          <h4>❌ Problema: XDebug no es connecta</h4>
          <ul class="concept-list">
            <li><strong>Comprova el port</strong>: XDebug 3+ usa 9003, assegura't que VSCode escolta al mateix port</li>
            <li><strong>Verifica php.ini</strong>: <code>php --ini</code> per saber quin fitxer s'està carregant</li>
            <li><strong>Firewall</strong>: Permet el port 9003 al firewall del sistema</li>
            <li><strong>Logs de XDebug</strong>: Afegeix al php.ini:
              <div class="code-block mt-2">
                <pre><code class="ini">xdebug.log="/tmp/xdebug.log"
xdebug.log_level=10</code></pre>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="problem-solution mt-4">
          <h4>❌ Problema: Breakpoints no s'activen</h4>
          <ul class="concept-list">
            <li><strong>Path mappings incorrectes</strong>: Verifica <code>pathMappings</code> a launch.json</li>
            <li><strong>Versió de XDebug</strong>: Assegura't d'utilitzar XDebug 3+ amb configuració correcta</li>
            <li><strong>Reinicia tots els serveis</strong>: Apache, VSCode i navegador</li>
            <li><strong>Breakpoints condicionals</strong>: Assegura't que la condició es compleix</li>
          </ul>
        </div>
        
        <div class="problem-solution mt-4">
          <h4>❌ Problema: Depuració lenta</h4>
          <ul class="concept-list">
            <li><strong>Desactiva extensions no necessàries</strong> a VSCode</li>
            <li><strong>Limita breakpoints</strong>: Massa breakpoints poden ralentitzar</li>
            <li><strong>Usa XDebug Step Debugger</strong> en comptes de Profile per depuració</li>
            <li><strong>Considera opcache</strong>: Per a millor rendiment general</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "11. Exemples pràctics",
    content: `
      <h2 class="slide-title">11. Exemples pràctics de depuració</h2>
      
      <div class="text-large">
        <h4>Exemple 1: Depurar formulari de login</h4>
        <div class="code-block">
          <div class="code-header">
            <span>login.php</span>
          
            <button class="copy-btn ms-2" onclick="copyCode('login-example', this)">Copiar</button>
          </div>
          <pre><code class="php" id="login-example">&lt;?php
session_start();

// BREAKPOINT 1: Verificar dades d'entrada
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password = $_POST['password']; // BREAKPOINT aquí
    
    // BREAKPOINT 2: Abans de la consulta a BD
    $stmt = $pdo->prepare("SELECT * FROM usuaris WHERE email = :email");
    $stmt->execute([':email' => $email]);
    $usuari = $stmt->fetch();
    
    // BREAKPOINT 3: Verificar contrasenya
    if ($usuari && password_verify($password, $usuari['password'])) {
        $_SESSION['usuari_id'] = $usuari['id'];
        // BREAKPOINT 4: Després de login correcte
        header('Location: dashboard.php');
        exit;
    } else {
        $error = "Credencials incorrectes"; // BREAKPOINT 5: Error
    }
}
?&gt;</code></pre>
        </div>
        
        <h4 class="mt-4">Exemple 2: Depurar API REST</h4>
        <div class="code-block">
          <div class="code-header">
            <span>api.php</span>
            <button class="copy-btn ms-2" onclick="copyCode('login-example', this)">Copiar</button>
          </div>
          <pre><code class="php">&lt;?php
header('Content-Type: application/json');

try {
    // BREAKPOINT: Abans de processar la sol·licitud
    $data = json_decode(file_get_contents('php://input'), true);
    
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            // Depurar consulta GET
            $id = $_GET['id'] ?? null;
            $resultat = obtenirDades($id);
            break;
            
        case 'POST':
            // Depurar validació de dades
            if (!validarDades($data)) {
                throw new Exception('Dades invàlides');
            }
            $resultat = crearRecurs($data);
            break;
    }
    
    echo json_encode(['success' => true, 'data' => $resultat]);
    
} catch (Exception $e) {
    // BREAKPOINT: En cas d'error
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
}</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "12. Recursos i referències",
    content: `
      <h2 class="slide-title">12. Recursos i referències</h2>
      
      <div class="text-large">
        <div class="resources-grid">
          <div class="resource-card">
            <h4>🌐 Documentació oficial</h4>
            <ul class="concept-list">
              <li><a href="https://xdebug.org/docs/" target="_blank">XDebug Documentation</a></li>
              <li><a href="https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug" target="_blank">PHP Debug per a VSCode</a></li>
              <li><a href="https://code.visualstudio.com/docs/editor/debugging" target="_blank">VSCode Debugging Guide</a></li>
            </ul>
          </div>
          
          <div class="resource-card">
            <h4>🎥 Tutorials en vídeo</h4>
            <ul class="concept-list">
              <li><a href="https://www.youtube.com/watch?v=uQ6-mJt6-Zc" target="_blank">XDebug amb VSCode (anglès)</a></li>
              <li><a href="https://www.youtube.com/watch?v=9x5YrL_8Zog" target="_blank">Depuració PHP professional</a></li>
              <li><a href="https://www.youtube.com/watch?v=8r2Y1yFgTfk" target="_blank">XDebug 3 Tutorial</a></li>
            </ul>
          </div>
          
          <div class="resource-card">
            <h4>🔧 Eines complementàries</h4>
            <ul class="concept-list">
              <li><strong>DBGp Proxy</strong>: Per a depuració remota</li>
              <li><strong>XDebug Helper</strong>: Extensió de navegador</li>
              <li><strong>PHP Console</strong>: Depuració sense IDE</li>
              <li><strong>Clockwork</strong>: Debug toolbar per a Laravel</li>
            </ul>
          </div>
    `
  }
];

// Assegurar-nos que el totalSlides està definit al HTML
document.getElementById('totalSlides').textContent = slides.length;