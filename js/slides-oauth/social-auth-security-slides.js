// Diapositives amb exemples pràctics de codi
const socialAuthSecuritySlides = [
  {
    title: "Github amb HybridAuth",
    content: `
      <h2 class="slide-title">11. Exemple Github amb HybridAuth</h2>
      <div class="text-large">
        <div class="code-block mt-3">
          <div class="code-header">
            <span>app/controller/oauth/github.php</span>
            <span class="code-language">PHP</span>
            <button class="copy-btn ms-2" onclick="copyCode('github-code', this)">Copiar</button>
          </div>
          <pre><code id="github-code" class="php">&lt;?php
if (session_status() == PHP_SESSION_NONE) { 
    session_start(); 
}
if (isset($_SESSION['userId'])) {
    header('Location: login.php');
    return;
}

// Configuració pel nostre provider
var_dump($_SERVER['HTTP_HOST']);
var_dump(dirname($_SERVER['PHP_SELF']));

$config = [
    'callback' => 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '/oauth/github.php',
    'keys' => [
        'id' => 'Iv23liMag0QY2GVm9oiM', 
        'secret' => '69c2007827e514bf85dbd18e913ece49afa950f4',
    ]
];
echo 'Callback URL: ' . $config['callback'];

try {
    $github = new Hybridauth\Provider\GitHub($config);
    
    // Demanem a l'usuari que s'autentiqui amb GitHub
    $github->authenticate();
    
    // Obtenim el token d'accés
    $accessToken = $github->getAccessToken();
    
    $userProfile = $github->getUserProfile();
    $displayName = $userProfile->displayName;
    $email = $userProfile->email;
    
    // Registrem l'usuari si no ho està i el loguem
    loginSocialProviderUser($email, $displayName, "GitHub");
    
    // Tanquem el popup i actualitzem la finestra mare
    closeWindowAndReloadParent();
} catch (\Exception $e) {
    echo $e->getMessage();
}
?&gt;</code></pre>
        </div>
      </div>
    `
  },
  {
    title: "Google amb OAuth2.0",
    content: `
      <h2 class="slide-title">12. Exemple Google amb OAuth2.0</h2>
      <div class="text-large">
        <div class="code-block mt-3">
          <div class="code-header">
            <span>app/controller/oauth/google.php</span>
            <span class="code-language">PHP</span>
            <button class="copy-btn ms-2" onclick="copyCode('google-code', this)">Copiar</button>
          </div>
          <pre><code id="google-code" class="php">&lt;?php
if (session_status() == PHP_SESSION_NONE) { 
    session_start(); 
}

require_once "../model/pdo-users.php";
require_once "../controller/session.php";
require_once "../controller/social-auth-common.php";
require_once '../vendor/autoload.php'; 

if (isset($_SESSION['userId'])) {
    header('Location: login.php');
    return;
}

$clientID = 'CLIENT_ID';
$clientSecret = 'CLIENT_SECRET';
$redirectUri = 'http://localhost/Practiques/.......................';

$client = new Google_Client();
$client->setClientId('CLIENT_ID');
$client->setClientSecret('CLIENT_SECRET');
$client->setRedirectUri('http://localhost/Practiques/.../oauth/google.php');
$client->addScope("email");
$client->addScope("profile");

// authenticate code from Google OAuth Flow
if (isset($_GET['code'])) {
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    $client->setAccessToken($token['access_token']);
    
    // get profile info
    $google_oauth = new Google_Service_Oauth2($client);
    $google_account_info = $google_oauth->userinfo->get();
    $email =  $google_account_info->email;
    $name =  $google_account_info->name;
    
    $_SESSION['usuari'] = [
        "name" => $name,
        "email" => $email,
        "accessType" => "Google"
    ];
    header('Location: contingut.php');
    die();
}
?&gt;</code></pre>
        </div>
      </div>
    `
  }
];