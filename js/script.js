/**
 * ==========================================================================
 * BREAKING BAD — FAN PAGE SCRIPT
 * Interactividad ligera y progresiva:
 * - Menú hamburguesa responsive para dispositivos móviles.
 * - Submenú desplegable interactivo para "Temporadas".
 * - Validación y envío amigable del formulario de contacto.
 * - Soporte multi-página.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo del menú de navegación móvil (Hamburger Menu) y Dropdowns
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const temporadasDropdownItem = document.getElementById('temporadasDropdownItem');
    const temporadasToggle = document.getElementById('temporadasToggle');
    const allLinks = document.querySelectorAll('.nav-link, .dropdown-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            navToggle.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // En pantallas táctiles / móviles: alternar submenú de temporadas al tocarlo
        if (temporadasToggle && temporadasDropdownItem) {
            temporadasToggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const isDropdownOpen = temporadasDropdownItem.classList.toggle('open');
                    temporadasToggle.setAttribute('aria-expanded', isDropdownOpen);
                }
            });
        }

        // Cerrar el menú al hacer clic en cualquiera de los enlaces de destino
        allLinks.forEach(link => {
            if (link !== temporadasToggle || window.innerWidth > 768) {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    if (temporadasDropdownItem) {
                        temporadasDropdownItem.classList.remove('open');
                    }
                });
            }
        });
    }

    // 2. Manejo del formulario de contacto (si existe en la página actual)
    const contactForm = document.getElementById('contactForm');
    const feedbackMsg = document.getElementById('feedbackMsg');

    if (contactForm && feedbackMsg) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validación básica de campos requeridos
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const character = document.getElementById('favoriteCharacter').value;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !character || !message) {
                alert('Por favor, completa todos los campos del formulario.');
                return;
            }

            // Mostrar mensaje de éxito simulado
            feedbackMsg.style.display = 'block';
            contactForm.reset();

            // Ocultar mensaje después de 6 segundos
            setTimeout(() => {
                feedbackMsg.style.display = 'none';
            }, 6000);
        });
    }

    console.log('Breaking Bad Fan Page cargada con éxito.');
});