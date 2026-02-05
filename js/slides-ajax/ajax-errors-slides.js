// Diapositives sobre errors i excepcions
const ajaxErrorsSlides = [
  {
    title: "Errors i excepcions",
    content: `
      <h2 class="slide-title">Gestió d'errors en AJAX</h2>
      <div class="text-large">
        <p>Una bona gestió d'errors és crítica per a aplicacions AJAX robustes. Els errors poden provenir de la xarxa, el servidor, o el propi codi.</p>
        
        <div class="row mt-4">
          <div class="col-md-4">
            <div class="generic-topic h-100" style="background-color: #f8d7da;">
              <h4>🌐 Errors de xarxa</h4>
              <p>• Sense connexió<br>
              • Timeout<br>
              • DNS fallat<br>
              • CORS bloquejat<br>
              • HTTPS incorrecte</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100" style="background-color: #fff3cd;">
              <h4>📡 Errors del servidor</h4>
              <p>• 404 Not Found<br>
              • 500 Internal Error<br>
              • 403 Forbidden<br>
              • 401 Unauthorized<br>
              • 429 Too Many Requests</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100" style="background-color: #d1ecf1;">
              <h4>💻 Errors d'aplicació</h4>
              <p>• JSON mal formatat<br>
              • Dades faltants<br>
              • Validació fallada<br>
              • Timeout lògic<br>
              • Estat inconsistent</p>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">📝 Sistema complet de gestió d'errors:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span>Classe per a gestió centralitzada d'errors AJAX</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="javascript">class GestorErrorsAJAX {
  constructor(opcions = {}) {
    this.maxReintents = opcions.maxReintents || 3;
    this.timeout = opcions.timeout || 10000; // 10 segons
    this.registreErrors = [];
  }
  
  async ferPeticio(url, opcions = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);
    
    opcions.signal = controller.signal;
    
    for (let intent = 1; intent <= this.maxReintents; intent++) {
      try {
        const resposta = await fetch(url, opcions);
        clearTimeout(timeoutId);
        
        // Verificar resposta HTTP
        if (!resposta.ok) {
          throw this.crearErrorHTTP(resposta);
        }
        
        // Processar resposta
        const dades = await resposta.json();
        
        // Verificar errors d'aplicació a la resposta
        if (dades.error) {
          throw this.crearErrorAplicacio(dades);
        }
        
        return dades;
        
      } catch (error) {
        this.registreErrors.push({
          url,
          intent,
          error: error.message,
          timestamp: new Date().toISOString()
        });
        
        // Determinar si reintentar
        if (intent === this.maxReintents || 
            this.esErrorNoRecuperable(error)) {
          this.mostrarErrorAUsuari(error);
          throw error;
        }
        
        // Esperar abans de reintentar (backoff exponencial)
        await this.esperarRetard(intent);
      }
    }
  }
  
  crearErrorHTTP(resposta) {
    const errors = {
      400: 'Petició incorrecta',
      401: 'No autoritzat',
      403: 'Accés prohibit',
      404: 'No trobat',
      500: 'Error intern del servidor'
    };
    
    const missatge = errors[resposta.status] || 'Error HTTP ' + resposta.status;
    return new Error(missatge);
  }
  
  crearErrorAplicacio(dades) {
    const missatge = dades.missatge || 'Error desconegut a l\\'aplicació';
    return new Error(missatge);
  }
  
  esErrorNoRecuperable(error) {
    // Errors que no val la pena reintentar
    return error.name === 'AbortError' || // Timeout
           error.message.includes('404') || // No trobat
           error.message.includes('403'); // Prohibit
  }
  
  esperarRetard(intent) {
    const retard = Math.min(1000 * Math.pow(2, intent), 30000);
    return new Promise(resolve => setTimeout(resolve, retard));
  }
  
  mostrarErrorAUsuari(error) {
    // Aquí pots implementar com mostrar errors a l'usuari
    console.error('Error AJAX:', error);
    // Exemple: mostrar toast, modal, o missatge en pantalla
  }
}

// Ús
const gestor = new GestorErrorsAJAX({ maxReintents: 2 });
gestor.ferPeticio('https://api.exemple.cat/dades')
  .then(dades => console.log('Èxit:', dades))
  .catch(error => console.error('Error final:', error));</code></pre>
        </div>
        
        <div class="requadre mt-4">
          <p><strong>🛡️ Millores de seguretat en gestió d'errors</strong></p>
          <p>• No mostrar missatges d'error interns als usuaris finals<br>
          • Registrar errors per a anàlisi posterior<br>
          • Implementar rate limiting per evitar atacs<br>
          • Validar totes les respostes del servidor<br>
          • Usar timeouts per evitar peticions eternes</p>
        </div>
      </div>
    `
  }
];