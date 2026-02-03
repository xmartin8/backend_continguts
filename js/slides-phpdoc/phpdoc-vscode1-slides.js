const phpdocvscode1slides =[

    {
    title: "PHPDocumentor en Visual Studio Code",
    content: `
      <h2 class="slide-title">PHPDocumentor en Visual Studio Code</h2>
      <div class="text-large">
        <p>Com configurar i utilitzar PHPDocumentor eficaçment en Visual Studio Code.</p>
        
        <h4 class="mt-4">1️⃣ Extensions recomanades:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>📝 PHP Intelephense</h4>
              <p>L'extensió més completa per a PHP. Suport complet de DocBlocks.</p>
              <div class="mt-2">
                <small><strong>Extensió ID:</strong> bmewburn.vscode-intelephense-client</small>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>⚡ PHP DocBlocker</h4>
              <p>Genera DocBlocks automàticament amb dreceres de teclat.</p>
              <div class="mt-2">
                <small><strong>Extensió ID:</strong> neilbrayfield.php-docblocker</small>
              </div>
            </div>
          </div>
        </div>
        
        <h4 class="mt-4">2️⃣ Instal·lació d'extensions:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">Bash</span>
            <button class="copy-btn" onclick="copyCode('vscode-extensions', this)">Copiar</button>
          </div>
          <pre><code id="vscode-extensions"># Via terminal de VSCode
code --install-extension bmewburn.vscode-intelephense-client
code --install-extension neilbrayfield.php-docblocker

# O buscant directament a l'extensions marketplace:
# 1. Prem Ctrl+Shift+X
# 2. Cerca "PHP Intelephense"
# 3. Fes clic a Install</code></pre>
        </div>
        
        <h4 class="mt-4">3️⃣ Configuració de VSCode:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">JSON</span>
            <button class="copy-btn" onclick="copyCode('vscode-settings', this)">Copiar</button>
          </div>
          <pre><code id="vscode-settings">// settings.json de VSCode
{
    // PHP DocBlocker
    "php-docblocker.gap": true,
    "php-docblocker.extra": [
        "@author Tu Nom &lt;email@exemple.com&gt;",
        "@since 1.0.0"
    ],
    
    // PHP Intelephense
    "intelephense.environment.includePaths": [
        "vendor"
    ],
    "intelephense.diagnostics.undefinedTypes": true,
    "intelephense.diagnostics.undefinedFunctions": true,
    "intelephense.diagnostics.undefinedConstants": true,
    "intelephense.diagnostics.undefinedClassConstants": true,
    "intelephense.diagnostics.undefinedMethods": true,
    "intelephense.diagnostics.undefinedProperties": true,
    "intelephense.diagnostics.undefinedVariables": true,
    
    // Validació automàtica
    "intelephense.diagnostics.validateDocblockComments": true
}</code></pre>
        </div>
        
        <h4 class="mt-4">4️⃣ Dreceres de teclat útils:</h4>
        <table class="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Combinació</th>
              <th>Acció</th>
              <th>Descripció</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><kbd>/**</kbd> + <kbd>Tab</kbd></td>
              <td>Generar DocBlock</td>
              <td>Sobre una funció o classe, escriu /** i prem Tab</td>
            </tr>
            <tr>
              <td><kbd>Ctrl</kbd> + <kbd>Space</kbd></td>
              <td>Autocompletat</td>
              <td>Mostra suggeriments basats en DocBlocks</td>
            </tr>
            <tr>
              <td><kbd>F12</kbd></td>
              <td>Anar a definició</td>
              <td>Navega a la definició del mètode/class</td>
            </tr>
            <tr>
              <td><kbd>Ctrl</kbd> + <kbd>Click</kbd></td>
              <td>Hiperenllaç</td>
              <td>Clica sobre noms per anar a la definició</td>
            </tr>
            <tr>
              <td><kbd>Alt</kbd> + <kbd>F12</kbd></td>
              <td>Peek definició</td>
              <td>Mostra la definició sense sortir de l'arxiu</td>
            </tr>
          </tbody>
        </table>
        
        <h4 class="mt-4">5️⃣ Exemple d'ús amb DocBlocker:</h4>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">PHP</span>
                <button class="copy-btn" onclick="copyCode('docblock-before', this)">Copiar</button>
              </div>
              <pre><code id="docblock-before">public function calcularTotal(array $items): float
{
    $total = 0;
    foreach ($items as $item) {
        $total += $item['preu'] * $item['quantitat'];
    }
    return $total;
}</code></pre>
            </div>
            <p class="text-center small text-muted">1. Col·loca el cursor sobre la funció</p>
          </div>
          <div class="col-md-6">
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">PHP</span>
                <button class="copy-btn" onclick="copyCode('docblock-after', this)">Copiar</button>
              </div>
              <pre><code id="docblock-after">/**
 * Calcula el total d'una llista d'items
 *
 * @param array $items Array d'items amb claus 'preu' i 'quantitat'
 * @return float El total calculat
 */
public function calcularTotal(array $items): float
{
    $total = 0;
    foreach ($items as $item) {
        $total += $item['preu'] * $item['quantitat'];
    }
    return $total;
}</code></pre>
            </div>
            <p class="text-center small text-muted">2. Escriu /** i prem Tab</p>
          </div>
        </div>
        
        <div class="important-note mt-4">
          <strong>💡 Consell professional:</strong> Configura els snippets personalitzats de VSCode per a les teves pròpies plantilles de DocBlocks que utilitzis freqüentment.
        </div>
      </div>
    `
}
    
]