document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const backToTop = document.getElementById('back-to-top');

    // Verificar preferência de tema do usuário no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') {
            themeToggle.textContent = 'Tema Claro';
        }
    } else {
        // Definir tema escuro como padrão
        document.body.classList.add('dark-theme');
        themeToggle.textContent = 'Tema Claro';
        localStorage.setItem('theme', 'dark-theme');
    }

    // Alternar tema e armazenar preferência no localStorage
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        themeToggle.textContent = theme === 'dark-theme' ? 'Tema Claro' : 'Tema Escuro';
        localStorage.setItem('theme', theme);
    });

    // Scroll to top
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show/hide back-to-top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Scroll to sections
    document.getElementById('home-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('about-link').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('projects-link').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
});

// Open project link
function openProject(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
        const text = element.innerText;
        element.innerHTML = ''; // Limpa o conteúdo original
        let index = 0;
        
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 100); // Velocidade da digitação (em milissegundos)
            }
        }
        
        type();
    });
});
