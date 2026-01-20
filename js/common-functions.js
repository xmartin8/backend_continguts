// Funció per tornar al contingut original de l'iframe
function goToHomePage() {
    // Comprovar si estem dins d'un iframe
    if (window.parent !== window) {
        // Estem dins d'un iframe, accedir al document pare
        try {
            const parentDoc = window.parent.document;
            const contentFrame = parentDoc.getElementById('contentFrame');
            
            if (contentFrame) {
                // Tornar a carregar index.html enlloc de recarregar srcdoc
                contentFrame.src = '../index.html';
            }
        } catch (error) {
            console.error('Error accedint al document pare:', error);
            // Fallback: simplement recarreguem la pàgina actual
            window.location.reload();
        }
    } else {
        // No estem dins d'un iframe, redirigir a l'índex
        window.location.href = '../index.html';
    }
}

// Funció per copiar codi al porta-retalls
function copyCode(codeId, button) {
    const codeElement = document.getElementById(codeId);
    if (!codeElement) return;
    
    const codeText = codeElement.textContent;
    
    navigator.clipboard.writeText(codeText).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copiat!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
        const textArea = document.createElement('textarea');
        textArea.value = codeText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const originalText = button.textContent;
        button.textContent = 'Copiat!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    });
}

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

function onPrevClick() {
    if (currentSlideIndex > 0) {
        showSlide(currentSlideIndex - 1);
    }
}

function onNextClick() {
    if (currentSlideIndex < slides.length - 1) {
        showSlide(currentSlideIndex + 1);
    } else {
        goToHomePage();
    }
}


// Funció per aplicar Highlight.js als blocs de codi
function highlightCodeBlocks() {
    if (typeof hljs !== 'undefined') {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }
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


// =============================================
// EXPORTAR FUNCIONS AL GLOBAL SCOPE
// =============================================
window.goToHomePage = goToHomePage;
window.copyCode = copyCode;
window.highlightCodeBlocks = highlightCodeBlocks;