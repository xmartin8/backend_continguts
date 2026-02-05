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
  },
{
    title: "Què és AJAX?",
    content: `
      <div class="ajax-content">
        <div class="generic-info">
          <h3 class="slide-title">Ajax: Tècnica per a Webs Dinàmics</h3>
          <div class="text-large">
            <p><strong>AJAX</strong> (Asynchronous JavaScript and XML) és una tècnica de desenvolupament web que permet crear llocs web <strong>dinàmics</strong> traient més profit al PHP.</p>
            
            <div class="requadre mt-4">
              <p><strong>🎯 Què significa "dinàmic"?</strong></p>
              <p>Podem enviar informació de la pàgina al servidor i del servidor a la pàgina <strong>en segon pla</strong>, sense recarregar la pàgina completa.</p>
            </div>
            
            <h4 class="mt-4">✅ Com funciona AJAX:</h4>
            <ol class="concept-list">
              <li><strong>Esdeveniment:</strong> L'usuari realitza una acció (click, formulari, scroll...).</li>
              <li><strong>Petició asíncrona:</strong> JavaScript envia una petició HTTP al servidor.</li>
              <li><strong>Processament al servidor:</strong> El servidor (PHP) processa la petició i genera una resposta.</li>
              <li><strong>Actualització parcial:</strong> JavaScript rep la resposta i actualitza només la part necessària del DOM.</li>
            </ol>
            
            <div class="module-card mt-4">
              <div class="module-title">🔧 Components bàsics d'AJAX</div>
              <ul>
                <li><strong>JavaScript:</strong> Gestiona la comunicació i l'actualització del DOM.</li>
                <li><strong>XMLHttpRequest o Fetch API:</strong> Objectes per fer peticions HTTP asíncrones.</li>
                <li><strong>Servidor (PHP):</strong> Processa les peticions i retorna dades (normalment JSON o XML).</li>
                <li><strong>DOM:</strong> L'estructura HTML que s'actualitza dinàmicament.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Asíncronia en AJAX",
    content: `
      <h2 class="slide-title">Què entenem per Asíncron?</h2>
      <div class="text-large">
        <p>La <strong>asincronia</strong> és el cor d'AJAX. Permet que el navegador continuï funcionant mentre espera la resposta del servidor, millorant l'experiència d'usuari.</p>
        
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>⚡ Peticions asíncrones</h4>
              <p>El codi JavaScript no s'atura mentre espera la resposta del servidor. Això evita que la interfície es congel·li.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🔄 Crida i resposta</h4>
              <p>S'envia una petició al servidor i, quan arriba la resposta, s'executa una funció de "callback" per processar-la.</p>
            </div>
          </div>
        </div>
        
        <div class="requadre mt-4">
          <p><strong>🔗 Connexió amb APIs externes</strong></p>
          <p>Podem fer servir AJAX i JSON per connectar-nos a APIs com Twitter, Facebook, o serveis meteorològics, i obtenir informació en temps real sense sortir de la nostra pàgina.</p>
        </div>
        
        <h4 class="mt-4">📝 Exemple d'ús:</h4>
        <div class="code-block">
          <div class="code-header">
            <span>Exemple bàsic amb XMLHttpRequest</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="javascript">// Crear una instància de XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configurar la petició
xhr.open('GET', 'obtenir-dades.php', true); // true = asíncron

// Definir què fer quan arribi la resposta
xhr.onload = function() {
  if (xhr.status === 200) {
    const dades = JSON.parse(xhr.responseText);
    // Processar les dades i actualitzar el DOM
    console.log(dades);
  }
};

// Enviar la petició
xhr.send();</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "Estructura pràctica: articles.js",
    content: `
      <h2 class="slide-title">Estructura d'un fitxer AJAX: articles.js</h2>
      <div class="text-large">
        <p>Quan treballem amb AJAX en un projecte real, organitzem el codi en fitxers específics. Aquí veiem com estructurar <code>articles.js</code>:</p>
        
        <div class="module-card mt-4">
          <div class="module-title">📁 Fitxers necessaris per treballar amb AJAX</div>
          <ul>
            <li><strong>articles.js</strong> – Conté totes les funcions JavaScript (AJAX i lògica de la interfície)</li>
            <li><strong>articles.view.php</strong> – Conté el codi HTML i PHP per mostrar resultats</li>
            <li><strong>Controlador PHP</strong> – Fitxer que gestiona les peticions AJAX i retorna dades (JSON)</li>
          </ul>
        </div>
        
        <h4 class="mt-4">🎨 Components de articles.js:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Estructura inicial de articles.js</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="javascript">// 1. Definir identificadors HTML
const tableBodyId = "#articles";
const fetchSpinnerId = "#fetch-spinner";
const errorAlertId = "error-alert";

// 2. Declarar inputs amb validadors
const pathInput = {
  inputId: "path",
  validatorId: "invalid-path"
};

// 3. Al carregar la pàgina, executar funció principal
window.onload = loadArticles;

// 4. Funcions principals
function loadArticles() {
  // Petició AJAX per carregar articles
}

function deleteArticle(id) {
  // Petició AJAX per eliminar article
}

function addRow(articleData) {
  // Afegir fila a la taula amb dades de l'article
}</code></pre>
        </div>
        
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #e7f4e4;">
              <h4>✅ Funcions auxiliars</h4>
              <p><strong>validateInputs()</strong> – Verifica camps obligatoris<br>
              <strong>resetInput()</strong> – Reseteja valors i estils<br>
              <strong>showError()</strong> – Mostra errors d'input</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #fff3cd;">
              <h4>⚙️ Funcions de gestió</h4>
              <p><strong>clearTable()</strong> – Buida totes les files<br>
              <strong>showTableError()</strong> – Mostra alerta d'error<br>
              <strong>hideTableError()</strong> – Amaga alerta d'error</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Funció loadArticles() en detall",
    content: `
      <h2 class="slide-title">Funció loadArticles() – Carregar dades amb AJAX</h2>
      <div class="text-large">
        <p>La funció <code>loadArticles()</code> és el cor d'un sistema AJAX. S'encarrega de fer la petició al servidor i processar la resposta.</p>
        
        <div class="important-note">
          <p><strong>⚠️ Atenció:</strong> La càrrega dels articles ha de ser tant dels endpoints tractats com dels codis QR generats. No hem de carregar res directament de la BDD des de JavaScript!</p>
        </div>
        
        <h4 class="mt-4">🔍 Estructura de loadArticles():</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Funció loadArticles() completa</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="javascript">function loadArticles() {
  // Mostrar spinner de càrrega
  $(fetchSpinnerId).show();
  
  // Configurar timeout per peticions lentes
  const ajaxLoadTimeout = setTimeout(() => {
    $(fetchSpinnerId).html('Carregant... (és pot trigar uns segons)');
  }, 3000);
  
  // Fer petició AJAX
  $.ajax({
    type: "GET", // Mètode HTTP
    url: "endpoint/articles", // URL del endpoint
    headers: {
      "Authorization": "el_vostre_token" // Si l'endpoint requereix autenticació
    },
    dataType: "json", // Format de resposta esperat
    success: function(response) {
      clearTimeout(ajaxLoadTimeout);
      
      // Verificar si hi ha errors a la resposta
      if (response.error) {
        showTableError(response.error);
        return;
      }
      
      // Netejar taula abans d'afegir nous elements
      clearTable();
      
      // Processar cada article de la resposta
      // NOTA: L'estructura pot variar segons l'endpoint
      response.articles.forEach((article) => {
        addRow({
          id: article.id,
          nickname: article.nickname_player,
          name: article.name
        });
      });
      
      $(fetchSpinnerId).hide();
    },
    error: function(xhr, status, error) {
      clearTimeout(ajaxLoadTimeout);
      showTableError("Error en carregar articles: " + error);
      $(fetchSpinnerId).hide();
    }
  });
}</code></pre>
        </div>
        
        <div class="requadre mt-4">
          <p><strong>🔄 Adaptació a diferents estructures de resposta</strong></p>
          <p>Si l'endpoint retorna una estructura diferent a l'esperada, hem d'adaptar el processament. Per exemple:</p>
          <p><code>{ "articles": [ {"id": 15, "nickname_player": "Air Jordan", "name": "Michael Jordan"} ] }</code></p>
          <p>En aquest cas, accedim a <code>response.articles</code> enlloc de <code>response</code> directament.</p>
        </div>
      </div>
    `
  },
  {
    title: "Actualització de vistes AJAX",
    content: `
      <h2 class="slide-title">Com i quan s'actualitza una vista AJAX?</h2>
      <div class="text-large">
        <p>Hi ha diferents estratègies per mantenir una vista AJAX actualitzada amb les dades més recents del servidor.</p>
        
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>⏱️ Polling automàtic</h4>
              <p><strong>Com funciona:</strong> Configurar <code>setInterval()</code> per fer peticions periòdiques.<br>
              <strong>Ventatges:</strong> Transparent a l'usuari, fàcil d'implementar.<br>
              <strong>Inconvenients:</strong> Càrrega innecessària del servidor, pot consumir molts recursos.</p>
              <p><strong>Recomanable per:</strong> Dades dinàmiques com xats, notificacions.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🔌 WebSockets</h4>
              <p><strong>Com funciona:</strong> Connexió persistent bidireccional entre client i servidor.<br>
              <strong>Ventatges:</strong> Comunicació en temps real, eficient per a alt volum de dades.<br>
              <strong>Inconvenients:</strong> Més complex d'implementar, requereix suport del servidor.</p>
              <p><strong>Recomanable per:</strong> Aplicacions amb dades en temps real com jocs, col·laboració.</p>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">📋 Comparativa d'estratègies:</h4>
        <div class="table-responsive mt-3">
          <table class="table table-bordered">
            <thead class="table-light">
              <tr>
                <th>Estratègia</th>
                <th>Complexitat</th>
                <th>Eficiència</th>
                <th>Ús de recursos</th>
                <th>Casos d'ús</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Polling</strong></td>
                <td>Baixa</td>
                <td>Baixa</td>
                <td>Alt</td>
                <td>Xats simples, notificacions</td>
              </tr>
              <tr>
                <td><strong>WebSockets</strong></td>
                <td>Alta</td>
                <td>Alta</td>
                <td>Baix</td>
                <td>Jocs, col·laboració, dades en temps real</td>
              </tr>
              <tr>
                <td><strong>Long Polling</strong></td>
                <td>Mitjana</td>
                <td>Mitjana</td>
                <td>Mitjana</td>
                <td>Notificacions push simples</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">⚙️ Implementació de Polling</div>
          <pre><code class="javascript">// Polling automàtic cada 10 segons
const pollingInterval = setInterval(() => {
  loadArticles(); // Carregar articles de nou
}, 10000); // 10,000 ms = 10 segons

// Aturar el polling quan calgui
function stopPolling() {
  clearInterval(pollingInterval);
}</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "Contextualització i bones pràctiques",
    content: `
      <h2 class="slide-title">Contextualització i integració al projecte</h2>
      <div class="text-large">
        <p>Per integrar AJAX correctament en un projecte PHP, cal plantejar-se una estructura clara i bones pràctiques.</p>
        
        <div class="requadre mt-4">
          <p><strong>🤔 Reflexió important</strong></p>
          <p>Ens cal un fitxer al controlador que carregui la vista <code>articles.view.php</code> o viceversa?</p>
          <p class="mt-2"><strong>Resposta:</strong> Normalment el controlador carrega la vista, i la vista inclou el JavaScript que farà les peticions AJAX de tornada al controlador.</p>
        </div>
        
        <h4 class="mt-4">✅ Bones pràctiques amb AJAX:</h4>
        <ol class="concept-list">
          <li><strong>Separació de responsabilitats:</strong> JavaScript gestiona la interfície, PHP gestiona la lògica i les dades.</li>
          <li><strong>Validació a banda del client i servidor:</strong> No confiar només en validació JavaScript.</li>
          <li><strong>Gestó d'errors adequada:</strong> Mostrar missatges clars als usuaris en cas d'error.</li>
          <li><strong>Feedback visual:</strong> Spinners, missatges de càrrega, estats deshabilitats durant peticions.</li>
          <li><strong>Seguretat:</strong> Validar i sanititzar totes les dades al servidor, implementar CSRF tokens.</li>
          <li><strong>Optimització:</strong> Limitar freqüència de peticions, implementar cache quan sigui possible.</li>
        </ol>
        
        <h4 class="mt-4">⚠️ Errors comuns a evitar:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #fff3cd;">
              <h4>❌ Confiar només en validació client</h4>
              <p>JavaScript es pot desactivar o manipular. Sempre validar al servidor (PHP).</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #f8d7da;">
              <h4>❌ Oblidar l'estat de càrrega</h4>
              <p>Usuaris necessiten saber quan una petició està en curs. Incloure spinners o missatges.</p>
            </div>
          </div>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">🔧 Integració al flux de treball</div>
          <ul>
            <li>Documentar tots els endpoints AJAX disponibles</li>
            <li>Crear una capa de servei JavaScript reutilitzable</li>
            <li>Implementar gestió centralitzada d'errors AJAX</li>
            <li>Provar peticions AJAX amb eines com Postman o cURL</li>
            <li>Monitoritzar el rendiment de les peticions AJAX</li>
          </ul>
        </div>
      </div>
    `
  },

];