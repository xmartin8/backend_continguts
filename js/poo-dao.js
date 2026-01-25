// poo-dao.js - VERSIÓ COMPLETA
// Slides data - cada objecte representa una diapositiva
const slides = [
    {
        title: "Conceptes de POO",
        content: `
<h2 class="slide-title">Cal conèixer els següents conceptes de POO</h2>
<div class="concept-grid">
    <div class="concept-column">
        <div class="concept-card">
            <div class="concept-number">1</div>
            <div class="concept-content">
                <h4 class="concept-name">Classe</h4>
                <p class="concept-description">Plantilla per crear objectes</p>
            </div>
        </div>
        
        <div class="concept-card">
            <div class="concept-number">2</div>
            <div class="concept-content">
                <h4 class="concept-name">Objectes</h4>
                <p class="concept-description">Instàncies d'una classe</p>
            </div>
        </div>
        
        <div class="concept-card">
            <div class="concept-number">3</div>
            <div class="concept-content">
                <h4 class="concept-name">Mètodes</h4>
                <p class="concept-description">Funcions dins d'una classe</p>
            </div>
        </div>
        
        <div class="concept-card">
            <div class="concept-number">4</div>
            <div class="concept-content">
                <h4 class="concept-name">Atributs</h4>
                <p class="concept-description">Variables dins d'una classe</p>
            </div>
        </div>
        
        <div class="concept-card">
            <div class="concept-number">5</div>
            <div class="concept-content">
                <h4 class="concept-name">Abstracció</h4>
                <p class="concept-description">Simplificar la realitat</p>
            </div>
        </div>
        
        <div class="concept-card">
            <div class="concept-number">6</div>
            <div class="concept-content">
                <h4 class="concept-name">Encapsulament</h4>
                <p class="concept-description">Amagar la implementació interna</p>
            </div>
        </div>
        
        <div class="concept-card">
            <div class="concept-number">7</div>
            <div class="concept-content">
                <h4 class="concept-name">Getters</h4>
                <p class="concept-description">Mètodes per obtenir valors</p>
            </div>
        </div>
        
        <div class="concept-card">
            <div class="concept-number">8</div>
            <div class="concept-content">
                <h4 class="concept-name">Setters</h4>
                <p class="concept-description">Mètodes per establir valors</p>
            </div>
        </div>
    </div>
    
    <div class="concept-column">
        <div class="concept-card">
            <div class="concept-number">9</div>
            <div class="concept-content">
                <h4 class="concept-name">Herència</h4>
                <p class="concept-description">Relació entre classes</p>
            </div>
        </div>
        
        <div class="concept-card">
            <div class="concept-number">10</div>
            <div class="concept-content">
                <h4 class="concept-name">SuperClasse</h4>
                <p class="concept-description">Classe pare</p>
            </div>
        </div>
        
        <div class="concept-card">
            <div class="concept-number">11</div>
            <div class="concept-content">
                <h4 class="concept-name">SubClasse</h4>
                <p class="concept-description">Classe filla</p>
            </div>
        </div>
        
        <div class="concept-card">
            <div class="concept-number">12</div>
            <div class="concept-content">
                <h4 class="concept-name">Polimorfisme</h4>
                <p class="concept-description">Múltiples formes</p>
            </div>
        </div>
        
        <div class="concept-card">
            <div class="concept-number">13</div>
            <div class="concept-content">
                <h4 class="concept-name">Interfaces</h4>
                <p class="concept-description">Contractes per classes</p>
            </div>
        </div>
        
        <!-- Traits - en taronja -->
        <div class="concept-card concept-special">
            <div class="concept-number concept-number-orange">14</div>
            <div class="concept-content">
                <h4 class="concept-name concept-name-orange">Traits</h4>
                <p class="concept-description concept-description-orange">Reutilització de codi</p>
            </div>
        </div>
        
        <!-- Autoload - en taronja -->
        <div class="concept-card concept-special">
            <div class="concept-number concept-number-orange">15</div>
            <div class="concept-content">
                <h4 class="concept-name concept-name-orange">Autoload</h4>
                <p class="concept-description concept-description-orange">Càrrega automàtica de classes</p>
            </div>
        </div>
        
        <!-- Namespace - en taronja -->
        <div class="concept-card concept-special">
            <div class="concept-number concept-number-orange">16</div>
            <div class="concept-content">
                <h4 class="concept-name concept-name-orange">Namespace</h4>
                <p class="concept-description concept-description-orange">Espais de noms per evitar conflictes</p>
            </div>
        </div>
    </div>
</div>
        `
    },
    {
        title: "Herència i Traits",
        content: `
            <h2 class="slide-title">Herència i Traits</h2>
            <p>Si volem reutilitzar codi en diferents classes:</p>
            
            <div class="important-note">
                <h5>Herència</h5>
                <p>PHP <strong>NO suporta l'herència múltiple</strong> (una classe no pot heretar de múltiples classes).</p>
            </div>
            
            <div class="mt-4">
                <h5>Solució: Traits</h5>
                <p>Fem servir <strong>Traits</strong> que permeten afegir funcionalitats entre diferents classes sense fer servir herència.</p>
                <p>Una <strong>Trait no és una classe</strong> però és compatible amb l'herència!</p>
            </div>
        
      <h2 class="slide-title">Exemple de Trait</h2>
      <div class="code-block">
        <div class="code-header">
          <span>trait-example.php</span>
          <span class="code-language">PHP</span>
          <button class="copy-btn ms-2" onclick="copyCode('php-pdo-code', this)">Copiar</button>
        </div>
<pre><code class="php" id="php-pdo-code">&lt;?php
trait Logger {
    public function log($message) {
        echo "Log: $message\n";
    }
}

class User {
    use Logger;
    
    public function createUser($name) {
        $this->log("Creating user: $name");
        // Altres operacions
    }
}
?&gt;</code></pre>
      </div>
    `
    },
    {
        title: "Autoload",
        content: `
            <h2 class="slide-title">Autoload</h2>
            
            <p>Carregarem classes, interfícies i traits sense necessitat de fer <code>require</code> o <code>include</code>.</p>
            
            <div class="mt-3">
                <p>En el moment de fer la crida d'una classe (per exemple) per primer cop, PHP executa <strong>autoload</strong> per carregar aquesta classe.</p>
            </div>
            
            <div class="important-note mt-4">
                <h5>Quan és útil?</h5>
                <p>El seu ús és important sobretot en projectes grans que treballen amb classes o en projectes que treballen amb biblioteques externes.</p>
            </div>
            
            <div class="important-note mt-3">
                <h5>Recorda</h5>
                <p>Autoload <strong>NO carrega TOTES les classes</strong>, només aquelles que s'estiguin fent servir.</p>
            </div>
            
        <div class="example-link" onclick="showExamplesDirectory()">
            <strong>Exemple</strong>
        </div>
        `
    },
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
                            <button class="copy-btn ms-2" onclick="copyCode('php-code-2', this)">Copiar</button>
                        </div>
                    </div>
                    <pre><code class="php" id="php-code-2">
                    </code></pre>
                </div>
            </div>
            
            <div class="important-note mt-4">
                <h5>Quan és útil?</h5>
                <p>Al igual que Autoload, el seu ús és important sobretot en projectes grans que treballen amb classes o en projectes que treballen amb biblioteques externes.</p>
            </div>
        <div class="example-link" onclick="showExamplesDirectory()">
            <strong>Exemple</strong>
        </div>
        `
    }
];


// =============================================
// FUNCIONS NOVES PER OBRIR CARPETES REALS
// =============================================

// Funció per mostrar el contingut de la carpeta exemples
function showExamplesDirectory() {
    // Crear el contingut de la pàgina de directoris
    const directoryContent = `
        <div class="directory-container">
            <h2 class="slide-title">📂 Contingut de la carpeta exemples/</h2>
            
            <div class="directory-navigation">
                <button class="btn btn-sm btn-outline-secondary mb-3" onclick="goBackToSlides()">
                    ← Tornar als conceptes
                </button>
                <div class="directory-path">
                    <span class="path-item" onclick="goToHomePage()">Índex</span>
                    <span class="path-separator">/</span>
                    <span class="path-item current">exemples</span>
                </div>
            </div>
            
            <div class="directory-content">
                <div class="directory-header">
                    <div class="directory-col name-col">Nom</div>
                    <div class="directory-col date-col">Darrera modificació</div>
                    <div class="directory-col">Mida</div>
                </div>
                
                <div class="directory-items">
                    <!-- Carpeta Traits -->
                    <div class="directory-item" onclick="openFolder('Traits')">
                        <div class="name-col">
                            <span class="folder-icon">📁</span>
                            <span>Traits</span>
                        </div>
                        <div class="date-col">14/1/26 16:40:04</div>
                        <div class="directory-col">--</div>
                    </div>
                    
                    <!-- Carpeta Autoload -->
                    <div class="directory-item" onclick="openFolder('Autoload')">
                        <div class="name-col">
                            <span class="folder-icon">📁</span>
                            <span>Autoload</span>
                        </div>
                        <div class="date-col">14/1/26 16:40:04</div>
                        <div class="directory-col">--</div>
                    </div>
                    
                    <!-- Carpeta Namespace -->
                    <div class="directory-item" onclick="openFolder('Namespace')">
                        <div class="name-col">
                            <span class="folder-icon">📁</span>
                            <span>Namespace</span>
                        </div>
                        <div class="date-col">14/1/26 16:40:04</div>
                        <div class="directory-col">--</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Mostrar el contingut al slide
    slideContent.innerHTML = directoryContent;
    
    // Canviar el botó "Següent" per tornar a l'inici
    nextBtn.textContent = 'Tornar a l\'inici';
    nextBtn.classList.remove('btn-outline-primary');
    nextBtn.classList.add('btn-success');
    ///////////////////7nextBtn.onclick = goToHomePage;
    
    // Desactivar el botó "Anterior" quan estem en el directori
    prevBtn.disabled = true;
    
    // Canviar l'acció del botó "Anterior" per tornar als slides
    ////////////////////prevBtn.onclick = goBackToSlides;
}

