
const slides = [
  {
    title: "JWT i Seguretat d'APIs",
    content: `
      <div class="jwt-image-container">
        <div class="api-image-container">
          <img src="../img/jwt.png" alt="JWT i Seguretat d'APIs" class="jwt-image" />
        </div>
        <div class="generic-info">
          <h3 class="slide-title">JSON Web Tokens (JWT) i Seguretat</h3>
          <div class="generic-topics">
            <div class="generic-topic">
              <h4>🔐 Què és JWT?</h4>
              <p>JSON Web Token és un estàndard obert per a representar claims de manera segura entre dues parts.</p>
            </div>

            <div class="generic-topic">
              <h4>📦 Estructura JWT</h4>
              <p>Format: Header.Payload.Signature. Tres parts codificades en Base64 i separades per punts.</p>
            </div>

            <div class="generic-topic">
              <h4>🔑 API Keys</h4>
              <p>Clau única que el client inclou a les sol·licituds per autenticar-se. Ideal per a sistemes senzills.</p>
            </div>

            <div class="generic-topic">
              <h4>🔄 OAuth 2.0</h4>
              <p>Protocol que permet als usuaris autoritzar aplicacions sense exposar les seves credencials.</p>
            </div>

            <div class="generic-topic">
              <h4>🌐 HTTPS/TLS</h4>
              <p>Comunicació xifrada obligatòria. Els certificats SSL/TLS protegeixen les dades en trànsit.</p>
            </div>

            <div class="generic-topic">
              <h4>⚡ Rate Limiting</h4>
              <p>Limitar connexions per evitar atacs de denegació de servei i abús de l'API.</p>
            </div>

            <div class="generic-topic">
              <h4>🛡️ IP Whitelist</h4>
              <p>Permetre accés només des d'IPs autoritzades. Capa addicional de seguretat per a APIs crítiques.</p>
            </div>

            <div class="generic-topic">
              <h4>⚠️ Gestió d'Errors</h4>
              <p>Missatges d'error genèrics que no revelin informació sensible sobre el sistema.</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "API Keys: Autenticació Senzilla",
    content: `
      <h2 class="slide-title">API Keys - Autenticació Bàsica</h2>
      <div class="text-large">
        <p>Les <strong>API Keys</strong> són una forma senzilla d'autenticar clients que accedeixen a la teva API.</p>
        
        <div class="requadre mt-4">
          <p><strong>🔑 Com funcionen les API Keys?</strong></p>
          <p>El client obté una API KEY única del proveïdor de l'API. Aquesta clau s'inclou a cada sol·licitud, ja sigui al header o com a paràmetre a la URL.</p>
        </div>
        
        <h4 class="mt-4">📝 Formats d'inclusió:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="code-block h-100">
              <div class="code-header">
                <span>Via Header HTTP</span>
                <button class="copy-btn">Copiar</button>
              </div>
              <pre><code class="http">GET /api/resource HTTP/1.1
Host: meudomini.com
Authorization: Api-Key iy23t5ui34534y5fo3f5ou345</code></pre>
            </div>
          </div>
          <div class="col-md-6">
            <div class="code-block h-100">
              <div class="code-header">
                <span>Via Paràmetre URL</span>
                <button class="copy-btn">Copiar</button>
              </div>
              <pre><code class="http">https://meudomini.com/api/user?token=eyJhbGciOiJIUzI1Ni...</code></pre>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">✅ Avantatges:</h4>
        <ul class="concept-list">
          <li><strong>Senyal i fàcil d'implementar:</strong> Ideal per a sistemes d'autenticació bàsics</li>
          <li><strong>No necessita fluxos complexos:</strong> Perfecte per a APIs internes o microserveis</li>
          <li><strong>Ràpid de configurar:</strong> El client només necessita una clau per començar</li>
          <li><strong>Fàcil de revocar:</strong> Pots desactivar claus compromeses ràpidament</li>
        </ul>
        
        <h4 class="mt-4">❌ Limitacions:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #fff3cd;">
              <h4>🔓 Menys segures</h4>
              <p>Si es perden o roben, donen accés complet. No tenen caducitat per defecte.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #f8d7da;">
              <h4>📊 Gestió complexa</h4>
              <p>En sistemes grans, gestionar múltiples claus pot ser complicat.</p>
            </div>
          </div>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">🤔 Pregunta crítica</div>
          <p><strong>On gestionem les KEYS de la nostra API?</strong></p>
          <ul>
            <li><strong>Base de dades segura:</strong> Emmagatzematge xifrat de les claus</li>
            <li><strong>Vault de secrets:</strong> Sistemes com HashiCorp Vault, AWS Secrets Manager</li>
            <li><strong>Variables d'entorn:</strong> Per a entorns de desenvolupament</li>
            <li><strong>Servei dedicat:</strong> Microservei per a gestió d'API Keys</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "OAuth 2.0: Protocol d'Autorització",
    content: `
      <h2 class="slide-title">OAuth 2.0 - Autorització Avançada</h2>
      <div class="text-large">
        <p><strong>OAuth 2.0</strong> és un protocol estàndard de la indústria que permet als usuaris autoritzar aplicacions de tercers sense compartir les seves credencials.</p>
        
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🎯 Objectiu principal</h4>
              <p>Permetre l'accés delegat i segur a recursos protegits. L'usuari atorga permisos limitats a aplicacions de tercers.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🔄 Flux bàsic</h4>
              <p>1. Sol·licitud d'autorització<br>
              2. Autorització de l'usuari<br>
              3. Token d'accés<br>
              4. Accés a recursos protegits</p>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">🔐 Fluxos OAuth 2.0:</h4>
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>Authorization Code</h4>
              <p>Per a aplicacions web del costat del servidor. El més segur i comú.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>Implicit</h4>
              <p>Per a aplicacions JavaScript del costat del client. Menys segur.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>Client Credentials</h4>
              <p>Per a comunicació entre servidors sense intervenció d'usuari.</p>
            </div>
          </div>
        </div>
        
        <div class="code-block mt-4">
          <div class="code-header">
            <span>Exemple de petició OAuth 2.0</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="http"># Sol·licitud de token d'accés
POST /oauth/token HTTP/1.1
Host: auth.meudomini.com
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&code=AUTHORIZATION_CODE
&redirect_uri=https://client.com/callback
&client_id=CLIENT_ID
&client_secret=CLIENT_SECRET</code></pre>
        </div>
        
        <div class="requadre mt-4">
          <p><strong>🤔 Ens cal aplicar OAuth 2.0?</strong></p>
          <p>Valora OAuth 2.0 si:</p>
          <ul>
            <li>La teva API serà utilitzada per múltiples aplicacions</li>
            <li>Necessites control granular de permisos</li>
            <li>Els usuaris necessiten autoritzar accés a recursos específics</li>
            <li>Vols integrar-te amb altres serveis (Google, Facebook, etc.)</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "JSON Web Tokens (JWT)",
    content: `
      <h2 class="slide-title">JSON Web Tokens - Tokens Autocontinguts</h2>
      <div class="text-large">
        <p>Els <strong>JSON Web Tokens (JWT)</strong> són tokens compactes i autocontinguts que poden transportar informació de manera segura entre parts.</p>
        
        <div class="row mt-4">
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>📦 3 Parts</h4>
              <p>1. <strong>Header:</strong> Algorisme i tipus de token<br>
              2. <strong>Payload:</strong> Claims (afirmacions)<br>
              3. <strong>Signature:</strong> Verificació d'integritat</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>🔐 Stateless</h4>
              <p>El servidor no guarda l'estat de sessió. El JWT conté tota la informació necessària.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>📝 Autosuficient</h4>
              <p>Inclou metadades, claims d'usuari, dates d'expiració i pot ser verificat sense consultar BD.</p>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">🎯 Casos d'ús ideals:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>✅ Autenticació Stateless</h4>
              <p>Perfecte per a microserveis, APIs REST i aplicacions sense estat. El servidor no necessita mantenir sessions.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>✅ Informació personalitzada</h4>
              <p>Pots incloure rols, permisos, temps d'expiració i altres metadades dins del propi token.</p>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">📝 Exemple d'ús en peticions:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Enviar JWT en Header HTTP</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="http">GET /api/protected-resource HTTP/1.1
Host: api.meudomini.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</code></pre>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">🔧 Requisits per a JWT segur</div>
          <p><strong>Pot ser suficient sempre que:</strong></p>
          <ul>
            <li>El token tingui <strong>expiració</strong> (exp claim)</li>
            <li>Validem el token al servidor amb <strong>signatura digital</strong></li>
            <li>Forcem comunicar-se amb <strong>HTTPS</strong></li>
            <li>Utilitzem algorismes forts com <strong>RS256</strong> o <strong>HS256</strong></li>
            <li>Incloguem claims necessaris però mínims</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "Generació de JWT amb PHP",
    content: `
      <h2 class="slide-title">Generar JWT amb PHP/Firebase</h2>
      <div class="text-large">
        <p>Per a treballar amb JWT en PHP, utilitzem la llibreria <strong>Firebase JWT</strong> instal·lada via Composer.</p>
        
        <div class="important-note">
          <p><strong>📦 Instal·lació:</strong> <code>composer require firebase/php-jwt</code></p>
        </div>
        
        <h4 class="mt-4">📝 Exemple complet de generació:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span>generar_jwt.php - Generació de token</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="php">&lt;?php
require 'vendor/autoload.php';
use Firebase\\JWT\\JWT;

// Clau secreta per a signar el token
$clau_secreta = 'clau_super_secreta_i_complexa_12345';

// Dades de l'usuari (payload)
$payload = [
    'usuari_id' => 12345,
    'nom' => 'Anna Garcia',
    'email' => 'anna@exemple.cat',
    'rol' => 'admin',
    'iat' => time(),                        // Issued at: quan es va crear
    'exp' => time() + (60 * 60)             // Expira en 1 hora
];

try {
    // Generar el JWT
    $jwt = JWT::encode($payload, $clau_secreta, 'HS256');
    
    // Retornar el token al client
    echo json_encode([
        'status' => 'success',
        'token' => $jwt,
        'expira_en' => date('Y-m-d H:i:s', $payload['exp'])
    ]);
    
} catch (Exception $e) {
    // Error en la generació
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Error generant token: ' . $e->getMessage()
    ]);
}
?&gt;</code></pre>
        </div>
        
        <h4 class="mt-4">🔐 Algorismes de signatura:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>HS256 (Simètric)</h4>
              <p><strong>Mateixa clau</strong> per a signar i verificar<br>
              <strong>Més ràpid</strong> però menys segur<br>
              <strong>Ús:</strong> Aplicacions simples, una sola part</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>RS256 (Asimètric)</h4>
              <p><strong>Clau privada</strong> per signar<br>
              <strong>Clau pública</strong> per verificar<br>
              <strong>Ús:</strong> Sistemes distribuïts, múltiples servidors</p>
            </div>
          </div>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">⚠️ Bones pràctiques en generació</div>
          <ul>
            <li><strong>Claus fortes:</strong> Utilitza claus llargues i aleatòries</li>
            <li><strong>Expiració curta:</strong> Tokens amb vida útil limitada (hores, no dies)</li>
            <li><strong>Claims mínims:</strong> No incloguis informació sensible al payload</li>
            <li><strong>Refresh tokens:</strong> Implementa tokens de refresc per a sessions llargues</li>
            <li><strong>Logging:</strong> Registra la generació de tokens per a auditoria</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "Validació de JWT amb PHP",
    content: `
      <h2 class="slide-title">Validar i Decodificar JWT</h2>
      <div class="text-large">
        <p>La validació de JWT és crítica per a assegurar que els tokens rebuts són vàlids, no han expirat i no han estat manipulats.</p>
        
        <h4 class="mt-4">📝 Exemple complet de validació:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span>validar_jwt.php - Validació de token</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="php">&lt;?php
require 'vendor/autoload.php';
use Firebase\\JWT\\JWT;
use Firebase\\JWT\\Key;

// Clau secreta (ha de ser la mateixa que en la generació)
$clau_secreta = 'clau_super_secreta_i_complexa_12345';

// Obtenir token del client (des de header, query param o cookie)
$headers = apache_request_headers();
$token = '';

if (isset($headers['Authorization'])) {
    $auth_header = $headers['Authorization'];
    if (preg_match('/Bearer\\s(\\S+)/', $auth_header, $matches)) {
        $token = $matches[1];
    }
}

// Si no està al header, provar GET parameter
if (empty($token) && isset($_GET['token'])) {
    $token = $_GET['token'];
}

// Verificar si hi ha token
if (empty($token)) {
    http_response_code(401);
    echo json_encode(['error' => 'Token no proporcionat']);
    exit;
}

try {
    // Decodificar i validar el JWT
    // $clau_secreta ha de ser la mateixa que la de la generació JWT
    $decoded = JWT::decode($token, new Key($clau_secreta, 'HS256'));
    
    // Token vàlid - Accedir a les dades de l'usuari
    $usuari_id = $decoded->usuari_id;
    $nom = $decoded->nom;
    $rol = $decoded->rol;
    
    // Continuar amb la lògica de l'aplicació...
    echo json_encode([
        'status' => 'success',
        'message' => 'Token vàlid',
        'usuari' => [
            'id' => $usuari_id,
            'nom' => $nom,
            'rol' => $rol
        ]
    ]);
    
} catch (Exception $e) {
    // Error en el JWT (expirat, signatura invàlida, etc.)
    http_response_code(401);
    echo json_encode([
        'error' => 'Token invàlid o expirat',
        'message' => $e->getMessage()
    ]);
}
?&gt;</code></pre>
        </div>
        
        <h4 class="mt-4">🚫 Tipus d'errors de validació:</h4>
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="generic-topic h-100" style="background-color: #f8d7da;">
              <h4>SignatureInvalidException</h4>
              <p>La signatura no coincideix. Token possiblement manipulat.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100" style="background-color: #fff3cd;">
              <h4>ExpiredException</h4>
              <p>El token ha expirat. Cal sol·licitar un de nou.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100" style="background-color: #d1ecf1;">
              <h4>BeforeValidException</h4>
              <p>El token encara no és vàlid (nbf claim en el futur).</p>
            </div>
          </div>
        </div>
        
        <div class="requadre mt-4">
          <p><strong>🔐 Claims estàndard de JWT</strong></p>
          <ul>
            <li><strong>iss (issuer):</strong> Emissor del token</li>
            <li><strong>sub (subject):</strong> Subjecte del token (normalment usuari ID)</li>
            <li><strong>aud (audience):</strong> Destinatari del token</li>
            <li><strong>exp (expiration):</strong> Data d'expiració (timestamp)</li>
            <li><strong>nbf (not before):</strong> No abans de (timestamp)</li>
            <li><strong>iat (issued at):</strong> Emès a (timestamp)</li>
            <li><strong>jti (JWT ID):</strong> Identificador únic del token</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "Comparativa i Decisions",
    content: `
      <h2 class="slide-title">Quan triar JWT, OAuth o API Keys?</h2>
      <div class="text-large">
        <p>La tria del mètode d'autenticació depèn dels requisits del teu projecte, complexitat i necessitats de seguretat.</p>
        
        <div class="table-responsive mt-4">
          <table class="table table-bordered table-hover">
            <thead class="table-dark">
              <tr>
                <th>Característica</th>
                <th>API Keys</th>
                <th>JWT</th>
                <th>OAuth 2.0</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Complexitat</strong></td>
                <td>✅ Mínima</td>
                <td>✅✅ Mitjana</td>
                <td>✅✅✅ Alta</td>
              </tr>
              <tr>
                <td><strong>Seguretat</strong></td>
                <td>⚠️ Bàsica</td>
                <td>✅✅ Boa</td>
                <td>✅✅✅ Excel·lent</td>
              </tr>
              <tr>
                <td><strong>Estat (State)</strong></td>
                <td>Stateless/Stateful</td>
                <td>✅ Stateless</td>
                <td>Stateless/Stateful</td>
              </tr>
              <tr>
                <td><strong>Informació usuari</strong></td>
                <td>❌ No inclou</td>
                <td>✅✅ Inclou claims</td>
                <td>✅✅✅ Access token + ID token</td>
              </tr>
              <tr>
                <td><strong>Permisos granulars</strong></td>
                <td>❌ No</td>
                <td>✅ Limitats</td>
                <td>✅✅✅ Complets (scopes)</td>
              </tr>
              <tr>
                <td><strong>Ús ideal</strong></td>
                <td>APIs internes, bots</td>
                <td>SPAs, APIs stateless</td>
                <td>Aplicacions de tercers, SSO</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 class="mt-4">🎯 Arbre de decisió:</h4>
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="generic-topic h-100" style="border-left: 4px solid #0d6efd;">
              <h4>🔑 Tria API Keys si...</h4>
              <p>• És una API interna o de consum privat<br>
              • No necessites gestió d'usuaris<br>
              • Vols la implementació més simple<br>
              • No hi ha informació sensible</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100" style="border-left: 4px solid #198754;">
              <h4>🎫 Tria JWT si...</h4>
              <p>• Necessites autenticació stateless<br>
              • Vols incloure informació d'usuari al token<br>
              • Treballes amb microserveis<br>
              • Tens una SPA (Single Page App)</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100" style="border-left: 4px solid #dc3545;">
              <h4>🔄 Tria OAuth 2.0 si...</h4>
              <p>• La teva API serà pública<br>
              • Necessites autorització granular<br>
              • Vols integrar-te amb altres serveis<br>
              • Necessites Single Sign-On (SSO)</p>
            </div>
          </div>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">🤔 I si fem servir JWT sense OAuth 2.0?</div>
          <p><strong>Resposta:</strong> Sí, és possible i freqüent. Pots usar JWT com a mecanisme d'autenticació independent.</p>
          <ul>
            <li><strong>JWT sol:</strong> Per a aplicacions pròpies, autenticació simple</li>
            <li><strong>JWT + OAuth:</strong> Per a APIs públiques, autorització avançada</li>
            <li><strong>API Key + JWT:</strong> Híbrid per a diferents tipus de clients</li>
          </ul>
          <p class="mt-2"><strong>Recorda:</strong> Amb JWT sol, implementa sempre expiració, validació i HTTPS.</p>
        </div>
      </div>
    `
  },
  {
    title: "Altres Mesures de Seguretat",
    content: `
      <h2 class="slide-title">Protecció Integral d'APIs</h2>
      <div class="text-large">
        <p>L'autenticació és només una part de la seguretat d'APIs. Considera aquestes mesures addicionals per a una protecció completa.</p>
        
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🛡️ Signatures Digitals</h4>
              <p>Verifica la integritat i autenticitat de les peticions. Assegura que les dades no han estat manipulades en trànsit.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🚫 Rate Limiting</h4>
              <p>Limita el nombre de peticions per període. Protegeix contra atacs de denegació de servei (DDoS) i abús.</p>
            </div>
          </div>
        </div>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>📋 IP Whitelist</h4>
              <p>Permet accés només des d'adreces IP autoritzades. Ideal per a APIs crítiques o entorns corporatius.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>⚠️ Atacs XSS</h4>
              <p>Cross-site scripting. Assegura't de sanititzar totes les entrades i validar sortides per evitar injecció de codi.</p>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">📊 Implementació de Rate Limiting:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Rate Limiting bàsic en PHP</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="php">&lt;?php
class RateLimiter {
    private $redis;
    private $limit;
    private $window;
    
    public function __construct($limit = 100, $window = 3600) {
        // 100 peticions per hora per defecte
        $this->limit = $limit;
        $this->window = $window;
        $this->redis = new Redis();
        $this->redis->connect('127.0.0.1', 6379);
    }
    
    public function checkLimit($apiKey) {
        $key = 'rate_limit:' . $apiKey;
        
        // Obtenir comptador actual
        $current = $this->redis->get($key) ?: 0;
        
        if ($current >= $this->limit) {
            // Calcular quan es reiniciarà
            $ttl = $this->redis->ttl($key);
            if ($ttl < 0) {
                $ttl = $this->window;
                $this->redis->setex($key, $this->window, 1);
            }
            
            return [
                'allowed' => false,
                'remaining' => 0,
                'reset_in' => $ttl
            ];
        }
        
        // Incrementar comptador
        if ($current == 0) {
            $this->redis->setex($key, $this->window, 1);
        } else {
            $this->redis->incr($key);
        }
        
        return [
            'allowed' => true,
            'remaining' => $this->limit - ($current + 1),
            'reset_in' => $this->redis->ttl($key)
        ];
    }
}

// Ús
$limiter = new RateLimiter(100, 3600); // 100 req/hora
$result = $limiter->checkLimit($_SERVER['API_KEY']);

if (!$result['allowed']) {
    http_response_code(429); // Too Many Requests
    header('X-RateLimit-Limit: 100');
    header('X-RateLimit-Remaining: ' . $result['remaining']);
    header('X-RateLimit-Reset: ' . (time() + $result['reset_in']));
    echo json_encode(['error' => 'Rate limit exceeded']);
    exit;
}
?&gt;</code></pre>
        </div>
        
        <div class="requadre mt-4">
          <p><strong>🔐 Gestió d'Errors Segura</strong></p>
          <p>• <strong>No revelis detalls:</strong> Missatges d'error genèrics que no exposin informació del sistema</p>
          <p>• <strong>Codi HTTP adequat:</strong> 401 (No autoritzat), 403 (Prohibit), 429 (Massa peticions)</p>
          <p>• <strong>Logging segur:</strong> Registra errors per a auditoria però no a l'usuari final</p>
          <p>• <strong>Headers de seguretat:</strong> HSTS, CSP, X-Frame-Options, X-Content-Type-Options</p>
        </div>
      </div>
    `
  }
];