const apiideConfigSlides = [
  {
    title: "Configuració del IDE i navegador",
    content: `
      <h2 class="slide-title">6. Configuració del IDE i extensions necessàries</h2>
      <div class="text-large">
        <p>Per treballar eficientment amb APIs i JSON, és important configurar correctament el teu entorn de desenvolupament.</p>
        
        <div class="row mb-5">
          <div class="col-md-6">
            <div class="module-card h-100">
              <div class="module-title">🔧 Configuracions del IDE (VS Code recomanat)</div>
              <h5 class="mt-3">Extensions essencials:</h5>
              <ul class="concept-list">
                <li><strong>REST Client</strong> - Provar APIs directament des de VS Code</li>
                <li><strong>Thunder Client</strong> - Client HTTP alternatiu</li>
                <li><strong>Prettier</strong> - Format automàtic de codi</li>
                <li><strong>ES7+ React/Redux snippets</strong> - Per a desenvolupament JavaScript</li>
                <li><strong>PHP Intelephense</strong> - Intel·ligència per a PHP</li>
              </ul>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="module-card h-100">
              <div class="module-title">🌐 Extensions de navegador per a JSON</div>
              <h5 class="mt-3">Per a Mozilla Firefox:</h5>
              <ul class="concept-list">
                <li><strong>JSONView</strong> - Visualitza JSON de forma llegible</li>
              </ul>
              
              <h5 class="mt-3">Per a Google Chrome:</h5>
              <ul class="concept-list">
                <li><strong>JSONVue</strong> - Visualitza i formata JSON</li>
                <li><strong>JSON Formatter</strong> - Alternativa per a formatar JSON</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>📝 Configuració de VS Code per a APIs</h4>
              <div class="code-block mt-2">
                <div class="code-header">
                  <span class="code-language">settings.json</span>
                </div>
                <pre><code>{
  "rest-client.environmentVariables": {
    "local": {
      "baseUrl": "http://localhost:8000/api",
      "token": "token_local"
    },
    "production": {
      "baseUrl": "https://api.exemple.cat/v1",
      "token": "token_prod"
    }
  },
  "files.autoSave": "afterDelay",
  "editor.formatOnSave": true
}</code></pre>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🔄 Flux de treball recomanat</h4>
              <ol class="concept-list">
                <li>Instal·lar extensions de navegador per veure JSON</li>
                <li>Configurar VS Code amb extensions d'API</li>
                <li>Crear fitxers .rest o .http per provar endpoints</li>
                <li>Utilitzar Postman o Insomnia per a proves més avançades</li>
                <li>Configurar entorns separats (dev, test, prod)</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="important-note mt-4">
          <strong>💡 Consells pràctics:</strong>
          <ul class="mt-2">
            <li>Utilitza <code>.rest</code> o <code>.http</code> per guardar les peticions d'API</li>
            <li>Configura variables d'entorn per a diferents entorns (dev, prod)</li>
            <li>Utilitza Postman Collections per a documentació i proves</li>
            <li>Fes servir les DevTools del navegador per inspeccionar peticions</li>
          </ul>
        </div>

        <div class="requadre mt-4">
          <div class="row align-items-center">
            <div class="col-md-4 text-center">
              <h5>JSONView</h5>
              <p class="mb-0"><small>Per a Firefox</small></p>
            </div>
            <div class="col-md-4 text-center">
              <h5>JSONVue</h5>
              <p class="mb-0"><small>Per a Chrome</small></p>
            </div>
            <div class="col-md-4 text-center">
              <h5>JSON Formatter</h5>
              <p class="mb-0"><small>Alternativa per Chrome</small></p>
            </div>
          </div>
        </div>
      </div>
    `
  }
];