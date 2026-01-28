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


// Funció per inicialitzar popovers
function initPopovers() {
    // Eliminar popovers existents primer (per evitar duplicats)
    const existingPopovers = document.querySelectorAll('.popover');
    existingPopovers.forEach(popover => {
        if (popover.parentNode) {
            popover.parentNode.removeChild(popover);
        }
    });
    
    // Inicialitzar nous popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        // Configurar opcions del popover
        const options = {
            trigger: 'hover focus', // S'activa amb hover o focus
            placement: popoverTriggerEl.getAttribute('data-bs-placement') || 'bottom',
            title: popoverTriggerEl.getAttribute('title'),
            content: popoverTriggerEl.getAttribute('data-bs-content'),
            html: false, // No permetre HTML al contingut per seguretat
            container: 'body' // Important: posar el popover al body
        };
        
        // Crear el popover
        const popover = new bootstrap.Popover(popoverTriggerEl, options);
        
        // Afegir event per netejar títol (opcional)
        popoverTriggerEl.setAttribute('data-original-title', popoverTriggerEl.getAttribute('title'));
        popoverTriggerEl.removeAttribute('title');
        
        return popover;
    });
}

// Mostrar diapositiva - MODIFICA AQUESTA FUNCIÓ
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

    // Esperar a que el contingut es renderitzi completament
    setTimeout(function() {
        highlightCodeBlocks();
        
        // Inicialitzar popovers específicament després de canviar slide
        if (typeof bootstrap !== 'undefined') {
            setTimeout(initPopovers, 150);
        }
    }, 100);
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
    
    // Inicialitzar popovers després de carregar el contingut
    if (typeof bootstrap !== 'undefined') {
        // Esperar un moment per assegurar que el DOM està completament renderitzat
        setTimeout(initPopovers, 100);
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

// Actualitzar el comptador total de diapositives
document.addEventListener('DOMContentLoaded', () => {
  const totalSlidesSpan = document.getElementById('totalSlides');
  if (totalSlidesSpan) {
    totalSlidesSpan.textContent = slides.length;
  }
});

// =============================================
// EXPORTAR FUNCIONS AL GLOBAL SCOPE
// =============================================
window.goToHomePage = goToHomePage;
window.copyCode = copyCode;
window.highlightCodeBlocks = highlightCodeBlocks;