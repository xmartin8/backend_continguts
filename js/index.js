const sidebarLinks = document.querySelectorAll('.nav-link');

function setActiveLink(topic) {
    sidebarLinks.forEach(link => {
        if (link.dataset.topic === topic) {
            link.classList.add('active-topic'); // Marca el correcte
        } else {
            link.classList.remove('active-topic'); // Treu la classe dels altres
        }
    });
}

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        setActiveLink(link.dataset.topic);
    });
});


