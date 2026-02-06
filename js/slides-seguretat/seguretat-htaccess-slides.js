// Diapositives sobre configuració i protecció
const seguretatHtaccesSlides = [
{
  title: "6. Configuració del fitxer .htaccess",
  content: `
    <h2 class="slide-title">6. Configuració del fitxer .htaccess</h2>
    <div class="d-flex flex-column align-items-center justify-content-center">
      <ul class="concept-list text-start">
        <li>Canviar el fitxer d'arrencada del web</li>
        <li>Blocar una IP o un rang d'IP</li>
        <li>Redirigir a l'estat 301 (moure a una nova URL)</li>
        <li>Fer servir (o no) les www de la URL</li>
        <li>Redirigir d'HTTP a HTTPs</li>
        <li>Personalitzar la pàgina d'errors</li>
        <li>Demanar autenticació per a accedir a una carpeta</li>
      </ul>
      </div>
      <div class="mt-4">
        <p><a href="https://en.wikipedia.org/wiki/HTTP_301" target="_blank">https://en.wikipedia.org/wiki/HTTP_301</a></p>
        <p><a href="https://www.geeksforgeeks.org/what-is-htaccess-file-in-php/" target="_blank">https://www.geeksforgeeks.org/what-is-htaccess-file-in-php/</a></p>
      </div>
    
  `
},
{
  title: "6.1 Simbologia del fitxer .htaccess (I)",
  content: `
    <h2 class="slide-title">6.1 Simbologia del fitxer .htaccess</h2>
    
      <p class="lead mb-4"><strong>Simbologia i paràmetres que es fan servir al .htaccess (I):</strong></p>
      <div class="row">
        <div class="col-6">
          <div class="htaccess-item">
            <span class="htaccess-symbol">#</span>
            <span class="htaccess-desc">S'ignora la línia.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[F]</span>
            <span class="htaccess-desc">Forbidden: per forçar un accés denegat. 403 Forbidden.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[L]</span>
            <span class="htaccess-desc">Last rule: per indicar que és l'última regla que cal aplicar</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[N]</span>
            <span class="htaccess-desc">Next: indica continuació fins que les directives siguin aconseguides</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[G]</span>
            <span class="htaccess-desc">Gone: indica al servidor lliurar "Gone" (ja no existeix)</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[P]</span>
            <span class="htaccess-desc">Proxy: instrueix el servidor per manejar les comandes per mod_proxy</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[C]</span>
            <span class="htaccess-desc">Chain: Instrueix el servidor per encadenar la regla actual amb la regla prèvia.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[R]</span>
            <span class="htaccess-desc">Redirect: indica redirecció.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[NC]</span>
            <span class="htaccess-desc">No Case: per indicar que a la directiva no s'ha de distingir entre majúscules i minúscules.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[PT]</span>
            <span class="htaccess-desc">Pass Through: passa l'URL a l'Apache per continuar processant.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[OR]</span>
            <span class="htaccess-desc">Or: per indicar que l'expressió actual s'ha d'interpretar com una alternativa a l'anterior.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[NE]</span>
            <span class="htaccess-desc">No Escape: instrueix el servidor per analitzar les sortides sense escapar caràcters.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[NS]</span>
            <span class="htaccess-desc">No Subrequest: per saltar directives de sub-comandes internes.</span>
          </div>
        </div>
        <div class="col-6">
          <div class="htaccess-item">
            <span class="htaccess-symbol">[QSA]</span>
            <span class="htaccess-desc">Append Query String: per afegir un query string al final de l'expressió (URL).</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[S=x]</span>
            <span class="htaccess-desc">Skip: per saltar les següents "x" regles.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[E=variable:value]</span>
            <span class="htaccess-desc">Environmental Variable: per afegir una variable a un valor.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[T=MIME-type]</span>
            <span class="htaccess-desc">Mime Type: declara mime-type al recurs.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[]</span>
            <span class="htaccess-desc">dins dels parèntesis es tanquen caràcters que defineixen els resultats.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[]+</span>
            <span class="htaccess-desc">s'utilitza per fer combinacions.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[^]</span>
            <span class="htaccess-desc">exclou els caràcters dins del parèntesi, dels resultats. Exemple</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[^xyz]</span>
            <span class="htaccess-desc">[a-z] només lletres.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[a-z]{1,10}</span>
            <span class="htaccess-desc">paraules entre 1 i 10 caràcters.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[0-9]</span>
            <span class="htaccess-desc">només números.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[0-9]{4}</span>
            <span class="htaccess-desc">números de 4 xifres.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">( .*)</span>
            <span class="htaccess-desc">qualsevol expressió.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">a{n}</span>
            <span class="htaccess-desc">especifica el nombre exacte del caràcter que el precedeix.</span>
          </div>
        </div>
      </div>

  `
},
{
  title: "6.2 Simbologia del fitxer .htaccess (II)",
  content: `
    <h2 class="slide-title">6.2 Simbologia del fitxer .htaccess</h2>
      <p class="lead mb-4"><strong>Simbologia i paràmetres que es fan servir al .htaccess (II):</strong></p>
      <div class="row">
        <div class="col-6">
          <div class="htaccess-item">
            <span class="htaccess-symbol">a{n,}</span>
            <span class="htaccess-desc">especifica el número "o més" del caràcter que el precedeix.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">a{n,m}</span>
            <span class="htaccess-desc">especifica un rang entre "n" i "m". Exemple x{4,7} en resulta 4,5,6 o 7 x´s.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">()</span>
            <span class="htaccess-desc">agrupa caràcters</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">^</span>
            <span class="htaccess-desc">denota "el principi" de l'argument.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">$</span>
            <span class="htaccess-desc">denota "la fi" de l'argument.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">?</span>
            <span class="htaccess-desc">Declara com a opcional el caràcter anterior.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">!</span>
            <span class="htaccess-desc">declara negació (excepte). Exemple: "!string" és "excepte string".</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">.</span>
            <span class="htaccess-desc">el punt indica "qualsevol caràcter arbitrari".</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">-</span>
            <span class="htaccess-desc">instrucció "not to".</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">+</span>
            <span class="htaccess-desc">declara "un o més" del caràcter que el precedeix.</span>
          </div>
        </div>
        <div class="col-6">
          <div class="htaccess-item">
            <span class="htaccess-symbol">|</span>
            <span class="htaccess-desc">declara "or". Exemple (x|y) resulta "x" o "y".</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">\</span>
            <span class="htaccess-desc">per llegir caràcters especials. Exemple "\." indica literalment un punt.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">/*</span>
            <span class="htaccess-desc">indica zero o més "/".</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">.*</span>
            <span class="htaccess-desc">indica zero o més caràcters arbitraris.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">^$</span>
            <span class="htaccess-desc">indica un "empty string".</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">^.*$</span>
            <span class="htaccess-desc">pauta estàndard per obtenir-ho tot.</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[^/.]</span>
            <span class="htaccess-desc">defineix, un caràcter que no és "/" ni ".".</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">[^/.]+</span>
            <span class="htaccess-desc">defineix, cap nombre de caràcter que tingui "/" o ".".</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">http://</span>
            <span class="htaccess-desc">és literalment "http://".</span>
          </div>
          <div class="htaccess-item">
            <span class="htaccess-symbol">^domain.*</span>
            <span class="htaccess-desc">defineix un string que comença amb el terme "domain" i continua amb qualsevol nombre de caràcters.</span>
          </div>
        </div>
      </div>
  `
},
{
  title: "6.3 Exemples de Configuració .htaccess",
  content: `
    <h2 class="slide-title">6.3 Exemples de Configuració .htaccess</h2>
   
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="generic-topic h-100">
          <h4>Exemple 1: Compressió i Seguretat</h4>
          <div class="code-block mt-3">
            <div class="code-header">
              <span class="code-language">.htaccess</span>
            </div>
            <pre><code># Activar la compressió de continguts amb mod_deflate
&lt;IfModule mod_deflate.c&gt;
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript
&lt;/IfModule&gt;

# Prohibir l'accés als fitxers del sistema .htaccess i .httpswd
&lt;FilesMatch "^\\.(htaccess|httpswd)$"&gt;
  Order Allow,Deny
  Deny from all
&lt;/FilesMatch&gt;</code></pre>
          </div>
        </div>
      </div>

    </div>
        <div class="row mt-4">
              <div class="col-md-12">
        <div class="generic-topic h-100">
          <h4>Exemple 2: Autenticació i Errors</h4>
          <div class="code-block mt-3">
            <div class="code-header">
              <span class="code-language">.htaccess</span>
            </div>
            <pre><code># Protegir fitxers i carpetes específics amb contrasenya
&lt;FilesMatch "(\\secret|private)\\.txt$"&gt;
  AuthType Basic
  AuthName "Restricted Area"
  AuthUserFile /ruta/al/fitxer/.htpasswd
  Require valid-user
&lt;/FilesMatch&gt;

# Redirigir les sol·licituds a una pàgina d'error personalitzada
ErrorDocument 404 /errors/404.html
ErrorDocument 403 /errors/403.html
ErrorDocument 500 /errors/500.html</code></pre>
          </div>
        </div>
      </div>
        </div>
    <div class="row mt-4">
      <div class="col-md-4">
        <div class="generic-topic h-100">
          <h4>⚡ Compressió de contingut</h4>
          <p><strong>mod_deflate.c</strong> comprimeix els fitxers abans d'enviar-los al client, reduint l'ample de banda i millorant els temps de càrrega.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="generic-topic h-100">
          <h4>🛡️ Protecció de fitxers</h4>
          <p><strong>FilesMatch</strong> amb "Deny from all" impedeix l'accés directe als fitxers de configuració sensibles com .htaccess i .httpswd.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="generic-topic h-100">
          <h4>🔑 Autenticació Bàsica</h4>
          <p><strong>AuthType Basic</strong> demana nom d'usuari i contrasenya per accedir a recursos protegits, utilitzant el fitxer .htpasswd.</p>
        </div>
      </div>
    </div>
    
    <div class="important-note mt-4">
      <strong>💡 Important: </strong>Assegura't que el servidor Apache té els mòduls necessaris activats (mod_deflate, mod_auth_basic, etc.).
    </div>
  `
}
];