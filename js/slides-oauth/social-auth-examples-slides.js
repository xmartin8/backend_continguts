const socialAuthExplainSlides = [
  {
    title: "Explicació Github amb HybridAuth",
    content: `
      <h2 class="slide-title">13. Explicació Github amb HybridAuth</h2>
      <div class="text-large">
        <p><strong>Preparo la sessió: </strong><br>Comprovem si ja hi ha una sessió iniciada <code>session_status()</code>, i si no, en crea una <code>session_start()</code>.
Si l’usuari ja està loguejat <code>$_SESSION['userId']</code> vol dir que existeix i per tant redirigeix al login o home. 
Així evitem que un usuari loguejat torni a fer OAuth.</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code5', this)">Copiar</button>
          </div>
          <pre><code id="code5">if (session_status() == PHP_SESSION_NONE) {  
    session_start(); 
}
if (isset($_SESSION['userId'])) {
    header('Location: login.php');
    return;
}

</code></pre>
        </div>

        <p><strong>Configuro el provider: </strong><br>Es defineix la configuració per GitHub OAuth.<br>
        <u>Callback:</u> és la URL on GitHub redirigirà l’usuari després de fer login.<br>
<u>Keys:</u> id i secret són les credencials del OAuth app de GitHub.<br>
<u>Observació:</u> S’ha fet de manera dinàmica amb <code>$_SERVER['HTTP_HOST']</code> i <code>dirname($_SERVER['PHP_SELF'])</code> per funcionar tant en local com en producció.</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code5', this)">Copiar</button>
          </div>
          <pre><code id="code5">$config = [
    'callback' => 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '/oauth/github.php',
    'keys' => [
        'id' => 'CLIENT_ID', 
        'secret' => 'CLIENT_SECRET',
    ]
];

</code></pre>
        </div>

        <p><strong>Autenticació amb Github: </strong><br>Crear un objecte de Hybridauth per GitHub.<br>
<code>authenticate()</code> redirigeix l’usuari a GitHub per loguejar-se.<br>
GitHub retorna un access token després que l’usuari accepti l’autenticació.<br>
Amb <code>$github->getUserProfile()</code> obtinc informació pública de l’usuari, com:<br>
<code>
$userProfile->displayName <br>
$userProfile->email <br>
</code>
Aquest Access Token em permet obtenir dades de GitHub sense demanar el password directament.</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code5', this)">Copiar</button>
          </div>
          <pre><code id="code5">$github = new Hybridauth\Provider\GitHub($config);
$github->authenticate();
$accessToken = $github->getAccessToken();
$userProfile = $github->getUserProfile();
</code></pre>
        </div>

        <p><strong>FFFFFFFFF: </strong><br>Registrar o loguejar l’usuari a la teva app</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code5', this)">Copiar</button>
          </div>
          <pre><code id="code5">
          
                    CODI PHP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            </code></pre>
        </div>

        <p><strong>FFFFFFFFF: </strong><br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code5', this)">Copiar</button>
          </div>
          <pre><code id="code5">
          
                    CODI PHP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            </code></pre>
        </div>        
      </div>

    `
  },
    {
    title: "Explicació Google amb OAuth2.0",
    content: 
    `
      <h2 class="slide-title">14. Explicació Google amb OAuth2.0</h2>
      <div class="text-large">
        <p>EXPLICACIO</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code5', this)">Copiar</button>
          </div>
          <pre><code id="code5">
          

            ///CODI PHP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


            </code></pre>
        </div>

      </div>
    `
  }
];