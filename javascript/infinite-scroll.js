// infinite-scroll.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.card-container');
    let isScrolling;
    
    const handleScroll = () => {
        window.clearTimeout(isScrolling);
        
        isScrolling = setTimeout(() => {
            const scrollTop = container.scrollTop;
            const containerHeight = container.offsetHeight;
            const contentHeight = container.scrollHeight;
            
            // Se o usuário estiver perto do final, faça o "loop" no conteúdo
            if (scrollTop + containerHeight >= contentHeight - 10) {
                container.scrollTop = 0; // Volta ao topo
            }
        }, 100); // Tempo para esperar antes de verificar o estado de rolagem
    };
    
    container.addEventListener('scroll', handleScroll);
    
    // Mostrar o botão "Voltar ao Topo" quando rolar
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // Voltar ao topo ao clicar no botão
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
