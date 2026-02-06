
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
              <p>JSON Web Token és un estàndard obert per a representar <strong>afirmacions</strong> de manera segura entre dues parts.</p>
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
        
        <h4 class="mt-4">Exemple de cada cas:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="code-block mt-3">
              <div class="code-header">
                <span>Via Header HTTP</span>
              </div>
              <pre><code class="http">GET /api/resource HTTP/1.1
Host: meudomini.com
Authorization: Api-Key iy23t5ui34534y5fo3f5ou345</code></pre>
            </div>
          </div>
          <div class="col-md-6">
            <div class="code-block mt-3">
              <div class="code-header">
                <span>Via Paràmetre URL</span>
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
          <div class="module-title">🤔 On gestionem les KEYS de la nostra API?</div>
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
        
        <div class="module-card mt-4">
          <div class="module-title">🤔 Ens cal aplicar OAuth 2.0?</div>
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
              <p>
                1. <strong>Header:</strong> Algorisme i tipus de token<br>
                2. <strong>Payload:</strong> <strong>Afirmacions</strong><br>
                3. <strong>Signature:</strong> Verificació d'integritat
              </p>
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
              <p>Inclou metadades, <strong>afirmacions</strong> d'usuari, dates d'expiració i pot ser verificat sense consultar la base de dades.</p>
            </div>
          </div>
        </div>

        <h4 class="mt-4">🎯 Casos d'ús ideals:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>✅ Autenticació Stateless</h4>
              <p>Perfecte per a microserveis, APIs REST i aplicacions sense estat.</p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>✅ Informació personalitzada</h4>
              <p>Pots incloure rols, permisos, temps d'expiració i altres metadades dins del token.</p>
            </div>
          </div>
        </div>

        <div class="module-card mt-4">
          <div class="module-title">🔧 Requisits per a un JWT segur</div>
          <ul>
            <li>El token tingui <strong>expiració</strong> (afirmació <code>exp</code>)</li>
            <li>Validació amb <strong>signatura digital</strong></li>
            <li>Ús obligatori de <strong>HTTPS</strong></li>
            <li>Algorismes forts com <strong>RS256</strong> o <strong>HS256</strong></li>
            <li>Incloure només <strong>afirmacions necessàries i mínimes</strong></li>
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
          <div class="module-title">⚠️ Bones praxis</div>
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
        <p>La validació de JWT és crítica per assegurar que els tokens rebuts són vàlids, no han expirat i no han estat manipulats.</p>

        <h4 class="mt-4">🚫 Tipus d'errors de validació:</h4>
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>SignatureInvalidException</h4>
              <p>La signatura no coincideix. Token possiblement manipulat.</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>ExpiredException</h4>
              <p>El token ha expirat. Cal sol·licitar-ne un de nou.</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>BeforeValidException</h4>
              <p>El token encara no és vàlid (afirmació <code>nbf</code> en el futur).</p>
            </div>
          </div>
        </div>

        <div class="module-card mt-4">
          <div class="module-title">🔐 Afirmacions estàndard de JWT</div>
          <ul>
            <li><strong>iss (emissor):</strong> Qui emet el token</li>
            <li><strong>sub (subjecte):</strong> Identitat del subjecte</li>
            <li><strong>aud (destinatari):</strong> A qui va dirigit el token</li>
            <li><strong>exp (expiració):</strong> Data d'expiració</li>
            <li><strong>nbf (no abans de):</strong> Moment a partir del qual és vàlid</li>
            <li><strong>iat (emès a):</strong> Data de creació</li>
            <li><strong>jti (ID del JWT):</strong> Identificador únic del token</li>
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
        
        <h4 class="mt-4">🤔 Què triem?</h4>
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
          <p class="mt-2"><strong>Nota:</strong> Amb JWT sol, implementa sempre expiració, validació i HTTPS.</p>
        </div>
      </div>
    `
  },
  {
    title: "Altres Mesures de Seguretat",
    content: `
      <h2 class="slide-title">Protecció Integral d'APIs</h2>
      <div class="text-large">
        <p>L'autenticació és només una part de la seguretat d'APIs. Hi ha altres aspectes que també haurem de tenir en compte per màxima protecció.</p>
        
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
    `
  }
];