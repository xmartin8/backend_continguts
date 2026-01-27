// Diapositives sobre conceptes bàsics i tokens
const socialAuthConfigSlides = [
  {
    title: "Conceptes bàsics: Què és un Token?",
    content: `
      <h2 class="slide-title">1. Què és un Token?</h2>
      <div class="text-large">
        <p class="lead">Un token és un <strong>senyal, mostra o prova</strong> que representa alguna cosa.</p>
        
        <div class="requadre">
          <p><strong>Procés de substitució:</strong></p>
          <p>Un token substitueix un <strong>element de dades sensible</strong> per un equivalent <strong>no sensible</strong>.</p>
          <p class="requadre-arrow">⇅</p>
          <p><span class="requadre-impacte">Només té significat o valor extrínsec per la pròpia aplicació que ha creat el token.</span></p>
        </div>
        
        <h4 class="mt-4">🔑 Ús dels Tokens</h4>
        <p>Es fan servir com a <strong>clau d'accés</strong> per mantenir la comunicació amb la API sense haver de realitzar de nou l'autenticació amb credencials.</p>
        
        <div class="module-card mt-4">
          <div class="module-title">📚 Analogia</div>
          <p>Vindria a ser com el concepte de <strong>clau pública i clau privada</strong> en la comunicació entre un host i una app.</p>
        </div>
      </div>
    `
  },
  {
    title: "Generació de Tokens segurs",
    content: `
      <h2 class="slide-title">2. Generació de Tokens</h2>
      <div class="text-large">
        <p>Per generar tokens criptogràficament segurs podem fer servir funcions PHP específiques:</p>
        
        <div class="code-block mt-4">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code1', this)">Copiar</button>
          </div>
          <pre><code id="code1">openssl_random_pseudo_bytes(int $length, bool &$strong_result = null): string</code></pre>
        </div>
        
        <h4 class="mt-4">📝 Exemples pràctics:</h4>
        
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code2', this)">Copiar</button>
          </div>
          <pre><code id="code2">echo uniqid();
// Sortida: 261b8fbcdc4ff0. ...</code></pre>
        </div>
        
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('code3', this)">Copiar</button>
          </div>
          <pre><code id="code3">$x = bin2hex(openssl_random_pseudo_bytes(16));
echo $x;
// Sortida: 6f19e8d4f5df8fae1e124941a48d980f (32 caràcters)</code></pre>
        </div>
        
        <div class="important-note mt-4">
          <strong>📚 Enllaços útils:</strong><br>
          • <a href="https://www.php.net/manual/en/function.uniqid.php" target="_blank">uniqid() - PHP Manual</a><br>
          • <a href="https://www.php.net/manual/en/function.bin2hex.php" target="_blank">bin2hex() - PHP Manual</a><br>
          • <a href="https://www.php.net/manual/en/function.openssl-random-pseudo-bytes.php" target="_blank">openssl_random_pseudo_bytes() - PHP Manual</a>
        </div>
      </div>
    `
  },
  {
    title: "Reflexió sobre Tokens i Extensions",
    content: `
      <h2 class="slide-title">🤔 Reflexió: Extensions PHP per a tokens</h2>
      <div class="text-large">
        <div class="module-card">
          <div class="module-title">❓ Pregunta important</div>
          <p><strong>Cal fer servir el repositori PECL (PHP Extension Community Library)?</strong></p>
        </div>
        
        <h4 class="mt-4">💡 Consideracions:</h4>
        <ul class="concept-list">
          <li><strong>PECL</strong> conté extensions PHP escrites en C</li>
          <li>Algunes extensions de seguretat poden estar disponibles a PECL</li>
          <li>Funcions natives de PHP (com <code>openssl_random_pseudo_bytes</code>) són generalment suficients</li>
          <li>Les extensions PECL requereixen instal·lació addicional al servidor</li>
          <li>Valorar si els beneficis justifiquen la dependència addicional</li>
        </ul>
        
        <h4 class="mt-4">✅ Recomanació general:</h4>
        <p>Per a la majoria d'aplicacions web, les funcions natives de PHP per a generació de tokens són suficientment segures i no requereixen extensions PECL addicionals.</p>
        
        <div class="important-note mt-4">
          <strong>⚠️ Important:</strong> Assegura't sempre que els tokens generats siguin realment aleatoris i amb entropia suficient per a l'ús previst.
        </div>
      </div>
    `
  }
];