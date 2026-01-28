// Funcions per gestionar els exemples i directoris
const pooExamplesFunctions = {
    
    // Funció per mostrar el contingut de la carpeta exemples
    showExamplesDirectory: function() {
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
        
        const slideContent = document.getElementById('slideContent');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        
        slideContent.innerHTML = directoryContent;
        
        nextBtn.textContent = 'Tornar a l\'inici';
        nextBtn.classList.remove('btn-outline-primary');
        nextBtn.classList.add('btn-success');
        
        prevBtn.disabled = true;
    },
    
    // Funció per obrir una carpeta
    openFolder: function(folderName) {
        const folderPath = `../exemples/${folderName}/`;
        
        console.log(`Obrint carpeta: ${folderPath}`);
        
        try {
            if (window.parent && window.parent.document) {
                const parentDoc = window.parent.document;
                const contentFrame = parentDoc.getElementById('contentFrame');
                
                if (contentFrame) {
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
                    
                    contentFrame.srcdoc = folderContent;
                    return;
                }
            }
        } catch (error) {
            console.error('Error obrint carpeta dins iframe:', error);
        }
        
        window.open(folderPath, '_blank');
    },
    
    // Funció per tornar als slides
    goBackToSlides: function() {
        showSlide(currentSlideIndex);
    }
};

// Exportar funcions al scope global
window.showExamplesDirectory = pooExamplesFunctions.showExamplesDirectory;
window.openFolder = pooExamplesFunctions.openFolder;
window.goBackToSlides = pooExamplesFunctions.goBackToSlides;