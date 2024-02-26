// Guardamos el estado del interruptor antes de que los botones desaparezcan
var lastModeState = null;
var modoToggle = document.getElementById('modo-toggle');
if (modoToggle) {
    lastModeState = modoToggle.checked;
}

window.addEventListener('scroll', function() {
    var toggleContainer = document.getElementById('toggle-container');
    var modoToggle = document.getElementById('modo-toggle');
    
    if (window.scrollY > 100) {
        toggleContainer.style.opacity = 0;
        // Si el interruptor de oscurecimiento y aclarado estaba activado, lo desactivamos visualmente
        if (modoToggle && modoToggle.checked) {
            lastModeState = true;
            modoToggle.checked = false;
        }
    } else {
        toggleContainer.style.opacity = 1;
        // Si el interruptor de oscurecimiento y aclarado estaba activado antes de desplazarse hacia abajo, lo activamos visualmente
        if (modoToggle && lastModeState === true) {
            modoToggle.checked = true;
        }
    }
});

// Manejamos el evento change del checkbox de modo oscuro y claro
if (modoToggle) {
    modoToggle.addEventListener('change', function() {
        if (modoToggle.checked) {
            // Activar el modo oscuro
            document.body.classList.add('dark-mode');
        } else {
            // Desactivar el modo oscuro
            document.body.classList.remove('dark-mode');
        }
    });
}
