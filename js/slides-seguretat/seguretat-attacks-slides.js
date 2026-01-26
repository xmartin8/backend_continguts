// Diapositives sobre atacs i proteccions finals
const seguretatAttacksSlides = [
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