// Diapositives d'introducció a Seguretat en PHP
const seguretatIntroSlides = [
  {
    title: "Configuració de Seguretat",
    content: `
        <div class="security-image-container">
          <img src="../img/phpsecurity.jpg" alt="Seguretat en PHP" class="security-image" />
        </div>

        <div class="generic-info">
          <h3 class="slide-title">Configuració de la Seguretat en PHP</h3>
          <div class="generic-topics">
            <div class="generic-topic">
              <h4>🔢 Versions de PHP</h4>
              <p>Mantenir PHP actualitzat per corregir vulnerabilitats conegudes i tenir les últimes funcionalitats de seguretat.</p>
            </div>

            <div class="generic-topic">
              <h4>📝 Per què cal documentar</h4>
              <p>Documentació de seguretat per a manteniment, auditoria i transferència de coneixement entre equips.</p>
            </div>

            <div class="generic-topic">
              <h4>🗄️ PDO amb Prepared Statements</h4>
              <p>Utilitzar consultes preparades per prevenir atacs d'injecció SQL i protegir les bases de dades.</p>
            </div>

            <div class="generic-topic">
              <h4>✔️ Validar les dades d'entrada</h4>
              <p>Validar i filtrar totes les dades d'entrada dels usuaris per prevenir diverses formes d'injecció.</p>
            </div>

            <div class="generic-topic">
              <h4>📂 Cal pujar tots els fitxers del nostre MVC</h4>
              <p>Protecció de l'estructura de fitxers del projecte i limitació d'accés a recursos sensibles.</p>
            </div>

            <div class="generic-topic">
              <h4>⚙️ Configuració del fitxer .htaccess</h4>
              <p>Configuració de seguretat a nivell de servidor web Apache per controlar accés i comportament.</p>
            </div>

            <div class="generic-topic">
              <h4>🔐 Restricció d'accés a fitxers i carpetes</h4>
              <p>Control d'accés a recursos del sistema de fitxers mitjançant permisos i configuració de servidor.</p>
            </div>

            <div class="generic-topic">
              <h4>🔗 urlencode(string)</h4>
              <p>Codificació segura de paràmetres en URLs per evitar errors d'interpretació i atacs.</p>
            </div>

            <div class="generic-topic">
              <h4>🛡️ Evitar el Hotlinking</h4>
              <p>Protecció contra ús no autoritzat de recursos del servidor (imatges, arxius) des d'altres webs.</p>
            </div>

            <div class="generic-topic">
              <h4>🌐 Evitar inclusió de fitxers remots</h4>
              <p>Prevenció d'inclusions de fitxers externs maliciosos que podrien comprometre el servidor.</p>
            </div>

            <div class="generic-topic">
              <h4>🔒 Configuració SSL</h4>
              <p>Implementació de connexió segura HTTPS per xifrar la comunicació entre client i servidor.</p>
            </div>

            <div class="generic-topic">
              <h4>⚠️ Atacs XSS</h4>
              <p>Prevenció d'atacs Cross-Site Scripting que poden executar codi maliciós en navegadors dels usuaris.</p>
            </div>
          </div>
        </div>
    `,
  }
];