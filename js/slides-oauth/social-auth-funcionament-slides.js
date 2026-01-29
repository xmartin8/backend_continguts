// Diapositives sobre proveïdors i implementacions
const socialAuthProvidersSlides = [
  {
    title: "OAuth2 (Open Authoritzation)",
    content: `
      <h2 class="slide-title">8. Com actuen les xarxes socials: OAuth2.0</h2>
      <div class="text-large">
        <p class="lead mb-4"><em>Com actuen les xarxes socials quan es vol fer una autenticació a través d'elles?</em></p>
        
        <div class="social-auth-images mt-4 mb-4">
          <div class="social-auth-image-container text-center">
            <img src="../img/oauth-4.png" alt="OAuth 2.0" class="social-auth-image" />
          </div>
          
          <div class="d-flex align-items-center justify-content-center" style="flex: 0 0 auto; padding: 0 20px;">
            <div class="requadre-arrow" style="font-size: 3rem; color: #0d6efd; font-weight: bold;">→</div>
          </div>
          
          <div class="social-auth-image-container text-center">
            <img src="../img/oauth-3.png" alt="OAuth 2.0" class="social-auth-image" />
          </div>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">Per implementar autenticació amb Google seguim aquests passos:</div>
        </div>

        <div class="mt-4">
          <h4>1. Fer servir la llibreria "google-api-php-client"</h4>
          <div class="code-block mt-3">
            <div class="code-header">
              <span class="code-language">PHP</span>
              <button class="copy-btn" onclick="copyCode('oauth-google1', this)">Copiar</button>
            </div>
            <pre><code id="oauth-google1">// Instal·lar via Composer
composer require google/apiclient:"^2.0"

// Incloure l'autoloader
require_once 'vendor/autoload.php';</code></pre>
          </div>
        </div>
        
        <div class="mt-4">
          <h4>2. Registrar l'aplicació en el portal de desenvolupadors de Google</h4>
          <ol class="concept-list">
            <li>Accedir a <a href="https://console.developers.google.com" target="_blank">Google Cloud Console</a></li>
            <li>Crear un nou projecte o seleccionar-ne un existent</li>
            <li>Habilitar l'API de Google Sign-In</li>
            <li>Configurar la pantalla de consentiment OAuth</li>
            <li>Crear credencials OAuth 2.0 Client ID</li>
            <li>Afegir URL d'autorització i redirecció</li>
          </ol>
        </div>
        
        <div class="mt-4">
          <h4>3. Configuració de credencials:</h4>
          <div class="row">
            <div class="col-md-6">
              <div class="generic-topic h-100">
                <h4>Client ID</h4>
                <p>Identificador únic de la teva aplicació</p>
                <code class="small">xxxxxxxxxx-xxxxxxxxxxxxxxxx.apps.googleusercontent.com</code>
              </div>
            </div>
            <div class="col-md-6">
              <div class="generic-topic h-100">
                <h4>Client Secret</h4>
                <p>Clau secreta per a l'autenticació</p>
                <code class="small">GOCSPX-xxxxxxxxxxxxxxxxxxxx</code>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-4">
          <h4>4. Configuració bàsica del client:</h4>
          <div class="code-block mt-3">
            <div class="code-header">
              <span class="code-language">PHP</span>
              <button class="copy-btn" onclick="copyCode('oauth-google2', this)">Copiar</button>
            </div>
            <pre><code id="oauth-google2">$client = new Google_Client();
$client->setClientId('EL_TEU_CLIENT_ID');
$client->setClientSecret('EL_TEU_CLIENT_SECRET');
$client->setRedirectUri('https://el-teu-domini.com/callback.php');
$client->addScope('email');
$client->addScope('profile');</code></pre>
          </div>
        </div>
      </div>
    `
  },
    {
    title: "Gestió d'Aplicacions Connectades",
    content: `
      <h2 class="slide-title">9. Com actuen les xarxes socials: HybridAuth</h2>
      <div class="text-large">
        <div class="social-auth-images mt-4 mb-4">
          <div class="social-auth-image-container text-center">
            <img src="../img/hybridauth-1.png" alt="HybridAuth" class="social-auth-image" />
          </div>
          
          <div class="d-flex align-items-center justify-content-center" style="flex: 0 0 auto; padding: 0 20px;">
            <div class="requadre-arrow" style="font-size: 3rem; color: #0d6efd; font-weight: bold;">→</div>
          </div>
          
          <div class="social-auth-image-container text-center">
            <img src="../img/hybridauth-2.png" alt="HybridAuth" class="social-auth-image" />
          </div>
        </div>
        
        <h4 class="mt-4">🔍 Anàlisi del flux complet:</h4>
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>📝 Autorització</h4>
              <p><strong>Imatge 1:</strong> L'usuari veu la pantalla d'autorització de Twitter on se li demana permís per a que l'aplicació "Social Authentication 1" accedeixi al seu compte.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>✅ Confirmació</h4>
              <p><strong>Imatge 2:</strong> Un cop autoritzada, l'aplicació apareix a "Connected apps" on l'usuari pot veure quina informació té accés i revocar-lo si ho desitja.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>⚙️ Gestió</h4>
              <p>L'usuari manté el control total sobre les aplicacions connectades i pot gestionar els permisos en qualsevol moment des del seu compte de Twitter.</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
];