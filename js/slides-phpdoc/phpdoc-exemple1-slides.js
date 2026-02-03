const phpdocexemp1slides =[

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
  }
]