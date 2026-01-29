const socialAuthExplain2Slides = [
  {
    title: "Explicació Github amb HybridAuth",
    content: `
      <h2 class="slide-title">14. Flux complet d'autenticació social de GitHub amb HybridAuth</h2>
      <div class="text-large">

        <p><strong>Fem clic a la icona de GitHub</strong><br>
        A la vista de login (<code>login.view.php</code>), l'usuari veu diverses icones de providers socials. Quan fa clic a GitHub:</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">HTML</span>
            <button class="copy-btn" onclick="copyCode('code1', this)">Copiar</button>
          </div>
          <pre><code id="code1">&lt;a id="github" role="button" title="Log in with GitHub"&gt;
  &lt;img src="../view/icones/github-octocat.svg" alt="GitHub"&gt; 
&lt;/a&gt;</code></pre>
        </div>      

        <p><strong>JavaScript obre un popup</strong><br>
        El fitxer <code>social-authentication.js</code> detecta el clic i executa la funció <code>auth_popup("github")</code>, 
        seguidament s'obre un popup que carrega <code>http://localhost/controller/oauth/github.php</code></p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">JavaScript</span>
            <button class="copy-btn" onclick="copyCode('code2', this)">Copiar</button>
          </div>
          <pre><code id="code2">githubBtn.addEventListener("click", function () {
    auth_popup("github");
}, false);

function auth_popup(socialProvider) {
    var baseUrl = window.location.origin; 
    var currentPath = window.location.pathname;
    var basePath = currentPath.substring(0, currentPath.lastIndexOf('/')) + '/oauth';
    var authUrl = \`\${baseUrl}\${basePath}/\${socialProvider}.php\`;
    
    var authWindow = window.open(authUrl, "authWindow", 
        \`width=\${screen.width / 2}, height=\${screen.height}\`);
    
    window.closeAuthWindow = function () {
        authWindow.close();
    };
}</code></pre>
        </div>

        <p><strong>Preparació de la sessió al servidor </strong><br>
        Comprovem si ja hi ha una sessió iniciada <code>session_status()</code>, i si no, en crea una <code>session_start()</code>.
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

        <p><strong>Configuro el provider </strong><br>Es defineix la configuració per GitHub OAuth.<br>
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

        <p><strong>Autenticació amb Github </strong><br>Crear un objecte de Hybridauth per GitHub.<br>
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

        <p><strong>Registrar o loguejar l’usuari a l'app </strong><br>Funció <code>loginSocialProviderUser:</code><br>
Comprova si l’usuari ja existeix a la base de dades (<code>userExistsByEmail</code>).<br>
Si existeix:<br>
Inicia la sessió amb <code>startSession($email, true)</code> que guarda <code>$_SESSION['userId']</code>.<br>
Si no existeix:<br>
Inserta l’usuari amb <code>insertNewSocialUser($email, $displayName, $socialProvider)</code>.<br>
Després inicia sessió amb <code>startSessionByUserId($userId).</code>
Tinguem en compte que no necessitem password perquè GitHub ja valida l’usuari.<br></p>

        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code7', this)">Copiar</button>
          </div>
          <pre><code id="code7">function loginSocialProviderUser($email, $displayName, $socialProvider) {
    if (userExistsByEmail($email)) {
        // Usuari existent: només iniciar sessió
        startSession($email, true);
    } else {
        // Usuari nou: registrar i iniciar sessió
        $userId = insertNewSocialUser($email, $displayName, $socialProvider);
        startSessionByUserId($userId);
    }
}</code></pre>
        </div>

        <p><strong>Inserció a la base de dades (si és nou usuari)</strong><br>
        S'insereix a la taula <code>users</code> amb el camp <code>social_provider</code> = "GitHub":</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code8', this)">Copiar</button>
          </div>
          <pre><code id="code8">function insertNewSocialUser($email, $nickname, $socialProvider) {
    $connexio = getConnection();
    $statement = $connexio->prepare('
        INSERT INTO users (email, nickname, social_provider)
        VALUES (:email, :nickname, :socialProvider)
    ');
    $statement->execute([
        'email' => $email,
        'nickname' => $nickname,
        'socialProvider' => $socialProvider
    ]);
    return $connexio->lastInsertId();
}</code></pre>
        </div>

        <p><strong>Iniciar sessió PHP</strong><br>
        Es guarda l'userId a la variable de sessió <code>$_SESSION['userId']</code>:</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code9', this)">Copiar</button>
          </div>
          <pre><code id="code9">function startSessionByUserId($userId) {
    setSessionLifeTime();
    if (session_status() == PHP_SESSION_NONE) {
        session_start(); 
    }
    $_SESSION["userId"] = $userId;
}</code></pre>
        </div>

        <p><strong>Tancar el popup i actualitzar la pàgina principal</strong><br>
        S'executa un script JavaScript que tanca el popup i recarrega la finestra principal:</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code10', this)">Copiar</button>
          </div>
          <pre><code id="code10">function closeWindowAndReloadParent() {
    echo "&lt;script&gt;
        if (window.opener.closeAuthWindow) {
            window.opener.location.reload();
            window.opener.closeAuthWindow();
        }
    &lt;/script&gt;";
}</code></pre>
        </div>
        <p><code>window.opener </code> Fa referència a la finestra que va obrir el popup.<br>
        <code>location.reload() </code> Recarrega la pàgina principal del login.<br>
        <code>closeAuthWindow() </code> Tanca el popup automàticament.</p>

        <p><strong>Redirecció automàtica a l'inici</strong><br>
        Quan la pàgina de login es recarrega, detecta que hi ha sessió activa i redirigeix a l'inici:</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code11', this)">Copiar</button>
          </div>
          <pre><code id="code11">$userId = getSessionUserId();
if ($userId != 0) {
    redirectHome(); // header('Location: index.php');
    return;
}</code></pre>
        </div>

        <p><strong>Evitem el Login mixt</strong><br>
        El sistema evita que un usuari registrat amb GitHub intenti fer login amb password normal.<br> 
        Si un usuari s'ha registrat amb GitHub, <strong>sempre</strong> haurà d'utilitzar GitHub per entrar.<br></p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code12', this)">Copiar</button>
          </div>
          <pre><code id="code12">$userSocialProvider = getUserSocialProvider($email);
if (!empty($userSocialProvider)) {
    $errors["social"] = "You must log in with $userSocialProvider";
} else {
    login($email, $keepSession);
}</code></pre>
        </div>

      </div>
    `
  },
  {
    title: "Resum del flux OAuth amb GitHub",
    content: `
      <h2 class="slide-title">15 Diagrama del flux complet</h2>
      <div class="text-large">
        <p><strong>Flux visual pas a pas:</strong></p>
        <ol style="line-height: 2;">
          <li><strong>Usuari fa clic</strong> → Icona GitHub al login</li>
          <li><strong>JavaScript obre popup</strong> → Carrega <code>oauth/github.php</code></li>
          <li><strong>Servidor comprova sessió</strong> → Evita duplicats</li>
          <li><strong>Configura HybridAuth</strong> → Amb credencials OAuth</li>
          <li><strong>Redirigeix a GitHub</strong> → L'usuari s'autentica</li>
          <li><strong>GitHub retorna codi</strong> → Al callback URL</li>
          <li><strong>Intercanvi per token</strong> → HybridAuth obté access token</li>
          <li><strong>Obté dades usuari</strong> → Email i nickname</li>
          <li><strong>Comprova BD</strong> → Existeix o és nou?</li>
          <li><strong>INSERT (si nou)</strong> → Registra amb <code>social_provider='GitHub'</code></li>
          <li><strong>Inicia sessió PHP</strong> → <code>$_SESSION['userId']</code></li>
          <li><strong>Tanca popup</strong> → Recarrega pàgina principal</li>
          <li><strong>Redirigeix a home</strong> → Usuari autenticat ✓</li>
        </ol>

        <p style="margin-top: 30px;"><strong>Avantatges d'aquest sistema:</strong></p>
        <ul style="line-height: 1.8;">
          <li>✓ No cal gestionar passwords dels usuaris OAuth</li>
          <li>✓ GitHub valida la identitat de l'usuari</li>
          <li>✓ Experiència d'usuari fluida (popup automàtic)</li>
          <li>✓ Protecció contra login mixt (OAuth vs password)</li>
          <li>✓ Configuració dinàmica (funciona en local i producció)</li>
        </ul>

        <p style="margin-top: 30px;"><strong>Seguretat:</strong></p>
        <ul style="line-height: 1.8;">
          <li>🔒 Les credencials OAuth (Client ID/Secret) només es guarden al servidor</li>
          <li>🔒 El password mai viatja per internet (GitHub el valida)</li>
          <li>🔒 L'access token és temporal i només permet accés a dades públiques</li>
          <li>🔒 La sessió PHP es gestiona de forma segura amb temps d'expiració</li>
        </ul>

        <p style="margin-top: 30px;"><strong>Configuració a GitHub:</strong></p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">Configuració OAuth App</span>
          </div>
          <pre><code>Application name: El teu projecte
Homepage URL: http://localhost/controller
Authorization callback URL: http://localhost/controller/oauth/github.php

→ GitHub et dona:
   Client ID: Iv23liMag0QY2GVm9oiM
   Client Secret: 69c2007827e514bf85dbd18e913ece49afa950f4</code></pre>
        </div>

      </div>
    `
  }
];