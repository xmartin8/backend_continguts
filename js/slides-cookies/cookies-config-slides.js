const cookiesConfigSlides = [
  {
    title: "Configuració de PHP.ini per a Sessions",
    content: `
      <h2 class="slide-title">Configuració de PHP.ini per a Sessions</h2>
      <div class="text-large">
        <h4>⚙️ Paràmetres principals de configuració:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">ini</span>
            <button class="copy-btn" onclick="copyCode('session-config', this)">Copiar</button>
          </div>
          <pre><code id="session-config">; ============== CONFIGURACIÓ BÀSICA ==============
session.save_handler = files            ; files, redis, memcached, etc.
session.save_path = "/tmp"              ; Ruta per a fitxers de sessió
session.name = "PHPSESSID"              ; Nom de la cookie de sessió
session.auto_start = 0                  ; No iniciar sessió automàticament

; ============== SEGURETAT ==============
session.use_strict_mode = 1             ; Només IDs generats pel servidor
session.use_cookies = 1                 ; Utilitzar cookies per a IDs
session.use_only_cookies = 1            ; No acceptar IDs per URL
session.cookie_secure = 1               ; Només HTTPS (en producció)
session.cookie_httponly = 1             ; No accessible per JavaScript
session.cookie_samesite = "Strict"      ; Protecció CSRF

; ============== TEMPS ==============
session.gc_maxlifetime = 1440           ; 24 minuts (en segons)
session.cookie_lifetime = 0             ; Cookie de sessió (tancar navegador)
session.gc_probability = 1              ; Probabilitat de GC
session.gc_divisor = 100                ; Freqüència de GC (1/100)

; ============== PERFORMANCE ==============
session.cache_limiter = "nocache"       ; Control de càrrega
session.cache_expire = 180              ; 3 hores de càrrega
session.sid_length = 32                 ; Longitud de l'ID de sessió
session.sid_bits_per_character = 5      ; Entropia (4, 5 o 6)</code></pre>
        </div>
        
        <h4>🔧 Configuració programàtica:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('session-programmatic', this)">Copiar</button>
          </div>
          <pre><code id="session-programmatic"><?php
// Configurar paràmetres de sessió abans de session_start()
ini_set('session.cookie_secure', 1);
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_samesite', 'Strict');
ini_set('session.use_strict_mode', 1);
ini_set('session.use_only_cookies', 1);
ini_set('session.gc_maxlifetime', 1800); // 30 minuts

// O utilitzar session_set_cookie_params()
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'domain' => $_SERVER['HTTP_HOST'],
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Strict'
]);

// Iniciar sessió amb configuració personalitzada
session_start([
    'cookie_secure' => true,
    'cookie_httponly' => true,
    'cookie_samesite' => 'Strict',
    'use_strict_mode' => true,
    'use_only_cookies' => true,
    'read_and_close' => false // Per a millor rendiment en lectures
]);</code></pre>
        </div>
      </div>
    `
  }
];