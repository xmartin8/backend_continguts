// Diapositives sobre seguretat amb Cookies i Sessions
const cookiesSecuritySlides = [
  {
    title: "Seguretat amb Cookies",
    content: `
      <h2 class="slide-title">Seguretat amb Cookies</h2>
      <div class="text-large">
        <h4>⚠️ Principals amenaces:</h4>
        <div class="row mt-2">
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #fff3cd;">
              <h4>🎯 XSS (Cross-Site Scripting)</h4>
              <p>Un atacant injecta JavaScript maliciós que pot accedir a les cookies del usuari.</p>
              <div class="mt-1">
                <strong>Protecció:</strong> Utilitzar l'atribut <code>HttpOnly</code>.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #f8d7da;">
              <h4>🎭 CSRF (Cross-Site Request Forgery)</h4>
              <p>Un atacant obliga l'usuari a enviar sol·licituds no desitjades des del seu navegador.</p>
              <div class="mt-1">
                <strong>Protecció:</strong> Utilitzar tokens CSRF i <code>SameSite</code> cookies.
              </div>
            </div>
          </div>
        </div>
        
        <div class="row mt-2">
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #d1ecf1;">
              <h4>👁️ Session Hijacking</h4>
              <p>Robatori de l'ID de sessió per suplantar l'usuari.</p>
              <div class="mt-1">
                <strong>Protecció:</strong> Regenerar ID de sessió, utilitzar HTTPS.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #d4edda;">
              <h4>📦 Cookie Theft</h4>
              <p>Robatori físic de les cookies emmagatzemades.</p>
              <div class="mt-1">
                <strong>Protecció:</strong> Encriptar cookies sensibles, expiració curta.
              </div>
            </div>
          </div>
        </div>
        
        <h4>🔒 Configuració segura de cookies:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('secure-cookie-config', this)">Copiar</button>
          </div>
          <pre><code id="secure-cookie-config"><?php
// Configuració de cookies segura
session_set_cookie_params([
    'lifetime' => 0,                      // Fins que es tanca el navegador
    'path' => '/',                        // Tot el domini
    'domain' => $_SERVER['HTTP_HOST'],    // Domini actual
    'secure' => true,                     // Només HTTPS
    'httponly' => true,                   // No accessible per JS
    'samesite' => 'Strict'                // Protecció CSRF
]);

session_start();

// Regenerar ID de sessió per evitar fixation
session_regenerate_id(true);</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "Millors pràctiques de seguretat",
    content: `
      <h2 class="slide-title">Millors pràctiques de seguretat</h2>
      <div class="text-large">
        <div class="row">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>✅ Per a Cookies:</h4>
              <ul>
                <li>Utilitza <code>HttpOnly</code> per evitar XSS</li>
                <li>Activa <code>Secure</code> per a només HTTPS</li>
                <li>Configura <code>SameSite=Strict</code> o <code>Lax</code></li>
                <li>No emmagatzemis dades sensibles</li>
                <li>Estableix temps d'expiració curts</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>✅ Per a Sessions:</h4>
              <ul>
                <li>Regenera l'ID de sessió després de login</li>
                <li>Utilitza emmagatzematge segur (Redis, DB)</li>
                <li>Implementa timeout d'inactivitat</li>
                <li>Destrueix sessions antigues</li>
                <li>Verifica IP/User-Agent per a sessions crítiques</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h4>⚙️ Configuració segura de PHP.ini:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">ini</span>
            <button class="copy-btn" onclick="copyCode('phpini-security', this)">Copiar</button>
          </div>
          <pre><code id="phpini-security">; php.ini - Configuració segura de sessions
session.cookie_secure = 1              ; Només HTTPS
session.cookie_httponly = 1            ; No accessible per JavaScript
session.cookie_samesite = "Strict"     ; Protecció CSRF
session.use_strict_mode = 1            ; Només IDs de sessió iniciats pel servidor
session.use_only_cookies = 1           ; No acceptar IDs per URL
session.cookie_lifetime = 0            ; Cookie de sessió (només navegador)
session.gc_maxlifetime = 1800          ; 30 minuts d'inactivitat
session.sid_length = 128               ; ID llarg
session.sid_bits_per_character = 6     ; Més entropia

; Emmagatzematge segur de sessions
session.save_handler = redis           ; O 'memcached', 'files'
session.save_path = "tcp://127.0.0.1:6379"</code></pre>
        </div>
        
        <div class="important-note mt-3">
          <strong>🔐 Recorda:</strong> La seguretat és un procés continu. Revisa regularment les teves configuracions, actualitza PHP i les llibreries, i realitza audits de seguretat periòdics.
        </div>
      </div>
    `
  }
];