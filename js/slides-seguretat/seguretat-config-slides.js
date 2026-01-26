// Diapositives sobre configuració i protecció
const seguretatConfigSlides = [
  {
    title: "6. Configuració del fitxer .htaccess",
    content: `
      <h2 class="slide-title">6. Configuració del fitxer .htaccess</h2>           
      
      <ul class="concept-list">
        <li>Canviar el fitxer d'arrencada del web</li>
        <li>Blocar una IP o un rang d'IP</li>
        <li>Redirigir a l'estat 301 (moure a una nova URL)</li>
        <li>Fer servir (o no) les www de la URL</li>
        <li>Redirigir d'HTTP a HTTPs</li>
        <li>Personalitzar la pàgina d'errors</li>
        <li>Demanar autenticació per a accedir a una carpeta</li>
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
  }
];