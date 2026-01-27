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

      </div>
    `
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