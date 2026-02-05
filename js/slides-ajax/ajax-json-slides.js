// Diapositives sobre treballar amb JSON
const ajaxJsonSlides = [
  {
    title: "Treballar amb JSON",
    content: `
      <h2 class="slide-title">JSON: El format universal per a AJAX</h2>
      <div class="text-large">
        <p>JSON (JavaScript Object Notation) ha reemplaçat XML com a format estàndard per intercanvi de dades en AJAX per la seva simplicitat i eficiència.</p>
        
        <div class="row mt-4">
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>✅ Avantatges JSON</h4>
              <p>• Lleuger (menys bytes que XML)<br>
              • Fàcil de llegir i escriure<br>
              • Suport natiu a JavaScript<br>
              • Suport a tots els llenguatges<br>
              • Perfecte per a APIs</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>🔧 Mètodes JavaScript</h4>
              <p><strong>JSON.parse()</strong><br>Converteix string → objecte<br>
              <strong>JSON.stringify()</strong><br>Converteix objecte → string<br>
              <strong>response.json()</strong><br>Mètode Fetch per parsejar</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>🎯 Bones pràctiques</h4>
              <p>• Validar JSON rebut<br>
              • Manejar errors de parseig<br>
              • No enviar funcions<br>
              • Serialitzar dates correctament<br>
              • Minificar en producció</p>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">📝 Processament segur de JSON:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Processament robust de JSON amb error handling</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="javascript">// Funció segura per processar JSON
async function processarRespostaJSON(resposta) {
  try {
    // Primer validar la resposta HTTP
    if (!resposta.ok) {
      throw new Error('Error HTTP ' + resposta.status + ': ' + resposta.statusText);
    }
    
    // Obtenir text per poder fer parseig segur
    const text = await resposta.text();
    
    // Intentar parsejar
    let dades;
    try {
      dades = JSON.parse(text);
    } catch (parseError) {
      throw new Error('JSON invàlid: ' + parseError.message);
    }
    
    // Validar estructura esperada
    if (!dades || typeof dades !== 'object') {
      throw new Error('Resposta JSON no és un objecte vàlid');
    }
    
    // Si hi ha un camp d'error a la resposta
    if (dades.error) {
      throw new Error(dades.error);
    }
    
    return dades;
    
  } catch (error) {
    console.error('Error processant resposta:', error);
    // Podem retornar un objecte d'error estandarditzat
    return {
      error: true,
      missatge: error.message,
      timestamp: new Date().toISOString()
    };
  }
}

// Ús amb Fetch
fetch('api/dades.json')
  .then(processarRespostaJSON)
  .then(resultat => {
    if (resultat.error) {
      // Manejar error
    } else {
      // Processar dades correctament
    }
  });</code></pre>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">🔧 Serialització de tipus especials</div>
          <pre><code class="javascript">// Dates en JSON (problema comú)
const objecteAmbData = {
  nom: 'Reunió',
  data: new Date() // Es converteix a string automàticament
};

// Solució 1: Usar toISOString() explícitament
const jsonSegur = JSON.stringify({
  ...objecteAmbData,
  data: objecteAmbData.data.toISOString()
});

// Solució 2: Reviver function al parsejar
const reviver = function(key, value) {
  // Detecta strings que semblen dates ISO
  if (typeof value === 'string' && 
      /^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}/.test(value)) {
    return new Date(value);
  }
  return value;
};

const objecteRecuperat = JSON.parse(jsonSegur, reviver);
console.log(objecteRecuperat.data instanceof Date); // true</code></pre>
        </div>
      </div>
    `
  }
];