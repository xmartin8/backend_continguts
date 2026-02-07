// Diapositives avançades sobre Cookies i Sessions
const cookiesAdvancedSlides = [
  {
    title: "Cookies de Tercers i Seguiment",
    content: `
      <h2 class="slide-title">Cookies de Tercers i Seguiment</h2>
      <div class="text-large">
        <h4>🌐 Què són les cookies de tercers?</h4>
        <p>Cookies establertes per un domini diferent al que estàs visitant actualment.</p>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🎯 Ús legítim:</h4>
              <ul>
                <li>Analítiques web (Google Analytics)</li>
                <li>Publicitat (Google Ads, Facebook)</li>
                <li>Login social (Facebook, Google Sign-in)</li>
                <li>Compartició a xarxes socials</li>
                <li>Vídeos incrustats (YouTube, Vimeo)</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>⚠️ Preocupacions:</h4>
              <ul>
                <li>Seguiment de comportament entre llocs</li>
                <li>Creació de perfils d'usuari</li>
                <li>Publicitat dirigida intrusiva</li>
                <li>Problemes de privadesa</li>
                <li>Non-compliment amb GDPR</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h4>📋 Requeriments legals (GDPR):</h4>
        <div class="module-card mt-2">
          <div class="module-title">🔒 Regulació General de Protecció de Dades</div>
          <p><strong>Consentiment explícit:</strong> Els usuaris han de donar consentiment actiu per a cookies no essencials.</p>
          <ul>
            <li><strong>Cookies essencials:</strong> No necessiten consentiment (sessions, cistella compra)</li>
            <li><strong>Cookies no essencials:</strong> Necessiten consentiment (analítiques, publicitat)</li>
            <li><strong>Informació clara:</strong> Els usuaris han de saber quines cookies s'utilitzen i per què</li>
            <li><strong>Retirada fàcil:</strong> Els usuaris poden revocar el consentiment fàcilment</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "Emmagatzematge alternatiu de Sessions",
    content: `
      <h2 class="slide-title">Emmagatzematge alternatiu de Sessions</h2>
      <div class="text-large">
        <h4>📊 Comparativa d'opcions d'emmagatzematge:</h4>
        <table class="table table-bordered mt-2">
          <thead>
            <tr>
              <th>Mètode</th>
              <th>Velocitat</th>
              <th>Escalabilitat</th>
              <th>Persistència</th>
              <th>Ús Recomanat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Fitxers (per defecte)</strong></td>
              <td>Lenta</td>
              <td>Baixa</td>
              <td>Excel·lent</td>
              <td>Desenvolupament, tràfic baix</td>
            </tr>
            <tr>
              <td><strong>Memòria (memcached)</strong></td>
              <td>Molt ràpida</td>
              <td>Alta</td>
              <td>Cap (volàtil)</td>
              <td>Aplicacions de gran tràfic</td>
            </tr>
            <tr>
              <td><strong>Base de dades (MySQL)</strong></td>
              <td>Mitjana</td>
              <td>Mitjana</td>
              <td>Excel·lent</td>
              <td>Clúster, alta disponibilitat</td>
            </tr>
            <tr>
              <td><strong>Redis</strong></td>
              <td>Molt ràpida</td>
              <td>Alta</td>
              <td>Configurable</td>
              <td>Aplicacions modernes, real-time</td>
            </tr>
          </tbody>
        </table>
        
        <h4>⚙️ Configurar sessions a Redis:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('redis-sessions', this)">Copiar</button>
          </div>
          <pre><code id="redis-sessions"><?php
// Via php.ini
; session.save_handler = redis
; session.save_path = "tcp://127.0.0.1:6379?auth=password"

// O programàticament
ini_set('session.save_handler', 'redis');
ini_set('session.save_path', 'tcp://127.0.0.1:6379');

// O utilitzant Redis directament per a sessions personalitzades
$redis = new Redis();
$redis->connect('127.0.0.1', 6379);
$redis->auth('password');

// Emmagatzemar dades de sessió
$sessionId = bin2hex(random_bytes(16));
$sessionData = json_encode([
    'user_id' => 123,
    'last_activity' => time(),
    'ip_address' => $_SERVER['REMOTE_ADDR']
]);

$redis->setex("session:$sessionId", 3600, $sessionData);</code></pre>
        </div>
      </div>
    `
  }
];