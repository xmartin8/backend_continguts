const apiEndpointsSlides = [
  {
    title: "Lectura d'un endpoint",
    content: `
      <h3 class="slide-title">Lectura d'un endpoint</h3>
      
      <div class="text-large mb-4">
        <p>Què cal tenir en compte?</p>
        <ul class="concept-list">
          <li><strong>Freqüència d'accés:</strong> amb quina periodicitat necessitem les dades</li>
          <li><strong>Mida de les dades:</strong> quantitat d'informació a processar</li>
          <li><strong>Complexitat del tractament:</strong> transformacions necessàries</li>
          <li><strong>Requeriments del sistema:</strong> recursos disponibles i restriccions</li>
        </ul>
      </div>

      <div class="module-card">
        <h4 class="module-title">Quin mètode triarem per assegurar la persistència de les dades?</h4>        
        <div class="generic-topics mt-3">
          <div class="generic-topic">
            <h5>Guardar el contingut en una taula temporal a la base de dades?</h5>
          </div>
          
          <div class="generic-topic">
            <h5>Tractar les dades directament des del fitxer JSON?</h5>
          </div>
          
          <div class="generic-topic">
            <h5>Fer que l'endpoint guardi només les dades necessàries?</h5>
          </div>
        </div>
      </div>

      <div class="module-card-orange mt-4">
        <h4 class="module-title-orange">Alternatives híbrides</h4>
        
        <div class="row">
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <p><strong>Llegir JSON i guardar les dades filtrades</strong> en base de dades</p>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <p><strong>Llegir JSON i guardar-lo temporalment</strong> en una memòria cau (Memcached)</p>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <p><strong>Sincronització amb l'endpoint</strong> mitjançant un script "Cron Job"</p>
            </div>
          </div>
        </div>
      </div>

    `
  },
  {
    title: "Lectura d'un endpoint (canvis d'estructura)",
    content: `
      <h3 class="slide-title">Lectura d'un endpoint (modificat)</h3>
      
      <div class="text-large mb-4">
        <p>Com hem d'actuar en cas que el proveïdor canviï l'estructura de l'endpoint proporcionat?</p>
     </div>

<div class="generic-topics mb-4">
  <div class="generic-topic">
    <h4>1. Validació anticipada</h4>
    <p>Comprovar l'estructura del JSON abans de processar-lo</p>
    <div class="text-center mt-3">
        <img src="../img/endpoint_modif.png"
             alt="Endpoint modificat"
             class="img-fluid"
             style="max-width: 100%; cursor: pointer;">
    </div>

  </div>
</div>

        
        <div class="generic-topic">
          <h4>2. Gestió de logs i excepcions</h4>
          <p>Registrar errors i informar de canvis en l'estructura. Ens serà útil tenir un registre dels errors i uns logs configurats que ens informin de canvis sobre l’estructura inicial del JSON.</p>
          <div class="code-block mt-2">
            <div class="code-header">
              <span class="code-language">PHP</span>
            </div>
            <pre><code class="php">try {
    $dadajson = json_decode(file_get_contents(), true);
    if (!$dadajson) {
        throw new Exception("JSON no vàlid.");
    }
} catch (Exception $e) {
    error_log($e->getMessage());
}</code></pre>
          </div>
        </div>
      </div>

      <div class="module-card">
        <h4 class="module-title">Altres casos més avançats</h4>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h5>Mapejar les dades del JSON</h5>
              <p>Crear un array associatiu que mapeja les dades del JSON. En cas de canvi, només cal modificar el codi del mapeig.</p>
              <div class="code-block mt-2">
                <div class="code-header">
                  <span class="code-language">PHP</span>
                </div>
                <pre><code class="php">$mapeig = [
    // mapeig de camps
];

foreach ($mapeig ...) {
    // processament
}</code></pre>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h5>Crear una capa d'abstracció</h5>
              <p>Desacoblar el codi que processa el JSON de l'estructura concreta. Tot i això, també requereix canvis en cas de modificació.</p>
              <p class="text-muted mt-2"><small>Es recomana treballar amb una estructura fixa a la capçalera del nostre fitxer JSON.</small></p>
            </div>
          </div>
        </div>
      </div>
    `
  },
   {
    title: "Creació d'un endpoint: Tractament del JSON",
    content: `
      <h3 class="slide-title">Creació d'un endpoint: Tractament del JSON</h3>
      
      <div class="text-large mb-4">
        <p>Es recomana treballar amb una estructura fixe a la capçalera del nostre fitxer JSON.

Cal que diferenciem entre l’status del protocol HTTP i l’status de la sol·licitud (GET, POST, ...) què és l’estat que retornem des del controlador</p>
     </div>

<div class="generic-topics mb-4">
  <div class="generic-topic">
    <div class="text-center mt-3">
        <img src="../img/endpoint_creacio.png"
             alt="Endpoint modificat"
             class="img-fluid"
             style="max-width: 100%; cursor: pointer;">
    </div>

  </div>
</div>

 `
  },

  {
    title: "Creació d'un endpoint: Estructura de resposta JSON",
    content: `
      <h3 class="slide-title">Creació d'un endpoint: Estructura estàndard per a respostes JSON</h3>
      
      <div class="text-large mb-4">
        <p>Cal diferenciar entre l'<strong>status del protocol HTTP</strong> i l'<strong>status de la sol·licitud</strong> que és l'estat que retornem des del controlador.</p>
        <p>Una bona pràctica és utilitzar una estructura consistent per a totes les respostes de la API.</p>
      </div>

      <div class="row mb-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header bg-success text-white">
              <h5 class="mb-0">Resposta exitosa</h5>
            </div>
            <div class="card-body">
              <div class="code-block">
                <div class="code-header">
                  <span class="code-language">JSON</span>
                </div>
                <pre><code class="json">{
  "status": true,
  "msg": "Llista de productes carregada correctament",
  "data": [
    {
      "id": 1,
      "name": "Producte A",
      "price": 19.99
    },
    {
      "id": 2,
      "name": "Producte B", 
      "price": 29.99
    }
  ]
}</code></pre>
              </div>
              <p class="mt-3">Aquest <code>status</code> indica que la sol·licitud ha retornat valors. També podríem configurar com <code>"code": [0,1]</code> per exemple.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header bg-warning text-white">
              <h5 class="mb-0">Resposta amb error lògic</h5>
            </div>
            <div class="card-body">
              <div class="code-block">
                <div class="code-header">
                  <span class="code-language">JSON</span>
                </div>
                <pre><code class="json">{
  "status": false,
  "msg": "No s'han trobat productes"
}</code></pre>
              </div>
              <p class="mt-3"><strong>Important:</strong> En qualsevol dels dos casos anteriors (true o false), l'status del protocol HTTP serà correcte (200 OK).</p>
                <div class="text-center mt-3">
        <img src="../img/endpoint_statusOK.png"
             alt="Endpoint modificat"
             class="img-fluid"
             style="max-width: 100%; cursor: pointer;">
    </div>
              </div>
          </div>
        </div>
      </div>

      <div class="module-card-orange">
        <h4 class="module-title-orange">Errors HTTP vs Errors d'aplicació</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h5>Errors HTTP</h5>
              <ul>
                <li>404 Not Found - Recurs no trobat</li>
                <li>403 Forbidden - Accés denegat</li>
                <li>401 Unauthorized - No autenticat</li>
                <li>500 Internal Server Error</li>
              </ul>
              <p class="mt-2">Els gestiona el servidor web / framework</p>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h5>Errors d'aplicació</h5>
              <ul>
                <li>Dades no trobades</li>
                <li>Validació fallida</li>
                <li>Restriccions de negoci</li>
                <li>Estats inconsistents</li>
              </ul>
              <p class="mt-2">Els gestiona la lògica de la nostra aplicació</p>
            </div>
          </div>
        </div>
      </div>

    `
  },
 
];