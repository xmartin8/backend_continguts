const phpdoclabelsslides =[
  {
    title: "Etiquetes més comunes",
    content: `
      <h2 class="slide-title">Etiquetes més comunes</h2>
      <div class="text-large">
        <p>Les etiquetes (@tags) defineixen aspectes específics del comportament de funcions i classes.</p>
        
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>@param</h4>
              <p>Descriu un paràmetre de funció/mètode</p>
              <code>@param string $nom El nom de l'usuari</code>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>@return</h4>
              <p>Descriu el valor de retorn</p>
              <code>@return bool true si l'operació té èxit</code>
            </div>
          </div>
        </div>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>@throws</h4>
              <p>Excepcions que poden ser llançades</p>
              <code>@throws InvalidArgumentException Si el paràmetre és invàlid</code>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>@var</h4>
              <p>Tipus de variable de classe/propietat</p>
              <code>@var string $email Adreça electrònica de l'usuari</code>
            </div>
          </div>
        </div>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>@deprecated</h4>
              <p>Indica que el codi està obsolet</p>
              <code>@deprecated 2.0.0 Utilitza novaFuncio() enlloc</code>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>@since</h4>
              <p>Versió quan es va afegir la característica</p>
              <code>@since 1.5.0 Afegit suport per a múltiples idiomes</code>
            </div>
          </div>
        </div>
        
        <div class="important-note mt-4">
          <strong>📚 Etiquetes addicionals:</strong><br>
          • <strong>@author</strong>: Autor del codi<br>
          • <strong>@license</strong>: Llicència del codi<br>
          • <strong>@link</strong>: Enllaç a documentació relacionada<br>
          • <strong>@see</strong>: Referència a altre mètode o classe<br>
          • <strong>@todo</strong>: Tasques pendents per fer
        </div>
      </div>
    `
  }
    
]