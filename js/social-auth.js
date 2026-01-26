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
                    <strong>✅ Confirmació:</strong> Una vegada s'ha autoritzat l'aplicació, aquesta apareixerà a l'apartat de "Aplicacions connectades" al compte del proveïdor utilitzat.
                </div>
            </div>
        `
  },
  // Nou slide 8: Reflexió i gestió de contrasenyes
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


