// Diapositives sobre gestió de Cookies
const cookiesManagementSlides = [
  {
    title: "Gestió de Cookies amb PHP",
    content: `
      <h2 class="slide-title">Gestió de Cookies amb PHP</h2>
      <div class="text-large">
        <h4>1️⃣ Establir una cookie:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('setcookie-example', this)">Copiar</button>
          </div>
          <pre><code id="setcookie-example">&lt;?php
// Establim una cookie d'una 1h de duració
setcookie(
    "usuari",           // Nom de la cookie
    "nom_usuari",       // Valor de la cookie
    time() + 3600       // Temps d'expiració (1 hora)
);</code></pre>
        </div>
        
        <h4>2️⃣ Accedir a una cookie:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('getcookie-example', this)">Copiar</button>
          </div>
          <pre><code id="getcookie-example">&lt;?php
if (isset($_COOKIE['usuari'])) {
    echo "Usuari: " . $_COOKIE['usuari'];
} else {
    echo "No hi ha cookie d'usuari establerta.";
}</code></pre>
        </div>
        
        <h4>3️⃣ Esborrar una cookie:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('deletecookie-example', this)">Copiar</button>
          </div>
          <pre><code id="deletecookie-example">&lt;?php
// Per esborrar la cookie, establim un temps passat
setcookie("usuari", "", time() - 3600);

// També podem esborrar del superglobal $_COOKIE
unset($_COOKIE['usuari']);</code></pre>
        </div>
        
        <div class="important-note mt-3">
          <strong>⚠️ Important:</strong> La funció <code>setcookie()</code> ha de ser cridada abans que qualsevol sortida al navegador (abans de qualsevol HTML, espai, o echo).
        </div>
      </div>
    `
  },
  {
    title: "Paràmetres de setcookie()",
    content: `
      <h2 class="slide-title">Paràmetres de la funció setcookie()</h2>
      <div class="text-large">
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('setcookie-full', this)">Copiar</button>
          </div>
          <pre><code id="setcookie-full">&lt;?php
setcookie(
    string $name,                     // Nom de la cookie
    string $value = "",               // Valor de la cookie
    int $expires = 0,                 // Timestamp d'expiració
    string $path = "",                // Path vàlid per a la cookie
    string $domain = "",              // Domini vàlid
    bool $secure = false,             // Només per HTTPS
    bool $httponly = false,           // No accessible per JavaScript
    string $samesite = ""             // SameSite policy
);</code></pre>
        </div>
        
        <h4>🎯 Exemples d'ús amb paràmetres:</h4>
        
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('cookie-secure', this)">Copiar</button>
          </div>
          <pre><code id="cookie-secure">&lt;?php
// Cookie segura només accessible via HTTP (no JS)
setcookie(
    "sessio_id",
    "abc123def456",
    time() + (86400 * 30),  // 30 dies
    "/",                    // Vàlida per tot el domini
    ".exemple.cat",         // Vàlida per totes les subdominis
    true,                   // Només per HTTPS
    true                    // HttpOnly (no accessible per JS)
);</code></pre>
        </div>
        
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('cookie-samesite', this)">Copiar</button>
          </div>
          <pre><code id="cookie-samesite">&lt;?php
// Cookie amb política SameSite per a seguretat CSRF
setcookie(
    "token_csrf",
    bin2hex(random_bytes(32)),
    time() + 3600,
    "/",
    "",
    true,
    true,
    "Strict"  // SameSite=Strict (més segur)
);</code></pre>
        </div>
      </div>
    `
  }
];