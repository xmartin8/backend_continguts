const slides = [
  {
    title: "Cookies & Sessions en PHP",
    content: `
            <div class="cookies-content">
                <div class="cookies-image-container">
                    <img src="../img/cookies.png" alt="Cookies i Sessions en PHP" class="cookies-image" />
                </div>

                <div class="cookies-info">
                    <h3 class="slide-title">Cookies & Sessions en PHP</h3>
                    <div class="cookies-topics">
                        <div class="cookies-topic">
                            <h4>🍪 Què són les Cookies?</h4>
                            <p>Petits fitxers que el servidor envia al navegador de l'usuari i que s'emmagatzemen localment. Permeten recordar informació entre visites.</p>
                        </div>

                        <div class="cookies-topic">
                            <h4>🔐 Sessions PHP</h4>
                            <p>Les sessions emmagatzemen dades al servidor i assignen un ID únic a cada usuari (normalment emmagatzemat en una cookie).</p>
                        </div>

                        <div class="cookies-topic">
                            <h4>⏱️ Caducitat</h4>
                            <p>Les cookies tenen una data de caducitat configurable, mentre que les sessions caduquen quan es tanca el navegador o després d'un temps d'inactivitat.</p>
                        </div>

                        <div class="cookies-topic">
                            <h4>💾 Emmagatzematge</h4>
                            <p>Cookies: emmagatzemades al client. Sessions: emmagatzemades al servidor (normalment en fitxers o base de dades).</p>
                        </div>

                        <div class="cookies-topic">
                            <h4>🔒 Seguretat</h4>
                            <p>Les cookies són vulnerables a atacs XSS i CSRF. Les sessions són més segures ja que les dades romanen al servidor.</p>
                        </div>

                        <div class="cookies-topic">
                            <h4>⚖️ Limitacions</h4>
                            <p>Cookies: limitades a ~4KB per domini. Sessions: limitades per la configuració de PHP i l'espai al servidor.</p>
                        </div>

                        <div class="cookies-topic">
                            <h4>🔄 Persistència</h4>
                            <p>Les cookies poden persistir durant anys. Les sessions són temporals i normalment caduquen després de 24 minuts d'inactivitat (per defecte).</p>
                        </div>

                        <div class="cookies-topic">
                            <h4>👁️ Privadesa</h4>
                            <p>Les lleis com la GDPR regulen l'ús de cookies. Cal demanar consentiment als usuaris per cookies no essencials.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
  },
  {
    title: "2. Crear i gestionar Cookies",
    content: `<h2 class="slide-title">2. Crear i gestionar Cookies</h2><p>Contingut en desenvolupament...</p>`
  },
  {
    title: "3. Sessions PHP bàsiques",
    content: `<h2 class="slide-title">3. Sessions PHP bàsiques</h2><p>Contingut en desenvolupament...</p>`
  },
  {
    title: "4. Comparativa: Cookies vs Sessions",
    content: `<h2 class="slide-title">4. Comparativa: Cookies vs Sessions</h2><p>Contingut en desenvolupament...</p>`
  },
  {
    title: "5. Configuració de Sessions",
    content: `<h2 class="slide-title">5. Configuració de Sessions</h2><p>Contingut en desenvolupament...</p>`
  },
  {
    title: "6. Seguretat en Sessions",
    content: `<h2 class="slide-title">6. Seguretat en Sessions</h2><p>Contingut en desenvolupament...</p>`
  },
  {
    title: "7. Cookies i GDPR",
    content: `<h2 class="slide-title">7. Cookies i GDPR</h2><p>Contingut en desenvolupament...</p>`
  },
  {
    title: "8. Almacenament Alternatiu",
    content: `<h2 class="slide-title">8. Almacenament Alternatiu</h2><p>Contingut en desenvolupament...</p>`
  },
  {
    title: "9. Millores Pràctiques",
    content: `<h2 class="slide-title">9. Millores Pràctiques</h2><p>Contingut en desenvolupament...</p>`
  }
];
