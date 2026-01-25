const slides = [
  {
    title: "API",
    content: `
            <div class="api-content">
                <div class="api-image-container">
                    <img src="../img/api1.jpeg" alt="API en PHP" class="api-image" />
                </div>

                <div class="generic-info">
                    <h3 class="slide-title">API</h3>
<div class="generic-topics">
    <div class="generic-topic">
        <h4>🔌 Què és una API?</h4>
        <p>Interfície de Programació d'Aplicacions (API) que permet la comunicació entre diferents sistemes de programari.</p>
    </div>

    <div class="generic-topic">
        <h4>🔄 Com funciona una API</h4>
        <p>Les API reben sol·licituds (requests) via HTTP, les processen i retornen respostes (responses) en format estructurat.</p>
    </div>

    <div class="generic-topic">
        <h4>🔑 Tipus d'API</h4>
        <p>REST, SOAP, GraphQL, gRPC. REST és el més popular per a serveis web actuals.</p>
    </div>

    <div class="generic-topic">
        <h4>📊 Mètodes HTTP</h4>
        <p>GET (obtenir), POST (crear), PUT (actualitzar), DELETE (eliminar) - verbs principals per a operacions CRUD.</p>
    </div>

    <div class="generic-topic">
        <h4>📝 Format de dades API</h4>
        <p>JSON és l'estàndard actual per a APIs REST. XML encara s'utilitza en APIs SOAP i empresarials.</p>
    </div>

    <div class="generic-topic">
        <h4>🔐 Autenticació API</h4>
        <p>API Keys, OAuth 2.0, JWT Tokens, Basic Auth. OAuth 2.0 és el mètode més utilitzat per a autorització.</p>
    </div>

    <div class="generic-topic">
        <h4>📡 Endpoints i Rutes</h4>
        <p>URLs específiques que defineixen els punts d'accés als recursos de l'API (/usuarios, /productos, etc.).</p>
    </div>

    <div class="generic-topic">
        <h4>📚 Documentació API</h4>
        <p>Eina essencial per als desenvolupadors. OpenAPI/Swagger és l'estàndard per a documentar APIs REST.</p>
    </div>
</div>
                </div>
            </div>
        `,
  },
 {
  title: "Conceptes bàsics d'API",
  content: `

    <h2 class="slide-title">1. Què és una API? (Interface de Programació d'Aplicacions)</h2>

    
    <div class="generic-info">
      <!-- Primer punt -->
      <div class="mb-4 text-center">
        <h4 class="text-warning mb-3" >Què fa?</h4>
        <div class="bg-white p-3 rounded border">
          <p class="lead mb-0 text-dark">Integrar software</p>
        </div>
      </div>
      
      <!-- Segon punt -->
      <div class="mb-4 text-center">
        <h4 class="text-warning mb-3">Per tant...</h4>
        <div class="bg-white p-3 rounded border">
          <p class="lead mb-0 text-dark">Permet la comunicació entre aplicacions de diferents llenguatges</p>
        </div>
      </div>
      
      <!-- Tercer punt -->
      <div class="mb-4 text-center">
        <h4 class="text-warning mb-3 ">Com?</h4>
        <div class="bg-white p-3 rounded border">
          <p class="lead mb-0 text-dark">Mitjançant peticions HTTP</p>
        </div>
      </div>
      
      <!-- Quart punt -->
      <div class="mb-4 text-center">
        <h4 class="text-warning mb-3">Quines?</h4>
        <div class="bg-white p-3 rounded border">
          <div class="row">
          <div class="col-3 mb-2">
          </div>
            <div class="col-3 mb-2">
              <div class="bg-primary text-white p-2 rounded text-center">
                <strong>GET</strong><br>
                <small>Obtenir</small>
              </div>
            </div>

            <div class="col-3 mb-2">
              <div class="bg-success text-white p-2 rounded text-center">
                <strong>POST</strong><br>
                <small>Crear</small>
              </div>
            </div>
          <div class="col-3 mb-2">
          </div>
        <div class="col-3 mb-2">
          </div>
            <div class="col-3">
              <div class="bg-warning text-dark p-2 rounded text-center">
                <strong>PUT</strong><br>
                <small>Actualitzar</small>
              </div>
            </div>

            <div class="col-3">
              <div class="bg-danger text-white p-2 rounded text-center">
                <strong>DELETE</strong><br>
                <small>Eliminar</small>
              </div>
            </div>
            <div class="col-3 mb-2">
          </div>
          </div>
        </div>
      </div>
      
      <div class="mt-4 pt-3 border-top">
        <h5 class="text-primary">💡 Resum:</h5>
        <p class="mb-0 text-dark">Una API és un <strong>conjunt de regles i protocols</strong> que permeten a diferents aplicacions de programari <strong>comunicar-se entre si</strong>, independentment del llenguatge de programació utilitzat.</p>
      </div>
    </div>
  `
},
// Afegir aquesta diapositiva a l'array slides (després de la primera)
{
  title: "PUT vs PATCH",
  content: `

      <h3 class="slide-title">PUT vs PATCH</h3>
      
      <div class="row mb-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header bg-primary text-white">
              <h4 class="mb-0">PUT</h4>
            </div>
            <div class="card-body">
              <p class="card-text text-lg">
                <strong>Actualització completa del recurs</strong>
              </p>
              <ul class="text-large">
                <li>S'envia tot el recurs, fins i tot els camps que no han canviat</li>
                <li>Si un camp no s'inclou, s'estableix al valor per defecte o null</li>
                <li>Requereix enviar TOTES les dades del recurs</li>
                <li>Idempotent: múltiples peticions tenen el mateix efecte</li>
              </ul>
              
              <div class="code-block mt-3">
                <div class="code-header">
                  <span class="code-language">PHP (Exemple PUT)</span>
                </div>
                <pre><code id="put-code" class="php">// PUT - Enviem tot l'objecte usuari
{
  "id": 123,
  "nom": "Pere",
  "cognom": "Garcia",
  "email": "pere@exemple.cat",
  "edat": 35
}</code></pre>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header bg-success text-white">
              <h4 class="mb-0">PATCH</h4>
            </div>
            <div class="card-body">
              <p class="card-text text-lg">
                <strong>Modifica només una part del recurs</strong>
              </p>
              <ul class="text-large">
                <li>S'envien només els camps que es volen modificar</li>
                <li>Els camps que no s'inclouen es mantenen sense canvis</li>
                <li>Més eficient per a actualitzacions parcials</li>
                <li>No necessàriament idempotent</li>
              </ul>
              
              <div class="code-block mt-3">
                <div class="code-header">
                  <span class="code-language">PHP (Exemple PATCH)</span>
                </div>
                <pre><code id="patch-code" class="php">// PATCH - Enviem només el camp que volem canviar
{
  "email": "nou_email@exemple.cat"
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="important-note">
        <h5 class="mb-2">💡 Quan utilitzar cadascun?</h5>
        <div class="row">
          <div class="col-md-6">
            <p class="text-large"><strong>Utilitza PUT quan:</strong></p>
            <ul class="text-large">
              <li>Vols actualitzar tot el recurs</li>
              <li>Els clients tenen dades completes del recurs</li>
              <li>Necessites garantir idempotència</li>
            </ul>
          </div>
          <div class="col-md-6">
            <p class="text-large"><strong>Utilitza PATCH quan:</strong></p>
            <ul class="text-large">
              <li>Només vols modificar alguns camps</li>
              <li>Vols optimitzar l'amplada de banda</li>
              <li>El client pot no tenir totes les dades del recurs</li>
            </ul>
          </div>
        </div>
      </div>
            <div class="mt-5 pt-4 border-top">
        <div class="api-image-container">
          <h4 class="text-center mb-4">Diagrama Visual</h4>
          <img src="../img/putvspatch.png" alt="Diferència entre PUT i PATCH" class="api-image" />
          <p class="text-center mt-3 text-muted">
          </p>
        </div>
      </div>
            <div class="requadre mt-4">
        <div class="row align-items-center">
          <div class="col text-center">
            <p class="mb-1"><strong>Client</strong></p>
            <p class="mb-0">PUT: <span class="text-primary">Actualització completa del recurs</span></p>
            <p>PATCH: <span class="text-success">modifica només una part del recurs</span></p>
          </div>
          <div class="col-1 text-center">
            <div class="requadre-arrow">→</div>
          </div>
          <div class="col text-center">
            <p class="mb-1"><strong>Servidor</strong></p>
            <p>Processa la petició i actualitza la base de dades</p>
          </div>
        </div>
      </div>
  `
}
];