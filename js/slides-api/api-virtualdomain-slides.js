// Diapositives sobre configuració de domini virtual
const apiVirtualDomainSlides = [
  {
    title: "Configuració d'un domini virtual",
    content: `
      <h2 class="slide-title">7. Configuració d'un domini virtual</h2>
      <div class="text-large">
        
        <div class="module-card">
          <div class="module-title">🎯 Per què configurar un domini virtual?</div>
          <p>Pot ser interessant configurar un domini virtual, entre d'altres motius, per a:</p>
          <ul class="concept-list">
            <li>Separar la part lògica del projecte</li>
            <li>Tenir més facilitat per a fer les proves</li>
            <li>Simular un entorn de producció més realista</li>
            <li>Organitzar millor múltiples projectes</li>
            <li>Evitar conflictes amb rutes relatives</li>
          </ul>
        </div>

        <div class="row mt-4">
          <div class="col-md-6">
            <h4>📍 Extensions recomanades per a desenvolupament:</h4>
            <div class="generic-topics mt-3">
              <div class="generic-topic">
                <h4>.test</h4>
                <p>Recomanat per estàndard</p>
              </div>
              <div class="generic-topic">
                <h4>.local</h4>
                <p>Alternativa habitual</p>
              </div>
              <div class="generic-topic">
                <h4>.dev</h4>
                <p>⚠️ Requereix HTTPS/SSL actualment</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <h4>🚫 Extensions a evitar:</h4>
            <div class="generic-topics mt-3">
              <div class="generic-topic">
                <h4>.com</h4>
                <p>Conflictes amb DNS global</p>
              </div>
              <div class="generic-topic">
                <h4>.es</h4>
                <p>Conflictes amb DNS global</p>
              </div>
              <div class="generic-topic">
                <h4>.org</h4>
                <p>Conflictes amb DNS global</p>
              </div>
            </div>
          </div>
        </div>

        <div class="important-note mt-4">
          <strong>⚠️ Important:</strong> No feu servir .dev ja que els navegadors actuals requereixen d'HTTPS (i per tant d'un SSL) per a treballar en entorns de desenvolupament.
        </div>
      </div>
    `
  },
  {
    title: "Configuració del fitxer httpd-vhosts.conf",
    content: `
      <h2 class="slide-title">7.1. Pas 1: Configurar Apache Virtual Hosts</h2>
      <div class="text-large">
        
        <div class="requadre mb-4">
          <p><strong>📁 Obrim el fitxer de configuració:</strong></p>
          <div class="row text-center">
            <div class="col-md-6">
              <p><strong>Windows:</strong></p>
              <code class="d-block mt-2">C:\\xampp\\apache\\conf\\extra\\httpd-vhosts.conf</code>
            </div>
            <div class="col-md-6">
              <p><strong>Linux/Mac:</strong></p>
              <code class="d-block mt-2">/opt/lampp/etc/extra/httpd-vhosts.conf</code>
            </div>
          </div>
        </div>

        <h4>Hem d'incloure dos blocs de codi:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Apache Config</span>
                <button class="copy-btn" onclick="copyCode('vhost-localhost', this)">Copiar</button>
              </div>
              <pre><code id="vhost-localhost">&lt;VirtualHost *:80&gt;
    DocumentRoot "C:/xampp/htdocs"
    ServerName localhost
&lt;/VirtualHost&gt;</code></pre>
            </div>
            <p class="mt-2"><small>1. Per treballar en localhost</small></p>
          </div>
          
          <div class="col-md-6">
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Apache Config</span>
                <button class="copy-btn" onclick="copyCode('vhost-project', this)">Copiar</button>
              </div>
              <pre><code id="vhost-project">&lt;VirtualHost *:80&gt;
    DocumentRoot "C:/xampp/htdocs/apirest-vendes"
    ServerName apirest-vendes.test
&lt;/VirtualHost&gt;</code></pre>
            </div>
            <p class="mt-2"><small>2. Habilita el domini virtual</small></p>
          </div>
        </div>

        <div class="module-card mt-4">
          <div class="module-title">💡 Configuració amb directives addicionals</div>
          <div class="code-block mt-2">
            <div class="code-header">
              <span class="code-language">Apache Config</span>
              <button class="copy-btn" onclick="copyCode('vhost-complete', this)">Copiar</button>
            </div>
            <pre><code id="vhost-complete">&lt;VirtualHost *:80&gt;
    DocumentRoot "C:/xampp/htdocs/apirest-vendes"
    ServerName apirest-vendes.test
    
    &lt;Directory "C:/xampp/htdocs/apirest-vendes"&gt;
        AllowOverride All
        Require all granted
    &lt;/Directory&gt;
&lt;/VirtualHost&gt;</code></pre>
          </div>
          <p class="mt-2"><small>Apunta a la carpeta del projecte i permet l'ús d'.htaccess</small></p>
        </div>
      </div>
    `
  },
  {
    title: "Configuració del fitxer hosts del sistema",
    content: `
      <h2 class="slide-title">7.2. Pas 2: Configurar el fitxer hosts del sistema</h2>
      <div class="text-large">
        
        <div class="requadre mb-4">
          <p><strong>Ara ens caldria modificar el fitxer hosts perquè funcioni la ruta apirest-vendes.test des del navegador:</strong></p>
        </div>

        <h4>📍 Ruta del fitxer hosts:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">Windows</span>
            <button class="copy-btn" onclick="copyCode('hosts-path', this)">Copiar</button>
          </div>
          <pre><code id="hosts-path">C:\\Windows\\System32\\drivers\\etc\\hosts</code></pre>
        </div>

        <h4 class="mt-4">📝 Afegim aquestes dues línies:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">hosts</span>
            <button class="copy-btn" onclick="copyCode('hosts-content', this)">Copiar</button>
          </div>
          <pre><code id="hosts-content">127.0.0.1    localhost
127.0.0.1    apirest-vendes.test</code></pre>
        </div>

        <div class="row mt-4">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🔄 Passos a seguir:</h4>
              <ol class="concept-list">
                <li>Obrir l'explorador de fitxers com a administrador</li>
                <li>Anar a la ruta especificada</li>
                <li>Obrir el fitxer "hosts" amb el bloc de notes</li>
                <li>Afegir les línies indicades</li>
                <li>Guardar el fitxer</li>
                <li>Reiniciar XAMPP</li>
              </ol>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🧪 Provar la configuració:</h4>
              <ol class="concept-list">
                <li>Reiniciar Apache a XAMPP</li>
                <li>Obrir el navegador</li>
                <li>Anar a <code>apirest-vendes.test</code></li>
                <li>Si tot va bé, hauria de mostrar la teva aplicació</li>
                <li>Si no funciona, verificar:
                  <ul>
                    <li>Apache està en marxa</li>
                    <li>El fitxer hosts està guardat correctament</li>
                    <li>El vhost està configurat correctament</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="important-note mt-4">
          <strong>Tingues en compte:</strong>
          <ul class="mt-2">
            <li>S'ha d'editar el fitxer hosts com a administrador</li>
            <li>No afegir "http://" a les línies del fitxer hosts</li>
            <li>Reiniciar el navegador després de canviar el fitxer hosts</li>
            <li>Executar <code>ipconfig /flushdns</code> a la consola si segueix sense funcionar</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "Configuració final i verificació",
    content: `
      <h2 class="slide-title">7.3. Pas 3: Configuració final i verificació</h2>
      <div class="text-large">
        
        <h4>🔄 Resum dels passos realitzats:</h4>
        <div class="requadre">
          <div class="row text-center">
            <div class="col-md-3">
              <div class="mb-3">
                <div style="font-size: 2rem; color: #0d6efd;">1️⃣</div>
                <strong>Configurar httpd-vhosts.conf</strong>
                <p><small>Definir els virtual hosts</small></p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-3">
                <div style="font-size: 2rem; color: #0d6efd;">2️⃣</div>
                <strong>Modificar fitxer hosts</strong>
                <p><small>Associar domini a localhost</small></p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-3">
                <div style="font-size: 2rem; color: #0d6efd;">3️⃣</div>
                <strong>Reiniciar Apache</strong>
                <p><small>Aplicar canvis</small></p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-3">
                <div style="font-size: 2rem; color: #0d6efd;">4️⃣</div>
                <strong>Provar el domini</strong>
                <p><small>Verificar funcionament</small></p>
              </div>
            </div>
          </div>
        </div>

        <h4 class="mt-4">⚙️ Configuració de config.php:</h4>
        <div class="module-card">
          <p>Al fitxer <code>config.php</code> haurem de canviar alguns paràmetres perquè funcioni amb el nou domini:</p>
          <div class="code-block mt-3">
            <div class="code-header">
              <span class="code-language">PHP</span>
              <button class="copy-btn" onclick="copyCode('config-php', this)">Copiar</button>
            </div>
            <pre><code id="config-php">&lt;?php
// Antic (si existia)
define('BASE_URL', 'http://localhost/apirest-vendes/');

// Nou
define('BASE_URL', 'http://apirest-vendes.test/');

// O millor, detectar automàticament
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
$host = $_SERVER['HTTP_HOST'];
define('BASE_URL', $protocol . '://' . $host . '/');

// Configuració de la base de dades i altres paràmetres
define('DB_HOST', 'localhost');
define('DB_NAME', 'apirest_vendes');
define('DB_USER', 'root');
define('DB_PASS', '');</code></pre>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>✅ Verificació final:</h4>
              <ul class="concept-list">
                <li>Obrir navegador i anar a <code>apirest-vendes.test</code></li>
                <li>Hauria de mostrar la pàgina d'inici del projecte</li>
                <li>Provar les rutes de l'API</li>
                <li>Verificar que totes les funcionalitats funcionen</li>
              </ul>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🔧 Troubleshooting:</h4>
              <ul class="concept-list">
                <li><strong>403 Forbidden:</strong> Verificar permisos del directori</li>
                <li><strong>404 Not Found:</strong> Verificar DocumentRoot al vhost</li>
                <li><strong>Apache no arrenca:</strong> Verificar sintaxi dels fitxers de configuració</li>
                <li><strong>Domini no resol:</strong> Verificar fitxer hosts i reiniciar navegador</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  }
];