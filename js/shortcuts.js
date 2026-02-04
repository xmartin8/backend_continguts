const slides = [

  {
    title: "1. Navegació bàsica",
    content: `
      <h2 class="slide-title">1. Navegació bàsica</h2>
      
      <div class="text-large">
        <p>Shortcuts essencials per moure't pel codi:</p>
        
        <div class="shortcuts-table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Acció</th>
                <th>Windows</th>
                <th>Linux</th>
                <th>Descripció</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Obrir command palette</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd></td>
                <td>Accedeix a totes les comandes</td>
              </tr>
              <tr>
                <td>Cercar fitxers</td>
                <td><kbd>Ctrl</kbd> + <kbd>P</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>P</kbd></td>
                <td>Busca i obre fitxers ràpidament</td>
              </tr>
              <tr>
                <td>Anar a la línia</td>
                <td><kbd>Ctrl</kbd> + <kbd>G</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>G</kbd></td>
                <td>Salta a una línia específica</td>
              </tr>
              <tr>
                <td>Navegar per símbols</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd></td>
                <td>Cerca classes, mètodes i funcions</td>
              </tr>
              <tr>
                <td>Alternar fitxer</td>
                <td><kbd>Ctrl</kbd> + <kbd>Tab</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>Tab</kbd></td>
                <td>Canvia entre fitxers oberts</td>
              </tr>
              <tr>
                <td>Obrir terminal</td>
                <td><kbd>Ctrl</kbd> + <kbd>\`</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>\`</kbd></td>
                <td>Obre/tanca la terminal integrada</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="important-note mt-3">
          <h5>💡 Consell:</h5>
          <p>Per personalitzar els shortcuts, ves a <strong>File → Preferences → Keyboard Shortcuts</strong> o prem <kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>
        </div>
      </div>
    `
  },
  {
    title: "2. Edició de codi PHP",
    content: `
      <h2 class="slide-title">2. Edició de codi PHP</h2>
      
      <div class="text-large">
        <p>Shortcuts per editar codi PHP eficientment:</p>
        
        <div class="shortcuts-table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Acció</th>
                <th>Windows</th>
                <th>Linux</th>
                <th>Ús per PHP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Duplicar línia</td>
                <td><kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd></td>
                <td><kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd></td>
                <td>Duplica variables, arrays, funcions</td>
              </tr>
              <tr>
                <td>Moure línia amunt/avall</td>
                <td><kbd>Alt</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd></td>
                <td><kbd>Alt</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd></td>
                <td>Reorganitza lògica d'ifs, switches</td>
              </tr>
              <tr>
                <td>Comentar/descomentar</td>
                <td><kbd>Ctrl</kbd> + <kbd>/</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>/</kbd></td>
                <td>Comenta bloc seleccionat o línia</td>
              </tr>
              <tr>
                <td>Comentari de bloc</td>
                <td><kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd></td>
                <td><kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd></td>
                <td>Per blocs grans de codi PHP</td>
              </tr>
              <tr>
                <td>Format del document</td>
                <td><kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd></td>
                <td><kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd></td>
                <td>Formata el codi PHP segons PSR</td>
              </tr>
              <tr>
                <td>Selecció múltiple</td>
                <td><kbd>Ctrl</kbd> + <kbd>D</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>D</kbd></td>
                <td>Selecciona múltiples instàncies iguals</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Exemple pràctic:</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('php-editing-example', this)">Copiar</button>
          </div>
          <pre><code class="php" id="php-editing-example">&lt;?php
// Amb Ctrl+D pots canviar múltiples variables a la vegada
$nom_usuari = "Joan";
$cognom_usuari = "Pérez";
$edat_usuari = 25;

// Amb Shift+Alt+F formats el codi automàticament
function calcularTotal($preu, $iva) {
    return $preu * (1 + $iva/100);
}

// Amb Alt+↑/↓ mous condicions
if ($edat &lt; 18) {
    echo "Menor d'edat";
} elseif ($edat >= 18 && $edat &lt; 65) {
    echo "Adult";
} else {
    echo "Jubilat";
}
?&gt;</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "3. Refactorització PHP",
    content: `
      <h2 class="slide-title">3. Refactorització PHP</h2>
      
      <div class="text-large">
        <p>Shortcuts específics per refactoritzar codi PHP:</p>
        
        <div class="shortcuts-table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Acció</th>
                <th>Windows</th>
                <th>Linux</th>
                <th>Ús en PHP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Renombrar símbol</td>
                <td><kbd>F2</kbd></td>
                <td><kbd>F2</kbd></td>
                <td>Canvia nom de variables, classes, mètodes</td>
              </tr>
              <tr>
                <td>Extreure variable</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> <br><small>(amb PHP Intelephense)</small></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd></td>
                <td>Crea variable d'una expressió seleccionada</td>
              </tr>
              <tr>
                <td>Extreure mètode</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd></td>
                <td>Converteix codi seleccionat en nou mètode</td>
              </tr>
              <tr>
                <td>Veure definició</td>
                <td><kbd>F12</kbd></td>
                <td><kbd>F12</kbd></td>
                <td>Salta a la definició de classe o funció</td>
              </tr>
              <tr>
                <td>Veure referències</td>
                <td><kbd>Shift</kbd> + <kbd>F12</kbd></td>
                <td><kbd>Shift</kbd> + <kbd>F12</kbd></td>
                <td>Mostra on s'utilitza una classe o funció</td>
              </tr>
              <tr>
                <td>Quick fix</td>
                <td><kbd>Ctrl</kbd> + <kbd>.</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>.</kbd></td>
                <td>Solucions ràpides per a errors PHP</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Exemple de refactorització:</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('php-refactor-example', this)">Copiar</button>
          </div>
          <pre><code class="php" id="php-refactor-example">&lt;?php
// 1. Selecciona aquesta expressió i prem Ctrl+Shift+R
$preu_final = $preu_base * 1.21;

// Es converteix en:
$iva = 1.21;
$preu_final = $preu_base * $iva;

// 2. Amb F2 sobre $preu_base, canvia el nom a $preuProducte
$preu_final = $preuProducte * $iva;

// 3. Amb Ctrl+Shift+M, extreu el càlcul a un mètode
$preu_final = calcularPreuFinal($preuProducte, $iva);

function calcularPreuFinal($preu, $iva) {
    return $preu * $iva;
}
?&gt;</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "4. Navegació avançada",
    content: `
      <h2 class="slide-title">4. Navegació avançada per fitxers PHP</h2>
      
      <div class="text-large">
        <p>Shortcuts per navegar eficaçment en projectes PHP:</p>
        
        <div class="shortcuts-table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Acció</th>
                <th>Windows</th>
                <th>Linux</th>
                <th>Descripció</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Obrir fitxer lateral</td>
                <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>O</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>O</kbd></td>
                <td>Obre fitxer en nova finestra lateral</td>
              </tr>
              <tr>
                <td>Obrir recent</td>
                <td><kbd>Ctrl</kbd> + <kbd>R</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>R</kbd></td>
                <td>Mostra fitxers oberts recentment</td>
              </tr>
              <tr>
                <td>Anar a definició</td>
                <td><kbd>Ctrl</kbd> + <kbd>clic</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>clic</kbd></td>
                <td>Clica mentre mantens Ctrl per anar a definició</td>
              </tr>
              <tr>
                <td>Veure implementacions</td>
                <td><kbd>Ctrl</kbd> + <kbd>F12</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>F12</kbd></td>
                <td>Per a interfícies i classes abstractes</td>
              </tr>
              <tr>
                <td>Alternar explorador</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd></td>
                <td>Canvia al panell d'explorador de fitxers</td>
              </tr>
              <tr>
                <td>Cerca global</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd></td>
                <td>Cerca en tots els fitxers del projecte</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="important-note mt-3">
          <h5>🔍 Cerca avançada per a PHP:</h5>
          <ul class="concept-list">
            <li><strong>Usa expressions regulars</strong> en la cerca global per patrons PHP</li>
            <li><strong>Filtra per tipus</strong>: <code>*.php</code> per cercar només en fitxers PHP</li>
            <li><strong>Exclou carpetes</strong>: <code>**/vendor/**</code> per excloure dependències</li>
          </ul>
          
          <div class="code-block mt-2">
            <pre><code class="txt"># Exemple de cerca per a trobar totes les classes:
class\\s+(\\w+)\\s*{

# Trobar mètodes públics:
public\\s+function\\s+(\\w+)</code></pre>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "5. Debugging shortcuts",
    content: `
      <h2 class="slide-title">5. Debugging i testing de PHP</h2>
      
      <div class="text-large">
        <p>Shortcuts per a depurar i provar codi PHP:</p>
        
        <div class="shortcuts-table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Acció</th>
                <th>Windows</th>
                <th>Linux</th>
                <th>Ús en debugging</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Iniciar debugging</td>
                <td><kbd>F5</kbd></td>
                <td><kbd>F5</kbd></td>
                <td>Inicia sessió de depuració amb XDebug</td>
              </tr>
              <tr>
                <td>Pausar/continuar</td>
                <td><kbd>F5</kbd></td>
                <td><kbd>F5</kbd></td>
                <td>Continua execució des del breakpoint</td>
              </tr>
              <tr>
                <td>Step Over</td>
                <td><kbd>F10</kbd></td>
                <td><kbd>F10</kbd></td>
                <td>Passa a la següent línia sense entrar en funcions</td>
              </tr>
              <tr>
                <td>Step Into</td>
                <td><kbd>F11</kbd></td>
                <td><kbd>F11</kbd></td>
                <td>Entra dins de la funció actual</td>
              </tr>
              <tr>
                <td>Step Out</td>
                <td><kbd>Shift</kbd> + <kbd>F11</kbd></td>
                <td><kbd>Shift</kbd> + <kbd>F11</kbd></td>
                <td>Surt de la funció actual</td>
              </tr>
              <tr>
                <td>Alternar breakpoint</td>
                <td><kbd>F9</kbd></td>
                <td><kbd>F9</kbd></td>
                <td>Afegeix/elimina breakpoint a la línia actual</td>
              </tr>
              <tr>
                <td>Mostrar consola debug</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd></td>
                <td>Mostra la consola de depuració</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="debug-toolbar-visual mt-3">
          <span class="debug-button">▶ Iniciar Debug (F5)</span>
          <span class="debug-button">⏸️ Pausar/Continuar (F5)</span>
          <span class="debug-button">⤴ Step Over (F10)</span>
          <span class="debug-button">⤵ Step Into (F11)</span>
          <span class="debug-button">↥ Step Out (⇧F11)</span>
          <span class="debug-button">● Breakpoint (F9)</span>
        </div>
        
        <div class="important-note mt-3">
          <h5>Consells per debugging PHP:</h5>
          <ul class="concept-list">
            <li><strong>Usa watch expressions</strong> per monitoritzar variables específiques</li>
            <li><strong>Conditional breakpoints</strong>: Clic dret → Edit Breakpoint per afegir condicions</li>
            <li><strong>Logpoints</strong>: Per registrar sense aturar l'execució</li>
            <li><strong>Debug console</strong>: Executa codi PHP durant la depuració</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "6. Gestió de fitxers i projectes",
    content: `
      <h2 class="slide-title">6. Gestió de fitxers i projectes PHP</h2>
      
      <div class="text-large">
        <p>Shortcuts per gestionar fitxers i projectes PHP:</p>
        
        <div class="shortcuts-table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Acció</th>
                <th>Windows</th>
                <th>Linux</th>
                <th>Descripció</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nou fitxer</td>
                <td><kbd>Ctrl</kbd> + <kbd>N</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>N</kbd></td>
                <td>Crea un nou fitxer (php, html, css...)</td>
              </tr>
              <tr>
                <td>Obrir carpeta/projecte</td>
                <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>O</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>O</kbd></td>
                <td>Obre una carpeta com a projecte</td>
              </tr>
              <tr>
                <td>Tancar editor</td>
                <td><kbd>Ctrl</kbd> + <kbd>W</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>W</kbd></td>
                <td>Tanca l'editor actual</td>
              </tr>
              <tr>
                <td>Guardar tot</td>
                <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>S</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>S</kbd></td>
                <td>Guarda tots els fitxers oberts</td>
              </tr>
              <tr>
                <td>Obrir configuració</td>
                <td><kbd>Ctrl</kbd> + <kbd>,</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>,</kbd></td>
                <td>Obre la configuració de VSCode</td>
              </tr>
              <tr>
                <td>Obrir configuració JSON</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> → <code>settings.json</code></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> → <code>settings.json</code></td>
                <td>Edita la configuració en format JSON</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="important-note mt-3">
          <h5>📁 Estructura de projecte PHP típica:</h5>
          <div class="code-block">
            <pre><code class="txt">meu-projecte-php/
├── app/
│   ├── Controllers/
│   ├── Models/
│   ├── Views/
│   └── Core/
├── public/
│   ├── index.php
│   ├── css/
│   └── js/
├── vendor/
├── tests/
├── .vscode/          # Configuració específica del projecte
├── composer.json
└── README.md</code></pre>
          </div>
          
          <h6 class="mt-3">⚙️ Configuració recomanada per a PHP (.vscode/settings.json):</h6>
          <div class="code-block">
            <div class="code-header">
              <span>.vscode/settings.json</span>
              
              <button class="copy-btn ms-2" onclick="copyCode('php-settings-json', this)">Copiar</button>
            </div>
            <pre><code class="json" id="php-settings-json">{
  "[php]": {
    "editor.defaultFormatter": "bmewburn.vscode-intelephense-client",
    "editor.formatOnSave": true,
    "editor.wordWrap": "off"
  },
  "intelephense.files.maxSize": 5000000,
  "php.suggest.basic": false,
  "php.validate.enable": true,
  "php.validate.executablePath": "ruta_fixter_php_executable",
  "files.exclude": {
    "**/vendor": true,
    "**/.git": true,
    "**/node_modules": true
  }
}</code></pre>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "7. Terminal i consola",
    content: `
      <h2 class="slide-title">7. Terminal i consola per a PHP</h2>
      
      <div class="text-large">
        <p>Shortcuts per treballar amb la terminal en projectes PHP:</p>
        
        <div class="shortcuts-table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Acció</th>
                <th>Windows</th>
                <th>Linux</th>
                <th>Ús per PHP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Obrir terminal</td>
                <td><kbd>Ctrl</kbd> + <kbd>\`</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>\`</kbd></td>
                <td>Executar PHP, composer, artisan...</td>
              </tr>
              <tr>
                <td>Nova terminal</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\`</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\`</kbd></td>
                <td>Multiples terminals per a diferents tasques</td>
              </tr>
              <tr>
                <td>Dividir terminal</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>5</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>5</kbd></td>
                <td>Divideix la terminal en panells</td>
              </tr>
              <tr>
                <td>Borrar terminal</td>
                <td><kbd>Ctrl</kbd> + <kbd>K</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>K</kbd></td>
                <td>Netega la terminal actual</td>
              </tr>
              <tr>
                <td>Selecció terminal</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd></td>
                <td>Navega entre terminals</td>
              </tr>
              <tr>
                <td>Executar tasca</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd></td>
                <td>Executa la tasca definida a tasks.json</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Comandes útils per a terminal PHP:</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('php-terminal-commands', this)">Copiar</button>
          </div>
          <pre><code class="bash" id="php-terminal-commands"># 1. Executar script PHP
php -f script.php

# 2. Comprovar errors de sintaxi
php -l archivo.php

# 3. Executar servidor de desenvolupament
php -S localhost:8000 -t public/

# 4. Gestió de dependències amb Composer
composer install
composer update
composer dump-autoload

# 5. Executar tests PHPUnit
vendor/bin/phpunit tests/

# 6. Veure informació de PHP
php -i | grep xdebug
php --version

# 7. Executar PHP en mode interactiu
php -a</code></pre>
        </div>
        
        <div class="important-note mt-3">
          <h5>⚙️ Configurar terminal per projecte:</h5>
          <div class="code-block">
            <div class="code-header">
              <span>.vscode/tasks.json - Tasques personalitzades</span>
              
              <button class="copy-btn ms-2" onclick="copyCode('php-tasks-json', this)">Copiar</button>
            </div>
            <pre><code class="json" id="php-tasks-json">{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Iniciar servidor PHP",
      "type": "shell",
      "command": "php -S localhost:8000 -t public/",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    },
    {
      "label": "Executar tests",
      "type": "shell",
      "command": "vendor/bin/phpunit",
      "group": "test"
    },
    {
      "label": "Composer install",
      "type": "shell",
      "command": "composer install",
      "group": "build"
    }
  ]
}</code></pre>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "8. Extensions PHP importants",
    content: `
      <h2 class="slide-title">8. Extensions VSCode per a PHP</h2>
      
      <div class="text-large">
        <h4>🔌 Extensions essencials per a PHP:</h4>
        
        <div class="extensions-grid">
          <div class="extension-card">
            <h5><u>PHP Intelephense</u></h5>
            <p>Intelisense, navegació i refactorització per a PHP.</p>
            <p><strong>Shortcuts principals:</strong></p>
            <ul>
              <li><kbd>Ctrl</kbd> + <kbd>Space</kbd>: Auto-completat</li>
              <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>: Extreure mètode</li>
              <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>: Extreure variable</li>
            </ul>
          </div>
          
          <div class="extension-card">
            <h5><u>PHP Debug</u></h5>
            <p>Depuració amb XDebug per a PHP.</p>
            <p><strong>Shortcuts:</strong></p>
            <ul>
              <li><kbd>F5</kbd>: Iniciar debug</li>
              <li><kbd>F10</kbd>: Step Over</li>
              <li><kbd>F11</kbd>: Step Into</li>
              <li><kbd>Shift</kbd> + <kbd>F11</kbd>: Step Out</li>
            </ul>
          </div>
          
          <div class="extension-card">
            <h5><u>PHP DocBlocker</u></h5>
            <p>Genera PHPDoc automàticament.</p>
            <p><strong>Shortcut:</strong></p>
            <ul>
              <li><kbd>/**</kbd> + <kbd>Enter</kbd> sobre funció/classe</li>
            </ul>
          </div>
        </div>
        
        <h4 class="mt-4">⚙️ Configuració recomanada per a extensions PHP:</h4>
        <div class="code-block">
          <div class="code-header">
            <span>settings.json (extensions PHP)</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('php-extensions-config', this)">Copiar</button>
          </div>
          <pre><code class="json" id="php-extensions-config">{
  // PHP Intelephense
  "intelephense.environment.phpVersion": "8.1",
  "intelephense.files.maxSize": 5000000,
  "intelephense.completion.insertUseDeclaration": true,
  "intelephense.diagnostics.undefinedTypes": true,
  
  // PHP Debug
  "php.debug.executablePath": "ruta_fixter_php_executable",
  "php.validate.executablePath": "ruta_fixter_php_executable",
  
  // Formateig
  "[php]": {
    "editor.defaultFormatter": "bmewburn.vscode-intelephense-client",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    }
  },
  
  // PHP DocBlocker
  "php-docblocker.gap": true,
  "php-docblocker.extra": [
    "@throws",
    "@return"
  ]
}</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "9. Plantilles i snippets PHP",
    content: `
      <h2 class="slide-title">9. Plantilles i snippets per a PHP</h2>
      
      <div class="text-large">
        <p>Crear i utilitzar snippets per accelerar el desenvolupament PHP:</p>
        
        <h4>a) Snippets integrats de VSCode:</h4>
        <ul class="concept-list">
          <li><code>phpclass</code> + <kbd>Tab</kbd>: Crea una classe PHP</li>
          <li><code>phpinterface</code> + <kbd>Tab</kbd>: Crea una interfície</li>
          <li><code>phptrait</code> + <kbd>Tab</kbd>: Crea un trait</li>
          <li><code>phpgetset</code> + <kbd>Tab</kbd>: Genera getters i setters</li>
          <li><code>phpforeach</code> + <kbd>Tab</kbd>: Bucle foreach</li>
          <li><code>phpif</code> + <kbd>Tab</kbd>: Estructura if</li>
        </ul>
        
        <h4 class="mt-4">b) Crear snippets personalitzats:</h4>
        <div class="code-block">
          <div class="code-header">
            <span>PHP snippets.json</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('php-snippets-json', this)">Copiar</button>
          </div>
          <pre><code class="json" id="php-snippets-json">{
  "Class with constructor": {
    "prefix": "phpclasscon",
    "body": [
      "&lt;?php",
      "",
      "class \${1:ClassName}",
      "{",
      "    private \${2:property};",
      "",
      "    public function __construct(\${3:argument})",
      "    {",
      "        \\$this->$2 = $3;",
      "    }",
      "",
      "    public function get\${2/(.*)/\\u\$1/}()",
      "    {",
      "        return \\$this->$2;",
      "    }",
      "",
      "    public function set\${2/(.*)/\\u\$1/}(\\$\${2:value})",
      "    {",
      "        \\$this->$2 = \\$\${2:value};",
      "    }",
      "}"
    ],
    "description": "Crea una classe PHP amb constructor i getter/setter"
  },
  
  "PDO Connection": {
    "prefix": "phpdb",
    "body": [
      "\\$host = 'localhost';",
      "\\$dbname = '\${1:database_name}';",
      "\\$username = '\${2:root}';",
      "\\$password = '\${3:password}';",
      "",
      "try {",
      "    \\$pdo = new PDO(",
      "        'mysql:host=' . \\$host . ';dbname=' . \\$dbname . ';charset=utf8mb4',",
      "        \\$username,",
      "        \\$password,",
      "        [",
      "            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,",
      "            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,",
      "            PDO::ATTR_EMULATE_PREPARES => false",
      "        ]",
      "    );",
      "} catch (PDOException \\$e) {",
      "    throw new PDOException(\\$e->getMessage(), (int)\\\$e->getCode());",
      "}"
    ],
    "description": "Connexió PDO a MySQL"
  }
}</code></pre>
        </div>
        
        <div class="important-note mt-3">
          <h5>📁 On guardar els snippets:</h5>
          <ul class="concept-list">
            <li><strong>Global</strong>: File → Preferences → Configure User Snippets → php.json</li>
            <li><strong>Per projecte</strong>: Crea carpeta <code>.vscode/</code> amb fitxer <code>php.code-snippets</code></li>
          </ul>
          
          <h6>Com utilitzar snippets:</h6>
          <ol class="concept-list">
            <li>Escriu el prefix (ex: <code>phpclasscon</code>)</li>
            <li>Prem <kbd>Tab</kbd> o <kbd>Enter</kbd></li>
            <li>Navega entre els placeholders amb <kbd>Tab</kbd></li>
            <li>Prem <kbd>Esc</kbd> per sortir del mode snippet</li>
          </ol>
        </div>
      </div>
    `
  },
  {
    title: "10. Shortcuts per a Laravel",
    content: `
      <h2 class="slide-title">10. Shortcuts específics per a Laravel</h2>
      
      <div class="text-large">
        <p>Si treballes amb Laravel, aquests shortcuts et seran molt útils:</p>
        
        <div class="shortcuts-table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Acció</th>
                <th>Windows</th>
                <th>Linux</th>
                <th>Descripció Laravel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Executar artisan</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\`</kbd> → <code>php artisan</code></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\`</kbd> → <code>php artisan</code></td>
                <td>Accedeix a la consola artisan</td>
              </tr>
              <tr>
                <td>Generar classe</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> → Laravel: Create Class</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> → Laravel: Create Class</td>
                <td>Amb extensió Laravel Extension Pack</td>
              </tr>
              <tr>
                <td>Navegar a vista</td>
                <td><kbd>Ctrl</kbd> + <kbd>P</kbd> → <code>view('</code></td>
                <td><kbd>Ctrl</kbd> + <kbd>P</kbd> → <code>view('</code></td>
                <td>Busca vistes per el seu nom</td>
              </tr>
              <tr>
                <td>Executar tests</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> (configurat)</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> (configurat)</td>
                <td>Executa phpunit per a Laravel</td>
              </tr>
              <tr>
                <td>Clear cache</td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\`</kbd> → <code>php artisan optimize:clear</code></td>
                <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\`</kbd> → <code>php artisan optimize:clear</code></td>
                <td>Neteja totes les caches</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 class="mt-4">🔌 Extensions recomanades per Laravel:</h4>
        <div class="extensions-grid">
          <div class="extension-card">
            <h5>Laravel Extension Pack</h5>
            <p>Paquet amb totes les extensions essencials per a Laravel.</p>
            <p><strong>Inclou:</strong> Blade snippets, artisan commands, etc.</p>
          </div>
          
          <div class="extension-card">
            <h5>Laravel Blade Snippets</h5>
            <p>Snippets per a plantilles Blade.</p>
            <p><strong>Prefixos:</strong> <code>@if</code>, <code>@foreach</code>, <code>@section</code>, etc.</p>
          </div>
          
          <div class="extension-card">
            <h5>Laravel Artisan</h5>
            <p>Executa comandes artisan des de VSCode.</p>
            <p><strong>Shortcut:</strong> <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> → Laravel</p>
          </div>
        </div>
        
        <h4 class="mt-4">⚙️ Configuració per a Laravel:</h4>
        <div class="code-block">
          <div class="code-header">
            <span>settings.json per Laravel</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('laravel-settings', this)">Copiar</button>
          </div>
          <pre><code class="json" id="laravel-settings">{
  "[blade]": {
    "editor.defaultFormatter": "onecentlin.laravel-blade",
    "editor.formatOnSave": true
  },
  "laravel-artisan.commandsToSkip": [
    "migrate:fresh",
    "db:wipe"
  ],
  "laravel-goto-view.caseInsensitive": true,
  "laravel-goto-view.extensions": [
    "blade.php",
    "php"
  ],
  "files.associations": {
    "*.blade.php": "blade"
  }
}</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "11. Troubleshooting shortcuts",
    content: `
      <h2 class="slide-title">11. Troubleshooting i problemes comuns</h2>
      
      <div class="text-large">
        <div class="problem-solution">
          <h4>❌ Problema: Els shortcuts no funcionen</h4>
          <ul class="concept-list">
            <li><strong>Comprovar conflictes</strong>: Ves a File → Preferences → Keyboard Shortcuts</li>
            <li><strong>Extensions</strong>: Algunes extensions poden sobreescriure shortcuts</li>
            <li><strong>Idioma teclat</strong>: Assegura't que tens el teclat correcte (ES, EN, CA)</li>
            <li><strong>Reiniciar VSCode</strong>: Sovint soluciona problemes de shortcuts</li>
          </ul>
        </div>
        
        <div class="problem-solution mt-4">
          <h4>❌ Problema: Shortcuts diferents entre Windows/Linux</h4>
          <ul class="concept-list">
            <li><strong>Ctrl vs Cmd</strong>: En macOS, Ctrl es converteix en Cmd</li>
            <li><strong>Alt vs Option</strong>: En macOS, Alt es converteix en Option</li>
            <li><strong>Tecles especials</strong>: \`, ~, ^ poden variar segons distribució teclat</li>
            <li><strong>Personalitzar</strong>: Pots crear els teus propis shortcuts per projecte</li>
          </ul>
        </div>
        
        <div class="problem-solution mt-4">
          <h4>❌ Problema: Intelisense no funciona per a PHP</h4>
          <ul class="concept-list">
            <li><strong>Comprovar extensió</strong>: Assegura't que tens instal·lat PHP Intelephense</li>
            <li><strong>Ruta PHP</strong>: Configura la ruta a php.exe a settings.json</li>
            <li><strong>Reindexar</strong>: Ctrl+Shift+P → "Intelephense: Index workspace"</li>
            <li><strong>Límits memòria</strong>: Augmenta "intelephense.files.maxSize" si cal</li>
          </ul>
        </div>
        
        <div class="problem-solution mt-4">
          <h4>❌ Problema: Format no funciona en guardar</h4>
          <ul class="concept-list">
            <li><strong>Configurar formatejador</strong>: Assegura't d'assignar un formatejador a PHP</li>
            <li><strong>Format on save</strong>: Activa "editor.formatOnSave" per a PHP</li>
            <li><strong>Extensions conflictes</strong>: Desactiva altres formatejadors PHP</li>
            <li><strong>Regles PSR</strong>: Configura .php_cs.dist o phpcs.xml per a estàndards</li>
          </ul>
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
            <h4>📚 Documentació oficial</h4>
            <ul class="concept-list">
              <li><a href="https://code.visualstudio.com/docs/getstarted/keybindings" target="_blank">VSCode Keybindings Reference</a></li>
              <li><a href="https://code.visualstudio.com/docs/editor/tasks" target="_blank">VSCode Tasks Documentation</a></li>
              <li><a href="https://code.visualstudio.com/docs/editor/variables-reference" target="_blank">Variables Reference</a></li>
            </ul>
          </div>
          
          <div class="resource-card">
            <h4>🔌 Extensions PHP</h4>
            <ul class="concept-list">
              <li><a href="https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client" target="_blank">PHP Intelephense</a></li>
              <li><a href="https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug" target="_blank">PHP Debug</a></li>
              <li><a href="https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker" target="_blank">PHP DocBlocker</a></li>
            </ul>
          </div>
          
          <div class="resource-card">
            <h4>🎓 Tutorials i guies</h4>
            <ul class="concept-list">
              <li><a href="https://www.youtube.com/watch?v=B-s71n0dHUk" target="_blank">VSCode Productivity Tips</a></li>
              <li><a href="https://laracasts.com/series/visual-studio-code-for-php-developers" target="_blank">VSCode for PHP Developers</a></li>
              <li><a href="https://www.php-fig.org/psr/" target="_blank">PHP Standards Recommendations (PSR)</a></li>
            </ul>
          </div>
        </div>
      </div>
    `
  }
];

// Assegurar-nos que el totalSlides està definit al HTML
document.getElementById('totalSlides').textContent = slides.length;