const apiEndpoints3Slides = [
      {
     title: "Gestió dels endpoints (Routing amb switch-case)",
    content: `
    <h3 class="slide-title">Gestió dels endpoints: Routing amb switch-case</h3>
          <div class="text-large mb-4">
        <p>On hem de gestionar la sol·licitud dels endpoints?</p>
     </div>

<div class="generic-topics mb-4">
  <div class="generic-topic">
    <div class="text-center mt-3">
        <img src="../img/endpoint_routing1.png"
             alt="Endpoint modificat"
             class="img-fluid"
             style="max-width: 100%; cursor: pointer;">
    </div>

  </div>
</div>
    
    `
  },  
  {
    title: "Gestió dels endpoints (Routing amb switch-case) II",
    content: `
      <h3 class="slide-title">Gestió dels endpoints: Routing amb switch-case II</h3>
      
      <div class="text-large mb-4">
        <p>En sistemes sense framework, el routing es gestiona manualment. La configuració del servidor redirigeix totes les peticions al fitxer <code>index.php</code> (o similar).</p>
      </div>

      <div class="row mb-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">Configuració .htaccess</h5>
            </div>
            <div class="card-body">
              <p>El fitxer <code>.htaccess</code> redirigeix les peticions a <code>index.php</code>.<br>Aquesta configuració envia totes les peticions que no corresponen a fitxers o directoris reals al nostre fitxer <code>index.php</code>.</p>
              <div class="code-block mt-2">
                <div class="code-header">
                  <span class="code-language">Apache (.htaccess)</span>
                </div>
                <pre><code>RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php?url=$1 [L,QSA]</code></pre>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header bg-success text-white">
              <h5 class="mb-0">Versió més completa</h5>
            </div>
            <div class="card-body">
              <div class="code-block">
                <div class="code-header">
                  <span class="code-language">Apache (.htaccess)</span>
                </div>
                <pre><code>Options All -Indexes
Options -MultiViews
RewriteEngine on

# Evitar accés directe a fitxers i directoris
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f

# Redirigir totes les sol·licituds a index.php
RewriteRule ^(.*)$ index.php?url=$1 [QSA,L]

# Pàgina personalitzada per a errors 404
ErrorDocument 404 /404.html</code></pre>
              </div>
              <p class="mt-2 small"><code>index.php</code> actua com la "porta d'entrada" de totes les sol·licituds a la nostra aplicació.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="module-card">
        <h4 class="module-title">Implementació del routing a index.php</h4>
        <p>Exemple genèric de com es gestiona una petició HTTP en un sistema sense framework.<br>El fitxer <code>index.php</code> conté el sistema de routing del projecte sense frameworks:</p>
        
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
          </div>
          <pre><code class="php">// Obtenim la URL i el mètode HTTP
$url = !empty($_GET['url']) ? $_GET['url'] : 'home';
$method = $_SERVER['REQUEST_METHOD'];

// Verificació del controlador
if (file_exists("Controllers/{$controller}.php")) {
    require_once("Controllers/{$controller}.php");
    $controller = new $controller();
    
    // Verificació del mètode
    if(method_exists($controller, $method)) {
        $controller->{$method}($params);
    } else {
        // Si el mètode no existeix
        http_response_code(404);
        echo "Error 404: Mètode no trobat";
    }
} else {
    // Si el controlador no existeix
    http_response_code(404);
    echo "Error 404: Controlador no trobat";
}</code></pre>
        </div>
      </div>

    `
  },
  {
    title: "Gestió dels endpoints (Routing amb switch-case) III",
    content: `
      <h3 class="slide-title">Gestió dels endpoints: Routing amb switch-case III</h3>
      
      <div class="text-large mb-4">
        <p>Una implementació més específica utilitzant <code>switch-case</code> per gestionar diferents rutes:</p>
      </div>

      <div class="code-block mb-4">
        <div class="code-header">
          <span class="code-language">PHP</span>
        </div>
        <pre><code class="php">require_once("Controllers/ProducteController.php");

$url = !empty($_GET['url']) ? $_GET['url'] : 'home';
$method = $_SERVER['REQUEST_METHOD'];

switch ($url) {
    case 'producte':
        if ($method === 'GET' && !empty($_GET['id'])) {
            $controller = new ProducteController();
            $controller->producte($_GET['id']);
        } else {
            http_response_code(404);
            echo json_encode(['status' => false, 
                             'msg' => 'Ruta no trobada o manca de parametres']);
        }
        break;
        
    // altres cases per a diferents rutes...
    
    default:
        http_response_code(404);
        echo json_encode(['status' => false, 
                         'msg' => 'Ruta no trobada']);
        break;
}</code></pre>
      </div>

      <div class="row mb-4">
        <div class="col-md-6">
          <div class="generic-topic h-100">
            <h5>Ventatges</h5>
            <ul>
              <li>Simple d'entendre i implementar</li>
              <li>Control total sobre el flux de peticions</li>
              <li>Poc overhead comparat amb frameworks</li>
              <li>Ideal per a aplicacions petites</li>
            </ul>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="generic-topic h-100">
            <h5>Desavantatges</h5>
            <ul>
              <li>Difícil de mantenir amb moltes rutes</li>
              <li>Duplicació de codi</li>
              <li>Manqueja de funcionalitats avançades</li>
              <li>No és escalable per a projectes grans</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="module-card-orange">
        <h4 class="module-title-orange">Alternativa: Routing mapejant rutes</h4>
        <p>En aquest cas, estaríem imitant el funcionament dels frameworks amb un sistema de mapes de rutes:</p>
        
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
          </div>
          <pre><code class="php">require_once("Controllers/ProducteController.php");

// Mapejar les rutes
$routes = [
    'GET' => [
        'producte' => [ProducteController::class, 'producte'], 
        'productes' => [ProducteController::class, 'productes']
    ],
    // cal fer igual amb POST, PUT i DELETE
];

// Obtenir l'endpoint i el mètode HTTP
$url = !empty($_GET['url']) ? $_GET['url'] : '';
$method = $_SERVER['REQUEST_METHOD'];

// Validem si la ruta existeix
// Comprovem si hi ha paràmetres (id)
// Si no es troba la ruta:
    http_response_code(404);
    echo json_encode(['status' => false, 
                     'msg' => 'Ruta no trobada']);</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "Gestió dels endpoints (Routing amb Framework)",
    content: `
      <h3 class="slide-title">Gestió dels endpoints: Routing amb Framework</h3>
      
      <div class="text-large mb-4">
        <p>Els frameworks moderns automatitzen el sistema de routing, proporcionant una sintaxi més clara i mantenible.</p>
      </div>

      <div class="module-card">
        <h4 class="module-title">Definició de rutes amb Laravel (exemple)</h4>
        
        <div class="code-block">
          <div class="code-header">
            <span class="code-language">PHP (Laravel - web.php)</span>
          </div>
          <pre><code class="php">Route::get('/producte/{id}', [ProducteController::class, 'producte']);
Route::get('/productes', [ProducteController::class, 'productes']);
Route::post('/registre', [ProducteController::class, 'registre']);
Route::put('/actualitzar/{id}', [ProducteController::class, 'actualitzar']);
Route::delete('/eliminar/{id}', [ProducteController::class, 'eliminar']);</code></pre>
        </div>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h6>Ventatges del Framework</h6>
              <ul class="small">
                <li>Sintaxi clara i expressiva</li>
                <li>Gestió automàtica de mètodes HTTP</li>
                <li>Validació integrada de paràmetres</li>
                <li>Middleware incorporat</li>
              </ul>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h6>Errors automàtics</h6>
              <p class="small">Quan un endpoint no existeix, el framework retorna automàticament:</p>
              <div class="code-block mt-1 small">
                <div class="code-header">
                  <span class="code-language">JSON</span>
                </div>
                <pre><code class="json">{
  "status": false,
  "message": "Endpoint no trobat"
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="module-card-orange mt-4">
        <h4 class="module-title-orange">Diferències respecte un sistema manual</h4>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h5>Amb PHP natiu</h5>
              <ul>
                <li>La lògica per processar rutes es fa manualment</li>
                <li>Els paràmetres (p.ex {id}) es passen manualment com a variables d'URL (<code>$_GET['id']</code>)</li>
                <li>Cal gestionar manualment si l'endpoint o el mètode HTTP no són vàlids (Errors 404 i 405)</li>
              </ul>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h5>Amb Framework</h5>
              <ul>
                <li>Automatització completa del routing</li>
                <li>Paràmetres injectats automàticament</li>
                <li>Gestió automàtica d'errors</li>
                <li>Funcionalitats avançades (middleware, grups, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  }
];
