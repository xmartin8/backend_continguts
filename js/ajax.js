const slides = [
  {
    title: "Ajax en PHP",
    content: `
            <div class="ajax-content">
                <div class="ajax-image-container">
                    <img src="../img/ajax-1.jpg" alt="Ajax en PHP" class="ajax-image" />
                </div>

                <div class="ajax-info">
                    <h3 class="slide-title">Ajax en PHP</h3>
                    <p>
                        AJAX (Asynchronous JavaScript and XML) permet actualitzar parts d'una pàgina web
                        sense recarregar tota la pàgina. Això crea una experiència d'usuari més ràpida i dinàmica.
                    </p>

                    <div class="ajax-topics">
                        <div class="ajax-topic">
                            <h4>⚡ Què és AJAX?</h4>
                            <p>Tècnica per comunicar-se amb el servidor de forma asíncrona, permetent actualitzacions parcials de pàgines web.</p>
                        </div>

                        <div class="ajax-topic">
                            <h4>🔄 Com funciona</h4>
                            <p>JavaScript envia una petició HTTP al servidor, processa la resposta i actualitza el DOM sense recarregar la pàgina.</p>
                        </div>

                        <div class="ajax-topic">
                            <h4>📡 XMLHttpRequest</h4>
                            <p>L'objecte nadiu de JavaScript per fer peticions HTTP asíncrones. La base de tot AJAX.</p>
                        </div>

                        <div class="ajax-topic">
                            <h4>🆕 Fetch API</h4>
                            <p>API moderna alternativa a XMLHttpRequest, basada en promeses i més fàcil d'utilitzar.</p>
                        </div>

                        <div class="ajax-topic">
                            <h4>📊 Format de dades</h4>
                            <p>AJAX pot utilitzar XML, JSON, HTML o text pla. JSON és el format més utilitzat actualment.</p>
                        </div>

                        <div class="ajax-topic">
                            <h4>🎯 Aplicacions pràctiques</h4>
                            <p>Autocompletar formularis, carregar més contingut, validació en temps real, actualitzacions automàtiques.</p>
                        </div>

                        <div class="ajax-topic">
                            <h4>🛡️ Seguretat</h4>
                            <p>Consideracions de seguretat: CSRF, validació en servidor, sanitització de dades, CORS.</p>
                        </div>

                        <div class="ajax-topic">
                            <h4>⚙️ Compatibilitat</h4>
                            <p>Suportat per tots els navegadors moderns. Per a navegadors antics, es requereixen polyfills.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
  },
  {
    title: "2. XMLHttpRequest bàsic",
    content: `
            <h2 class="slide-title">2. XMLHttpRequest bàsic</h2>
            <p>Contingut en desenvolupament...</p>
        `
  },
  {
    title: "3. Fetch API moderna",
    content: `
            <h2 class="slide-title">3. Fetch API moderna</h2>
            <p>Contingut en desenvolupament...</p>
        `
  },
  {
    title: "4. AJAX amb jQuery",
    content: `
            <h2 class="slide-title">4. AJAX amb jQuery</h2>
            <p>Contingut en desenvolupament...</p>
        `
  },
  {
    title: "5. AJAX amb PHP (backend)",
    content: `
            <h2 class="slide-title">5. AJAX amb PHP (backend)</h2>
            <p>Contingut en desenvolupament...</p>
        `
  },
  {
    title: "6. Peticions GET i POST",
    content: `
            <h2 class="slide-title">6. Peticions GET i POST</h2>
            <p>Contingut en desenvolupament...</p>
        `
  },
  {
    title: "7. Treballar amb JSON",
    content: `
            <h2 class="slide-title">7. Treballar amb JSON</h2>
            <p>Contingut en desenvolupament...</p>
        `
  },
  {
    title: "8. Errors i excepcions",
    content: `
            <h2 class="slide-title">8. Errors i excepcions</h2>
            <p>Contingut en desenvolupament...</p>
        `
  },
  {
    title: "9. Aplicacions pràctiques",
    content: `
            <h2 class="slide-title">9. Aplicacions pràctiques</h2>
            <p>Contingut en desenvolupament...</p>
        `
  }
];

// Variables per controlar la diapositiva actual
let currentSlideIndex = 0;

// Elements DOM
let slideContent, prevBtn, nextBtn, currentSlideSpan, totalSlidesSpan;

// Mostrar diapositiva
function showSlide(index) {
    currentSlideIndex = index;

    slideContent.innerHTML = slides[index].content;
    currentSlideSpan.textContent = index + 1;

    prevBtn.disabled = index === 0;

    if (index === slides.length - 1) {
        nextBtn.textContent = 'Tornar';
        nextBtn.classList.add('btn-success');
        nextBtn.classList.remove('btn-outline-primary');
    } else {
        nextBtn.textContent = 'Següent';
        nextBtn.classList.remove('btn-success');
        nextBtn.classList.add('btn-outline-primary');
    }

    setTimeout(highlightCodeBlocks, 50);
}

// Inicialitzar
function init() {
    slideContent = document.getElementById('slideContent');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    currentSlideSpan = document.getElementById('currentSlide');

    prevBtn.addEventListener('click', onPrevClick);
    nextBtn.addEventListener('click', onNextClick);

    showSlide(0);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

