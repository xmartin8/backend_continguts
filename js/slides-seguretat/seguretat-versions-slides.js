// Diapositives sobre versions de PHP i documentació
const seguretatVersionsSlides = [
  {
    title: "1. Versions de PHP",
    content: `
      <div class="slide-content-enlarged">
        <h2 class="slide-title">1. Versions de PHP</h2>
        
        <div class="important-note mb-4">
          <p>No mantenir PHP actualitzat és crític per a la seguretat.</p>
          <p>Les versions antigues tenen vulnerabilitats conegudes que no es corregeixen.</p>
          <p>Utilitzeu sempre la darrera versió estable amb suport actiu.</p>
        </div>
        
        <div class="row">
          <div class="col-md-6">
            <h4>📜 Historial de versions de PHP:</h4>
            <ul class="concept-list">
              <li><strong>PHP 1.0</strong> (1995) - Primera versió</li>
              <li><strong>PHP 2.0</strong> (1997) - Motor Zend 1</li>
              <li><strong>PHP 3.0</strong> (1998) - Suport a bases de dades</li>
              <li><strong>PHP 4.0</strong> (2000) - Motor Zend 2</li>
              <li><strong>PHP 5.0</strong> (2004) - Objectes, PDO, MySQLi</li>
              <li><strong>PHP 5.3</strong> (2009) - Namespaces, closures</li>
              <li><strong>PHP 5.6</strong> (2014) - Darrera de la sèrie 5.x</li>
              <li><strong>PHP 6</strong> - La millor versió. No va donar cap error!!!</li>
            </ul>
          </div>
          
          <div class="col-md-6">
            <h4>🚀 Versions modernes:</h4>
            <ul class="concept-list">
              <li><strong>PHP 7.0</strong> (2015) - Millora de rendiment, tipus escalars</li>
              <li><strong>PHP 7.1</strong> (2016) - Tipus nullable, void</li>
              <li><strong>PHP 7.2</strong> (2017) - Object com a tipus</li>
              <li><strong>PHP 7.3</strong> (2018) - JSON_THROW_ON_ERROR</li>
              <li><strong>PHP 7.4</strong> (2019) - Arrow functions</li>
              <li><strong>PHP 8.0</strong> (2020) - JIT, named arguments</li>
              <li><strong>PHP 8.1</strong> (2021) - Enums, fibers</li>
              <li><strong>PHP 8.2</strong> (2022) - Readonly classes</li>
              <li><strong>PHP 8.3</strong> (2023) - Typed class constants</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  },
  {
    title: "2. Per què cal documentar i comentar?",
    content: `
      <h2 class="slide-title">2. Per què cal documentar i comentar?</h2>
      
      <div class="important-note mb-4 text-large">
        <p>La documentació i els comentaris són una part essencial de la seguretat perquè:</p>
      </div>
      <div class="text-xl">
        <ul class="concept-list">
          <li><strong>Auditoria de seguretat</strong>: Permet revisar ràpidament els punts crítics</li>
          <li><strong>Transferència de coneixement</strong>: Evita que vulnerabilitats quedin ocultes</li>
          <li><strong>Manteniment</strong>: Actualitzacions segures sense introduir nous riscos</li>
          <li><strong>Documentació de decisions</strong>: Explica perquè s'han implementat certes mesures de seguretat</li>
          <li><strong>Identificació de dependencies</strong>: Alertes sobre biblioteques o components vulnerables</li>
        </ul>
      </div>
      <div class="mt-4 text-large">
        <p>Sense una documentació adequada, les vulnerabilitats poden passar desapercebudes durant anys, i les correccions poden introduir nous errors.</p>
      </div>
    `
  }
];