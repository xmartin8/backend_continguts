const socialAuthExplainSlides = [
  {
    title: "Explicació Google amb OAuth 2.0",
    content: `
      <h2 class="slide-title">13. Flux complet d'autenticació social de Google amb OAuth 2.0</h2>
      <div class="text-large">

        <p><strong>Fem clic a la icona de Google</strong><br>
        A la vista de login (<code>login.view.php</code>), l'usuari veu diverses icones de providers socials. Quan fa clic a Google:</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">HTML</span>
            <button class="copy-btn" onclick="copyCode('code-google1', this)">Copiar</button>
          </div>
          <pre><code id="code-google1">&lt;a id="google" role="button" title="Log in with Google"&gt;
  &lt;img src="../view/icones/google.svg" alt="Google"&gt; 
&lt;/a&gt;</code></pre>
        </div>      

        <p><strong>JavaScript obre un popup</strong><br>
        El fitxer <code>social-authentication.js</code> detecta el clic i executa la funció <code>auth_popup("google")</code>, 
        seguidament s'obre un popup que carrega <code>http://localhost/controller/oauth/google.php</code></p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">JavaScript</span>
            <button class="copy-btn" onclick="copyCode('code-google2', this)">Copiar</button>
          </div>
          <pre><code id="code-google2">googleBtn.addEventListener("click", function () {
    auth_popup("google");
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

        <p><strong>Preparació de la sessió al servidor</strong><br>
        Al fitxer <code>oauth/google.php</code>, primer comprovem si ja hi ha una sessió iniciada amb <code>session_status()</code>, i si no, en crea una amb <code>session_start()</code>.
        Si l'usuari ja està loguejat (<code>$_SESSION['userId']</code> existeix), redirigeix al login. 
        Així evitem que un usuari loguejat torni a fer OAuth.</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code-google3', this)">Copiar</button>
          </div>
          <pre><code id="code-google3">if (session_status() == PHP_SESSION_NONE) {  
    session_start(); 
}
if (isset($_SESSION['userId'])) {
    header('Location: login.php');
    return;
}</code></pre>
        </div>

        <p><strong>Configuro el client de Google OAuth</strong><br>
        Es defineix la configuració per Google OAuth 2.0 utilitzant la llibreria <code>Google_Client</code>:<br>
        <u>Client ID:</u> Identificador únic de l'aplicació OAuth.<br>
        <u>Client Secret:</u> Clau secreta per autenticar l'aplicació.<br>
        <u>Redirect URI:</u> URL on Google redirigirà després del login.<br>
        <u>Scopes:</u> Permisos que sol·licitem (email i profile).<br>
        <u>Seguretat:</u> Aquests valors haurien d'estar al fitxer .env</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code-google4', this)">Copiar</button>
          </div>
          <pre><code id="code-google4">// AL fitxer .env (cal afegir-lo al .gitignore)
GOOGLE_CLIENT_ID=264620490953-g5s2jh390pqo2263il5hlnacdbe4pbaj.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

// Configuració del client
$client = new Google_Client();
$client->setClientId($_ENV['GOOGLE_CLIENT_ID']);
$client->setClientSecret($_ENV['GOOGLE_CLIENT_SECRET']);
$client->setRedirectUri('http://localhost/Practiques/nba-branch8/controller/oauth/google.php');
$client->addScope("email");    // Permís per accedir al email
$client->addScope("profile");  // Permís per accedir al perfil</code></pre>
        </div>

        <p><strong>Primera crida: Redirecció a Google</strong><br>
        Quan l'usuari arriba per primera vegada a <code>google.php</code>, NO hi ha cap paràmetre <code>$_GET['code']</code>.<br>
        En aquest cas, el que fa el codi és generar una URL d'autenticació de Google i redirigir l'usuari cap allà:<br>
        <strong>Nota:</strong> Aquesta part no apareix al teu codi perquè està implícita. Cal afegir-la!</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code-google5', this)">Copiar</button>
          </div>
          <pre><code id="code-google5">// Si no hi ha codi, redirigim a Google per autenticar
if (!isset($_GET['code'])) {
    $authUrl = $client->createAuthUrl();
    header('Location: ' . $authUrl);
    exit;
}</code></pre>
        </div>

        <p><strong>L'usuari s'autentica a Google</strong><br>
        Google mostra una pantalla on l'usuari:<br>
        1. Selecciona el seu compte de Google<br>
        2. Accepta els permisos sol·licitats (email i profile)<br>
        3. Google genera un <strong>codi d'autorització temporal</strong><br>
        4. Redirigeix de nou a la nostra aplicació amb aquest codi: <code>?code=ABC123XYZ...</code></p>

        <p><strong>Segona crida: Intercanvi del codi per un Access Token</strong><br>
        Ara tenim en compte <code>$_GET['code']</code><br>
        Aquest codi temporal s'intercanvia per un <strong>Access Token</strong> vàlid que ens permetrà accedir a les dades de l'usuari:</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code-google6', this)">Copiar</button>
          </div>
          <pre><code id="code-google6">if (isset($_GET['code'])) {
    // Intercanviem el codi temporal per un Access Token
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    
    // Establim l'Access Token al client
    $client->setAccessToken($token['access_token']);
}</code></pre>
        </div>

        <p><strong>Obtenir les dades de l'usuari</strong><br>
        Amb l'Access Token ja configurat, podem utilitzar el servei <code>Google_Service_Oauth2</code> per obtenir la informació del perfil de l'usuari:</p>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code-google7', this)">Copiar</button>
          </div>
          <pre><code id="code-google7">// Creem el servei OAuth2 de Google
$google_oauth = new Google_Service_Oauth2($client);

// Obtenim la informació del perfil
$google_account_info = $google_oauth->userinfo->get();

// Extreure dades
$email = $google_account_info->email;
$name = $google_account_info->name;

// Altres dades disponibles:
// $google_account_info->picture  (foto de perfil)
// $google_account_info->id       (ID únic de Google)</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "Funció loginSocialProviderUser()",
    content: `
      <h2 class="slide-title">14. Registrar o loguejar l'usuari a l'aplicació</h2>
      <div class="text-large">

        <p><strong>Què fa aquesta funció?</strong><br>
        La funció <code>loginSocialProviderUser()</code> definida a <code>social-auth-common.php</code> és la peça clau que:<br>
        1. Comprova si l'usuari ja existeix a la base de dades<br>
        2. Si existeix → inicia sessió directament<br>
        3. Si NO existeix → registra l'usuari i després inicia sessió</p>

        <p>Hem d'evitar conflictes de providers, per tant és recomanable controlar que un mateix email no pugui utilitzar múltiples mètodes d'autenticació.<br>
        Per exemple: evitar que algú registrat amb email/password intenti entrar després amb Google.</p>

        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code-login4', this)">Copiar</button>
          </div>
          <pre><code id="code-login4">function loginSocialProviderUser($email, $displayName, $socialProvider) 
{
    if (userExistsByEmail($email)) {
        $existingProvider = getUserSocialProvider($email);
        
        // Si ja té un provider diferent, mostrar error
        if (!empty($existingProvider) && $existingProvider !== $socialProvider) {
            die("Aquest email ja està registrat amb $existingProvider");
        }
        
        // Si té password però no provider, oferir vincular comptes
        if (empty($existingProvider) && !empty(getUserHash($email))) {
            die("Aquest email ja està registrat amb password. Si us plau, entra amb el teu password o vincula els comptes.");
        }
        
        startSession($email, true);
    } else {
        $userId = insertNewSocialUser($email, $displayName, $socialProvider);
        startSessionByUserId($userId);
    }
}</code></pre>
        </div>

        <p><strong>Cas 1: Usuari ja existent</strong><br>
        Si l'usuari ja s'ha registrat prèviament (amb Google o amb email/password), simplement iniciem la sessió.</p>

        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP - Funció userExistsByEmail()</span>
            <button class="copy-btn" onclick="copyCode('code-login2', this)">Copiar</button>
          </div>
          <pre><code id="code-login2">function userExistsByEmail($email)
{
    $connexio = getConnection();
    $statement = $connexio->prepare('SELECT email FROM users WHERE email = :email');
    $statement->bindValue(':email', $email);
    $statement->execute();
    $count = count($statement->fetchAll());
    return ($count > 0);  // true si existeix
}</code></pre>
        </div>

        <p><strong>Cas 2: Usuari nou</strong><br>
        Si l'usuari NO existeix, l'afegim a la base de dades amb la funció <code>insertNewSocialUser()</code>:</p>

        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP - Funció insertNewSocialUser()</span>
            <button class="copy-btn" onclick="copyCode('code-login3', this)">Copiar</button>
          </div>
          <pre><code id="code-login3">function insertNewSocialUser($email, $nickname, $socialProvider)
{
    $connexio = getConnection();
    $statement = $connexio->prepare('
        INSERT INTO users (email, nickname, social_provider)
        VALUES (:email, :nickname, :socialProvider)
    ');
    $statement->execute([
        'email' => $email,
        'nickname' => $nickname,
        'socialProvider' => $socialProvider  // "Google"
    ]);
    
    // Retorna el ID del nou usuari inserit
    return $connexio->lastInsertId();
}</code></pre>
        </div>

        <p>En aquest INSERT, el camp <code>password</code> queda a NULL perquè l'usuari s'ha autenticat amb Google.<br>
        No necessitem ni volem guardar cap password quan s'utilitza OAuth!</p>

        <p><strong>Funció getUserSocialProvider()</strong><br>
        Aquesta funció ja està al teu fitxer <code>pdo-users.php</code>:</p>

        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code-login5', this)">Copiar</button>
          </div>
          <pre><code id="code-login5">function getUserSocialProvider($email)
{
    $connexio = getConnection();
    $statement = $connexio->prepare('SELECT social_provider FROM users WHERE email = ?');
    $statement->execute([$email]);
    return $statement->fetch()['social_provider'];
}</code></pre>
        </div>

      </div>
    `
  },
  {
    title: "Iniciar sessió",
    content: `
      <h2 class="slide-title">15. Iniciar sessió PHP </h2>
      <div class="text-large">

        <p><strong>Funció startSession()</strong><br>
        A <code>session.php</code>) tenim la funció <code>startSession()</code> que estableix la sessió PHP i opcionalment crea una cookie "remember me":</p>

        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code-session1', this)">Copiar</button>
          </div>
          <pre><code id="code-session1">function startSession($email, $keepSession)
{
    setSessionLifeTime();  // Configura temps de vida de la sessió
    
    if (session_status() == PHP_SESSION_NONE) {
        session_start(); 
    }
    
    // Obtenim el userId de l'usuari
    $userId = getUserId($email);
    
    // Si volem mantenir la sessió, cream un token "remember me"
    if ($keepSession) {
        $rememberMeToken = bin2hex(random_bytes(16)); 
        setRememberMeToken($userId, $rememberMeToken);
        setcookie("rememberme", $rememberMeToken, 2147483647);  // Cookie de llarga durada
    }
    
    // Guardem el userId a la sessió
    $_SESSION["userId"] = $userId;
}</code></pre>
        </div>

        <p><strong>Funció startSessionByUserId()</strong><br>
        Quan acabem de registrar un usuari nou, ja tenim el seu <code>$userId</code> directament (retornat per <code>insertNewSocialUser</code>).<br>
        Llavors cridem:</p>

        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code-session2', this)">Copiar</button>
          </div>
          <pre><code id="code-session2">function startSessionByUserId($userId)
{
    setSessionLifeTime();
    
    if (session_status() == PHP_SESSION_NONE) {
        session_start(); 
    }
    
    $_SESSION["userId"] = $userId;
}</code></pre>
        </div>

        <p><strong>Configuració del temps de vida de la sessió</strong><br>
        La funció <code>setSessionLifeTime()</code> estableix quant temps pot estar inactiva una sessió abans de caducar:</p>

        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code-session3', this)">Copiar</button>
          </div>
          <pre><code id="code-session3">function setSessionLifeTime()
{
    ini_set('session.gc_maxlifetime', 1800);  // 30 minuts
    ini_set('session.cookie_lifetime', 1800);
    
    // Configuració de la tasca de neteja
    ini_set('session.gc_probability', 100);
    ini_set('session.gc_divisor', 100);
}</code></pre>
        </div>

      </div>
    `
  },
  {
    title: "Redirecció automàtica i seguretat",
    content: `
      <h2 class="slide-title">16. Redirecció automàtica i mesures de seguretat</h2>
      <div class="text-large">

        <p><strong>Detecció de sessió activa al login</strong><br>
        Quan la pàgina principal de login es recarrega després de l'autenticació exitosa, ha de detectar que hi ha una sessió activa i redirigir a l'inici:</p>

        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP - A login.php</span>
            <button class="copy-btn" onclick="copyCode('code-redirect1', this)">Copiar</button>
          </div>
          <pre><code id="code-redirect1">session_start();

// Obtenim el userId de la sessió
$userId = getSessionUserId();

// Si hi ha sessió activa, redirigir a l'inici
if ($userId != 0) {
    redirectHome();  // header('Location: index.php');
    return;
}</code></pre>
        </div>

        <p><strong>Funció getSessionUserId()</strong><br>
        Aquesta funció comprova si hi ha sessió activa, i també suporta el sistema "remember me":</p>

        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code-redirect2', this)">Copiar</button>
          </div>
          <pre><code id="code-redirect2">function getSessionUserId() 
{
    // Cas 1: Hi ha sessió activa
    if (isset($_SESSION["userId"])) {
        return $_SESSION["userId"];
    } 
    // Cas 2: Hi ha cookie "remember me"
    else if (isset($_COOKIE["rememberme"])) {
        $userId = getUserIdByRememberMeToken($_COOKIE["rememberme"]);
        if ($userId == "") return 0;
        return $userId;
    } 
    // Cas 3: No hi ha cap sessió
    else {
        return 0;
    }
}</code></pre>
        </div>

        <p><strong>Evitar el login mixt (password vs OAuth)</strong><br>
        És important prevenir que un usuari registrat amb Google intenti fer login amb password (i viceversa).</p>

        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP - Exemple al login amb password</span>
            <button class="copy-btn" onclick="copyCode('code-redirect3', this)">Copiar</button>
          </div>
          <pre><code id="code-redirect3">// Al processar el login amb email/password
$email = $_POST['email'];
$password = $_POST['password'];

// Comprova si l'usuari s'ha registrat amb un social provider
$userSocialProvider = getUserSocialProvider($email);

if (!empty($userSocialProvider)) {
    // ERROR: aquest usuari s'ha de loguejar amb el social provider
    $errors["social"] = "Has d'iniciar sessió amb $userSocialProvider";
} else {
    // OK: podem fer login normal amb password
    login($email, $keepSession);
}</code></pre>
        </div>

      </div>
    `
  },
  {
    title: "Resum del flux OAuth 2.0 amb Google",
    content: `
      <h2 class="slide-title">17. Diagrama del flux complet - Google OAuth 2.0</h2>
      <div class="text-large">
        <p><strong>Flux visual pas a pas:</strong></p>
        <ol style="line-height: 2;">
          <li><strong>Usuari fa clic</strong> → Icona Google al login</li>
          <li><strong>JavaScript obre popup</strong> → Carrega <code>oauth/google.php</code></li>
          <li><strong>Servidor comprova sessió</strong> → Evita duplicats</li>
          <li><strong>Configura Google_Client</strong> → Amb Client ID, Secret i Scopes</li>
          <li><strong>Primer: genera authUrl</strong> → Redirigeix l'usuari a Google</li>
          <li><strong>Usuari s'autentica a Google</strong> → Selecciona compte i accepta permisos</li>
          <li><strong>Google retorna codi temporal</strong> → Via paràmetre <code>?code=...</code></li>
          <li><strong>Segon: intercanvi codi per token</strong> → <code>fetchAccessTokenWithAuthCode()</code></li>
          <li><strong>Obté dades d'usuari</strong> → Email, name amb <code>Google_Service_Oauth2</code></li>
          <li><strong>Comprova BD</strong> → L'usuari existeix o és nou?</li>
          <li><strong>INSERT (si nou)</strong> → Registra amb <code>social_provider='Google'</code></li>
          <li><strong>Inicia sessió PHP</strong> → <code>$_SESSION['userId']</code></li>
          <li><strong>Tanca popup</strong> → Recarrega pàgina principal</li>
          <li><strong>Redirigeix a home</strong> → Usuari autenticat ✓</li>
        </ol>

        <p style="margin-top: 30px;"><strong>Diferències entre HybridAuth (GitHub) i Google_Client (Google):</strong></p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <thead>
            <tr style="background-color: #f0f0f0;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Aspecte</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">HybridAuth (GitHub)</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Google_Client (Google)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #ddd; padding: 10px;"><strong>Llibreria</strong></td>
              <td style="border: 1px solid #ddd; padding: 10px;">hybridauth/hybridauth</td>
              <td style="border: 1px solid #ddd; padding: 10px;">google/apiclient</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 10px;"><strong>Configuració</strong></td>
              <td style="border: 1px solid #ddd; padding: 10px;">Array amb callback i keys</td>
              <td style="border: 1px solid #ddd; padding: 10px;">Mètodes del client (setClientId, etc.)</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 10px;"><strong>Autenticació</strong></td>
              <td style="border: 1px solid #ddd; padding: 10px;">$github->authenticate()</td>
              <td style="border: 1px solid #ddd; padding: 10px;">$client->createAuthUrl() + redirect manual</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 10px;"><strong>Obtenir perfil</strong></td>
              <td style="border: 1px solid #ddd; padding: 10px;">$github->getUserProfile()</td>
              <td style="border: 1px solid #ddd; padding: 10px;">$google_oauth->userinfo->get()</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 10px;"><strong>Multi-provider</strong></td>
              <td style="border: 1px solid #ddd; padding: 10px;">✓ Suporta molts providers</td>
              <td style="border: 1px solid #ddd; padding: 10px;">✗ Només Google</td>
            </tr>
          </tbody>
        </table>

        <p style="margin-top: 30px;"><strong>Avantatges d'OAuth 2.0:</strong></p>
        <ul style="line-height: 1.8;">
          <li>✓ No cal gestionar passwords dels usuaris OAuth</li>
          <li>✓ Google valida la identitat de l'usuari</li>
          <li>✓ Experiència d'usuari fluida (popup automàtic)</li>
          <li>✓ Protecció contra login mixt (OAuth vs password)</li>
          <li>✓ Accés a dades addicionals del perfil (foto, etc.)</li>
          <li>✓ Tokens amb data de caducitat automàtica</li>
        </ul>

      </div>
    `
  }
];
