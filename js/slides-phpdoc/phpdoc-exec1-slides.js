const phpdocexecslides =[

      {
    title: "Execució de PHPDocumentor",
    content: `
      <h2 class="slide-title">Execució de PHPDocumentor</h2>
      <div class="text-large">
        <p>Com executar PHPDocumentor per generar la documentació del teu projecte.</p>
        
        <h4 class="mt-4">1️⃣ Via línia de comandes:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">Bash</span>
            <button class="copy-btn" onclick="copyCode('phpdoc-cmd', this)">Copiar</button>
          </div>
          <pre><code id="phpdoc-cmd"># Executar directament
phpdoc -d ./src -t ./docs

# Amb més opcions
phpdoc \
  --directory="./src" \
  --target="./docs" \
  --title="Documentació del Projecte" \
  --defaultpackagename="Llibreria" \
  --template="clean"</code></pre>
        </div>
        
        <h4 class="mt-4">2️⃣ Via fitxer de configuració (phpdoc.xml):</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">XML</span>
            <button class="copy-btn" onclick="copyCode('phpdoc-config', this)">Copiar</button>
          </div>
          <pre><code id="phpdoc-config">&lt;?xml version="1.0" encoding="UTF-8" ?&gt;
&lt;phpdocumentor&gt;
    &lt;title&gt;Documentació del Projecte&lt;/title&gt;
    &lt;parser&gt;
        &lt;target&gt;docs/build&lt;/target&gt;
        &lt;encoding&gt;utf-8&lt;/encoding&gt;
    &lt;/parser&gt;
    &lt;transformer&gt;
        &lt;target&gt;docs/output&lt;/target&gt;
    &lt;/transformer&gt;
    &lt;files&gt;
        &lt;directory&gt;./src&lt;/directory&gt;
        &lt;ignore&gt;vendor/*&lt;/ignore&gt;
    &lt;/files&gt;
    &lt;transformations&gt;
        &lt;template name="clean" /&gt;
    &lt;/transformations&gt;
&lt;/phpdocumentor&gt;</code></pre>
        </div>
        
        <h4 class="mt-4">3️⃣ Execució amb Composer:</h4>
        <div class="code-block mt-3">
          <div class="code-header">
            <span class="code-language">JSON</span>
            <button class="copy-btn" onclick="copyCode('phpdoc-composer', this)">Copiar</button>
          </div>
          <pre><code id="phpdoc-composer">// A composer.json
{
    "scripts": {
        "docs": "phpdoc -d ./src -t ./docs",
        "docs:watch": "phpdoc -d ./src -t ./docs --force"
    }
}

// Executar:
// composer run docs</code></pre>
        </div>
      </div>
    `
  }
]