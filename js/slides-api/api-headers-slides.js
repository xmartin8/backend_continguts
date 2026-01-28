const apiheadersSlides = [
  {
    title: "Headers HTTP en APIs",
    content: `
      <h2 class="slide-title">5. Què tindrem en compte del Header?</h2>
      <div class="text-large">
        <p>Els camps del Header són necessaris per a entendre com es processa la informació en una petició HTTP.</p>
        
        <div class="generic-topics mt-4">
          <div class="generic-topic">
            <h4>Content-Type</h4>
            <p>Especifica el tipus de dades que s'està fent servir i ajuda en la comunicació server-client a entendre com han d'interpretar el contingut.</p>
            <div class="code-block mt-2">
              <div class="code-header">
                <span class="code-language">HTTP</span>
              </div>
              <pre><code>Content-Type: application/json
Content-Type: application/xml
Content-Type: multipart/form-data</code></pre>
            </div>
          </div>
          
          <div class="generic-topic">
            <h4>Content-Length</h4>
            <p>Informa al servidor o al client de la mida del contingut que estan a punt de rebre.</p>
            <div class="code-block mt-2">
              <div class="code-header">
                <span class="code-language">HTTP</span>
              </div>
              <pre><code>Content-Length: 348</code></pre>
            </div>
          </div>
          
          <div class="generic-topic">
            <h4>Authorization</h4>
            <p>Proporciona credencials d'autenticació al servidor. Permet al client obtenir recursos protegits del servidor.</p>
            <div class="code-block mt-2">
              <div class="code-header">
                <span class="code-language">HTTP</span>
              </div>
              <pre><code>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Authorization: Basic dXNlcjpwYXNzd29yZA==</code></pre>
            </div>
          </div>
          
          <div class="generic-topic">
            <h4>Accept</h4>
            <p>Indica al servidor quins tipus de contingut pot entendre el client.</p>
            <div class="code-block mt-2">
              <div class="code-header">
                <span class="code-language">HTTP</span>
              </div>
              <pre><code>Accept: application/json
Accept: application/xml, application/json</code></pre>
            </div>
          </div>
        </div>

        <h4 class="mt-4">Status o codis de resposta d'una URL</h4>
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4 class="text-success">2xx - Èxit</h4>
              <p>200 OK - Sol·licitud correcta</p>
              <p>201 Created - Recurso creat</p>
              <p>204 No Content - Èxit sense contingut</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4 class="text-warning">4xx - Error del client</h4>
              <p>400 Bad Request - Petició mal formada</p>
              <p>401 Unauthorized - No autenticat</p>
              <p>404 Not Found - Recurso no trobat</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4 class="text-danger">5xx - Error del servidor</h4>
              <p>500 Internal Server Error</p>
              <p>503 Service Unavailable</p>
              <p>504 Gateway Timeout</p>
            </div>
          </div>
        </div>

        <div class="important-note mt-4">
          <strong>📚 Recurs recomanat:</strong> 
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank" class="text-decoration-none">
            Guia completa de codis d'estat HTTP a MDN Web Docs
          </a>
        </div>
      </div>
    `
  }
];