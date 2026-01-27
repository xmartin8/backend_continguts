// Diapositives sobre HybridAuth i configuració
const socialAuthHybridSlides = [
  {
    title: "Configuració d'HybridAuth",
    content: `
      <h2 class="slide-title">7. Configuració d'HybridAuth</h2>
      <div class="text-large">
        <p>Podem configurar <strong>HybridAuth</strong> de dues maneres diferents:</p>
        
        <h4 class="mt-4">Mitjançant fitxer de configuració:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code4', this)">Copiar</button>
          </div>
          <pre><code id="code4">hybridauth-3.x.x/hybridauth/config.php</code></pre>
        </div>
        
        <h4 class="mt-4">Mitjançant configuració d'array:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code5', this)">Copiar</button>
          </div>
          <pre><code id="code5">require_once("/path/to/hybridauth/Auth.php");

$config = array(
    "providers" => array(
        "Google" => array(
            "enabled" => true,
            "keys" => array(
                "id" => "CLIENT_ID",
                "secret" => "CLIENT_SECRET"
            ),
            "scope" => "email profile"
        ),
        // Més proveïdors...
    )
);

$hybridauth = new Hybrid_Auth($config);</code></pre>
        </div>

      </div>
    `
  }
];