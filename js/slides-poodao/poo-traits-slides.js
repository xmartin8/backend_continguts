// Diapositives sobre Herència i Traits
const pooTraitsSlides = [
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
    
            <div class="code-block">
                <div class="code-header">
                    <span>trait-example.php</span>
                    <div>
                        <span class="code-language">PHP</span>
                        <button class="copy-btn ms-2" onclick="copyCode('php-trait-code', this)">Copiar</button>
                    </div>
                </div>
                <pre><code class="php" id="php-trait-code">&lt;?php
trait Logger {
    public function log($message) {
        echo "Log: $message\\n";
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
    }
];