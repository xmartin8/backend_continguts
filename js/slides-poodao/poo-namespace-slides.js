// Diapositives sobre Namespace
const pooNamespaceSlides = [
    {
        title: "Namespace",
        content: `
            <h2 class="slide-title">Namespace</h2>
            
            <p>Com evitàvem fins ara tenir dos noms de fitxers idèntics en una estructura MVC?</p>
            
            <div class="code-block mt-3">
                <div class="code-header">
                    <span>estructura-sense-namespace.txt</span>
                    <span class="code-language">TEXT</span>
                </div>
                <pre><code class="plaintext">../Controller/edit.php
../Model/mod_edit.php  
../View/edit.view.php</code></pre>
            </div>
            
            <div class="mt-4">
                <h5>Problema:</h5>
                <p>Sense namespaces, hem d'afegir prefixos o sufixos als noms de fitxers per evitar conflictes.</p>
            </div>
            
            <p><strong>Namespace</strong> ens permet encapsular codi per evitar conflictes de noms de classes.</p>
            
            <div class="mt-4">
                <h5>Exemple d'ús:</h5>
                <div class="code-block">
                    <div class="code-header">
                        <span>namespace-example.php</span>
                        <div>
                            <span class="code-language">PHP</span>
                            <button class="copy-btn ms-2" onclick="copyCode('php-namespace-code', this)">Copiar</button>
                        </div>
                    </div>
                    <pre><code class="php" id="php-namespace-code">&lt;?php
namespace App\\Controller;

class EditController {
    // Codi del controlador
}

// En un altre fitxer
namespace App\\Model;

class Edit {
    // Codi del model
}

// Ús
use App\\Controller\\EditController;
use App\\Model\\Edit;

$controller = new EditController();
$model = new Edit();
?&gt;</code></pre>
                </div>
            </div>
            
            <div class="important-note mt-4">
                <h5>Quan és útil?</h5>
                <p>Al igual que Autoload, el seu ús és important sobretot en projectes grans que treballen amb classes o en projectes que treballen amb biblioteques externes.</p>
            </div>
            
            <div class="example-link" onclick="showExamplesDirectory()">
                <strong>📂 Veure exemples</strong>
            </div>
        `
    }
];