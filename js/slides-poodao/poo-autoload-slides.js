// Diapositives sobre Autoload
const pooAutoloadSlides = [
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
                <strong>📂 Veure exemples</strong>
            </div>
        `
    }
];