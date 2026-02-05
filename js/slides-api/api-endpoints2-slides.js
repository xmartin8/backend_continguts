const apiEndpoints2Slides = [
      {
     title: "Creació d'un endpoint: Control d'errors generats",
    content: `
    <h3 class="slide-title">Creació d'un endpoint: Control d'errors generats</h3>
          <div class="text-large mb-4">
        <p>Els errors com ara 404, 403, etc... caldrà que els controleu:</p>
     </div>

<div class="generic-topics mb-4">
  <div class="generic-topic">
    <div class="text-center mt-3">
        <img src="../img/endpoint_error404.png"
             alt="Endpoint modificat"
             class="img-fluid"
             style="max-width: 100%; cursor: pointer;">
    </div>

  </div>
</div>
    `
  },
  {
    title: "Creació d'un endpoint: Controladors",
    content: `
      <h3 class="slide-title">Creació d'un endpoint: Estructura de controladors</h3>
      
      <div class="text-large mb-4">
        <p>Partim del següent exemple: Un sistema de vendes de productes, on treballarem amb entitats com <strong>Productes, Clients, Usuaris, Comptes</strong>, etc.</p>
        <p>Aquest sistema fa el tractament d'APIs i necessitem als nostres controladors definir les operacions CRUD.</p>
      </div>

      <div class="module-card">
        <h4 class="module-title">Estructura base del controlador</h4>
        <p>Cadascú dels controladors el definirem com una classe que hereta de <code>Controllers.php</code>, aquest fitxer contindrà totes les operacions comunes per a qualsevol controlador.</p>
        
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
          </div>
          <pre><code class="php">class Producte extends Controllers {
    
    public function __construct() {
        parent::__construct();  // Cridem el constructor base
    }
    
    public function producte($idproducte) {
        // Llegirà mitjançant peticions GET per a obtenir dades de la API
    }
    
    public function productes() {
        // Llegirà mitjançant peticions GET per a obtenir dades de la API  
    }
    
    public function registre() {
        // Creació de productes mitjançant POST
    }
    
    public function actualitzar($idproducte) {
        // Actualització de productes mitjançant PUT
    }
    
    public function eliminar($idproducte) {
        // Eliminació de productes mitjançant DELETE
    }
}</code></pre>
        </div>
      </div>

      <div class="generic-topics mt-4">
        <div class="generic-topic">
          <h5>Mètode producte($idproducte)</h5>
          <p><strong>GET</strong> - Obtenir un producte específic</p>
          <div class="code-block mt-2">
            <div class="code-header">
              <span class="code-language">PHP</span>
            </div>
            <pre><code class="php">public function producte($idproducte) {
    /**
     * Si es rep una petició GET, comprovem si el 
     * paràmetre idproducte és vàlid. 
     * Si és correcte, es crida la funció getProducte() 
     * del model:
     * $this->model->getProducte($idproducte)
     */
}</code></pre>
          </div>
        </div>
        
        <div class="generic-topic">
          <h5>Mètode productes()</h5>
          <p><strong>GET</strong> - Obtenir tots els productes</p>
          <div class="code-block mt-2">
            <div class="code-header">
              <span class="code-language">PHP</span>
            </div>
            <pre><code class="php">public function productes() {
    /**
     * Si es rep una petició GET, cridem al model 
     * per obtenir tots els productes:
     * $this->model->getProductes()
     * després retornem les dades en format JSON
     */
}</code></pre>
          </div>
        </div>
      </div>

      <div class="requadre mt-4">
        <div class="row align-items-center">
          <div class="col text-center">
            <p class="mb-1"><strong>Client</strong></p>
            <p class="mb-0">HTTP Request →</p>
          </div>
          <div class="col-1 text-center">
            <div class="requadre-arrow">→</div>
          </div>
          <div class="col text-center">
            <p class="mb-1"><strong>Controlador</strong></p>
            <p class="mb-0">Interpreta la petició</p>
            <p class="mb-0">Crida al model corresponent</p>
          </div>
          <div class="col-1 text-center">
            <div class="requadre-arrow">→</div>
          </div>
          <div class="col text-center">
            <p class="mb-1"><strong>Model</strong></p>
            <p class="mb-0">Accés a dades</p>
            <p>Lògica de negoci</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Creació d'un endpoint: Implementació",
    content: `
      <h3 class="slide-title">Creació d'un endpoint: Implementació detallada</h3>
      
      <div class="text-large mb-4">
        <p>Analitzem la implementació dels mètodes del controlador, especialment el maneig de diferents tipus de peticions HTTP.</p>
      </div>

      <div class="generic-topics">
        <div class="generic-topic">
          <h5>Mètode registre() - POST</h5>
          <p>Creació d'un nou producte</p>
          <div class="code-block mt-2">
            <div class="code-header">
              <span class="code-language">PHP</span>
            </div>
            <pre><code class="php">public function registre() {
    /**
     * S'executarà quan fem petició POST, per a crear 
     * un nou producte.
     * Obtindrem les dades del cos de la petició 
     * (format JSON) amb:
     * $_POST = json_decode(file_get_contents('php://input'), true)
     * 
     * Si les dades són correctes, cridem el mètode 
     * corresponent del model:
     * $this->model->setProducte()
     */
}</code></pre>
          </div>
          <div class="mt-2">
            <button class="btn btn-sm btn-secondary php-popover-btn" 
                    data-bs-toggle="popover" 
                    title="php://input"
                    data-bs-content="És un 'stream wrapper' que permet llegir el cos de la petició HTTP. Una interfície que permet accedir a dades d'E/S (fitxers, sockets, text, ...)">
              php://input
            </button>
            <button class="btn btn-sm btn-secondary php-popover-btn" 
                    data-bs-toggle="popover" 
                    title="json_decode(..., true)"
                    data-bs-content="True: retornarà un array associatiu. False: retornarà un objecte.">
              json_decode(true)
            </button>
          </div>
        </div>
        
        <div class="generic-topic">
          <h5>Mètode actualitzar() - PUT</h5>
          <p>Actualització d'un producte existent</p>
          <div class="code-block mt-2">
            <div class="code-header">
              <span class="code-language">PHP</span>
            </div>
            <pre><code class="php">public function actualitzar($idproducte) {
    /**
     * S'executarà quan fem petició PUT, actualitzarà 
     * un producte existent.
     * Si l'identificador ($idproducte) és vàlid i les 
     * dades enviades a la petició estan completes, 
     * cridem a la funció corresponent del model:
     * $this->model->putProducte()
     */
}</code></pre>
          </div>
        </div>
      </div>

      <div class="module-card mt-4">
        <h4 class="module-title">Funció auxiliar jsonResponse()</h4>
        <p>Aquesta funció es troba a <code>Helpers.php</code> i s'utilitza per a retornar respostes JSON estandarditzades.</p>
        
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
          </div>
          <pre><code class="php">function jsonResponse(array $arrayDades, int $codi) {
    if(is_array($arrayDades)) {
        // Estableix el codi d'estat HTTP. Aquesta línea envia una capçalera per a establir el codi d’estat de la resposta ($codi).
        // El codi d’estat ($codi) és fundamental per a que el client sàpiga si ha hagut algún error a la petició.
        header("HTTP/1.1 " . $codi);
        // Estableix el tipus de contingut amb format JSON  
        header("Content-Type: application/json");
        
        // Codifica l'array a JSON i el retorna al client
        echo json_encode($arrayDades, true);
    }
}</code></pre>
        </div>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h6>header("HTTP/1.1 " . $codi)</h6>
              <p class="small">Envia una capçalera per a establir el codi d'estat de la resposta. Aquest codi és fonamental perquè el client sàpiga si hi ha hagut algun error.</p>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h6>header("Content-Type: application/json")</h6>
              <p class="small">Indica al client que la resposta està en format JSON, permetent-li interpretar correctament les dades rebudes.</p>
            </div>
          </div>
        </div>
        
        <div class="alert alert-info mt-3">
          <strong>Important:</strong> Sense aquest codi d'estat, el client no sap si la petició ha sigut exitosa o no.
        </div>
      </div>
    `
  },
  {
    title: "Gestió dels endpoints: Routing",
    content: `
      <h3 class="slide-title">Gestió dels endpoints: Sistema de Routing</h3>
      
      <div class="text-large mb-4">
        <p>On es gestionen els endpoints que fa servir l'usuari? On declarem els endpoints que farem públics per a poder accedir a la nostra API?</p>
      </div>

      <div class="module-card">
        <h4 class="module-title">Sistema de Routing</h4>
        <p>L'endpoint que fa servir l'usuari es gestiona mitjançant un <strong>sistema de routing</strong>, que interpreta la petició HTTP i la redirigeix al mètode del controlador corresponent.</p>
        
        <div class="requadre mt-3">
          <div class="row align-items-center">
            <div class="col text-center">
              <p class="mb-1"><strong>Petició HTTP</strong></p>
              <p class="mb-0">GET /api/productes/123</p>
            </div>
            <div class="col-1 text-center">
              <div class="requadre-arrow">→</div>
            </div>
            <div class="col text-center">
              <p class="mb-1"><strong>Sistema de Routing</strong></p>
              <p class="mb-0">Interpreta la URL</p>
              <p class="mb-0">Identifica el controlador</p>
              <p>Redirigeix al mètode</p>
            </div>
            <div class="col-1 text-center">
              <div class="requadre-arrow">→</div>
            </div>
            <div class="col text-center">
              <p class="mb-1"><strong>Controlador</strong></p>
              <p class="mb-0">Producte->producte(123)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="module-card-orange mt-4">
        <h4 class="module-title-orange">Endpoints públics del controlador Producte</h4>
        <p>La classe <code>Producte</code> actua com a controlador, i cada mètode de la classe representa una operació que es pot fer sobre els recursos de la API.</p>
        
        <div class="table-responsive mt-3">
          <table class="table table-striped">
            <thead class="table-dark">
              <tr>
                <th>Mètode</th>
                <th>Endpoint</th>
                <th>HTTP Method</th>
                <th>Descripció</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>producte($idproducte)</code></td>
                <td><code>/api/producte/{id}</code></td>
                <td><span class="badge bg-primary">GET</span></td>
                <td>Obtenir un producte específic</td>
              </tr>
              <tr>
                <td><code>productes()</code></td>
                <td><code>/api/productes</code></td>
                <td><span class="badge bg-primary">GET</span></td>
                <td>Llistar tots els productes</td>
              </tr>
              <tr>
                <td><code>registre()</code></td>
                <td><code>/api/producte</code></td>
                <td><span class="badge bg-success">POST</span></td>
                <td>Crear un nou producte</td>
              </tr>
              <tr>
                <td><code>actualitzar($idproducte)</code></td>
                <td><code>/api/producte/{id}</code></td>
                <td><span class="badge bg-warning">PUT</span></td>
                <td>Actualitzar un producte existent</td>
              </tr>
              <tr>
                <td><code>eliminar($idproducte)</code></td>
                <td><code>/api/producte/{id}</code></td>
                <td><span class="badge bg-danger">DELETE</span></td>
                <td>Eliminar un producte</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="important-note mt-4">
        <h5>Resum:</h5>
        <ul class="mb-0">
          <li>El <strong>routing</strong> és responsable d'interpretar les peticions HTTP i redirigir-les al controlador i mètode corresponent</li>
          <li>Cada mètode del controlador correspon a un endpoint públic de la API</li>
          <li>Es segueixen les convencions REST per als mètodes HTTP (GET, POST, PUT, DELETE)</li>
          <li>Els endpoints segueixen una estructura consistent i previsible</li>
        </ul>
              <div class="mt-4 pt-3 border-top">
        <div class="api-image-container">
          <h5 class="text-center mb-3">Flux complet d'una petició API</h5>
          <div class="text-center">
            <p class="mb-2"><strong>Client → Routing → Controlador → Model → Base de dades</strong></p>
            </div>
        </div>
      </div>
      </div>
    `
  }
];