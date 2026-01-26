// Diapositives sobre PDO i validació de dades
const seguretatPdoSlides = [
  {
    title: "3. PDO amb Prepared Statements",
    content: `
      <h2 class="slide-title">3. PDO amb Prepared Statements</h2>
      <div class="code-block">
        <div class="code-header">
          <span>pdo_exemple.php</span>
          <span class="code-language">PHP</span>
          <button class="copy-btn ms-2" onclick="copyCode('php-pdo-code', this)">Copiar</button>
        </div>
        <pre><code class="php" id="php-pdo-code">&lt;?php
try {
    $connexio = new PDO('mysql:host=localhost;dbname=', 'root', '');
    $statement = $connexio->prepare('SELECT * FROM usuaris WHERE id = :id or nom = :nom');
    $statement->execute();
    $resultats = $statement->fetchAll();
    foreach ($resultats as $usuari){
    }    
} catch(PDOException $e){
    echo "Error: " . $e->getMessage();
}
?&gt;</code></pre>
      </div>
    `,
  },
  {
    title: "4. Validar les dades d'entrada",
    content: `
      <h2 class="slide-title">4. Validar les dades d'entrada</h2>
      <div class="text-large">
        <p>Funcions utilitzades:</p>
        <ul class="concept-list">
          <li><code>htmlspecialchars();</code></li>
          <li><code>trim();</code></li>
          <li><code>htmlentities();</code></li>
          <li><code>bindparam();</code></li>
          <li><code>preg_match(patró, cadena_entr, [array_resultats], ,[inici_cerca])</code></li>
        </ul>
      </div>
      <div class="code-block mt-3">
        <div class="code-header">
          <span>validacio_data.php</span>
        </div>
        <pre><code class="php">&lt;?php
$date = "2022-12-12"; 
if (preg_match("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/", $date)) {
    return true; 
} else {     
    return false; 
}
?&gt;</code></pre>
      </div>
    `,
  }
];