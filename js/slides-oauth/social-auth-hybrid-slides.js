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
          <pre><code id="code5">//configuració de $config per a Hybridauth, per a diversos proveïdors (Google,...). 
//convenient posar en un fitxer PHP abans d’instanciar Hybrid_Auth
require_once("/path/to/hybridauth/Auth.php");
<?php
$config = array(
    "callback" => "http://localhost/callback.php", // URL on Hybridauth rebrà la resposta del proveïdor
    "providers" => array(
        "Google" => array(
            "enabled" => true,
            "keys" => array(
                "id" => "TU_CLIENT_ID_DE_GOOGLE",
                "secret" => "TU_CLIENT_SECRET_DE_GOOGLE"
            ),
            "scope" => "email profile"  //opcional
        ),
        //Cada proveïdor té la seva pròpia estructura de claus!!!
        "Facebook" => array(
            "enabled" => true,
            "keys" => array(
                "id" => "TU_APP_ID_DE_FACEBOOK",
                "secret" => "TU_APP_SECRET_DE_FACEBOOK"
            ),
            "scope" => "email public_profile"
        ),
        "Twitter" => array(
            "enabled" => true,
            "keys" => array(
                "key" => "TU_CONSUMER_KEY_DE_TWITTER",
                "secret" => "TU_CONSUMER_SECRET_DE_TWITTER"
            ),
        ),
    ),
    "debug_mode" => true,   //control d'errors en log
    "debug_file" => __DIR__ . "/hybridauth.log",
);

// Crear instància de Hybrid_Auth
$hybridauth = new Hybrid_Auth($config);

// connectem amb Google
$adapter = $hybridauth->authenticate("Google");
$userProfile = $adapter->getUserProfile();

</code></pre>
        </div>

      </div>
    `
  }
];