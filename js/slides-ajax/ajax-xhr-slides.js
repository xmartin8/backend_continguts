// Diapositives sobre XMLHttpRequest
const ajaxXhrSlides = [
  {
    title: "XMLHttpRequest bàsic",
    content: `
      <h2 class="slide-title">XMLHttpRequest: El fonament d'AJAX</h2>
      <div class="text-large">
        <p>XMLHttpRequest (XHR) és l'objecte original de JavaScript per realitzar peticions HTTP asíncrones. Tot i que ara existeix la Fetch API, XHR segueix sent important per compatibilitat i casos específics.</p>
        
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>📦 Estats de XHR</h4>
              <p><strong>readyState:</strong>
              <br>0: No inicialitzat
              <br>1: Connexió establerta
              <br>2: Petició rebuda
              <br>3: Processant resposta
              <br>4: Operació completada</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>⚡ Propietats clau</h4>
              <p><strong>status:</strong> Codi HTTP (200, 404, 500...)
              <br><strong>statusText:</strong> Missatge del codi
              <br><strong>responseText:</strong> Resposta com a text
              <br><strong>responseXML:</strong> Resposta com a XML</p>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">📝 Exemple complet amb esdeveniments:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span>XMLHttpRequest amb tots els esdeveniments</span>
            <button class="copy-btn">Copiar</button>
          </div>
          <pre><code class="javascript">const xhr = new XMLHttpRequest();

// Configurar la petició
xhr.open('POST', 'processar.php', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

// Seguiment de progrés (útil per a arxius grans)
xhr.upload.onprogress = function(e) {
  if (e.lengthComputable) {
    const percent = (e.loaded / e.total) * 100;
    console.log('Pujada: ' + percent + '%');
  }
};

// Quan la petició canvia d'estat
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) { // Operació completada
    if (xhr.status === 200) {
      console.log('Èxit:', xhr.responseText);
    } else {
      console.error('Error:', xhr.status, xhr.statusText);
    }
  }
};

// Enviar dades amb paràmetres URL-encoded
const dades = 'nom=Anna&cognom=Garcia&email=anna@exemple.cat';
xhr.send(dades);</code></pre>
        </div>
        
        <div class="important-note mt-4">
          <p><strong>💡 Consell:</strong> Tot i que <code>onreadystatechange</code> és el mètode tradicional, actualment és millor usar <code>onload</code>, <code>onerror</code> i <code>onprogress</code> per un codi més clar.</p>
        </div>
      </div>
    `
  }
];