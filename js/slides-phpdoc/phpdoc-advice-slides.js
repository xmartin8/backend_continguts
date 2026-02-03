const phpdocintroslides =[

      {
    title: "Millors pràctiques i consells",
    content: `
      <h2 class="slide-title">Millors pràctiques i consells</h2>
      <div class="text-large">
        <p>Recomanacions per obtenir el màxim benefici de PHPDocumentor.</p>
        
        <div class="requadre mt-4">
          <p><strong>🎯 Regla d'or: Documenta el QUÈ i el PER QUÈ, no el COM</strong></p>
          <p>El codi ja explica el com. La documentació ha d'explicar què fa i per què existeix.</p>
        </div>
        
        <h4 class="mt-4">✅ Consells essencials:</h4>
        <ol class="concept-list">
          <li><strong>Documenta des del principi:</strong> No deixis la documentació per al final del projecte.</li>
          <li><strong>Sigue consistent:</strong> Utilitza el mateix estil i format en tot el projecte.</li>
          <li><strong>Actualitza:</strong> Quan canvies el codi, actualitza també la documentació.</li>
          <li><strong>Documenta excepcions:</strong> Especifica quines excepcions pot llançar cada mètode.</li>
          <li><strong>Evita la redundància:</strong> No repeteix informació que ja és òbvia del codi.</li>
          <li><strong>Utilitza exemples:</strong> Afegeix exemples de codi a la documentació quan sigui útil.</li>
        </ol>
        
        <h4 class="mt-4">⚠️ Errors comuns a evitar:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #fff3cd;">
              <h4>❌ Documentació obsoleta</h4>
              <p>La pitjor documentació és la que està desactualitzada i porta a enganys.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100" style="background-color: #f8d7da;">
              <h4>❌ Comentaris genèrics</h4>
              <p>"Processa dades" no és útil. Explica quines dades i com les processa.</p>
            </div>
          </div>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">🔧 Integració al flux de treball</div>
          <ul>
            <li>Afegir generació de documentació al pipeline de CI/CD</li>
            <li>Incloure comprovació de documentació en els hooks de Git</li>
            <li>Configurar PHPDocumentor per executar-se automàticament després de cada commit</li>
            <li>Publicar la documentació generada en un servidor accessible a tots els desenvolupadors</li>
          </ul>
        </div>
      </div>
    `
  }
    
]