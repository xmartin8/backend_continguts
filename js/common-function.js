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

// =============================================
// EXPORTAR FUNCIONS AL GLOBAL SCOPE
// =============================================
window.goToHomePage = goToHomePage;
window.copyCode = copyCode;
window.highlightCodeBlocks = highlightCodeBlocks;