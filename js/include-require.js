const slides = [
    {
    title: "8. Include vs Include_once",
    content: `
      <h2 class="slide-title">8. Include vs Include_once</h2>
      
      <div class="text-large">
        <h4>📚 Quan fer servir include_once?</h4>
        <p><strong>include_once</strong> és útil quan tens múltiples punts d'entrada que poden carregar els mateixos fitxers.</p>
        
        <div class="code-block">
          <div class="code-header">
            <span>Exemple: Estructura de fitxers</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('include-structure', this)">Copiar</button>
          </div>
          <pre><code class="php" id="include-structure">📁 projecte/
├── 📄 index.php           # Punt d'entrada principal
├── 📄 model.php           # Model de dades
└── 📄 logarse.php         # Funcions d'autenticació

// index.php
include 'logarse.php';      // ✅ Primera càrrega
include 'model.php';        // Aquest també carrega logarse.php

// model.php  
include 'logarse.php';      // ⚠️ Segona càrrega del mateix fitxer!

// logarse.php
function autenticar() {
    // ...
}

function tancarSessio() {
    // ...
}</code></pre>
        </div>
        
        <div class="important-note mt-3">
          <h5>⚠️ Problema: Redefinició de funcions</h5>
          <p>Si <code>logarse.php</code> es carrega dues vegades, PHP llançarà un error:</p>
          <div class="code-block mt-2">
            <pre><code class="php">Fatal error: Cannot redeclare autenticar() 
(previously declared in /path/to/logarse.php:10) 
in /path/to/logarse.php on line 10</code></pre>
          </div>
        </div>
        
        <h4 class="mt-4">✅ Solució: include_once</h4>
        <p>Utilitza <code>include_once</code> per evitar càrregues duplicades:</p>
        
        <div class="code-block">
          <div class="code-header">
            <span>Solucionat amb include_once</span>
            
            <button class="copy-btn ms-2" onclick="copyCode('include-once-solution', this)">Copiar</button>
          </div>
          <pre><code class="php" id="include-once-solution">// index.php
include_once 'logarse.php';      // ✅ Carrega el fitxer
include 'model.php';            // Carrega model

// model.php  
include_once 'logarse.php';      // ✅ No el carrega de nou, ja està carregat

// logarse.php - ✅ Només es carrega una vegada
function autenticar() {
    // ...
}</code></pre>
        </div>
        
        <h4 class="mt-4">📋 Regles per a include/require:</h4>
        <div class="clean-code-principles">
          <div class="principle">
            <h5>include vs include_once</h5>
            <ul class="concept-list">
              <li><strong>include</strong>: Quan estàs segur que el fitxer només es carregarà una vegada</li>
              <li><strong>include_once</strong>: Quan no estàs segur o pot haver-hi múltiples càrregues</li>
            </ul>
          </div>
          
          <div class="principle">
            <h5>require vs require_once</h5>
            <ul class="concept-list">
              <li><strong>require</strong>: El fitxer és essencial per al funcionament</li>
              <li><strong>require_once</strong>: Fitxer essencial que pot carregar-se múltiples vegades</li>
            </ul>
          </div>
        </div>
        
        <div class="important-note mt-3">
          <h5>💡 Millor pràctica:</h5>
          <p>Per a fitxers de configuració, classes o funcions que només es poden declarar una vegada, sempre utilitza <strong>include_once</strong> o <strong>require_once</strong>.</p>
          
          <h6>Exemple d'estructura robusta:</h6>
          <div class="code-block mt-2">
            <pre><code class="php">// bootstrap.php - Fitxer d'inicialització
require_once 'config/database.php';
require_once 'config/constants.php';
require_once 'src/autoload.php';

// classes/Usuari.php
class Usuari {
    // ✅ Només es pot declarar una vegada
}

// helpers.php
function sanitizarInput($input) {
    // ✅ Funció helper, només una declaració
}

// En els controladors:
include_once 'helpers.php'; // ✅ Segur</code></pre>
          </div>
        </div>
      </div>
    `
  }
]