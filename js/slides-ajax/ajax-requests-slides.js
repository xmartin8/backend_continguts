// Diapositives sobre peticions GET i POST
const ajaxRequestsSlides = [
{
    title: "Peticions GET i POST",
    content: `
      <h2 class="slide-title">GET vs POST: Quan usar cada mètode</h2>
      <div class="text-large">
        <p>Entendre les diferències entre GET i POST és crucial per al desenvolupament web correcte i segur.</p>
        
        <div class="table-responsive mt-4">
          <table class="table table-bordered table-hover">
            <thead class="table-dark">
              <tr>
                <th>Característica</th>
                <th>GET</th>
                <th>POST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Propòsit</strong></td>
                <td>Obtenir dades (SELECT)</td>
                <td>Enviar dades per processar (INSERT/UPDATE)</td>
              </tr>
              <tr>
                <td><strong>Visibilitat</strong></td>
                <td>Paràmetres a la URL</td>
                <td>Paràmetres al cos de la petició</td>
              </tr>
              <tr>
                <td><strong>Seguretat</strong></td>
                <td>❌ Menys segur (historial, logs)</td>
                <td>✅ Més segur (no visible en URL)</td>
              </tr>
              <tr>
                <td><strong>Mida de dades</strong></td>
                <td>Limitada (depèn del navegador)</td>
                <td>Molt més gran (teòricament il·limitat)</td>
              </tr>
              <tr>
                <td><strong>Cacheable</strong></td>
                <td>Sí (per defecte)</td>
                <td>No (per defecte)</td>
              </tr>
              <tr>
                <td><strong>Idempotent</strong></td>
                <td>Sí (múltiples crides = mateix resultat)</td>
                <td>No (pot canviar l'estat del servidor)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 class="mt-4">📝 Exemples pràctics:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="code-block h-100">
              <div class="code-header">
                <span>GET amb paràmetres URL</span>
                <button class="copy-btn">Copiar</button>
              </div>
              <pre><code class="javascript">// GET: Obtenir dades amb paràmetres
fetch('https://api.exemple.cat/noticies?categoria=tecnologia&limit=10')
  .then(resposta => resposta.json())
  .then(noticies => {
    // Processar notícies
  });

// Equivalent amb URLSearchParams (més net)
const params = new URLSearchParams({
  categoria: 'tecnologia',
  limit: 10,
  ordenar: 'data_desc'
});
fetch('https://api.exemple.cat/noticies?' + params);</code></pre>
            </div>
          </div>
          <div class="col-md-6">
            <div class="code-block h-100">
              <div class="code-header">
                <span>POST amb formularis i JSON</span>
                <button class="copy-btn">Copiar</button>
              </div>
              <pre><code class="javascript">// POST amb form-data (com formularis)
const formData = new FormData();
formData.append('nom', 'Anna');
formData.append('avatar', arxiuInput.files[0]);

fetch('registre.php', {
  method: 'POST',
  body: formData
});

// POST amb JSON (API REST)
fetch('api/usuari', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nom: 'Anna',
    email: 'anna@exemple.cat',
    actiu: true
  })
});</code></pre>
            </div>
          </div>
        </div>
        
        <div class="important-note mt-4">
          <p><strong>⚠️ Seguretat:</strong> Mai enviïs dades sensibles (contrasenyes, tokens) per GET. Sempre usa HTTPS amb POST per a informació confidencial.</p>
        </div>
      </div>
    `
  }
];