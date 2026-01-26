// Diapositives d'introducció a AJAX
const ajaxIntroSlides = [
  {
    title: "Ajax en PHP",
    content: `
      <div class="ajax-content">
        <div class="ajax-image-container">
          <img src="../img/ajax-1.jpg" alt="Ajax amb PHP" class="ajax-image" />
        </div>
        <div class="generic-info">
          <h3 class="slide-title">Ajax amb PHP</h3>
          <div class="generic-topics">
            <div class="generic-topic">
              <h4>⚡ Què és AJAX?</h4>
              <p>AJAX (Asynchronous JavaScript and XML) és una tècnica per comunicar-se amb el servidor de forma asíncrona sense recarregar tota la pàgina web.</p>
            </div>
            <div class="generic-topic">
              <h4>🔄 Com funciona AJAX</h4>
              <p>JavaScript envia una petició HTTP al servidor en segon pla, processa la resposta i actualitza només les parts necessàries del DOM.</p>
            </div>
            <div class="generic-topic">
              <h4>📡 XMLHttpRequest (XHR)</h4>
              <p>L'objecte tradicional de JavaScript per a peticions HTTP asíncrones. Va ser el primer mètode per implementar AJAX.</p>
            </div>
            <div class="generic-topic">
              <h4>🆕 Fetch API</h4>
              <p>API moderna basada en promeses que substitueix XMLHttpRequest. Més senzilla d'utilitzar i amb millor gestió d'errors.</p>
            </div>
            <div class="generic-topic">
              <h4>📊 Format de dades AJAX</h4>
              <p>Originalment utilitzava XML (d'aquí el nom), però avui dia JSON és el format predominant per la seva lleugeresa i facilitat d'ús.</p>
            </div>
            <div class="generic-topic">
              <h4>🎯 Aplicacions pràctiques d'AJAX</h4>
              <p>Autocompletar en buscadors, carregar més contingut en scroll infinit, validació en temps real de formularis i chats en viu.</p>
            </div>
            <div class="generic-topic">
              <h4>🛡️ Seguretat en AJAX</h4>
              <p>Requereix especial atenció a vulnerabilitats com XSS, CSRF i la configuració correcta de CORS per a dominis diferents.</p>
            </div>
            <div class="generic-topic">
              <h4>⚙️ Compatibilitat AJAX</h4>
              <p>Totalment compatible amb tots els navegadors moderns. Per a IE antic es requereixen polyfills o l'ús de jQuery.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  }
];