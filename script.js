document.addEventListener('DOMContentLoaded', () => {
    // 1. NAVEGAÇÃO ENTRE SEÇÕES (SPA)
    const linksMenu = document.querySelectorAll('.nav-menu a');
    const secoes = document.querySelectorAll('.secao-conteudo');
    const navMenu = document.getElementById('nav-menu');

    linksMenu.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const idAlvo = link.getAttribute('href').substring(1);

            // Oculta todas as seções
            secoes.forEach(secao => secao.classList.add('oculto'));

            // Exibe a seção correspondente ao link clicado
            const secaoAlvo = document.getElementById(idAlvo);
            if (secaoAlvo) {
                secaoAlvo.classList.remove('oculto');
            }

            // Fecha o menu em telas menores ao clicar em um item
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // 2. ALTERNÂNCIA DE TEMA (CLARO / ESCURO)
    const btnTema = document.getElementById('toggle-theme');
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            btnTema.textContent = '☀️ Alternar Tema';
        } else {
            btnTema.textContent = '🌙 Alternar Tema';
        }
    });

    // 3. MENU HAMBÚRGUER (RESPONSIVO)
    const btnMenuToggle = document.getElementById('menu-toggle');
    btnMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 4. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
    const formContato = document.getElementById('form-contato');
    const msgStatus = document.getElementById('msg-status');

    if (formContato) {
        formContato.addEventListener('submit', (event) => {
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome === '' || email === '' || mensagem === '') {
                msgStatus.style.color = 'red';
                msgStatus.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                return;
            }

            // Simulação de envio com sucesso
            msgStatus.style.color = 'green';
            msgStatus.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
            
            // Limpa os campos do formulário
            formContato.reset();
        });
    }
});
