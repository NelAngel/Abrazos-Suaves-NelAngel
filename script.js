window.addEventListener('scroll', function() {
    var toggleContainer = document.getElementById('toggle-container');
    var modoToggle = document.getElementById('modo-toggle');
    
    if (window.scrollY > 100) {
        toggleContainer.style.opacity = 0;
    } else {
        toggleContainer.style.opacity = 1;
    }
    
    // Asegurémonos de que el estado de la palanca se actualice cuando se desplace la página
    if (modoToggle.checked && window.scrollY > 100) {
        modoToggle.checked = false;
    }
});

// Manejamos el evento change del checkbox de modo oscuro y claro
var modoToggle = document.getElementById('modo-toggle');
modoToggle.addEventListener('change', function() {
    if (modoToggle.checked) {
        // Activar el modo oscuro
        document.body.classList.add('dark-mode');
    } else {
        // Desactivar el modo oscuro
        document.body.classList.remove('dark-mode');
    }
});