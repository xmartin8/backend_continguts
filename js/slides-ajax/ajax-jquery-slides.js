// Diapositives sobre AJAX amb jQuery
const ajaxJquerySlides = [
  {
    title: "AJAX amb jQuery",
    content: `
      <h2 class="slide-title">AJAX amb jQuery: Simplicitat i compatibilitat</h2>
      <div class="text-large">
        <p>jQuery simplifica enormement el treball amb AJAX, oferint una API consistent i maneja automàticament les diferències entre navegadors.</p>
        
        <div class="row mt-4">
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>✅ Avantatges</h4>
              <p>• Sintaxi senzilla<br>
              • Compatibilitat cross-browser<br>
              • Gestió automàtica d'errors<br>
              • Mètodes específics (get, post...)<br>
              • Suport per JSONP</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>⚠️ Inconvenients</h4>
              <p>• Depèn de jQuery<br>
              • Bundle més gran<br>
              • Menys control granular<br>
              • Menys modern que Fetch<br>
              • Possibles conflictes</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>🎯 Casos d'ús</h4>
              <p>• Projectes existents amb jQuery<br>
              • Compatibilitat amb IE antic<br>
              • Prototipat ràpid<br>
              • Aplicacions simples<br>
              • JSONP</p>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">📝 Comparació de mètodes:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Diferents maneres de fer AJAX amb jQuery</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="javascript">// 1. Mètode $.ajax() (el més flexible)
$.ajax({
  url: 'processar.php',
  method: 'POST',
  data: { nom: 'Anna', edat: 30 },
  dataType: 'json',
  success: function(resposta) {
    console.log('Èxit:', resposta);
  },
  error: function(xhr, status, error) {
    console.error('Error:', error);
  }
});

// 2. Mètodes específics (més curts)
$.get('dades.php', { id: 5 }, function(dades) {
  console.log('Dades:', dades);
});

// 3. jQuery.post() per a POST
$.post('guardar.php', 
  { usuari: 'anna', contrasenya: 'secret' },
  function(resposta) {
    alert('Guardat correctament!');
  }
);

// 4. jQuery.getJSON() per a JSON
$.getJSON('api/dades.json', function(json) {
  console.log('JSON:', json);
});</code></pre>
        </div>
        
        <div class="requadre mt-4">
          <p><strong>🔄 Migració de jQuery a Fetch</strong></p>
          <p>Si tens codi jQuery i vols migrar a Fetch, pots començar gradualment. jQuery 3.5+ inclou una funció <code>$.ajax()</code> que pots reemplaçar amb Fetch API poc a poc.</p>
        </div>
      </div>
    `
  }
];