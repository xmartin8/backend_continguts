// Diapositives sobre Fetch API
const ajaxFetchSlides = [
  {
    title: "Fetch API moderna",
    content: `
      <h2 class="slide-title">Fetch API: L'alternativa moderna</h2>
      <div class="text-large">
        <p>Fetch API és l'alternativa moderna a XMLHttpRequest, basada en Promeses. Ofereix una sintaxi més neta i millor gestió d'errors.</p>
        
        <div class="requadre mt-4">
          <p><strong>🚀 Avantatges de Fetch vs XHR</strong></p>
          <p>• Sintaxi més senzilla i llegible<br>
          • Basat en Promeses (evita "callback hell")<br>
          • Millor gestió d'errors<br>
          • Suport natiu per a Streams<br>
          • Integració amb async/await</p>
        </div>
        
        <h4 class="mt-4">📝 Exemples pràctics:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="code-block h-100">
              <div class="code-header">
                <span>Petició GET bàsica</span>
                <button class="copy-btn">Copiar</button>
              </div>
              <pre><code class="javascript">// Petició GET simple
fetch('https://api.exemple.cat/dades')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error HTTP: ' + response.status);
    }
    return response.json(); // Convertir a JSON
  })
  .then(dades => {
    console.log('Dades rebudes:', dades);
  })
  .catch(error => {
    console.error('Error:', error);
  });</code></pre>
            </div>
          </div>
          <div class="col-md-6">
            <div class="code-block h-100">
              <div class="code-header">
                <span>Amb async/await</span>
                <button class="copy-btn">Copiar</button>
              </div>
              <pre><code class="javascript">// Versió amb async/await (més llegible)
async function obtenirDades() {
  try {
    const resposta = await fetch('https://api.exemple.cat/dades');
    
    if (!resposta.ok) {
      ZZZZZZZZZZZZ
    }
    
    const dades = await resposta.json();
    console.log('Dades:', dades);
    return dades;
  } catch (error) {
    console.error('Error obtenint dades:', error);
    throw error;
  }
}

// Ús
obtenirDades().then(dades => processar(dades));</code></pre>
            </div>
          </div>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">⚙️ Configuració avançada de Fetch</div>
          <pre><code class="javascript">// Petició POST amb configuració completa
fetch('processar.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify({
    usuari: 'Anna',
    accio: 'actualitzar'
  }),
  mode: 'cors', // cors, no-cors, same-origin
  cache: 'no-cache', // no-cache, reload, force-cache
  credentials: 'include' // include, same-origin, omit
});</code></pre>
        </div>
      </div>
    `
  }
];