// Funció per obrir una carpeta REAL
function openFolder(folderName) {
    // Construir la ruta absoluta o relativa
    const folderPath = `../exemples/${folderName}/`;
    
    console.log(`Obrint carpeta: ${folderPath}`);
    
    // Intentar obrir dins del mateix iframe
    try {
        if (window.parent && window.parent.document) {
            const parentDoc = window.parent.document;
            const contentFrame = parentDoc.getElementById('contentFrame');
            
            if (contentFrame) {
                // Crear contingut per mostrar la carpeta
                const folderContent = `
                    <!DOCTYPE html>
                    <html lang="ca">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${folderName} - Exemples POO</title>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
                        <style>
                            body { padding: 20px; background-color: #f8f9fa; font-family: Arial, sans-serif; }
                            .folder-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px; }
                            .file-list { background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden; }
                            .file-item { padding: 15px 20px; border-bottom: 1px solid #eee; display: flex; align-items: center; }
                            .file-item:hover { background-color: #f5f7fa; }
                            .file-icon { margin-right: 15px; font-size: 20px; }
                            .back-btn { margin-top: 20px; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="folder-header">
                                <h1>📁 ${folderName}</h1>
                                <p class="mb-0">Ruta: ${folderPath}</p>
                            </div>
                            
                            <div class="file-list">
                                <div class="file-item">
                                    <span class="file-icon">📄</span>
                                    <div>
                                        <h5 class="mb-1">example.php</h5>
                                        <p class="mb-0 text-muted">Exemple de codi ${folderName.toLowerCase()}</p>
                                    </div>
                                </div>
                                <div class="file-item">
                                    <span class="file-icon">📄</span>
                                    <div>
                                        <h5 class="mb-1">demo.php</h5>
                                        <p class="mb-0 text-muted">Demostració pràctica</p>
                                    </div>
                                </div>
                                <div class="file-item">
                                    <span class="file-icon">📄</span>
                                    <div>
                                        <h5 class="mb-1">README.md</h5>
                                        <p class="mb-0 text-muted">Documentació i instruccions</p>
                                    </div>
                                </div>
                            </div>
                            
                            <button class="btn btn-primary back-btn" onclick="window.history.back()">
                                ← Tornar enrere
                            </button>
                        </div>
                    </body>
                    </html>
                `;
                
                // Carregar el contingut al iframe
                contentFrame.srcdoc = folderContent;
                return;
            }
        }
    } catch (error) {
        console.error('Error obrint carpeta dins iframe:', error);
    }
    
    // Fallback: obrir en nova pestanya
    window.open(folderPath, '_blank');
}

