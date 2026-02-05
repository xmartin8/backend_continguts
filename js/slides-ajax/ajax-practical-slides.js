// Diapositives sobre aplicacions pràctiques
const ajaxPracticalSlides = [
{
    title: "Aplicacions pràctiques",
    content: `
      <h2 class="slide-title">Aplicacions reals d'AJAX en projectes</h2>
      <div class="text-large">
        <p>AJAX es fa servir en moltes funcionalitats web modernes. Vegem alguns exemples pràctics que pots implementar.</p>
        
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🔍 Autocompletar (Typeahead)</h4>
              <p><strong>Problema:</strong> L'usuari escriu en un camp de cerca i necessita suggeriments en temps real.<br>
              <strong>Solució AJAX:</strong> Enviar cada pulsació de tecla al servidor i mostrar resultats sense recarregar.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>📝 Validació en temps real</h4>
              <p><strong>Problema:</strong> Verificar disponibilitat d'usuari o email sense enviar el formulari.<br>
              <strong>Solució AJAX:</strong> Enviar valor del camp al servidor i mostrar feedback immediat.</p>
            </div>
          </div>
        </div>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🔄 Scroll infinit (Infinite Scroll)</h4>
              <p><strong>Problema:</strong> Carregar més contingut quan l'usuari arriba al final de la pàgina.<br>
              <strong>Solució AJAX:</strong> Detectar scroll, obtenir següent pàgina i afegir al DOM.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>💬 Xat en temps real</h4>
              <p><strong>Problema:</strong> Mostrar missatges nous sense recarregar la pàgina.<br>
              <strong>Solució AJAX:</strong> Polling o WebSockets per obtenir missatges nous.</p>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">📝 Implementació d'autocompletar:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Sistema d'autocompletar amb debouncing</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="javascript">class Autocompletar {
  constructor(inputId, llistaResultatsId) {
    this.input = document.getElementById(inputId);
    this.llistaResultats = document.getElementById(llistaResultatsId);
    this.timeoutId = null;
    this.ultimaConsulta = '';
    
    this.configurarEsdeveniments();
  }
  
  configurarEsdeveniments() {
    // Debouncing per evitar massa peticions
    this.input.addEventListener('input', (e) => {
      clearTimeout(this.timeoutId);
      
      const consulta = e.target.value.trim();
      
      // Només cercar si hi ha prou caràcters i ha canviat
      if (consulta.length >= 2 && consulta !== this.ultimaConsulta) {
        this.timeoutId = setTimeout(() => {
          this.cercar(consulta);
          this.ultimaConsulta = consulta;
        }, 300); // Esperar 300ms sense tecles
      } else if (consulta.length === 0) {
        this.netejarResultats();
      }
    });
    
    // Amagar resultats en fer clic fora
    document.addEventListener('click', (e) => {
      if (!this.input.contains(e.target) && 
          !this.llistaResultats.contains(e.target)) {
        this.llistaResultats.style.display = 'none';
      }
    });
  }
  
  async cercar(consulta) {
    // Mostrar indicador de càrrega
    this.llistaResultats.innerHTML = '<li class="loading">Cercant...</li>';
    this.llistaResultats.style.display = 'block';
    
    try {
      const resposta = await fetch('/api/cercar?q=' + encodeURIComponent(consulta));
      
      if (!resposta.ok) throw new Error('Error en la cerca');
      
      const resultats = await resposta.json();
      
      this.mostrarResultats(resultats);
      
    } catch (error) {
      this.llistaResultats.innerHTML = 
        '<li class="error">Error en la cerca</li>';
    }
  }
  
  mostrarResultats(resultats) {
    if (resultats.length === 0) {
      this.llistaResultats.innerHTML = 
        '<li class="no-results">No hi ha resultats</li>';
      return;
    }
    
    this.llistaResultats.innerHTML = resultats.map(resultat => 
      '<li data-id="' + resultat.id + '" class="resultat-item">' +
      '<strong>' + resultat.nom + '</strong>' +
      '<span class="detalls">' + (resultat.detalls || '') + '</span>' +
      '</li>'
    ).join('');
    
    // Afegir esdeveniments als resultats
    this.llistaResultats.querySelectorAll('.resultat-item').forEach(item => {
      item.addEventListener('click', (e) => {
        this.seleccionarResultat(
          item.dataset.id,
          item.querySelector('strong').textContent
        );
      });
    });
  }
  
  seleccionarResultat(id, text) {
    this.input.value = text;
    this.llistaResultats.style.display = 'none';
    
    // Opcional: fer alguna acció amb l'ID seleccionat
    console.log('Seleccionat:', id, text);
  }
  
  netejarResultats() {
    this.llistaResultats.innerHTML = '';
    this.llistaResultats.style.display = 'none';
  }
}

// Ús
new Autocompletar('cerca-input', 'resultats-cerca');</code></pre>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">🔧 Projecte pràctic: Sistema de tasques</div>
          <ul>
            <li><strong>Característiques:</strong> Afegir, editar, eliminar tasques sense recarregar</li>
            <li><strong>Tecnologies:</strong> Fetch API, PHP, MySQL, Bootstrap</li>
            <li><strong>Funcionalitats AJAX:</strong>
              <ul>
                <li>Carregar tasques existents al inici</li>
                <li>Validació en temps real dels formularis</li>
                <li>Drag & drop per reordenar (AJAX per guardar ordre)</li>
                <li>Marques de temps de modificació automàtiques</li>
                <li>Notificacions push de tasques compartides</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
  }
];