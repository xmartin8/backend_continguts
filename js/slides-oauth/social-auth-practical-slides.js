// Diapositiva de reflexió final
const socialAuthPracticalSlides = [
  {
    title: "Gestió de contrasenyes amb autenticació social",
    content: `
      <h2 class="slide-title">12. Gestió híbrida de contrasenyes</h2>
      <div class="text-large">
        <div class="requadre">
          <p><span class="requadre-impacte">🤔 Com hem de procedir amb el nostre web si un usuari que s'ha autenticat sempre mitjançant autenticació social vol recuperar la contrasenya?</span></p>
        </div>
        
        <h4 class="mt-4">Solucions possibles:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🔗 Mètode alternatiu</h4>
              <p><strong>Permetre afegir email/contrasenya:</strong><br>Quan un usuari es registra via social, oferir-li l'opció d'afegir un mètode d'autenticació alternatiu (email + contrasenya).</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🔁 Redirecció</h4>
              <p><strong>Gestió del proveïdor</strong><br>Dirigir els usuaris al proveïdor social corresponent per a la gestió del seu compte</p>
            </div>
          </div>
        </div>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>📧 Recuperació via email</h4>
              <p><strong>Enllaç amb token:</strong><br>Enviar un enllaç únic al correu electrònic associat amb el compte social per restablir l'accés.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>📱 Verificació en dos passos</h4>
              <p><strong>Seguretat addicional:</strong><br>Implementar verificació en dos passos per als comptes vinculats amb autenticació social.</p>
            </div>
          </div>
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
        <div class="important-note mt-4">
          <strong>Recomanació:</strong> Implementar un sistema que permeti als usuaris vincular múltiples mètodes d'autenticació (social + email/contrasenya) i gestionar-los des del seu perfil.
        </div>
      </div>
    `
  }
];