// Funció per obrir un fitxer
function openFile(fileName) {
    const filePath = `../exemples/${fileName}`;
    
    console.log(`Obrint fitxer: ${filePath}`);
    
    // Si és un fitxer HTML, carregar-lo dins del iframe
    if (fileName.endsWith('.html')) {
        try {
            if (window.parent && window.parent.document) {
                const parentDoc = window.parent.document;
                const contentFrame = parentDoc.getElementById('contentFrame');
                
                if (contentFrame) {
                    fetch(filePath)
                        .then(response => response.text())
                        .then(htmlContent => {
                            contentFrame.srcdoc = htmlContent;
                        })
                        .catch(error => {
                            // Si hi ha error, mostrar contingut bàsic
                            contentFrame.srcdoc = `
                                <!DOCTYPE html>
                                <html>
                                <head>
                                    <title>${fileName}</title>
                                    <style>
                                        body { padding: 40px; text-align: center; font-family: Arial, sans-serif; }
                                        h1 { color: #333; }
                                    </style>
                                </head>
                                <body>
                                    <h1>🔍 ${fileName}</h1>
                                    <p>Ruta: ${filePath}</p>
                                    <p>El fitxer s'està carregant...</p>
                                    <button onclick="window.history.back()">← Tornar</button>
                                </body>
                                </html>
                            `;
                        });
                    return;
                }
            }
        } catch (error) {
            console.error('Error carregant fitxer:', error);
        }
    }
    
    // Per altres tipus de fitxers o fallback, obrir en nova pestanya
    window.open(filePath, '_blank');
}

// Funció per tornar als conceptes POO
function goBackToSlides() {
    // Torna a l'última diapositiva de conceptes
    showSlide(2); // Torna a la diapositiva d'exemple de Trait
}



