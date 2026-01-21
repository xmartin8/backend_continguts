const slides = [
  {
    title: "XDebug",
    content: `
      <div class="security-content">

        <div class="security-image-container">
          <img src="../img/xdebug.png"
               alt="XDebug PHP"
               class="security-image" />
        </div>

        <div class="security-info">
          <h3 class="slide-title">XDebug</h3>

          <div class="security-topics">

            <div class="security-topic">
              <h4>🐞 Què és XDebug?</h4>
              <p>Extensió de PHP que permet depurar codi, analitzar rendiment i traçar l’execució dels scripts.</p>
            </div>

            <div class="security-topic">
              <h4>🔍 Debug pas a pas</h4>
              <p>Permet executar el codi línia a línia i inspeccionar variables en temps real.</p>
            </div>

            <div class="security-topic">
              <h4>📊 Stack traces</h4>
              <p>Mostra l’origen exacte dels errors i la seqüència de crides de funcions.</p>
            </div>

            <div class="security-topic">
              <h4>⚙️ Integració amb IDE</h4>
              <p>Funciona amb VS Code, PhpStorm, NetBeans i altres entorns de desenvolupament.</p>
            </div>

            <div class="security-topic">
              <h4>🚀 Millora de qualitat</h4>
              <p>Ajuda a detectar bugs, errors lògics i problemes de rendiment.</p>
            </div>

          </div>
        </div>

      </div>
    `
  },

  {
    title: "1. Instal·lació d’XDebug",
    content: `
      <h2 class="slide-title">1. Instal·lació d’XDebug</h2>

      <div class="important-note">
        <p>XDebug és una extensió de PHP que s’ha d’instal·lar i activar correctament.</p>
      </div>

      <h4>Linux (Debian / Ubuntu)</h4>
      <div class="code-block">
        <pre><code class="bash">
sudo apt update
sudo apt install php-xdebug
        </code></pre>
      </div>

      <h4 class="mt-4">Windows (XAMPP)</h4>
      <ul class="concept-list">
        <li>Baixar el fitxer <code>php_xdebug.dll</code></li>
        <li>Copiar-lo a la carpeta <code>ext</code></li>
        <li>Configurar el <code>php.ini</code></li>
      </ul>
    `
  },

  {
    title: "2. Configuració bàsica",
    content: `
      <h2 class="slide-title">2. Configuració bàsica d’XDebug</h2>

      <p>Al fitxer <code>php.ini</code>:</p>

      <div class="code-block">
        <div class="code-header">
          <span>php.ini</span>
        </div>
        <pre><code class="ini">
zend_extension=xdebug

xdebug.mode=debug
xdebug.start_with_request=yes
xdebug.client_host=127.0.0.1
xdebug.client_port=9003
        </code></pre>
      </div>

      <div class="important-note">
        <p>Després de modificar el fitxer, cal reiniciar Apache.</p>
      </div>
    `
  },

  {
    title: "3. Breakpoints",
    content: `
      <h2 class="slide-title">3. Breakpoints</h2>

      <p>Un <strong>breakpoint</strong> és un punt del codi on l’execució s’atura automàticament.</p>

      <ul class="concept-list">
        <li>Permet inspeccionar variables</li>
        <li>Executar pas a pas</li>
        <li>Detectar errors lògics</li>
      </ul>

      <div class="code-block">
        <div class="code-header">
          <span>exemple.php</span>
        </div>
        <pre><code class="php">
&lt;?php
$numero = 10;
$resultat = $numero * 2; // breakpoint aquí
echo $resultat;
?&gt;
        </code></pre>
      </div>
    `
  },

  {
    title: "4. Integració amb VS Code",
    content: `
      <h2 class="slide-title">4. XDebug + VS Code</h2>

      <ol class="concept-list">
        <li>Instal·lar l’extensió <strong>PHP Debug</strong></li>
        <li>Configurar <code>launch.json</code></li>
        <li>Iniciar escolta de debug</li>
      </ol>

      <div class="code-block">
        <div class="code-header">
          <span>launch.json</span>
        </div>
        <pre><code class="json">
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Listen for XDebug",
      "type": "php",
      "request": "launch",
      "port": 9003
    }
  ]
}
        </code></pre>
      </div>
    `
  },

  {
    title: "5. Errors i avantatges",
    content: `
      <h2 class="slide-title">5. Errors i avantatges d’XDebug</h2>

      <div class="row">
        <div class="col-md-6">
          <h4>❌ Errors comuns</h4>
          <ul class="concept-list">
            <li>Port incorrecte</li>
            <li>Apache no reiniciat</li>
            <li>XDebug no activat</li>
          </ul>
        </div>

        <div class="col-md-6">
          <h4>✅ Avantatges</h4>
          <ul class="concept-list">
            <li>Debug professional</li>
            <li>Millor mantenibilitat</li>
            <li>Menys errors en producció</li>
          </ul>
        </div>
      </div>
    `
  }

  ,
{
  title: "6. Flux de depuració a VS Code",
  content: `
    <h2 class="slide-title">6. Flux de depuració amb VS Code</h2>

    <ol class="concept-list">
      <li>Obrir el projecte PHP a VS Code</li>
      <li>Col·locar breakpoints al codi</li>
      <li>Iniciar l’escolta de XDebug</li>
      <li>Executar l’script des del navegador</li>
    </ol>

    <div class="important-note">
      <p>XDebug s’activa quan carregues la pàgina PHP al navegador.</p>
    </div>
  `
},
{
  title: "7. Posar breakpoints correctament",
  content: `
    <h2 class="slide-title">7. Breakpoints a VS Code</h2>

    <p>Fes clic al marge esquerre del codi per afegir un breakpoint.</p>

    <div class="code-block">
      <div class="code-header">
        <span>login.php</span>
      </div>
      <pre><code class="php">
&lt;?php
session_start();

$user = $_POST['user'];
$pass = $_POST['pass']; // breakpoint aquí

if ($user === "admin") {
    echo "Benvingut";
}
?&gt;
      </code></pre>
    </div>

    <ul class="concept-list">
      <li>Es pot activar/desactivar fàcilment</li>
      <li>Permet veure valors reals de variables</li>
    </ul>
  `
},
{
  title: "8. Controls de depuració",
  content: `
    <h2 class="slide-title">8. Controls de depuració</h2>

    <p>Quan l’execució s’atura, VS Code mostra els controls:</p>

    <ul class="concept-list">
      <li><strong>Continue</strong> → Continua fins al següent breakpoint</li>
      <li><strong>Step Over</strong> → Executa la línia actual</li>
      <li><strong>Step Into</strong> → Entra dins una funció</li>
      <li><strong>Step Out</strong> → Surt de la funció actual</li>
    </ul>

    <div class="important-note">
      <p>Aquests controls permeten entendre el flux del programa.</p>
    </div>
  `
},
{
  title: "9. Variables i Call Stack",
  content: `
    <h2 class="slide-title">9. Variables i Call Stack</h2>

    <p>VS Code mostra informació clau durant la depuració:</p>

    <ul class="concept-list">
      <li><strong>Variables</strong> → Valor actual de cada variable</li>
      <li><strong>Watch</strong> → Variables personalitzades</li>
      <li><strong>Call Stack</strong> → Funcions cridades fins al punt actual</li>
    </ul>

    <div class="important-note">
      <p>Ideal per detectar errors en funcions i MVC.</p>
    </div>
  `
},
{
  title: "10. Consells pràctics",
  content: `
    <h2 class="slide-title">10. Bones pràctiques amb XDebug</h2>

    <ul class="concept-list">
      <li>No utilitzar <code>var_dump()</code> com a única eina</li>
      <li>Eliminar breakpoints abans de producció</li>
      <li>Desactivar XDebug en entorns productius</li>
      <li>Combinar amb gestió d’errors</li>
    </ul>

    <div class="important-note">
      <p>XDebug és una eina de desenvolupament, no de producció.</p>
    </div>
  `
}

];
