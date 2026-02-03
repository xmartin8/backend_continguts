const phpdocsintaxislides =[

      {
    title: "DocBlocks - La sintaxi bàsica",
    content: `
      <h2 class="slide-title">DocBlocks - Sintaxi bàsica</h2>
      <div class="text-large">
        <p>Els DocBlocks són comentaris especials que PHPDocumentor utilitza per generar documentació.</p>
        
        <div class="code-block mt-4">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('docblock-basic', this)">Copiar</button>
          </div>
          <pre><code id="docblock-basic">/**
 * Resum breu de la funció o classe
 *
 * Descripció més detallada que explica
 * el propòsit, comportament i detalls importants.
 *
 * @param string $nom Descripció del paràmetre
 * @param int $edat Descripció d'un altre paràmetre
 * @return bool Retorna true si té èxit, false en cas contrari
 * @throws Exception Si alguna cosa va malament
 */</code></pre>
        </div>
        
        <h4 class="mt-4">📋 Parts d'un DocBlock:</h4>
        <ol class="concept-list">
          <li><strong>Resum:</strong> Primera línia després de /**</li>
          <li><strong>Descripció:</strong> Línies addicionals de detall</li>
          <li><strong>Etiquetes:</strong> Comencen amb @, especifiquen tipus de dades, paràmetres, retorns, etc.</li>
        </ol>
        
        <div class="module-card mt-4">
          <div class="module-title">💡 Consell</div>
          <p>El resum hauria de cabre en una línia. La descripció pot tenir múltiples línies però hauria de ser concisa.</p>
        </div>
      </div>
    `
  }
]