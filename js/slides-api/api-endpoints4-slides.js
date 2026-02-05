const apiEndpoints4Slides = [
  {
    title: "Gestió dels endpoints (Routing & Controlador)",
    content: `
      <h3 class="slide-title">Separació de responsabilitats: Routing vs Controlador</h3>
      
      <div class="text-large mb-4">
        <p>És fonamental entendre la diferència entre el sistema de routing i el controlador. Cada un té responsabilitats ben definides.</p>
      </div>

      <div class="row mb-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">Sistema de Routing</h5>
              <p class="mb-0 small">(capa de redirecció)</p>
            </div>
            <div class="card-body">
              <ul>
                <li>Intercepta les peticions HTTP que arriben al servidor</li>
                <li>Decideix quin controlador i mètode han de gestionar-les</li>
                <li>Si la ruta no existeix, retorna error 404</li>
                <li>Verifica el mètode HTTP vàlid</li>
              </ul>
              <div class="alert alert-warning mt-3 small">
                <strong>Important:</strong> Si aquesta comprovació es fes dins la lògica de control, hauríem de carregar tots els controladors possibles només per verificar si un endpoint és vàlid. Això seria poc eficient i poc escalable!
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header bg-success text-white">
              <h5 class="mb-0">Controlador</h5>
              <p class="mb-0 small">(capa de lògica de control)</p>
            </div>
            <div class="card-body">
              <ul>
                <li>Només s'executa si el routing ha determinat que l'endpoint és vàlid</li>
                <li>Assumeix que la ruta ja és vàlida</li>
                <li>Es limita a executar la lògica de negoci</li>
                <li>Processa la petició específica</li>
              </ul>
              <div class="alert alert-info mt-3 small">
                <strong>Contingut del controlador:</strong> Només ha de contenir la lògica específica d'un endpoint, com obtenir dades del model, validar dades d'entrada o generar respostes.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="requadre mt-4">
        <div class="row align-items-center">
          <div class="col text-center">
            <p class="mb-1"><strong>Petició HTTP</strong></p>
            <p class="mb-0">nom_domini.cat/producte/5</p>
          </div>
          <div class="col-1 text-center">
            <div class="requadre-arrow">→</div>
          </div>
          <div class="col text-center">
            <p class="mb-1"><strong>Routing</strong></p>
            <p class="mb-0">Comprova ruta /producte/{id}</p>
            <p class="mb-0">Redirigeix a ProducteController</p>
          </div>
          <div class="col-1 text-center">
            <div class="requadre-arrow">→</div>
          </div>
          <div class="col text-center">
            <p class="mb-1"><strong>Controlador</strong></p>
            <p class="mb-0">Executa producte(5)</p>
            <p class="mb-0">Interactua amb el model</p>
            <p>Retorna resposta JSON</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Gestió dels endpoints (Flux complet)",
    content: `
      <h3 class="slide-title">Flux complet d'una petició API</h3>
      
      <div class="text-large mb-4">
        <p>Seguidament es mostra el flux complet des que l'usuari fa una petició fins que rep la resposta.</p>
      </div>

      <div class="module-card">
        <h4 class="module-title">Flux detallat pas a pas</h4>
        
        <div class="steps-container mt-4">
          <div class="step mb-3">
            <div class="step-number">1</div>
            <div class="step-content">
              <h5>Petició HTTP</h5>
              <p>L'usuari visita <code>nom_domini.cat/producte/5</code> o fa una petició mitjançant una eina com Postman.</p>
            </div>
          </div>
          
          <div class="step mb-3">
            <div class="step-number">2</div>
            <div class="step-content">
              <h5>Servidor Web</h5>
              <p>Apache/Nginx rep la petició i l'executa segons la configuració del <code>.htaccess</code> o fitxer similar.</p>
            </div>
          </div>
          
          <div class="step mb-3">
            <div class="step-number">3</div>
            <div class="step-content">
              <h5>Redirecció a index.php</h5>
              <p>Totes les peticions que no corresponen a fitxers reals es redirigeixen a <code>index.php</code> amb el paràmetre <code>url</code>.</p>
            </div>
          </div>
          
          <div class="step mb-3">
            <div class="step-number">4</div>
            <div class="step-content">
              <h5>Sistema de Routing</h5>
              <p><code>index.php</code> analitza la URL i el mètode HTTP per determinar el controlador i mètode corresponents.</p>
              <div class="alert alert-warning mt-2 small">
                <strong>Si la ruta no existeix → Error 404</strong>
              </div>
            </div>
          </div>
          
          <div class="step mb-3">
            <div class="step-number">5</div>
            <div class="step-content">
              <h5>Instanciació del Controlador</h5>
              <p>Es crea una instància del controlador corresponent (ex: <code>ProducteController</code>).</p>
            </div>
          </div>
          
          <div class="step mb-3">
            <div class="step-number">6</div>
            <div class="step-content">
              <h5>Execució del Mètode</h5>
              <p>S'executa el mètode específic amb els paràmetres rebuts (ex: <code>producte(5)</code>).</p>
            </div>
          </div>
          
          <div class="step mb-3">
            <div class="step-number">7</div>
            <div class="step-content">
              <h5>Interacció amb el Model</h5>
              <p>El controlador interactua amb el model per obtenir o modificar dades de la base de dades.</p>
            </div>
          </div>
          
          <div class="step mb-3">
            <div class="step-number">8</div>
            <div class="step-content">
              <h5>Generació de Resposta</h5>
              <p>Es genera una resposta en format JSON amb l'estructura estàndard (status, msg, data).</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">9</div>
            <div class="step-content">
              <h5>Retorn al Client</h5>
              <p>La resposta s'envia de tornada al client amb els headers HTTP apropiats.</p>
            </div>
          </div>
        </div>
      </div>

      <style>
        .steps-container {
          position: relative;
          padding-left: 40px;
        }
        
        .step {
          position: relative;
          margin-bottom: 30px;
        }
        
        .step-number {
          position: absolute;
          left: -40px;
          top: 0;
          width: 32px;
          height: 32px;
          background-color: #0d6efd;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        
        .step-content {
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #0d6efd;
        }
        
        .step-content h5 {
          color: #0d6efd;
          margin-bottom: 5px;
        }
      </style>

      <div class="important-note mt-4">
        <h5>📋 Resum de conceptes clau:</h5>
        <ul class="mb-0">
          <li>El <strong>routing</strong> és responsable de la redirecció inicial i validació de rutes</li>
          <li>El <strong>controlador</strong> només s'executa quan la ruta és vàlida</li>
          <li>Cada component té responsabilitats ben definides</li>
          <li>La separació de preocupacions millora la mantenibilitat</li>
          <li>Els frameworks automatitzen gran part d'aquest flux</li>
        </ul>
      </div>
    `
  }
];