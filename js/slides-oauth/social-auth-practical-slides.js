// Diapositiva de reflexió final
const socialAuthPracticalSlides = [
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
          <strong>💡 Recomanació:</strong> Implementar un sistema que permeti als usuaris vincular múltiples mètodes d'autenticació (social + email/contrasenya) i gestionar-los des del seu perfil.
        </div>
      </div>
    `
  }
];