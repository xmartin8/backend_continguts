// Diapositives sobre gestió d'aplicacions
const socialAuthDatabaseSlides = [
  {
    title: "Gestió d'Aplicacions Connectades",
    content: `
      <h2 class="slide-title">9. HybridAuth: Com actuen les xarxes socials</h2>
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
  }
];