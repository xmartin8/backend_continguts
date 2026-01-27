// Diapositives sobre atacs i proteccions finals
const seguretatAttacksSlides = [
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
          Per utilitzar la funció <code>open_basedir</code>, hem d'afegir la següent línia
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

        <p>Això estableix el directori base a /ruta/al/directoribase, i PHP només permetrà l'accés a fitxers i carpetes dins d'aquest directori.</p>
        <p>Si vols permetre l'accés a més directoris, pots afegir-los a la línia de configuració separats per una barra vertical (pipe):</p>
                  <div>
            <img src="../img/restr_acces.png" alt="restr acces" />
          </div>
        <p>Aquesta directiva restringeix els fitxers i carpetes als quals PHP pot accedir:</p>    
    <ul>
        <li><strong>Limita l'accés:</strong> Només permet a PHP accedir als directoris que especifiques explícitament</li>
        <li><strong>Protecció de seguretat:</strong> Impedeix que scripts maliciosos accedeixin a fitxers sensibles del sistema (com <code>/etc/passwd</code> que conté informació d'usuaris del sistema)</li>
        <li><strong>Configuració per projecte:</strong> Pots definir una carpeta específica per cada projecte</li>
    </ul>    
    <p>Això significa que PHP només podrà accedir a fitxers dins d'aquesta carpeta i les seves subcarpetes. Qualsevol intent d'accedir a fitxers fora d'aquest directori serà bloquejat.</p>  
    <h4>Per què és important?</h4>
    <p>Si algú intenta explotar una vulnerabilitat al nostre codi PHP per accedir a fitxers del sistema, <code>open_basedir</code> actuarà com una barrera de protecció addicional, evitant que puguin llegir o modificar fitxers crítics del servidor.</p>
    <p>Sense aquesta restricció, un script PHP maliciós o mal programat podria intentar accedir a fitxers sensibles del sistema, per exemple:</p>    
    <ul>
        <li><code>/etc/passwd</code> (en Linux)</li>
        <li>fitxers de configuració del sistema</li>
        <li>altres projectes del servidor</li>
    </ul>    
    <p>Amb <code>open_basedir</code>, aquest accés queda bloquejat.</p>
      </div>
      `
  },
  {
    title: "8. urlencode(string)",
    content: `
      <h2 class="slide-title">8. urlencode(string): string</h2>
      <div class="text-large"> 
      <p>Generar URL vàlides de manera segura.</p>
      <p>Imagineu que l'entrada de l'usuari s'utilitza per a generar un URL:</p>
            <div class="code-block">
        <div class="code-header">
          <span>exemple SENSE urlencode</span>
        </div>
        <pre><code class="php">&lt;?php
echo '&lt;a href="www.domini.cat/login.php?user=$userID"&gt;';
?&gt;</code></pre>
      </div>
    <p>En aquest cas, podeu utilitzar la funció <code>urlencode</code> per a generar un URL segur</p>
    <p>La farem servir quan volem codificar una cadena per a fer-la servir en una part de la URL.</p>
      <div class="code-block">
        <div class="code-header">
          <span>exemple AMB urlencode</span>
        </div>
        <pre><code class="php">&lt;?php
echo '&lt;a href="www.domini.cat/login.php?user=' . urlencode($userID) . '"&gt;';
?&gt;</code></pre>
      </div>
      <h4>Per exemple</h4>        
      <p>La funció <code>urlencode()</code> codifica la cadena de text <em>"Hola, com estàs?"</em> en un format adequat per a una UR1L, substituint espais en blanc per "+" i caràcters especials per codis d'escriptura.</p>
      <p>Pot ser útil si volem incloure una cadena de text en una URL i assegurar-te que es transmet correctament.</p>    
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
      </div>
    `
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
          si aquest altre web té molts visitants al dia, llavors s'han
          de carregar les nostres imatges…
        </p>
        <div class="requadre-arrow">⬇</div>
        <p class="requadre-impacte">
          Afectació a l'ampla de banda del nostre <strong>Hosting</strong>
        </p>
      </div>
      <p class="mt-3"><strong>Dit d'una altra manera:</strong></p>
      <p>
        Es refereix a l'ús d'enllaços a fitxers (com ara imatges) des d'un
        altre lloc web. Per exemple, si un lloc web enllaça a una imatge
        emmagatzemada en el teu lloc web sense el teu permís, això es
        coneix com a <em>hotlinking</em>.
      </p>
      <p class="mt-3"><strong>Amb el següent pedaç de codi al nostre .htaccess, podem evitar el hotlinking i reemplaçar la nostra imatge original per alguna altra amb un avís de la mala praxis del hotlinking</strong></p>
      <div class="code-block mt-4">
        <div class="code-header">
          <span>configuració .htaccess per a evitar hotlinking</span>
        </div>
        <pre><code class="language-apache">RewriteEngine On
RewriteCond %{HTTP_REFERER} !^http://(.+\\.)?elnostredomini\\.com/ [NC]
RewriteCond %{HTTP_REFERER} !^$
RewriteRule .*\\.(jpg|gif|bmp|png)$ http://hotlink.elnostredomini.com/hotlinking_prohibit.jpg [L]</code></pre>
         </div>     
<div class="explanation-box mt-3" style="background: #ffebee; border: 2px solid #c53030; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <p style="margin: 0; font-style: italic;"><strong>RewriteCond</strong> - La directiva RewriteCond especifica que només s'apliqui la regla de reescriptura si l'URL del lloc web que fa la sol·licitud no és buida i no coincideix amb <span style="color: #c53030;">"http://elnostredomini.com"</span> o <span style="color: #c53030;">"http://www.elnostredomini.com"</span>.</p>
        </div>
        <div class="explanation-box" style="background: #e0f7fa; border: 2px solid #0097a7; padding: 15px; border-radius: 8px;">
          <p style="margin: 0; font-style: italic;"><strong>RewriteRule</strong> - La directiva RewriteRule especifica que, si es compleixen les condicions anteriors, es mostri un error 403 (prohibit) per a fitxers amb les extensions "jpg", "jpeg", "png" o "gif". Això evita que altres llocs web enllaçin a les teves imatges sense el teu permís. Si vols permetre l'accés des d'altres llocs web, pots afegir-los a la directiva RewriteCond separats per una pipe (|).</p>
        </div>

    </div>
  `
},
{
  title: "9. Evitar el Hotlinking",
  content: `
    <h2 class="slide-title">9. Evitar el Hotlinking (continuació)</h2>
    <div class="text-large">
      <p class="mb-4">També podem fer servir la funció <code>$_SERVER['HTTP_REFERER']</code> dins del nostre codi PHP, per a comprovar si la sol·licitud prové d'un lloc web autoritzat.</p>
      
      <div class="code-block">
        <div class="code-header">
          <span>exemple PHP per evitar hotlinking</span>
        </div>
        <pre><code class="language-php">&lt;?php
  // Obtenir l'URL del lloc web que fa la sol·licitud
  $referrer = $_SERVER['HTTP_REFERER'];

  // Comprovar si l'URL del lloc web està en la llista d'autoritzats
  if (!in_array($referrer, array('http://url_del_lloc.com', 'http://www. url_del_lloc.com'))) {
    // Redirigir a una pàgina d'error si l'URL del lloc web no està autoritzat
    header('Location: http://www.elmeudomini.com/errors/hotlinking.html');
    exit;
  }

  // Mostrar la imatge si l'URL del lloc web està autoritzat
  header('Content-Type: image/jpeg');
  readfile('/ruta/a/la/imatge.jpg');
?&gt;</code></pre>
      </div>

      <p class="mt-4">L'script PHP comprova si l'URL del lloc web que fa la sol·licitud està en la llista d'autoritzats i redirigeix a una pàgina d'error si no ho està. Si l'URL està autoritzat, l'script mostra la imatge especificada. Aquest codi es pot adaptar tot modificant la llista d'autoritzats i la pàgina d'error que es redirigeix.</p>
    </div>
  `
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
    title: "11-12. SSL",
    content: `
      <h2 class="slide-title">11. Configuració SSL</h2>
      
      <h4>11. Configuració SSL</h4>
      <p>SysAdmin → update SSL certificate</p>

      <div class="important-note">
        <p>Identificar les dades d'entrada del lloc web, com ara les dades dels formularis o les variables <code>$_GET</code> i <code>$_POST</code>.</p>
        <p>Buscar les dades d'entrada en el codi PHP i comprovar si es valida correctament amb la funció <code>htmlspecialchars()</code> o una funció similar.</p>
      </div>
    `,
  },
    {
    title: "12. Atacs XSS",
    content: `
      <h2 class="slide-title">12. Atacs XSS</h2>
      
      <h4 class="mt-4">12. Atacs XSS (Cross-site scripting)</h4>
      <p>Per a fer una previsió de possibles atacs XSS, caldria comprovar les possibles vulnerabilitats de la nostra web, és a dir, analitzar tot el codi font de la nostra pàgina PHP.</p>
      
      <div class="important-note">
        <p>Identificar les dades d'entrada del lloc web, com ara les dades dels formularis o les variables <code>$_GET</code> i <code>$_POST</code>.</p>
        <p>Buscar les dades d'entrada en el codi PHP i comprovar si es valida correctament amb la funció <code>htmlspecialchars()</code> o una funció similar.</p>
      </div>
    `,
  }
];