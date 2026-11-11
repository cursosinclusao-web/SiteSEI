document.addEventListener('DOMContentLoaded', () => {

    // 1. BARRA SUPERIOR FIXA AO ROLAR
    const stickyHeader = document.getElementById('sticky-header');
    if (stickyHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 250) {
                stickyHeader.classList.add('visible');
            } else {
                stickyHeader.classList.remove('visible');
            }
        });
    }

    // 2. PARTICULAS COLORIDAS FLUTUANTES
    const particlesContainer = document.getElementById('particles-container');
    const colors = ['#00A3E0', '#E91E63', '#FFCC00', '#00B050', '#8E43E7'];
    const particleCount = 45;

    if (particlesContainer) {
        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }
    }

    function createParticle() {
        if (!particlesContainer) return;
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 6 + 3; 
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        particle.style.boxShadow = `0 0 8px ${randomColor}`;
        particle.style.left = `${Math.random() * 100}vw`;
        const duration = Math.random() * 12 + 8; 
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
            createParticle();
        }, duration * 1000);
    }

    /* =========================================================================
       3. LIBERAÇÃO AUTOMÁTICA DOS LINKS POR DATA E HORA (OPÇÃO 1)
       Obs: Os meses em JavaScript começam do 0 (Janeiro = 0, Novembro = 10).
       ========================================================================= */
    
    // Obter data e hora atual do sistema do usuário
    const agora = new Date().getTime();

    // CONFIGURAÇÃO DAS DATAS DE LIBERAÇÃO DA SEMANA (Ano, Mês, Dia, Hora, Minuto)
    const cronogramaGatilhos = [
        {
            id: 'link-dia-10',
            dataLiberacao: new Date(2026, 10, 10, 8, 0, 0).getTime(), // 10/11 às 08h00
            linkHtml: `<a href="https://www.youtube.com/playlist?list=PLG4wXN_X7ols" target="_blank" class="btn-resource active-btn">▶️ Assistir Playlist de Aulas Inclusivas</a>`
        },
        {
            id: 'link-dia-11-live',
            dataLiberacao: new Date(2026, 10, 11, 8, 0, 0).getTime(), // 11/11 às 08h00
            linkHtml: `<a href="https://www.youtube.com/watch?v=rR_4OXvSMYM" target="_blank" class="btn-resource active-btn btn-pink">🔴 Entrar na Live: Palestra Magna (Ao Vivo)</a>`
        },
        {
            id: 'link-dia-12-live',
            dataLiberacao: new Date(2026, 10, 12, 8, 0, 0).getTime(), // 12/11 às 08h00
            linkHtml: `<a href="https://www.youtube.com/watch?v=vbRFVCtbTJ8" target="_blank" class="btn-resource active-btn btn-pink">🔴 Entrar na Live: Dia do Psicopedagogo (Ao Vivo)</a>`
        },
        {
            id: 'link-dia-12-resenha',
            dataLiberacao: new Date(2026, 10, 12, 8, 0, 0).getTime(), // 12/11 às 08h00
            linkHtml: `<a href="LINK_DAS_INDICACONES_AQUI" target="_blank" class="btn-resource active-btn">🎬 Acessar Indicação de Filmes & Resenha</a>`
        },
        {
            id: 'link-dia-13',
            dataLiberacao: new Date(2026, 10, 13, 8, 0, 0).getTime(), // 13/11 às 08h00
            linkHtml: `<a href="https://www.youtube.com/watch?v=B4OnOjCoEzk" target="_blank" class="btn-resource active-btn">📝 Baixar Estudo de Caso Prático</a>`
        }
    ];

    // VERIFICAÇÃO AUTOMÁTICA
    cronogramaGatilhos.forEach(item => {
        const container = document.getElementById(item.id);
        if (container && agora >= item.dataLiberacao) {
            container.innerHTML = item.linkHtml;
        }
    });

});
