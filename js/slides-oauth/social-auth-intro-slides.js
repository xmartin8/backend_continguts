// Diapositives d'introducció a Social Authentication
const socialAuthIntroSlides = [
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
  }
];