// Diapositives d'introducció a API
const apiIntroSlides = [
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
  }
];