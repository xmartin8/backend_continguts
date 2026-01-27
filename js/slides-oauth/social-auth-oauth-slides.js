// Diapositives sobre OAuth i diferències
const socialAuthOauthSlides = [
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
  }
];