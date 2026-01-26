// Diapositives d'introducció a Gestió d'Errors
const errorsIntroSlides = [
  {
    title: "Gestió d'Errors en PHP",
    content: `
      <div class="errors-content">
        <div class="errors-image-container">
          <img src="../img/homer_404.png" alt="Gestió d'Errors en PHP" class="errors-image" />
        </div>

        <div class="generic-info">
          <h3 class="slide-title">Gestió d'Errors en PHP</h3>
          <div class="generic-topics">
            <div class="generic-topic">
              <h4>⚠️ Tipus d'Errors</h4>
              <p>PHP classifica els errors en: E_ERROR, E_WARNING, E_NOTICE, E_PARSE, E_DEPRECATED, etc.</p>
            </div>

            <div class="generic-topic">
              <h4>📊 Nivells d'Error</h4>
              <p>Es poden configurar els nivells d'error que es mostren i registren mitjançant error_reporting().</p>
            </div>

            <div class="generic-topic">
              <h4>🔧 Gestió d'Errors</h4>
              <p>Funció set_error_handler() per definir un gestor d'errors personalitzat.</p>
            </div>

            <div class="generic-topic">
              <h4>🎯 Excepcions</h4>
              <p>Les excepcions permeten un control estructurat dels errors mitjançant try...catch.</p>
            </div>

            <div class="generic-topic">
              <h4>📝 Registre d'Errors</h4>
              <p>PHP pot registrar errors en fitxers de log, útils per a depuració i monitorització.</p>
            </div>

            <div class="generic-topic">
              <h4>🛡️ Die() vs Excepcions</h4>
              <p>Comparativa entre l'ús de die()/exit() i el maneig d'excepcions amb try...catch.</p>
            </div>

            <div class="generic-topic">
              <h4>📋 Error Logging</h4>
              <p>Configuració de log d'errors per a producció vs desenvolupament.</p>
            </div>

            <div class="generic-topic">
              <h4>🎨 Errors Personalitzats</h4>
              <p>Creació de pàgines d'error personalitzades per a usuaris finals.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  }
];