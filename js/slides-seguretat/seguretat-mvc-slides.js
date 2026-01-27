// Diapositives sobre protecció de fitxers MVC
const seguretatMvcSlides = [
{
  title: "5. Cal pujar tots els fitxers del MVC?",
  content: `
    <h2 class="slide-title">5. Cal pujar tots els fitxers del vostre MVC?</h2>
    <div class="row text-xxl" style="height: calc(100vh - 180px);">
      <div class="col-6 d-flex align-items-center">
        <div class="security-text-large">
          <p class="lead">Frameworks de PHP com Laravel tenen una estructura de fitxers MVC, per tant una estructura de fitxers gran.</p>
          <p class="lead">Per exemple, amb Laravel se'ns genera una estructura de fitxers semblant a aquesta:</p>
        </div>
      </div>
      <div class="col-6 d-flex align-items-center justify-content-center">
        <img src="../img/estructuraLaravel.png" alt="Estructura Laravel" class="img-fluid rounded shadow" style="max-height: 90%; width: auto; max-width: 100%;" />
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
        
        <p class="graphically-text lead"><strong>Gràficament...</strong></p>
      </div>
    `,
  },
  {
    title: "5. Diagrama de protecció",
    content: `
      <h2 class="slide-title text-center">5. Diagrama de protecció</h2>
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
    `,
  },
  {
    title: "5. Cal pujar tots els fitxers del vostre MVC?",
    content: `
      <h2 class="slide-title">5. Cal pujar tots els fitxers del vostre MVC?</h2>
      <div class="text-large">
        <p>Instal·lant i configurant els següents mòduls d'Apache:</p>
        
        <div class="security-modules">
          <div class="module-card">
            <h4 class="module-title">mod_authz_host</h4>
            <p>Les autoritzacions implementades per <code>mod_authz_host</code> s'enregistren fent servir la directiva <code>Require</code>.</p>
            <p>La directiva que volem configurar es pot realitzar a les seccions <code>&lt;Directory&gt;</code>, <code>&lt;Files&gt;</code>, <code>&lt;Location&gt;</code> o també al fitxer <code>.htaccess</code>. Ambdós casos per a controlar l'accés a parts en concret del servidor. L'accés pot ser controlat basant-nos en el hostname del client o en la IP.</p>
          </div>
          
          <hr class="my-4">
          
          <div class="module-card">
            <h4 class="module-title">mod_authn_core</h4>
            <p>Aquest mòdul prové de la capacitat de permetre o denegar l'accés a parts del nostre lloc web.</p>
          </div>
        </div>
        
        <div class="security-links mt-4">
          <p><a href="https://httpd.apache.org/docs/trunk/es/mod/mod_authz_host.html" target="_blank">https://httpd.apache.org/docs/trunk/es/mod/mod_authz_host.html</a></p>
          <p><a href="https://httpd.apache.org/docs/trunk/es/mod/mod_authn_core.html" target="_blank">https://httpd.apache.org/docs/trunk/es/mod/mod_authn_core.html</a></p>
        </div>
      </div>
    `,
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
      </div>
    `
  }
];