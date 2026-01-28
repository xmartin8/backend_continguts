// Diapositives sobre REST vs API tradicional
const apiRestVsApiSlides = [
  {
    title: "Representational State Transfer (REST)",
    content: `
      <h2 class="slide-title">3. Representational State Transfer (REST)</h2>
      <div class="text-large">
        
        <div class="requadre mb-4">
          <p><strong>Que fa REST?</strong></p>
          <div class="text-center">
            <p class="requadre-impacte" style="font-size: 1.4rem;">Transferència de recursos</p>
            <div class="requadre-arrow">↓</div>
            <p class="requadre-impacte" style="font-size: 1.4rem;">Per tant...</p>
            <p style="font-size: 1.3rem; font-weight: bold; color: #0d6efd;">API REST = Interface d'aplicacions que processa informació i transfereix dades</p>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>🗂️ Recursos</h4>
              <p>Tota la informació es representa com a recursos (usuaris, productes, articles, etc.)</p>
              <p>Cada recurs té una URL única (URI)</p>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>🔤 Representacions</h4>
              <p>Els recursos es poden representar en diferents formats: JSON, XML, HTML, etc.</p>
              <p>JSON és el format més utilitzat actualment</p>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>🔄 Transferència</h4>
              <p>Els clients transfereixen representacions dels recursos utilitzant mètodes HTTP</p>
              <p>Les operacions s'efectuen sobre les representacions</p>
            </div>
          </div>
        </div>

        <h4 class="mt-4">🎯 Principis REST (RESTful constraints):</h4>
        <div class="generic-topics mt-3">
          <div class="generic-topic">
            <h4>1. Client-Server</h4>
            <p>Separació de responsabilitats: client gestiona la interfície d'usuari, servidor gestiona l'emmagatzematge de dades.</p>
          </div>
          <div class="generic-topic">
            <h4>2. Stateless</h4>
            <p>Cada petició conté tota la informació necessària. El servidor no guarda estat de sessió.</p>
          </div>
          <div class="generic-topic">
            <h4>3. Cacheable</h4>
            <p>Les respostes han de ser explícitament cacheables o no cacheables.</p>
          </div>
          <div class="generic-topic">
            <h4>4. Uniform Interface</h4>
            <p>Interfície uniforme per a tota la interacció (URLs, mètodes HTTP, format de dades).</p>
          </div>
          <div class="generic-topic">
            <h4>5. Layered System</h4>
            <p>El client no sap si està connectat directament al servidor final o a un intermediari.</p>
          </div>
          <div class="generic-topic">
            <h4>6. Code on Demand (opcional)</h4>
            <p>El servidor pot transferir codi executable al client (JavaScript).</p>
          </div>
        </div>

        <div class="important-note mt-4">
          <strong>⚠️ Recorda:</strong> Una API REST no és només una API que utilitza HTTP. Ha de seguir aquests principis per ser considerada veritablement RESTful.
        </div>
      </div>
    `
  },
    {
    title: "API vs API REST",
    content: `
      <h2 class="slide-title">4. Diferència entre API i API REST</h2>
      <div class="text-large">
        
        <div class="row mb-5">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4 class="text-center">🌐 API (Application Programming Interface)</h4>
              <ul class="concept-list">
                <li><strong>Interface general</strong> per a la comunicació entre aplicacions</li>
                <li>Pot utilitzar diversos protocols (SOAP, RPC, etc.)</li>
                <li>No segueix necessàriament principis REST</li>
                <li>Més flexible en la implementació</li>
                <li>Pot ser més complexa en alguns casos</li>
                <li>Exemples: SOAP APIs, GraphQL, gRPC</li>
              </ul>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4 class="text-center">🔄 API REST (RESTful API)</h4>
              <ul class="concept-list">
                <li><strong>Tipus específic d'API</strong> que segueix principis REST</li>
                <li>Utilitza protocol HTTP i els seus mètodes (GET, POST, PUT, DELETE)</li>
                <li>Estateless: cada petició conté tota la informació necessària</li>
                <li>Recursos identificats per URLs</li>
                <li>Estructura estàndard i previsible</li>
                <li>Exemples: APIs de Twitter, GitHub, Google Maps</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="requadre">
          <p><strong>📊 Resum visual de la diferència:</strong></p>
          <div class="row text-center mt-3">
            <div class="col-md-5">
              <h5>API Tradicional</h5>
              <p>→ Interface de programació genèrica</p>
              <p>→ Múltiples protocols possibles</p>
              <p>→ Estructura variable</p>
            </div>
            <div class="col-md-2 d-flex align-items-center justify-content-center">
              <div class="requadre-arrow" style="font-size: 2.5rem;">vs</div>
            </div>
            <div class="col-md-5">
              <h5>API REST</h5>
              <p>→ REST = Representational State Transfer</p>
              <p>→ Utilitza HTTP i seus mètodes</p>
              <p>→ Segueix principis REST específics</p>
            </div>
          </div>
        </div>

        <div class="module-card mt-4">
          <div class="module-title">💡 Analogia senzilla</div>
          <p><strong>API</strong> és com el concepte de "telèfon" (comunicació entre persones)</p>
          <p><strong>API REST</strong> és com un "smartphone" (un tipus específic de telèfon amb regles i característiques concretes)</p>
          <p class="mt-2">Tota API REST és una API, però no tota API és una API REST.</p>
        </div>
      </div>
    `
  }
];