// Diapositives per a PHPDocumentor
const slides = [
  {
    title: "PHPDocumentor - Documentació de Codi",
    content: `

        <div class="phpdoc-image-container">
          <img src="../img/phpdoc.png" alt="PHPDocumentor" class="phpdoc-bg-image" />
        </div>

        <!-- Contingut per sobre de la imatge de fons -->
        <div class="phpdoc-content">
          <div class="generic-info">
            <h3 class="slide-title">PHPDocumentor - Documentació de Codi</h3>
            <div class="generic-topics">
              <div class="generic-topic">
                <h4>📋 Què és PHPDocumentor?</h4>
                <p>Eina que genera documentació automàtica a partir de comentaris especials al codi font PHP.</p>
              </div>

              <div class="generic-topic">
                <h4>🎯 Beneficis</h4>
                <p>Documentació actualitzada, millor manteniment, ajuda en IDEs, estàndardització de codi.</p>
              </div>

              <div class="generic-topic">
                <h4>📝 Sintaxi DocBlocks</h4>
                <p>Comentaris amb /** ... */ que contenen etiquetes com @param, @return, @throws, etc.</p>
              </div>

              <div class="generic-topic">
                <h4>🚀 Instal·lació</h4>
                <p>Via Composer: <code>composer require --dev phpdocumentor/phpdocumentor</code></p>
              </div>

              <div class="generic-topic">
                <h4>⚙️ Configuració</h4>
                <p>Fitxer phpdoc.xml o opcions per línia de comandes per personalitzar la sortida.</p>
              </div>

              <div class="generic-topic">
                <h4>📊 Formats de Sortida</h4>
                <p>HTML, PDF, CHM, XML. També pot generar diagrames UML de classes.</p>
              </div>

              <div class="generic-topic">
                <h4>🔧 Integració IDE</h4>
                <p>PHPStorm, VS Code i altres IDEs mostren DocBlocks en autocompletar i tooltips.</p>
              </div>

              <div class="generic-topic">
                <h4>📈 Qualitat del Codi</h4>
                <p>Millora la llegibilitat, facilita l'entrada de nous desenvolupadors al projecte.</p>
              </div>
            </div>
          </div>
        </div>

    `,
  },
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
  },
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
  },
  {
    title: "Exemple complet de DocBlock",
    content: `
      <h2 class="slide-title">Exemple complet de DocBlock</h2>
      <div class="text-large">
        <p>Exemple real d'una classe i mètode ben documentats amb PHPDocumentor.</p>
        
        <div class="code-block mt-4">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('docblock-class', this)">Copiar</button>
          </div>
          <pre><code id="docblock-class">/**
 * Classe per gestionar usuaris del sistema
 *
 * Proporciona mètodes per crear, llegir, actualitzar i eliminar
 * usuaris de la base de dades.
 *
 * @package Models
 * @author Joan García &lt;joan@example.com&gt;
 * @version 2.1.0
 * @since 1.0.0
 */
class UsuariManager {
    
    /**
     * @var PDO $connexio Connexió a la base de dades
     */
    private $connexio;
    
    /**
     * Constructor de la classe
     *
     * @param PDO $connexio Connexió PDO a la base de dades
     * @throws InvalidArgumentException Si la connexió no és vàlida
     */
    public function __construct(PDO $connexio) {
        if (!$connexio instanceof PDO) {
            throw new InvalidArgumentException('La connexió ha de ser una instància de PDO');
        }
        $this->connexio = $connexio;
    }
    
    /**
     * Crea un nou usuari al sistema
     *
     * @param string $nom Nom complet de l'usuari
     * @param string $email Correu electrònic vàlid
     * @param string $contrasenya Contrasenya sense xifrar
     * @return bool true si es crea correctament, false en cas contrari
     * @throws PDOException Si hi ha un error de base de dades
     * @throws InvalidArgumentException Si algun paràmetre no és vàlid
     * @since 1.0.0
     */
    public function crearUsuari(string $nom, string $email, string $contrasenya): bool {
        // Implementació...
        return true;
    }
}</code></pre>
        </div>
        
        <div class="module-card mt-4">
          <div class="module-title">✅ Bones pràctiques</div>
          <ul>
            <li>Documenta totes les classes i mètodes públics</li>
            <li>Sigue consistent en l'estil i format</li>
            <li>Actualitza la documentació quan canvies el codi</li>
            <li>Utilitza tipus de dades específics (string, int, bool, etc.)</li>
          </ul>
        </div>
      </div>
    `
  },
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
              <p>Genera DocBlocks automàticament amb atajos de teclat.</p>
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
        
        <h4 class="mt-4">4️⃣ Atajos de teclat útils:</h4>
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
},
  {
    title: "Execució de PHPDocumentor",
    content: `
      <h2 class="slide-title">Execució de PHPDocumentor</h2>
      <div class="text-large">
        <p>Com executar PHPDocumentor per generar la documentació del teu projecte.</p>
        
        <h4 class="mt-4">1️⃣ Via línia de comandes:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">Bash</span>
            <button class="copy-btn" onclick="copyCode('phpdoc-cmd', this)">Copiar</button>
          </div>
          <pre><code id="phpdoc-cmd"># Executar directament
phpdoc -d ./src -t ./docs

# Amb més opcions
phpdoc \
  --directory="./src" \
  --target="./docs" \
  --title="Documentació del Projecte" \
  --defaultpackagename="Llibreria" \
  --template="clean"</code></pre>
        </div>
        
        <h4 class="mt-4">2️⃣ Via fitxer de configuració (phpdoc.xml):</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">XML</span>
            <button class="copy-btn" onclick="copyCode('phpdoc-config', this)">Copiar</button>
          </div>
          <pre><code id="phpdoc-config">&lt;?xml version="1.0" encoding="UTF-8" ?&gt;
&lt;phpdocumentor&gt;
    &lt;title&gt;Documentació del Projecte&lt;/title&gt;
    &lt;parser&gt;
        &lt;target&gt;docs/build&lt;/target&gt;
        &lt;encoding&gt;utf-8&lt;/encoding&gt;
    &lt;/parser&gt;
    &lt;transformer&gt;
        &lt;target&gt;docs/output&lt;/target&gt;
    &lt;/transformer&gt;
    &lt;files&gt;
        &lt;directory&gt;./src&lt;/directory&gt;
        &lt;ignore&gt;vendor/*&lt;/ignore&gt;
    &lt;/files&gt;
    &lt;transformations&gt;
        &lt;template name="clean" /&gt;
    &lt;/transformations&gt;
&lt;/phpdocumentor&gt;</code></pre>
        </div>
        
        <h4 class="mt-4">3️⃣ Execució amb Composer:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">JSON</span>
            <button class="copy-btn" onclick="copyCode('phpdoc-composer', this)">Copiar</button>
          </div>
          <pre><code id="phpdoc-composer">// A composer.json
{
    "scripts": {
        "docs": "phpdoc -d ./src -t ./docs",
        "docs:watch": "phpdoc -d ./src -t ./docs --force"
    }
}

// Executar:
// composer run docs</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "Beneficis en IDEs",
    content: `
      <h2 class="slide-title">Beneficis en IDEs</h2>
      <div class="text-large">
        <p>Els DocBlocks milloren significativament l'experiència de desenvolupament en IDEs com PHPStorm o VS Code.</p>
        
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="phpdoc-image-container text-center">
              <img src="../img/phpdoc-ide-autocomplete.png" alt="Autocompletat en IDE" class="phpdoc-image" />
              <p class="small text-muted mt-2">Autocompletat intel·ligent</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="phpdoc-image-container text-center">
              <img src="../img/phpdoc-ide-tooltip.png" alt="Tooltips en IDE" class="phpdoc-image" />
              <p class="small text-muted mt-2">Tooltips amb informació detallada</p>
            </div>
          </div>
        </div>
        
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🎯 Autocompletat intel·ligent</h4>
              <p>Els IDEs mostren suggeriments basats en els tipus definits als DocBlocks.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>💡 Tooltips informatius</h4>
              <p>En passar el ratolí sobre funcions i mètodes, es mostren les descripcions i paràmetres.</p>
            </div>
          </div>
        </div>
        
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>🔍 Navegació millorada</h4>
              <p>Permet cercar mètodes per la seva funcionalitat, no només pel nom.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="generic-topic h-100">
              <h4>⚡ Refactorització segura</h4>
              <p>Al refactoritzar codi, els canvis es propaguen mantenint la documentació coherent.</p>
            </div>
          </div>
        </div>
        
        <div class="important-note mt-4">
          <strong>📊 Estadística:</strong> Els desenvolupadors que utilitzen codi ben documentat poden incrementar la seva productivitat fins a un 40% en tasques de manteniment.
        </div>
      </div>
    `
  },
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
];