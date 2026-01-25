const slides = [
  {
    title: "Configuració de Seguretat",
    content: `
            <div class="security-content">
                <div class="security-image-container">
                    <img src="../img/phpsecurity.jpg" alt="Seguretat en PHP" class="security-image" />
                </div>

                <div class="generic-info">
                    <h3 class="slide-title">Configuració de la Seguretat en PHP</h3>
                    <div class="generic-topics">
                        <div class="generic-topic">
                            <h4>🔢 Versions de PHP</h4>
                            <p>Mantenir PHP actualitzat per corregir vulnerabilitats conegudes i tenir les últimes funcionalitats de seguretat.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>📝 Per què cal documentar</h4>
                            <p>Documentació de seguretat per a manteniment, auditoria i transferència de coneixement entre equips.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>🗄️ PDO amb Prepared Statements</h4>
                            <p>Utilitzar consultes preparades per prevenir atacs d'injecció SQL i protegir les bases de dades.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>✔️ Validar les dades d'entrada</h4>
                            <p>Validar i filtrar totes les dades d'entrada dels usuaris per prevenir diverses formes d'injecció.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>📂 Cal pujar tots els fitxers del nostre MVC</h4>
                            <p>Protecció de l'estructura de fitxers del projecte i limitació d'accés a recursos sensibles.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>⚙️ Configuració del fitxer .htaccess</h4>
                            <p>Configuració de seguretat a nivell de servidor web Apache per controlar accés i comportament.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>🔐 Restricció d'accés a fitxers i carpetes</h4>
                            <p>Control d'accés a recursos del sistema de fitxers mitjançant permisos i configuració de servidor.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>🔗 urlencode(string)</h4>
                            <p>Codificació segura de paràmetres en URLs per evitar errors d'interpretació i atacs.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>🛡️ Evitar el Hotlinking</h4>
                            <p>Protecció contra ús no autoritzat de recursos del servidor (imatges, arxius) des d'altres webs.</p>
                        </div>

                        <div class="generic-topic">
                            <h4> Evitar inclusió de fitxers remots</h4>
                            <p>Prevenció d'inclusions de fitxers externs maliciosos que podrien comprometre el servidor.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>🔒 Configuració SSL</h4>
                            <p>Implementació de connexió segura HTTPS per xifrar la comunicació entre client i servidor.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>⚠️ Atacs XSS</h4>
                            <p>Prevenció d'atacs Cross-Site Scripting que poden executar codi maliciós en navegadors dels usuaris.</p>
                        </div>

                    </div>
                </div>
            </div>
        `,
  },
  {
    title: "1. Versions de PHP",
    content: `
    <div class="slide-content-enlarged">
            <h2 class="slide-title">1. Versions de PHP</h2>
            
            <div class="important-note mb-4">
                <p>No mantenir PHP actualitzat és crític per a la seguretat.</p>
                <p>Les versions antigues tenen vulnerabilitats conegudes que no es corregeixen.</p>
                <p>Utilitzeu sempre la darrera versió estable amb suport actiu.</p>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <h4>📜 Historial de versions de PHP:</h4>
                    <ul class="concept-list">
                        <li><strong>PHP 1.0</strong> (1995) - Primera versió</li>
                        <li><strong>PHP 2.0</strong> (1997) - Motor Zend 1</li>
                        <li><strong>PHP 3.0</strong> (1998) - Suport a bases de dades</li>
                        <li><strong>PHP 4.0</strong> (2000) - Motor Zend 2</li>
                        <li><strong>PHP 5.0</strong> (2004) - Objectes, PDO, MySQLi</li>
                        <li><strong>PHP 5.3</strong> (2009) - Namespaces, closures</li>
                        <li><strong>PHP 5.6</strong> (2014) - Darrera de la sèrie 5.x</li>
                        <li><strong>PHP 6</strong> - La millor versió. No va dornar cap error!!!</li>
                    </ul>
                </div>
                
                <div class="col-md-6">
                    <h4>🚀 Versions modernes:</h4>
                    <ul class="concept-list">
                        <li><strong>PHP 7.0</strong> (2015) - Millora de rendiment, tipus escalars</li>
                        <li><strong>PHP 7.1</strong> (2016) - Tipus nullable, void</li>
                        <li><strong>PHP 7.2</strong> (2017) - Object com a tipus</li>
                        <li><strong>PHP 7.3</strong> (2018) - JSON_THROW_ON_ERROR</li>
                        <li><strong>PHP 7.4</strong> (2019) - Arrow functions</li>
                        <li><strong>PHP 8.0</strong> (2020) - JIT, named arguments</li>
                        <li><strong>PHP 8.1</strong> (2021) - Enums, fibers</li>
                        <li><strong>PHP 8.2</strong> (2022) - Readonly classes</li>
                        <li><strong>PHP 8.3</strong> (2023) - Typed class constants</li>
                    </ul>
                </div>
            </div>
            </div>
            
        `,
  },
{
    title: "2. Per què cal documentar i comentar?",
    content: `
            <h2 class="slide-title">2. Per què cal documentar i comentar?</h2>
            
            <div class="important-note mb-4 text-large">
                <p>La documentació i els comentaris són una part essencial de la seguretat perquè:</p>
            </div>
            <div class="text-xl">
            <ul class="concept-list">
                <li><strong>Auditoria de seguretat</strong>: Permet revisar ràpidament els punts crítics</li>
                <li><strong>Transferència de coneixement</strong>: Evita que vulnerabilitats quedin ocultes</li>
                <li><strong>Manteniment</strong>: Actualitzacions segures sense introduir nous riscos</li>
                <li><strong>Documentació de decisions</strong>: Explica perquè s'han implementat certes mesures de seguretat</li>
                <li><strong>Identificació de dependencies</strong>: Alertes sobre biblioteques o components vulnerables</li>
            </ul>
            </div>
            <div class="mt-4 text-large">
                <p>Sense una documentació adequada, les vulnerabilitats poden passar desapercebudes durant anys, i les correccions poden introduir nous errors.</p>
            </div>
            
        `
},
  {
    title: "3. PDO amb Prepared Statements",
    content: `
            <h2 class="slide-title">3. PDO amb Prepared Statements</h2>
            <div class="code-block">
                <div class="code-header">
                    <span>pdo_exemple.php</span>
                    <span class="code-language">PHP</span>
                    <button class="copy-btn ms-2" onclick="copyCode('php-pdo-code', this)">Copiar</button>
                </div>
                <pre><code class="php" id="php-pdo-code">&lt;?php
try {
    $connexio = new PDO('mysql:host=localhost;dbname=', 'root', '');
    $statement = $connexio->prepare('SELECT * FROM usuaris WHERE id = :id or nom = :nom');
    $statement->execute();
    $resultats = $statement->fetchAll();
    foreach ($resultats as $usuari){
    }    
} catch(PDOException $e){
    echo "Error: " . $e->getMessage();
}
?&gt;</code></pre>
            </div>
        `,
  },
  {
    title: "4. Validar les dades d'entrada",
    content: `
            <h2 class="slide-title">4. Validar les dades d'entrada</h2>
            <div class="text-large">
            <p>Funcions utilitzades:</p>
            <ul class="concept-list">
                <li><code>htmlspecialchars();</code></li>
                <li><code>trim();</code></li>
                <li><code>htmlentities();</code></li>
                <li><code>bindparam();</code></li>
                <li><code>preg_match(patró, cadena_entr, [array_resultats], ,[inici_cerca])</code></li>
            </ul>
            </div>
            <div class="code-block mt-3">
                <div class="code-header">
                    <span>validacio_data.php</span>
                </div>
                <pre><code class="php">&lt;?php
$date = "2022-12-12"; 
if (preg_match("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/", $date)) {
    return true; 
} else {     
    return false; 
}
?&gt;</code></pre>
            </div>
        `,
  },
{
    title: "5. Cal pujar tots els fitxers del MVC?",
    content: `
            <h2 class="slide-title">5. Cal pujar tots els fitxers del vostre MVC?</h2>
            
            <div class="row align-items-center text-xxl">
                <div class="col-md-6">
                    <div class="security-text-large">
                        <p class="lead">Frameworks de PHP com Laravel tenen una estructura de fitxers MVC, per tant una estructura de fitxers gran.</p>
                        <p class="lead">Per exemple, amb Laravel se'ns genera una estructura de fitxers semblant a aquesta:</p>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="security-image-container">
                        <img src="../img/estructuraLaravel.png" alt="Estructura Laravel" class="security-image img-fluid rounded shadow" />
                    </div>
                </div>
            </div>
            
            <div class="important-note mt-4 text-xxl">
                <h5>Reflexió:</h5>
                <p>És necessari "penjar" tots els fitxers de la nostra estructura al nostre servidor web o només caldria penjar la nostra carpeta pública?</p>
            </div>
        `,
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
},
{
    title: "6. Configuració del fitxer .htaccess",
    content: `
            <h2 class="slide-title">6. Configuració del fitxer .htaccess</h2>           
            
            <ul class="concept-list">
                <li>    Canviar el fitxer d'arrencada del web</li>
                <li>    Blocar una IP o un rang d'IP</li>
                <li>    Redirigir a l'estat 301 (moure a una nova URL)</li>
                <li>    Fer servir (o no) les www de la URL</li>
                <li>    Redirigir d'HTTP a HTTPs</li>
                <li>    Personalitzar la pàgina d'errors</li>
                <li>    Demanar autenticació per a accedir a una carpeta</li>
            </ul>
            
            <p><a href="https://en.wikipedia.org/wiki/HTTP_301" target="_blank">https://en.wikipedia.org/wiki/HTTP_301</a></p>
            <p><a href="https://www.geeksforgeeks.org/what-is-htaccess-file-in-php/" target="_blank">https://www.geeksforgeeks.org/what-is-htaccess-file-in-php/</a></p>
        `,
},
{
  title: "7. Restricció d'accés",
  content: `
    <h2 class="slide-title">7. Restricció d'accés a fitxers i carpetes</h2>
        <div class="text-large"> 
    <p>
      <code>open_basedir</code> és una directiva de configuració que es pot utilitzar per
      restringir l'accés a fitxers i carpetes en un lloc web. Quan s'activa aquesta opció,
      el servidor PHP només permetrà l'accés a fitxers i carpetes dins del directori base
      especificat. Això pot ser útil per evitar que un script maliciós accedeixi a fitxers
      sensibles del sistema o modifiqui altres fitxers del lloc web.
    </p>

    <p>
      Per utilitzar la funció <code>open_basedir</code>, hem d’afegir la següent línia
      al fitxer de configuració de PHP (normalment anomenat <code>php.ini</code>):
    </p>

    <div class="code-block">
      <pre><code class="language-ini">
; open_basedir, if set, limits all file operations to the defined directory
; and below. This directive makes most sense if used in a per-directory
; or per-virtualhost web server configuration file.
; Note: disables the realpath cache
; http://php.net/open-basedir
open_basedir = /ruta/al/directoribase
      </code></pre>
    </div>
    </div>
  `,
},

  {
    title: "8. urlencode(string)",
    content: `
            <h2 class="slide-title">8. urlencode(string): string</h2>
            <p>Generar URL vàlides de manera segura.</p>
            <p>La farem servir quan volem codificar una cadena per a fer-la servir en una part de la URL.</p>
            
            <div class="code-block">
                <div class="code-header">
                    <span>exemple_urlencode.php</span>
                </div>
                <pre><code class="php">&lt;?php
echo '&lt;a href="www.domini.cat/login.php?user=' . urlencode($userID) . '"&gt;';
?&gt;</code></pre>
            </div>
            
            <div class="code-block mt-3">
                <div class="code-header">
                    <span>exemple_urlencode_2.php</span>
                </div>
                <pre><code class="php">&lt;?php
$string = "Hola, com estàs?";
$encoded_string = urlencode($string);
echo $encoded_string; // Mostra "Hola%2C+com+est%C3%A0s%3F"
?&gt;</code></pre>
            </div>
        `,
  },
{
  title: "9. Evitar el Hotlinking",
  content: `
    <h2 class="slide-title">9. Evitar el Hotlinking</h2>
<div class="text-large">
    <p><strong>Què és el Hotlinking?</strong></p>

    <div class="requadre">
      <p>
        Altres webmasters agafen imatges, etc. de la nostra web i,
        si aquest altre web té molts visitants al dia, llavors s’han
        de carregar les nostres imatges…
      </p>

      <div class="requadre-arrow">⬇</div>

      <p class="requadre-impacte">
        Afectació a l’ampla de banda del nostre <strong>Hosting</strong>
      </p>
    </div>

    <p class="mt-3"><strong>Dit d’una altra manera:</strong></p>

    <p>
      Es refereix a l’ús d’enllaços a fitxers (com ara imatges) des d’un
      altre lloc web. Per exemple, si un lloc web enllaça a una imatge
      emmagatzemada en el teu lloc web sense el teu permís, això es
      coneix com a <em>hotlinking</em>.
    </p>

    <div class="code-block mt-4">
      <div class="code-header">
        <span>.htaccess – Anti-hotlinking</span>
      </div>
      <pre><code class="language-apache">
RewriteEngine On
RewriteCond %{HTTP_REFERER} !^http://(.+\\.)?elnostredomini\\.com/ [NC]
RewriteCond %{HTTP_REFERER} !^$
RewriteRule .*\\.(jpg|gif|bmp|png)$ http://hotlink.elnostredomini.com/hotlinking_prohibit.jpg [L]
      </code></pre>
    </div>
    </div>
  `,
},

  {
    title: "10. Evitar inclusió fitxers remots",
    content: `
            <h2 class="slide-title">10. Evitar la inclusió de fitxers remots</h2>
            <p><code>allow_url_include</code> és una directiva de configuració que indica al servidor PHP si es permet o no la inclusió de fitxers remots en un script PHP.</p>
            
            <div class="important-note">
                <p>Si es desactiva aquesta opció, el servidor PHP només permetrà la inclusió de fitxers des del mateix servidor, evitant així la inclusió de fitxers remots perillosos.</p>
            </div>
            
            <p>Al fitxer <code>php.ini</code>:</p>
            <pre class="bg-light p-3 rounded"><code>allow_url_include = Off</code></pre>
            
            <p>Tenim dos maneres de fer incloure un fitxer des d'un servidor remot:</p>
            <ul class="concept-list">
                <li>Amb la funció <code>include()</code></li>
                <li>Amb la funció <code>file_get_contents()</code></li>
            </ul>
        `,
  },
  {
    title: "11-12. SSL i Atacs XSS",
    content: `
            <h2 class="slide-title">11. Configuració SSL i 12. Atacs XSS</h2>
            
            <h4>11. Configuració SSL</h4>
            <p>SysAdmin → update SSL certificate</p>
            
            <h4 class="mt-4">12. Atacs XSS (Cross-site scripting)</h4>
            <p>Per a fer una previsió de possibles atacs XSS, caldria comprovar les possibles vulnerabilitats de la nostra web, és a dir, analitzar tot el codi font de la nostra pàgina PHP.</p>
            
            <div class="important-note">
                <p>Identificar les dades d'entrada del lloc web, com ara les dades dels formularis o les variables <code>$_GET</code> i <code>$_POST</code>.</p>
                <p>Buscar les dades d'entrada en el codi PHP i comprovar si es valida correctament amb la funció <code>htmlspecialchars()</code> o una funció similar.</p>
            </div>
        `,
  },
];
