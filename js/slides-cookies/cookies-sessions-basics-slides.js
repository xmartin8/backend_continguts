const cookiesSessionsBasicsSlides = [
  {
    title: "Cookies PHP - Com funcionen",
    content: `
      <h2 class="slide-title">Cookies PHP - Com funcionen</h2>
      <div class="text-large">
        
        <p><strong>Inicialment eren petits documents</strong> que contenien informació útil sobre nosaltres i sobre les nostres preferències.</p>
        
        <h4>📝 Informació que poden contenir:</h4>
        <div class="row">
          <div class="col-md-6">
            <ul class="concept-list">
              <li>Idioma seleccionat de la web</li>
              <li>Hora de la darrera connexió</li>
              <li>Articles de la cistella de la compra</li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="concept-list">
              <li>Els enllaços que hem clicat</li>
              <li>Preferències d'usuari</li>
              <li>Estat d'autenticació</li>
            </ul>
          </div>
        </div>
        
        <div class="module-card mt-3">
          <div class="module-title">⚠️ Limitacions</div>
          <p><strong>Fins al punt que la seva mida va créixer en excés</strong>, malgrat que només conté text.</p>
          <p>Les galetes contindran la informació que la web decideixi, per tant depenent de la web, la cookie contindrà una informació o una altra i això implica que una web només podrà veure la informació de la seva pròpia cookie.</p>
        </div>
      </div>
    `
  },
  {
    title: "Evolució de les Cookies",
    content: `
      <h2 class="slide-title">Evolució de les Cookies</h2>
      <div class="text-large">
        <p>El creixement desmesurat de les cookies va esdevenir perquè els desenvolupadors van veure que a més informació guardaven dels usuaris, més fàcil era adaptar-se a les nostres necessitats de navegació.</p>
        
        <div class="requadre">
          <p><strong>En conseqüència...</strong></p>
          <p>Es va decidir que a les cookies del nostre ordinador, només es guardaria un <strong>identificador únic</strong> que permetria a la web en qüestió mitjançant l'ID accedir a la resta de dades que es troben emmagatzemades al servidor propi de la web.</p>
        </div>
        
        <h4>🎯 Això es coneix com a:</h4>
        <div class="row mt-2">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🍪 Cookies de Sessió</h4>
              <p>Cookies que només contenen un ID únic. Les dades reals estan al servidor.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🌐 Cookies de Tercers</h4>
              <p>Cookies d'altres dominis, normalment per a publicitat i seguiment.</p>
            </div>
          </div>
        </div>
        
        <div class="important-note mt-3">
          <strong>🎥 Video recomanat:</strong> 
          <a href="https://www.youtube.com/watch?v=I01XMRo2ESg" target="_blank">
            Explicació visual de com funcionen les cookies
          </a>
        </div>
      </div>
    `
  },
  {
    title: "Què són les Sessions?",
    content: `
      <h2 class="slide-title">Què són les Sessions?</h2>
      <div class="text-large">
        <div class="row">
          <div class="col-md-6">
            <div class="module-card h-100">
              <div class="module-title">🍪 Cookies</div>
              <p><strong>Emmagatzemades al client</strong></p>
              <ul class="mt-2">
                <li>Fitxers de text al navegador</li>
                <li>Contenen dades reals o ID de sessió</li>
                <li>Persistència configurable</li>
                <li>Limitades a ~4KB</li>
                <li>Accessibles amb JavaScript</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="module-card h-100">
              <div class="module-title">🔐 Sessions</div>
              <p><strong>Emmagatzemades al servidor</strong></p>
              <ul class="mt-2">
                <li>Dades guardades al servidor</li>
                <li>Cookie només conté ID (PHPSESSID)</li>
                <li>Duració de sessió (normalment curt)</li>
                <li>Més segures</li>
                <li>Inaccessibles directament al client</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="requadre mt-3">
          <p><strong>Diferència fonamental:</strong></p>
          <p class="requadre-impacte">Les cookies es guarden al costat del client i les sessions al costat del servidor.</p>
        </div>
        
        <p>Els fitxers que crea una sessió es guarden a una carpeta del servidor (es guarden variables de sessió i els seus valors).</p>
      </div>
    `
  }
];