const slides = [
  {
    title: "Social Authentication en PHP",
    content: `
            <div class="social-auth-content">
                <div class="social-auth-images">
                    <div class="social-auth-image-container">
                        <img src="../img/hybridauth.png" alt="HybridAuth" class="social-auth-image" />
                    </div>
                    
                    <div class="social-auth-image-container">
                        <img src="../img/oauth-2-sm.png" alt="OAuth 2.0" class="social-auth-image" />
                    </div>
                </div>

                <div class="generic-info">
                    <h3 class="slide-title">Social Authentication en PHP</h3>
                    <div class="generic-topics">
                        <div class="generic-topic">
                            <h4>🔑 Què és OAuth?</h4>
                            <p>Protocol d'autorització estàndard que permet als usuaris concedir accés limitat als seus recursos sense compartir credencials.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>🌐 Autenticació Social</h4>
                            <p>Permet als usuaris utilitzar les seves identitats existents de xarxes socials per accedir a la teva aplicació.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>⚙️ HybridAuth</h4>
                            <p>Biblioteca PHP de codi obert que simplifica l'autenticació amb múltiples proveïdors (Google, Facebook, Twitter, etc.).</p>
                        </div>

                        <div class="generic-topic">
                            <h4>✅ Avantatges</h4>
                            <p>Millor experiència d'usuari, menys contrasenyes per recordar, dades de perfil actualitzades automàticament.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>⚠️ Desavantatges</h4>
                            <p>Depenència de tercers, problemes de privacitat, possibilitat que el proveïdor canviï les seves API.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>🔒 Seguretat</h4>
                            <p>Utilitza tokens d'accés en lloc de contrasenyes, tokens caducables, i autorització amb àmbit limitat.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>📋 Flux OAuth 2.0</h4>
                            <p>Redirecció a proveïdor → Autorització de l'usuari → Codi d'autorització → Intercanvi per token d'accés → Accés a API.</p>
                        </div>

                        <div class="generic-topic">
                            <h4>🔄 Tokens</h4>
                            <p>Access Token: per a sol·licituds API. Refresh Token: per obtenir nous access tokens. ID Token: informació de l'usuari (OpenID Connect).</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
  },
  // Nou slide 1: Conceptes bàsics - Tokens
  {
    title: "Conceptes bàsics: Què és un Token?",
    content: `
            <h2 class="slide-title">1. Què és un Token?</h2>
            <div class="text-large">
                <p class="lead">Un token és un <strong>senyal, mostra o prova</strong> que representa alguna cosa.</p>
                
                <div class="requadre">
                    <p><strong>Procés de substitució:</strong></p>
                    <p>Un token substitueix un <strong>element de dades sensible</strong> per un equivalent <strong>no sensible</strong>.</p>
                    <p class="requadre-arrow">⇅</p>
                    <p><span class="requadre-impacte">Només té significat o valor extrínsec per la pròpia aplicació que ha creat el token.</span></p>
                </div>
                
                <h4 class="mt-4">🔑 Ús dels Tokens</h4>
                <p>Es fan servir com a <strong>clau d'accés</strong> per mantenir la comunicació amb la API sense haver de realitzar de nou l'autenticació amb credencials.</p>
                
                <div class="module-card mt-4">
                    <div class="module-title">📚 Analogia</div>
                    <p>Vindria a ser com el concepte de <strong>clau pública i clau privada</strong> en la comunicació entre un host i una app.</p>
                </div>
            </div>
        `
  },
  // Nou slide 2: Generació de Tokens
  {
    title: "Generació de Tokens segurs",
    content: `
            <h2 class="slide-title">2. Generació de Tokens</h2>
            <div class="text-large">
                <p>Per generar tokens criptogràficament segurs podem fer servir funcions PHP específiques:</p>
                
                <div class="code-block mt-4">
                    <div class="code-header">
                        <span class="code-language">PHP</span>
                        <button class="copy-btn" onclick="copyCode('code1', this)">Copiar</button>
                    </div>
                    <pre><code id="code1">openssl_random_pseudo_bytes(int $length, bool &$strong_result = null): string</code></pre>
                </div>
                
                <h4 class="mt-4">📝 Exemples pràctics:</h4>
                
                <div class="code-block mt-3">
                    <div class="code-header">
                        <span class="code-language">PHP</span>
                        <button class="copy-btn" onclick="copyCode('code2', this)">Copiar</button>
                    </div>
                    <pre><code id="code2">echo uniqid();
// Sortida: 261b8fbcdc4ff0. ...</code></pre>
                </div>
                
                <div class="code-block mt-3">
                    <div class="code-header">
                        <span class="code-language">PHP</span>
                        <button class="copy-btn" onclick="copyCode('code3', this)">Copiar</button>
                    </div>
                    <pre><code id="code3">$x = bin2hex(openssl_random_pseudo_bytes(16));
echo $x;
// Sortida: 6f19e8d4f5df8fae1e124941a48d980f (32 caràcters)</code></pre>
                </div>
                
                <div class="important-note mt-4">
                    <strong>📚 Enllaços útils:</strong><br>
                    • <a href="https://www.php.net/manual/en/function.uniqid.php" target="_blank">uniqid() - PHP Manual</a><br>
                    • <a href="https://www.php.net/manual/en/function.bin2hex.php" target="_blank">bin2hex() - PHP Manual</a><br>
                    • <a href="https://www.php.net/manual/en/function.openssl-random-pseudo-bytes.php" target="_blank">openssl_random_pseudo_bytes() - PHP Manual</a>
                </div>
            </div>
        `
  },
  // Nou slide 3: Reflexió sobre Tokens
  {
    title: "Reflexió sobre Tokens i Extensions",
    content: `
            <h2 class="slide-title">🤔 Reflexió: Extensions PHP per a tokens</h2>
            <div class="text-large">
                <div class="module-card">
                    <div class="module-title">❓ Pregunta important</div>
                    <p><strong>Cal fer servir el repositori PECL (PHP Extension Community Library)?</strong></p>
                </div>
                
                <h4 class="mt-4">💡 Consideracions:</h4>
                <ul class="concept-list">
                    <li><strong>PECL</strong> conté extensions PHP escrites en C</li>
                    <li>Algunes extensions de seguretat poden estar disponibles a PECL</li>
                    <li>Funcions natives de PHP (com <code>openssl_random_pseudo_bytes</code>) són generalment suficients</li>
                    <li>Les extensions PECL requereixen instal·lació addicional al servidor</li>
                    <li>Valorar si els beneficis justifiquen la dependència addicional</li>
                </ul>
                
                <h4 class="mt-4">✅ Recomanació general:</h4>
                <p>Per a la majoria d'aplicacions web, les funcions natives de PHP per a generació de tokens són suficientment segures i no requereixen extensions PECL addicionals.</p>
                
                <div class="important-note mt-4">
                    <strong>⚠️ Important:</strong> Assegura't sempre que els tokens generats siguin realment aleatoris i amb entropia suficient per a l'ús previst.
                </div>
            </div>
        `
  },
  // Nou slide 4: Diferències OAuth vs HybridAuth
  {
    title: "Diferències entre OAuth i HybridAuth",
    content: `
            <h2 class="slide-title">3. Diferències: OAuth vs HybridAuth</h2>
            <div class="text-large">
                <div class="row">
                    <div class="col-md-6">
                        <div class="module-card h-100">
                            <div class="module-title">OAuth2 (Open Authorization)</div>
                            <p><strong>Protocol d'autorització</strong> que permet a una aplicació accedir a recursos protegits d'un usuari sense que l'aplicació tingui accés a les contrasenyes.</p>
                            <ul class="mt-3">
                                <li>Estàndard obert</li>
                                <li>Flux d'autorització</li>
                                <li>Tokens d'accés</li>
                                <li>Multiplataforma</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="module-card h-100">
                            <div class="module-title">HybridAuth</div>
                            <p><strong>Biblioteca de PHP</strong> que facilita i simplifica la integració d'autenticació i autorització.</p>
                            <ul class="mt-3">
                                <li>Implementació concreta</li>
                                <li>Múltiples proveïdors</li>
                                <li>Abstracció de complexitat</li>
                                <li>Pot fer servir OAuth internament</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h4 class="mt-4">📊 Resum de diferències:</h4>
                <table class="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>OAuth2</th>
                            <th>HybridAuth</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Protocol/Estàndard</td>
                            <td>Biblioteca PHP</td>
                        </tr>
                        <tr>
                            <td>Defineix com funciona</td>
                            <td>Implementa el funcionament</td>
                        </tr>
                        <tr>
                            <td>Independent del llenguatge</td>
                            <td>Específic per PHP</td>
                        </tr>
                        <tr>
                            <td>Més complex d'implementar directament</td>
                            <td>Simplifica la implementació</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
  },
  // Nou slide 5: OAuth2 - Autenticació Social
  {
    title: "OAuth2 per a Autenticació Social",
    content: `
            <h2 class="slide-title">4. OAuth2 (Open Authoritzation)</h2>
            <div class="text-large">
                <p><strong>OAuth2</strong> és la base de l'autenticació social mitjançant la solució d'administració d'identitat.</p>
                
                <div class="requadre mt-4">
                    <p><strong>Servei de login externalitzat</strong></p>
                    <p class="requadre-arrow">⇅</p>
                    <p>El servei que validarà les dades d'un usuari pertany a una altra empresa (Twitter, GitHub, Google, etc.)</p>
                </div>
                
                <h4 class="mt-4">🏢 Proveïdors comuns:</h4>
                <div class="row mt-3">
                    <div class="col-md-3 col-6 text-center">
                        <div class="generic-topic h-100">
                            <h4>🐦 Twitter</h4>
                            <p>Autenticació via API de Twitter</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 text-center">
                        <div class="generic-topic h-100">
                            <h4>👨‍💻 GitHub</h4>
                            <p>Per a aplicacions de desenvolupadors</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 text-center">
                        <div class="generic-topic h-100">
                            <h4>🔵 Facebook</h4>
                            <p>Accés via Graph API</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 text-center">
                        <div class="generic-topic h-100">
                            <h4>📧 Google</h4>
                            <p>Google Sign-In amb OAuth2</p>
                        </div>
                    </div>
                </div>
                
                <h4 class="mt-4">🎯 Cas pràctic: Autenticació amb Google</h4>
                <ol class="concept-list mt-3">
                    <li><strong>Fer servir la llibreria</strong> "google-api-php-client"</li>
                    <li><strong>Registrar l'aplicació</strong> en el portal de desenvolupadors de Google</li>
                    <li>Configurar les credencials OAuth2</li>
                    <li>Implementar el flux d'autorització</li>
                </ol>
                
                <div class="important-note mt-4">
                    <strong>⚠️ Important:</strong> Una vegada s'ha autoritzat l'aplicació, aquesta apareixerà a l'apartat "Aplicacions amb accés al teu compte" amb una descripció de les dades a les que té accés.
                </div>
            </div>
        `
  },
  // Nou slide 6: Flux OAuth2 - Diagrama
  {
    title: "Flux d'OAuth2 - Pas a pas",
    content: `
            <h2 class="slide-title">5. Flux bàsic OAuth2</h2>
            <div class="text-large">
                <div class="row">
                    <div class="col-md-6">

                        <ol class="concept-list">
                            <li><strong>L'usuari demana autorització</strong><br>L'usuari fa sol·licitud al servidor per demanar un access token</li>
                            <li><strong>El servidor atorga codi d'autorització</strong><br>Si és vàlid, retorna un "authorization code"</li>
                            <li><strong>Intercanvi de codi per token</strong><br>El client intercanvia el codi per un access token</li>
                            <li><strong>Ús del token</strong><br>El client utilitza l'access token per accedir a recursos protegits</li>
                            <li><strong>Validació</strong><br>El servidor valida el token i permet l'accés si és vàlid</li>
                        </ol>
                    </div>
                    <div class="col-md-6">
                        <div class="module-card h-100">
                            <div class="module-title">🛡️ Seguretat del flux</div>
                            <p><strong>Perquè és més segur?</strong></p>
                            <ul class="mt-3">
                                <li>Les credencials mai surten del proveïdor</li>
                                <li>Tokens amb data de caducitat</li>
                                <li>Àmbits d'accés limitats (scope)</li>
                                <li>Possibilitat de revocar accés</li>
                                <li>Tokens únics per a cada aplicació</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="requadre mt-4">
                    <p><strong>🤔 Quina és la diferència entre OAuth1 i OAuth2?</strong></p>
                </div>
                
                <div class="important-note mt-4">
                    <strong>💡 Resposta breu:</strong> OAuth1 requereix signatura criptogràfica en cada petició, mentre que OAuth2 utilitza HTTPS i tokens d'accés. OAuth2 és més simple i més utilitzat actualment.
                </div>
            </div>
        `
  },
{
    title: "Diagrama OAuth",
    content: `
            <h2 class="slide-title">6. Diagrama OAuth</h2>
            <div class="text-large">
                <div class="diagram-container">
                    <div class="social-auth-images diagram-full">
                        <div class="social-auth-image-container diagram-full-container">
                            <img src="../img/diagram-oauth.png" alt="Diagrama Flux OAuth 2.0" class="diagram-image" />
                        </div>
                    </div>
                </div>
                
                <div class="important-note mt-3 diagram-note">
                    <strong>⚠️ Important:</strong> Observa com el flux separa clarament les funcions: el servidor d'autorització gestiona l'autenticació i emissió de tokens, mentre que el servidor de recursos només els valida i serveix el contingut.
                </div>
            </div>
        `
},
  {
    title: "Configuració d'HybridAuth",
    content: `
            <h2 class="slide-title">7. Configuració d'HybridAuth</h2>
            <div class="text-large">
                <p>Podem configurar <strong>HybridAuth</strong> de dues maneres diferents:</p>
                
                <h4 class="mt-4">Mitjançant fitxer de configuració:</h4>
                <div class="code-block mt-3">
                    <div class="code-header">
                        <span class="code-language">PHP</span>
                        <button class="copy-btn" onclick="copyCode('code4', this)">Copiar</button>
                    </div>
                    <pre><code id="code4">hybridauth-3.x.x/hybridauth/config.php</code></pre>
                </div>
                
                <h4 class="mt-4">Mitjançant configuració d'array:</h4>
                <div class="code-block mt-3">
                    <div class="code-header">
                        <span class="code-language">PHP</span>
                        <button class="copy-btn" onclick="copyCode('code5', this)">Copiar</button>
                    </div>
                    <pre><code id="code5">require_once("/path/to/hybridauth/Auth.php");

$config = array(
    "providers" => array(
        "Google" => array(
            "enabled" => true,
            "keys" => array(
                "id" => "CLIENT_ID",
                "secret" => "CLIENT_SECRET"
            ),
            "scope" => "email profile"
        ),
        // Més proveïdors...
    )
);

$hybridauth = new Hybrid_Auth($config);</code></pre>
                </div>
                
                <h4 class="mt-4"> Flux amb HybridAuth:</h4>
                <p>HybridAuth autoritza l'aplicació per accedir a les dades bàsiques de l'usuari i redirecciona a l'aplicació web amb una autenticació correcta.</p>
                
                <div class="important-note mt-4">
                 
                </div>
            </div>
        `
  },

{
    title: "OAuth2 (Open Authoritzation)",
    content: `
            <h2 class="slide-title">8. OAuth2: Com actuen les xarxes socials</h2>
            <div class="text-large">
                <p class="lead mb-4"><em>Com actuen les xarxes socials quan es vol fer una autenticació a través d'elles?</em></p>
                
                <!-- Imatges amb fletxa al centre -->
                <div class="social-auth-images mt-4 mb-4">
                    <div class="social-auth-image-container text-center">
                        <img src="../img/oauth-4.png" alt="OAuth 1.0" class="social-auth-image" />
                    </div>
                    
                    <div class="d-flex align-items-center justify-content-center" style="flex: 0 0 auto; padding: 0 20px;">
                        <div class="requadre-arrow" style="font-size: 3rem; color: #0d6efd; font-weight: bold;">
                            →
                        </div>
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
            <h2 class="slide-title">9. HybridAuth: Com actuen les xarxes socials</h2>
            <div class="text-large">

                <!-- Imatges amb fletxa al centre -->
                <div class="social-auth-images mt-4 mb-4">
                    <div class="social-auth-image-container text-center">
                        <img src="../img/oauth-4.png" alt="OAuth 1.0" class="social-auth-image" />
                    </div>
                    
                    <div class="d-flex align-items-center justify-content-center" style="flex: 0 0 auto; padding: 0 20px;">
                        <div class="requadre-arrow" style="font-size: 3rem; color: #0d6efd; font-weight: bold;">
                            →
                        </div>
                    </div>
                    
                    <div class="social-auth-image-container text-center">
                        <img src="../img/oauth-3.png" alt="OAuth 2.0" class="social-auth-image" />
                    </div>
                </div>
                
                <h4 class="mt-4">🔍 Anàlisi del flux complet:</h4>
                <div class="row mt-3">
                    <div class="col-md-4">
                        <div class="generic-topic h-100">
                            <h4>📝 Autorització</h4>
                            <p><strong>Imatge 1:</strong> L'usuau veu la pantalla d'autorització de Twitter on se li demana permís per a que l'aplicació "Social Authentication 1" accedeixi al seu compte.</p>
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
                
                <div class="requadre mt-4">
                    <h4>🤔 Reflexió important:</h4>
                    <p class="requadre-impacte">Com hem de procedir amb el nostre web si un usuari que s'ha autenticat sempre mitjançant autenticació social vol recuperar la contrasenya?</p>
                </div>
                
                <h4 class="mt-4">🔐 Solucions possibles:</h4>
                <div class="row mt-3">
                    <div class="col-md-6">
                        <div class="generic-topic h-100">
                            <h4>🔗 Mètode alternatiu</h4>
                            <p><strong>Permetre afegir email/contrasenya:</strong><br>Quan un usuari es registra via social, oferir-li l'opció d'afegir un mètode d'autenticació alternatiu (email + contrasenya).</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="generic-topic h-100">
                            <h4>🔁 Vinculació de comptes</h4>
                            <p><strong>Sistema de múltiples proveïdors:</strong><br>Permetre als usuaris vincular múltiples comptes socials (Google, Facebook, Twitter) al mateix compte a la teva aplicació.</p>
                        </div>
                    </div>
                </div>
                
                <div class="row mt-3">
                    <div class="col-md-6">
                        <div class="generic-topic h-100">
                            <h4>📧 Recuperació via email</h4>
                            <p><strong>Enllaç màgic:</strong><br>Enviar un enllaç únic al correu electrònic associat amb el compte social per restablir l'accés.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="generic-topic h-100">
                            <h4>📱 Verificació en dos passos</h4>
                            <p><strong>Seguretat addicional:</strong><br>Implementar verificació en dos passos per als comptes vinculats amb autenticació social.</p>
                        </div>
                    </div>
                </div>
                
                <div class="important-note mt-4">
                    <strong>💡 Millor pràctica:</strong> Dissenyar el sistema per suportar autenticació híbrida des del principi. Permetre als usuaris vincular múltiples mètodes d'autenticació i gestionar-los des del seu perfil d'usuari. Informar clarament que l'autenticació social no utilitza contrasenyes del teu sistema.
                </div>
            </div>
        `
},
  {
    title: "Github amb HybridAuth",
    content: `
            <h2 class="slide-title">10. Exemple Github amb HybridAuth</h2>
            <div class="text-large">
                <div class="code-block mt-3">
                    <div class="code-header">
          <span>app/controller/oauth/github.php</span>
          <span class="code-language">PHP</span>
          <button class="copy-btn ms-2" onclick="copyCode('php-pdo-code', this)">Copiar</button>
                    </div>
                    <pre><code id="code5"><?php

if (session_status() == PHP_SESSION_NONE) { 
    session_start(); 
}
if (isset($_SESSION['userId'])) {
    header('Location: login.php');
    return;
}



// Configuració pel nostre provider

var_dump($_SERVER['HTTP_HOST']);
var_dump(dirname($_SERVER['PHP_SELF']));

$config = [
    'callback' => 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '/oauth/github.php', //ruta dinàmica per al callback
    'keys' => [
        'id' => 'Iv23liMag0QY2GVm9oiM', 
        'secret' => '69c2007827e514bf85dbd18e913ece49afa950f4',
    ]
];
echo 'Callback URL: ' . $config['callback'];

try {
    $github = new Hybridauth\Provider\GitHub($config);

    // Demanem a l'usuari que s'autentiqui amb GitHub
    $github->authenticate();

    // Obtenim el token d'accés
    $accessToken = $github->getAccessToken();

    $userProfile = $github->getUserProfile(); // obtenim l'user profile, que conté diversa informació de l'usuari
    $displayName = $userProfile->displayName; // obtenim el nickname
    $email = $userProfile->email; // i el correu

    // Registrem l'usuari si no ho està i el loguem
    loginSocialProviderUser($email, $displayName, "GitHub");

    // Tanquem el popup i actualitzem la finestra mare
    closeWindowAndReloadParent();
} catch (\Exception $e) {
    echo $e->getMessage();
}</code></pre>
                </div>
            </div>
        `
  },

   {
    title: "Google amb OAuth2.0",
    content: `
            <h2 class="slide-title">11. Exemple Google amb OAuth2.0</h2>
            <div class="text-large">
                <div class="code-block mt-3">
                    <div class="code-header">
          <span>app/controller/oauth/google.php</span>
          <span class="code-language">PHP</span>
          <button class="copy-btn ms-2" onclick="copyCode('php-pdo-code', this)">Copiar</button>
                    </div>
                    <pre><code id="code5"><?php

if (session_status() == PHP_SESSION_NONE) { 
    session_start(); 
}

require_once "../model/pdo-users.php";
require_once "../controller/session.php";
require_once "../controller/social-auth-common.php";
require_once '../vendor/autoload.php'; 

if (isset($_SESSION['userId'])) {
    header('Location: login.php');
    return;
}

	$clientID = 'XXXXXXXXXXX-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com';
	$clientSecret = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
	$redirectUri = 'http://localhost/Practiques/.......................';

	/***
	 * 	// create Client Request to access Google API
	$client = new Google_Client();
	$client->setClientId($clientID);
	$client->setClientSecret($clientSecret);
	$client->setRedirectUri($redirectUri);
	$client->addScope("email");
	$client->addScope("profile");
	 * 
	 */

	$client = new Google_Client();
	$client->setClientId('CLIENT_ID');
	$client->setClientSecret('CLIENT_SECRET');
	$client->setRedirectUri('http://localhost/Practiques/nba-branch8/controller/oauth/google.php');
	$client->addScope("email");
	$client->addScope("profile");

	// authenticate code from Google OAuth Flow
	
	if (isset($_GET['code'])) {
		$token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
		$client->setAccessToken($token['access_token']);

		// get profile info
		$google_oauth = new Google_Service_Oauth2($client);
		$google_account_info = $google_oauth->userinfo->get();
		$email =  $google_account_info->email;
		$name =  $google_account_info->name;

		$_SESSION['usuari'] = [
			"name" => $name,
			"email" => $email,
			"accessType" => "Google"
		];
		header('Location: contingut.php');
		die();
	}


    ?></code></pre>
                </div>
            </div>
        `
  },
    {
    title: "Reflexió: Gestió de contrasenyes amb autenticació social",
    content: `
            <h2 class="slide-title">🤔 Reflexió: Gestió de contrasenyes</h2>
            <div class="text-large">
                <div class="requadre">
                    <p><span class="requadre-impacte">Com hem de procedir amb el nostre web si un usuari que s'ha autenticat sempre mitjançant autenticació social vol recuperar la contrasenya?</span></p>
                </div>
                
                <h4 class="mt-4">💭 Consideracions:</h4>
                <div class="row mt-3">
                    <div class="col-md-6">
                        <div class="generic-topic h-100">
                            <h4>🔐 Cas 1: Només autenticació social</h4>
                            <p>Si l'usuari només té autenticació social:</p>
                            <ul class="mt-2">
                                <li>No té contrasenya al nostre sistema</li>
                                <li>No pot "recuperar" una contrasenya inexistent</li>
                                <li>Cal oferir alternativa</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="generic-topic h-100">
                            <h4>🔑 Cas 2: Autenticació mixta</h4>
                            <p>Si l'usuari pot tenir múltiples mètodes:</p>
                            <ul class="mt-2">
                                <li>Social + contrasenya local</li>
                                <li>Ha de poder configurar contrasenya</li>
                                <li>Sistema de recuperació tradicional</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h4 class="mt-4">✅ Solucions recomanades:</h4>
                <ol class="concept-list">
                    <li><strong>Opcionalitat:</strong> Permetre als usuaris afegir una contrasenya local com a mètode alternatiu</li>
                    <li><strong>Clarificació:</strong> Explicar clarament als usuaris que l'autenticació social no utilitza contrasenyes del nostre sistema</li>
                    <li><strong>Redirecció:</strong> Dirigir els usuaris al proveïdor social corresponent per a la gestió del seu compte</li>
                    <li><strong>Enllaços:</strong> Proporcionar enllaços directes als portals de gestió de comptes dels proveïdors</li>
                    <li><strong>Suport:</strong> Tenir un sistema de suport per ajudar usuaris confosos</li>
                </ol>
                
                <div class="important-note mt-4">
                    <strong>💡 Millor pràctica:</strong> Implementar un sistema que permeti als usuaris vincular múltiples mètodes d'autenticació (social + email/contrasenya) i gestionar-los des del seu perfil.
                </div>
            </div>
        `
  }
];


