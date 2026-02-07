// Diapositives sobre protecció de fitxers MVC
const seguretatMvcSlides = [
{
  title: "5. Cal pujar tots els fitxers del MVC?",
  content: `
    <h2 class="slide-title">5. Cal pujar tots els fitxers del vostre MVC?</h2>
    
    <div class="row" style="min-height: calc(100vh - 200px);">
      
      <div class="col-lg-6 d-flex flex-column justify-content-center">
        <div class="generic-info mb-4">
          <div class="text-large">
            <p class="lead mb-4">Frameworks de PHP com Laravel tenen una estructura de fitxers MVC, per tant una estructura de fitxers gran.</p>
            <p>Per exemple, amb Laravel se'ns genera una estructura de fitxers semblant a aquesta:</p>
          </div>
        </div>
        
        <div class="folder-explanation mt-4">
          <h4 class="mb-3" style="color: #0d6efd;">Agafem d'exemple l'estructura de Laravel:</h4>
          
          <div class="accordion" id="folderAccordion">
            <!-- app/ -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseApp">
                  <span class="folder-icon">📱</span> <strong>app/</strong> - El cor de l'aplicació
                </button>
              </h2>
              <div id="collapseApp" class="accordion-collapse collapse" data-bs-parent="#folderAccordion">
                <div class="accordion-body">
                  <p><strong>Models, Controllers, Middleware...</strong></p>
                  <ul class="folder-details">
                    <li><code>Controllers/</code> - Controladors MVC</li>
                    <li><code>Models/</code> - Models d'Eloquent ORM</li>
                    <li><code>Http/Middleware/</code> - Middleware per a peticions</li>
                    <li><code>Providers/</code> - Proveïdors de servei</li>
                  </ul>
                  <p class="mt-2"><em>Aquí està la lògica principal del teu backend</em></p>
                </div>
              </div>
            </div>
            
            <!-- bootstrap/ -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBootstrap">
                  <span class="folder-icon">🚀</span> <strong>bootstrap/</strong> - Arrencada de l'app
                </button>
              </h2>
              <div id="collapseBootstrap" class="accordion-collapse collapse" data-bs-parent="#folderAccordion">
                <div class="accordion-body">
                  <p><strong>Arxiu d'arrencada i cache</strong></p>
                  <ul class="folder-details">
                    <li><code>app.php</code> - Carrega l'aplicació Laravel</li>
                    <li><code>cache/</code> - Arxius de cache del framework</li>
                  </ul>
                  <p class="mt-2"><em>No toquis aquesta carpeta manualment</em></p>
                </div>
              </div>
            </div>
            
            <!-- config/ -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConfig">
                  <span class="folder-icon">⚙️</span> <strong>config/</strong> - Configuració
                </button>
              </h2>
              <div id="collapseConfig" class="accordion-collapse collapse" data-bs-parent="#folderAccordion">
                <div class="accordion-body">
                  <p><strong>Tots els arxius de configuració</strong></p>
                  <ul class="folder-details">
                    <li><code>app.php</code> - Configuració general</li>
                    <li><code>database.php</code> - Configuració BD</li>
                    <li><code>mail.php</code> - Configuració email</li>
                    <li><code>auth.php</code> - Configuració autenticació</li>
                  </ul>
                  <p class="mt-2"><em>Variables d'entorn i configuracions del projecte</em></p>
                </div>
              </div>
            </div>
            
            <!-- database/ -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatabase">
                  <span class="folder-icon">🗄️</span> <strong>database/</strong> - Base de dades
                </button>
              </h2>
              <div id="collapseDatabase" class="accordion-collapse collapse" data-bs-parent="#folderAccordion">
                <div class="accordion-body">
                  <p><strong>Migrations, Seeders i Factories</strong></p>
                  <ul class="folder-details">
                    <li><code>migrations/</code> - Esquemes de BD</li>
                    <li><code>seeders/</code> - Dades inicials</li>
                    <li><code>factories/</code> - Generadors de dades de prova</li>
                  </ul>
                  <p class="mt-2"><em>Estructura de la base de dades i dades de prova</em></p>
                </div>
              </div>
            </div>
            
            <!-- public/ -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePublic">
                  <span class="folder-icon">🌐</span> <strong>public/</strong> - Contingut públic
                </button>
              </h2>
              <div id="collapsePublic" class="accordion-collapse collapse" data-bs-parent="#folderAccordion">
                <div class="accordion-body">
                  <p><strong>Arxius accessibles des del navegador</strong></p>
                  <ul class="folder-details">
                    <li><code>index.php</code> - Punt d'entrada de l'app</li>
                    <li><code>css/, js/, img/</code> - Assets estàtics</li>
                    <li><code>.htaccess</code> - Configuració Apache</li>
                  </ul>
                  <p class="mt-2"><em>Aquesta és l'única carpeta accessible des de fora</em></p>
                </div>
              </div>
            </div>
            
            <!-- resources/ i routes/ -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseResources">
                  <span class="folder-icon">🎨</span> <strong>resources/ & routes/</strong> - Vistes i rutes
                </button>
              </h2>
              <div id="collapseResources" class="accordion-collapse collapse" data-bs-parent="#folderAccordion">
                <div class="accordion-body">
                  <p><strong>Vistes, assets i definició de rutes</strong></p>
                  <ul class="folder-details">
                    <li><code>resources/views/</code> - Vistes Blade</li>
                    <li><code>resources/js/</code> - JavaScript (Vue/React)</li>
                    <li><code>resources/sass/</code> - Estils SCSS</li>
                    <li><code>routes/web.php</code> - Rutes web</li>
                    <li><code>routes/api.php</code> - Rutes API</li>
                  </ul>
                  <p class="mt-2"><em>Frontend i definició de URLs de l'aplicació</em></p>
                </div>
              </div>
            </div>
            
            <!-- storage/ i vendor/ -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStorage">
                  <span class="folder-icon">📦</span> <strong>storage/ & vendor/</strong> - Cache i dependencies
                </button>
              </h2>
              <div id="collapseStorage" class="accordion-collapse collapse" data-bs-parent="#folderAccordion">
                <div class="accordion-body">
                  <p><strong>Arxius temporals i llibreries</strong></p>
                  <ul class="folder-details">
                    <li><code>storage/logs/</code> - Logs de l'aplicació</li>
                    <li><code>storage/framework/</code> - Arxius temporals</li>
                    <li><code>vendor/</code> - Dependencies PHP (Composer)</li>
                    <li><code>node_modules/</code> - Dependencies JS (npm)</li>
                  </ul>
                  <p class="mt-2"><em>No es pengen al servidor - es generen automàticament</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 d-flex align-items-center justify-content-center">
        <div class="image-container p-3 bg-white rounded shadow" style="max-width: 90%;">
          <img src="../img/estructuraLaravel.png" alt="Estructura Laravel" class="img-fluid" />
          <div class="image-caption text-center mt-2 text-muted">
            <small>Estructura típica d'un projecte Laravel</small>
          </div>
        </div>
      </div>

    </div>
    
    <div class="upload-guide mt-4">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">📋 Guia ràpida de què pujar al servidor</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="upload-section upload-yes">
                <h6><span class="badge bg-success me-2">✓</span> SI cal pujar</h6>
                <ul>
                  <li><code>app/</code> (Controllers, Models...)</li>
                  <li><code>config/</code> (Configuracions)</li>
                  <li><code>database/migrations/</code></li>
                  <li><code>public/</code> (index.php i assets)</li>
                  <li><code>resources/</code> (Vistes, JS, CSS)</li>
                  <li><code>routes/</code> (Definicions de rutes)</li>
                  <li><code>.env.example</code> (Plantilla)</li>
                  <li><code>composer.json</code>, <code>package.json</code></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="upload-section upload-no">
                <h6><span class="badge bg-danger me-2">✗</span> NO cal pujar</h6>
                <ul>
                  <li><code>vendor/</code> (Es genera amb composer)</li>
                  <li><code>node_modules/</code> (Es genera amb npm)</li>
                  <li><code>storage/</code> (Es genera automàticament)</li>
                  <li><code>bootstrap/cache/</code></li>
                  <li><code>.env</code> (Es crea al servidor)</li>
                  <li><code>.git/</code> (Carpeta de control de versions)</li>
                  <li>Arxius IDE (<code>.idea/</code>, <code>.vscode/</code>)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
},
  {
    title: "5. Solució",
    content: `
      <h2 class="slide-title">5. Cal pujar tots els fitxers del vostre MVC?</h2>
      <div class="text-large">
        <p class="green-italic-text text-large">I què passa si pengem tots els fitxers......?</p>
        
        <p class="centered-text">Atacs maliciosos per accedir als vostres fitxers i inspeccionar la vostra lògica</p>
        
        <div class="arrow-down">↓</div>
        
        <p class="centered-text">Trobar forats de seguretat o errors.</p>
        
        <div class="solution-box">
          <p lead><strong>Solució:</strong> "Capar les peticions que no vinguin directament d'Apache.</p>
          <p lead>De manera que les peticions pròpies de la nostra IP (les peticions que es generen automàticament) s'hi permeti accés, mentre que si algú veu referenciat un arxiu que no és dins de públic i intenta accedir-hi, com que la IP serà diferent de la d'Apache, doncs denegar la petició".</p>
        </div>
        <p class="graphically-text lead"><strong>I com ho aconseguim això.....?</strong></p>
        
      </div>
    `
  },
      {
    title: "5. Cal pujar tots els fitxers del vostre MVC?",
    content: `
      <h2 class="slide-title">5. Cal pujar tots els fitxers del vostre MVC?</h2>
      <div class="text-large">
        <p>Instal·lant i configurant els següents mòduls d'Apache:</p>
        
        <div class="security-modules">
          <div class="module-card-orange">
            <h4 class="module-title-orange">mod_authz_host</h4>
            <p>Les autoritzacions implementades per <code>mod_authz_host</code> s'enregistren fent servir la directiva <code>Require</code>.</p>
            <p>La directiva que volem configurar es pot realitzar a les seccions <code>&lt;Directory&gt;</code>, <code>&lt;Files&gt;</code>, <code>&lt;Location&gt;</code> o també al fitxer <code>.htaccess</code>. Ambdós casos per a controlar l'accés a parts en concret del servidor. L'accés pot ser controlat basant-nos en el hostname del client o en la IP.</p>
          </div>
          
          <hr class="my-4">
          
          <div class="module-card-orange">
            <h4 class="module-title-orange">mod_authn_core</h4>
            <p>Aquest mòdul prové de la capacitat de permetre o denegar l'accés a parts del nostre lloc web.</p>
          </div>
        </div>
        
        <div class="security-links mt-4">
          <p><a href="https://httpd.apache.org/docs/trunk/es/mod/mod_authz_host.html" target="_blank">https://httpd.apache.org/docs/trunk/es/mod/mod_authz_host.html</a></p>
          <p><a href="https://httpd.apache.org/docs/trunk/es/mod/mod_authn_core.html" target="_blank">https://httpd.apache.org/docs/trunk/es/mod/mod_authn_core.html</a></p>
        </div>
        
      </div>
    `
  },
  {
    title: "5.1 Configurar els mòduls d'Apache",
    content: `
      <h2 class="slide-title">5.1 Configurar els mòduls d'Apache</h2>
      <div class="text-large">    
        <div class="important-note mb-4">
          <p>Per protegir els fitxers no públics del nostre MVC, necessitem configurar dos mòduls d'Apache:</p>
          <ul class="concept-list">
            <li><strong>mod_authz_host</strong> - Control d'accés basat en host/IP</li>
            <li><strong>mod_authn_core</strong> - Autenticació bàsica</li>
          </ul>
        </div>
        
        <h4>1. Instal·lar paquets d'Apache</h4>
        <p>Assegurar-se que tenim instal·lat el paquet d'Apache en el sistema. Si no ho tens, pots instal·lar-lo:</p>
        
        <div class="code-block">
          <div class="code-header">
            <span>Sistemes basats en Debian/Ubuntu</span>
          </div>
          <pre><code class="bash"># Actualitzar llista de paquets
sudo apt update

# Instal·lar Apache
sudo apt install apache2

# Verificar que Apache està actiu
sudo systemctl status apache2</code></pre>
        </div>
        
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Sistemes basats en Red Hat/CentOS</span>
          </div>
          <pre><code class="bash"># Instal·lar Apache
sudo yum install httpd

# Iniciar Apache
sudo systemctl start httpd

# Habilitar inici automàtic
sudo systemctl enable httpd</code></pre>
        </div>
        
        <h4 class="mt-4">2. Activar els mòduls necessaris</h4>
        <p>Activar els mòduls <code>mod_authz_host</code> i <code>mod_authn_core</code> en la configuració d'Apache:</p>
        
        <div class="code-block">
          <div class="code-header">
            <span>/etc/apache2/apache2.conf o /etc/httpd/conf/httpd.conf</span>
          </div>
          <pre><code class="apacheconf"># Carregar els mòduls necessaris
LoadModule authz_host_module modules/mod_authz_host.so
LoadModule authn_core_module modules/mod_authn_core.so

# O bé en Debian/Ubuntu, activar amb a2enmod
# sudo a2enmod authz_host
# sudo a2enmod authn_core</code></pre>
        </div>
        
        <h4 class="mt-4">3. Reiniciar el servidor Apache</h4>
        <div class="code-block">
          <div class="code-header">
            <span>Reiniciar el servei</span>
          </div>
          <pre><code class="bash"># Sistemes Debian/Ubuntu
sudo systemctl restart apache2

# Sistemes Red Hat/CentOS
sudo systemctl restart httpd

# Verificar que els mòduls estan actius
sudo apache2ctl -M | grep -E "authz_host|authn_core"
# o
httpd -M | grep -E "authz_host|authn_core"</code></pre>
        </div>
        
        <div class="important-note mt-4">
          <h5>Verificació dels mòduls</h5>
          <p>Després de reiniciar, verifica que els mòduls estan carregats correctament:</p>
          <ul class="concept-list">
            <li><code>authz_host_module</code> - Permet control d'accés per IP/hostname</li>
            <li><code>authn_core_module</code> - Proporciona funcionalitats bàsiques d'autenticació</li>
          </ul>
        </div>
        <p class="graphically-text lead"><strong>Gràficament...</strong></p>
      </div>
    `
  },

  {
    title: "5.2 Diagrama de protecció",
    content: `
      <h2 class="slide-title text-center">5.2 Diagrama de protecció</h2>
      <div class="text-center mt-4">
        <pre class="bg-light p-3 rounded text-start d-inline-block" style="max-width: 800px;">
🌐 INTERNET        (Atacants / usuaris externs)
        │
        ────────────┼────────────
        │  Petició HTTP
        ▼
┌─────────────────────────┐
│         APACHE          │
│     (Servidor web)      │
└───────────┬─────────────┘
        │
┌───────────┴───────────┐
│                       │
▼                       ▼
┌────────────────┐      ┌────────────────────┐
│ FITXERS PÚBLICS│      │ FITXERS NO PÚBLICS │
│ (public)       │      │ (app, config…)     │
└───────┬────────┘      └─────────┬──────────┘
        │                         │
        │                         ▼
        │              ┌──────────────────┐
        │              │ Comprovar IP     │
        │              └────────┬─────────┘
        │                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
   ✅ ACCÉS   IP = Apache              IP externa
   PERMÈS    (127.0.0.1)              (atacant)
        │                             │
        ▼                             ▼
  ✅ ACCÉS INTERN              ❌ DENEGAT
                                     (403 Forbidden)</pre>
      </div>
    
      `
  }
];