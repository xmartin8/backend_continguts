const cookiesComparisonSlides = [
  {
    title: "Comparativa: Cookies vs Sessions",
    content: `
      <h2 class="slide-title">Comparativa: Cookies vs Sessions</h2>
      <div class="text-large">
        <table class="table table-bordered table-striped mt-2">
          <thead class="table-dark">
            <tr>
              <th>Aspecte</th>
              <th>🍪 Cookies</th>
              <th>🔐 Sessions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Emmagatzematge</strong></td>
              <td>Al client (navegador)</td>
              <td>Al servidor</td>
            </tr>
            <tr>
              <td><strong>Contingut</strong></td>
              <td>Dades reals o ID</td>
              <td>Només ID al client (dades al servidor)</td>
            </tr>
            <tr>
              <td><strong>Seguretat</strong></td>
              <td>Menys segura (accessible al client)</td>
              <td>Més segura (dades al servidor)</td>
            </tr>
            <tr>
              <td><strong>Tamany màxim</strong></td>
              <td>~4KB per cookie</td>
              <td>Limitada per configuració PHP</td>
            </tr>
            <tr>
              <td><strong>Persistència</strong></td>
              <td>Configurable (hores, dies, anys)</td>
              <td>Temporal (normalment fins que es tanca el navegador)</td>
            </tr>
            <tr>
              <td><strong>Accés JavaScript</strong></td>
              <td>Sí (excepte HttpOnly)</td>
              <td>No (només ID accessible)</td>
            </tr>
            <tr>
              <td><strong>Rendiment</strong></td>
              <td>Millor (no consumeix recursos del servidor)</td>
              <td>Pitjor (operacions d'E/S al servidor)</td>
            </tr>
            <tr>
              <td><strong>Escalabilitat</strong></td>
              <td>Excel·lent (dades distribuïdes)</td>
              <td>Complexa (necessita memòria compartida)</td>
            </tr>
          </tbody>
        </table>
        
        <div class="module-card mt-3">
          <div class="module-title">🤔 Quan utilitzar cadascuna?</div>
          <p><strong>Cookies:</strong> Preferències d'usuari, recordatori de login, tracking no sensible.</p>
          <p><strong>Sessions:</strong> Dades sensibles, cistella de la compra, informació d'autenticació.</p>
        </div>
      </div>
    `
  },
  {
    title: "Activitat: $_SESSION vs $HTTP_SESSION_VARS",
    content: `
      <h2 class="slide-title">Activitat: Diferència entre $_SESSION i $HTTP_SESSION_VARS</h2>
      <div class="text-large">
        <div class="requadre">
          <p><strong>Pregunta:</strong> Quina és la diferència entre <code>$_SESSION</code> i <code>$HTTP_SESSION_VARS</code>?</p>
        </div>
        
        <h4>📚 Resposta:</h4>
        <div class="row mt-2">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>$_SESSION</h4>
              <ul>
                <li><strong>Superglobal modern</strong> (PHP 4.1.0+)</li>
                <li>Variable array predefinida</li>
                <li>Recomanada per a nou codi</li>
                <li>Disponible sempre</li>
                <li>Més segura i consistent</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>$HTTP_SESSION_VARS</h4>
              <ul>
                <li><strong>Variable global obsoleta</strong></li>
                <li>Necessita <code>register_globals = On</code></li>
                <li>Deprecated des de PHP 4.2.0</li>
                <li>Eliminada a PHP 5.4.0</li>
                <li>Menys segura (injecció de variables)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h4>⚠️ Per què es va eliminar $HTTP_SESSION_VARS?</h4>
        <ol class="concept-list">
          <li><strong>Problemes de seguretat:</strong> <code>register_globals</code> permetia injecció de variables</li>
          <li><strong>Confusió:</strong> Variables globals vs superglobals</li>
          <li><strong>Consistència:</strong> PHP va estandarditzar les superglobals ($_GET, $_POST, $_SESSION, etc.)</li>
          <li><strong>Depuració:</strong> Més fàcil seguir el flux de dades amb superglobals</li>
        </ol>
        
        <div class="important-note mt-3">
          <strong>✅ Millor pràctica:</strong> Utilitza sempre <code>$_SESSION</code> en lloc de <code>$HTTP_SESSION_VARS</code>. Aquesta última està obsoleta i pot causar vulnerabilitats de seguretat si s'activa <code>register_globals</code>.
        </div>
      </div>
    `
  }
];