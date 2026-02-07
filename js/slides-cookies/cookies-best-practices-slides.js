const cookiesBestPracticesSlides = [
  {
    title: "Resum de millors pràctiques",
    content: `
      <h2 class="slide-title">Resum de millors pràctiques</h2>
      <div class="text-large">
        <h4>✅ Per a totes les aplicacions:</h4>
        <div class="row">
          <div class="col-md-6">
            <ul class="concept-list">
              <li><strong>Sempre utilitza HTTPS</strong> en producció</li>
              <li><strong>Implementa timeout</strong> d'inactivitat</li>
              <li><strong>Regenera IDs de sessió</strong> després de login privilegiat</li>
              <li><strong>Valida i neteja</strong> totes les dades d'entrada</li>
              <li><strong>Implementa CSRF tokens</strong> per a formularis</li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="concept-list">
              <li><strong>Mantén PHP actualitzat</strong> (última versió estable)</li>
              <li><strong>Configura correctament</strong> php.ini per a seguretat</li>
              <li><strong>Utilitza llibreries probades</strong> per a autenticació</li>
              <li><strong>Registra activitat sospitosa</strong></li>
              <li><strong>Realitza audits regulars</strong> de seguretat</li>
            </ul>
          </div>
        </div>
        
        <div class="requadre mt-3">
          <p class="requadre-impacte">La seguretat no és una funcionalitat, és un procés continu.</p>
        </div>
        
        <h4>🎯 Flux recomanat per a autenticació segura:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('secure-auth-flow', this)">Copiar</button>
          </div>
          <pre><code id="secure-auth-flow"><?php
session_start([
    'cookie_secure' => true,
    'cookie_httponly' => true,
    'cookie_samesite' => 'Strict',
    'use_strict_mode' => true
]);

// 1. Verificar si l'usuari ja està autenticat
if (!isset($_SESSION['user_id'])) {
    // Redirigir a login
    header('Location: /login.php');
    exit;
}

// 2. Verificar timeout d'inactivitat (30 minuts)
$inactivity_timeout = 1800; // 30 minuts en segons
if (isset($_SESSION['last_activity']) && 
    (time() - $_SESSION['last_activity'] > $inactivity_timeout)) {
    // Destruir sessió i redirigir
    session_unset();
    session_destroy();
    header('Location: /login.php?timeout=1');
    exit;
}

// 3. Actualitzar timestamp d'activitat
$_SESSION['last_activity'] = time();

// 4. Regenerar ID de sessió cada 5 minuts per a seguretat addicional
$regenerate_interval = 300; // 5 minuts
if (!isset($_SESSION['regenerate_time']) || 
    (time() - $_SESSION['regenerate_time'] > $regenerate_interval)) {
    session_regenerate_id(true);
    $_SESSION['regenerate_time'] = time();
}</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "Recursos i eines útils",
    content: `
      <h2 class="slide-title">Recursos i eines útils</h2>
      <div class="text-large">
        <h4>🔧 Eines per a desenvolupadors:</h4>
        <div class="generic-topics mt-2">
          <div class="generic-topic">
            <h4>🔍 Depuració de Cookies</h4>
            <p><strong>DevTools del navegador:</strong> Aplicació → Emmagatzematge → Cookies<br>
            <strong>PHP:</strong> <code>print_r($_COOKIE)</code>, <code>print_r($_SESSION)</code></p>
          </div>
          
          <div class="generic-topic">
            <h4>📊 Analitzadors de Seguretat</h4>
            <p><strong>OWASP ZAP:</strong> Escaneig de vulnerabilitats<br>
            <strong>Burp Suite:</strong> Testing de seguretat avançat<br>
            <strong>Cookie-checker:</strong> Anàlisi de configuració de cookies</p>
          </div>
          
          <div class="generic-topic">
            <h4>📚 Llibreries PHP segures</h4>
            <p><strong>ParagonIE libraries:</strong> Funcions criptogràfiques segures<br>
            <strong>PHP Password Hashing:</strong> <code>password_hash()</code>, <code>password_verify()</code><br>
            <strong>Symfony Security:</strong> Components d'autenticació i autorització</p>
          </div>
          
          <div class="generic-topic">
            <h4>⚙️ Configuradors PHP</h4>
            <p><strong>PHP Security Checker:</strong> <code>composer require sensiolabs/security-checker</code><br>
            <strong>PHPStan:</strong> Anàlisi estàtic de codi<br>
            <strong>Psalm:</strong> Anàlisi de tipus i vulnerabilitats</p>
          </div>
        </div>
        
        <h4>📖 Documentació oficial:</h4>
        <ul class="concept-list">
          <li><strong>PHP Manual - Sessions:</strong> <a href="https://www.php.net/manual/en/book.session.php" target="_blank">php.net/session</a></li>
          <li><strong>PHP Manual - Cookies:</strong> <a href="https://www.php.net/manual/en/features.cookies.php" target="_blank">php.net/cookies</a></li>
          <li><strong>OWASP Session Management:</strong> <a href="https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" target="_blank">OWASP Cheat Sheet</a></li>
          <li><strong>GDPR Guidelines:</strong> <a href="https://gdpr-info.eu/" target="_blank">Regulació oficial</a></li>
        </ul>
        
        <div class="important-note mt-3">
          <strong>💡 Consell final:</strong> Sempre dissenya pensant en la seguretat des del principi (Security by Design). És més fàcil i barat que arreglar vulnerabilitats després.
        </div>
      </div>
    `
  }
];