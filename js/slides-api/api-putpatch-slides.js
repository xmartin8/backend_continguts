// Diapositives de mètodes HTTP
const apiPutPatchSlides = [
  {
    title: "PUT vs PATCH",
    content: `
      <h3 class="slide-title">2. PUT vs PATCH</h3>
      
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
          <p class="text-center mt-3 text-muted"></p>
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